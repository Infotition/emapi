<div align="center">
	<br />
	<p>
		<a href="http://infotition.de">
			<img src="https://imgur.com/97bMQWK.png" width=600px alt="infotition logo" />
		</a>
	</p>
	<h1>EMAPI</h1>
	<p>Fast, minimalistic and reliable Markdown parser with infotition component extensions.</p>
	<br>
	<p>
		<a href="https://github.com/Infotition/mapi/issues" title="github issues">
			<img alt="issues" src="https://img.shields.io/github/issues/Infotition/emapi">
		</a>
		<a href="https://github.com/Infotition/emapi/blob/main/LICENSE" title="license">
			<img src="https://img.shields.io/github/license/Infotition/emapi" alt="license" />
		</a>
    <a href="https://www.npmjs.com/package/emapi" title="npm package">
      <img alt="npm bundle size" src="https://img.shields.io/npm/v/emapi">
    </a>
    <a href="https://www.npmjs.com/package/emapi" title="npm package">
      <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/emapi">
    </a>
		<a href="https://discord.gg/NpxrDGYDwV" title="discord">
			<img src="https://img.shields.io/discord/792139920260464670?color=7289da&logo=discord&logoColor=white" alt="discord server" />
		</a>
	</p>
	<br>
</div>

```javascript
const parse = require('mapi');

const ast = parse(`
# Hello! I am Mapi!
> A fast, minimalistic and reliable Markdown parser.
`);
```

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Features](#features)
- [Examples](#examples)
- [Issue Reporting](#issue-reporting)
- [Contribution](#contribution)
- [License](#license)

# Installation

[NPM](https://www.npmjs.com) is the node package manager, so make sure you have it and [node.js](https://nodejs.org/en/download/) installed.

Clone the repository and change the directory of your terminal to the downloaded folder.
```bash
$ git clone https://github.com/Infotition/emapi.git
$ cd codeli
```

Install all packages using the `npm install` command.
```bash
$ npm install
```

Now everything should be working fine. If you have any problems, don't hesitate to join our official [discord server](https://discord.gg/NpxrDGYDwV).

# Features

- Parse complete markdown files or markdown strings
- Focus on high performance
- Parses the markdown content to an easy to use json file
- Supports more blocks especially for scientific writing
- Super-high test coverage

# Examples

```javascript
const parse, {print} = require('mapi');

const ast = parse(`
# Hello! I am Mapi!

> A fast, minimalistic and reliable Markdown parser.
> I understand markdown Syntax.
> **But also more components especially for scientific writing**

$$
  f(x_{mapi}) = \text{Super awesome}.
$$
`);

print(ast)
```

Output:

```javascript
[
  { type: 'heading', value: { level: 1, title: 'Hello! I am Mapi!' } },
  {
    type: 'blockquote',
    value: [
      {
        type: 'paragraph',
        value: [
          {
            type: 'text',
            value: 'A fast, minimalistic and reliable Markdown parser.'
          }
        ]
      },
      {
        type: 'paragraph',
        value: [ { type: 'text', value: 'I understand markdown Syntax.' } ]
      },
      {
        type: 'paragraph',
        value: [
          {
            type: 'bold',
            value: 'But also more components especially for scientific writing'
          }
        ]
      }
    ]
  },
  {
    type: 'mathblock',
    value: '  f(x_{mapi}) = \\text{Super awesome}.'
  }
]
```

To view more examples, clone the repository, go to the examples directory and install the dependencies:

```bash
$ git clone https://github.com/Infotition/emapi.git
$ cd emapi/examples
$ npm install
```

Then run the example you want (replace <num> with the number of the example):

```bash
$ node example_<num>.js
```

# Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. For other related questions/support please use the official Infotition [Discord server](https://discord.gg/NpxrDGYDwV).

# Contribution

We appreciate feedback and contribution to this repo! Before you get started, please see the following:

- [Infotition Code of Conduct guidelines](https://github.com/Infotition/emapi/blob/main/.github/CODE_OF_CONDUCT.md)
- [Infotition Contribution guidelines](https://github.com/Infotition/emapi/blob/main/.github/CONTRIBUTING.md)

# License

This repo is covered under the MIT License, see the [LICENSE](https://github.com/Infotition/emapi/blob/main/LICENSE) file for more information.
