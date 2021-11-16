import moo from 'moo';
import util from 'util';

type Token =
  | Heading
  | Inline
  | Paragraph
  | Mathblock
  | Image
  | Codeblock
  | Hline
  | Blockquote;

type MapiAST = Token[];

type Heading = {
  type: 'heading';
  value: {
    level: number;
    title: string;
  };
};

type Inline = {
  type:
    | 'text'
    | 'inline_math'
    | 'inline_code'
    | 'bold'
    | 'italic'
    | 'italic_bold'
    | 'strike';
  value: string;
};

type Paragraph = {
  type: 'paragraph';
  value: Inline[];
};

type Mathblock = {
  type: 'mathblock';
  value: string;
};

type Image = {
  type: 'image';
  value: {
    title: string;
    url: string;
  };
};

type Codeblock = {
  type: 'codeblock';
  value: {
    lang: string;
    code: string;
  };
};

type Hline = {
  type: 'hline';
  value: string;
};

type Blockquote = {
  type: 'blockquote';
  value: MapiAST;
};

enum State {
  BLOCK,
  PARAGRAPH,
  TEXT,
}

const blocks = [
  'heading',
  'mathblock',
  'codeblock',
  'blockquote',
  'image',
  'hline',
  'definition',
];

const inline = [
  'inline_code',
  'inline_math',
  'inline_link',
  'italic_bold',
  'italic',
  'bold',
  'strike',
  'word',
];

const mapiLexer = moo.compile({
  WS: /[ \t]+/,
  NL: { match: /\r\n?|\n/, lineBreaks: true },
  heading: /^ *#{1,6} .+/,
  definition: {
    match: /^\[def\]\n(?:.*\n)*?\[def\]/,
    value: (s: string) => s.slice(6, -5),
  },
  mathblock: {
    match: /\$\$\n(?:.*\n)*?\$\$/,
    value: (s: string) => s.slice(3, -3),
  },
  codeblock: /```\w*\n(?:.*\n)*?```/,
  blockquote: {
    match: /(?:^> .*\n)+/,
    value: (s: string) => s.replace(/^> /gm, ''),
  },
  image: /!\[.*\]\(.*\)/,
  hline: /---/,
  inline_code: { match: /`.*?`/, value: (s: string) => s.slice(1, -1) },
  inline_math: { match: /\$.*?\$/, value: (s: string) => s.slice(1, -1) },
  inline_link: /\[.*\]\(.*\)/,
  italic_bold: {
    match: /\*\*_[^*_~]*?_\*\*/,
    value: (s: string) => s.slice(3, -3),
  },
  italic: { match: /_[^*_~]*?_/, value: (s: string) => s.slice(1, -1) },
  bold: { match: /\*\*[^*_~]*?\*\*/, value: (s: string) => s.slice(2, -2) },
  strike: { match: /~~[^*_~]*?~~/, value: (s: string) => s.slice(2, -2) },
  word: /\S+/,
});

const tokenize = (code: string) => {
  mapiLexer.reset(code);
  const tokens = [];
  for (;;) {
    const token = mapiLexer.next();
    if (!token) break;
    tokens.push({ type: token.type, value: token.value });
  }
  return tokens;
};

const parseToken = (token: any) => {
  const { type, value } = token;

  switch (type) {
    case 'heading': {
      const match = value.match(/^ *(#{1,6}) (.+)/);
      return {
        type: 'heading',
        value: { level: match[1].length, title: match[2] },
      };
    }
    case 'image': {
      const match = value.match(/!\[(.*)\]\((.*)\)/);
      return { type: 'image', value: { title: match[1], url: match[2] } };
    }
    case 'link': {
      const match = value.match(/\[(.*)\]\((.*)\)/);
      return { type: 'link', value: { title: match[1], url: match[2] } };
    }
    case 'codeblock': {
      const match = value.match(/```(\w*)\n((?:.*\n)*)```/);
      return {
        type: 'codeblock',
        value: { lang: match[1], code: match[2].trim() },
      };
    }
    case 'blockquote':
    case 'definition': {
      return {
        type,
        value: parse(value + '\n'),
      };
    }
  }

  return token;
};

const parse = (code: string): MapiAST => {
  let state = State.BLOCK;

  const tokens = tokenize(code + '\n');

  const parsed: MapiAST = [];
  let paragraph: any[] = [];
  let text = '';

  let i = 0;

  while (i < tokens.length) {
    const token = tokens[i];
    switch (state) {
      case State.BLOCK: {
        if (token.type === 'WS' || token.type === 'NL') {
          i = i + 1;
          break;
        }

        if (blocks.includes(token.type!)) {
          parsed.push(parseToken(token));
          i = i + 1;
        } else {
          state = State.PARAGRAPH;
          paragraph = [];
        }

        break;
      }
      case State.PARAGRAPH: {
        if (token.type === 'WS') {
          i = i + 1;
          break;
        }

        if (token.type === 'word') {
          state = State.TEXT;
          text = '';
          break;
        }

        if (inline.includes(token.type!)) {
          paragraph.push(token);
          i = i + 1;
        } else {
          state = State.BLOCK;
          parsed.push({ type: 'paragraph', value: paragraph });
        }

        break;
      }
      case State.TEXT: {
        if (token.type === 'word' || token.type === 'WS') {
          text = text + token.value;
          i = i + 1;
          break;
        }

        paragraph.push({ type: 'text', value: text });
        state = State.PARAGRAPH;

        break;
      }
    }
  }

  return parsed;
};

const print = (ast: MapiAST) => {
  console.log(
    util.inspect(ast, { showHidden: false, depth: null, colors: true })
  );
};

export default parse;
export { print };
