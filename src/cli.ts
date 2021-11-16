#!/usr/bin/env node
import fs from 'fs';
import parse, { print } from './main';

const input = process.argv[2];
if (!input) throw new Error(`Please provide a markdown string or mapi file.`);

let code;
if (fs.existsSync(input) && fs.lstatSync(input).isFile())
  code = fs.readFileSync(input).toString();
else code = input;

print(parse(code));
