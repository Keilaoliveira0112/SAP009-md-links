#!/usr/bin/env node

import { mdLinks } from './md-links.js';
import chalk from 'chalk';
import { argv } from 'node:process';

const caminho = argv[2];
console.log(caminho);

mdLinks(caminho)
.then((informacoes) => {
    informacoes.map((item) => {
        console.log(`${chalk.blue(item.file)} ${chalk.cyan(item.href)} ${chalk.green(item.text)}`);
    });
}).catch(() => [
    
])