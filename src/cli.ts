#!/usr/bin/env node
import fs from 'fs';
import util from 'util';
import parse from './main';

const input = process.argv[2];
if (!input) throw new Error(`Please provide a markdown string or mapi file.`);

let code;
if (fs.existsSync(input) && fs.lstatSync(input).isFile())
  code = fs.readFileSync(input).toString();
else code = input;

console.log(
  util.inspect(parse(code), { showHidden: false, depth: null, colors: true })
);
