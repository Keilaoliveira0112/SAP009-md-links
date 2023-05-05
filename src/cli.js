#!/usr/bin/env node

import { mdLinks } from './md-links.js';
import chalk from 'chalk';
import fetch from 'node-fetch';

const caminhoDoArquivo = process.argv[2];

const options = {
    validate: process.argv.includes('--validate'),
    stats: process.argv.includes('--stats')
};

if (options.validate && options.stats) {
    mdLinks(caminhoDoArquivo,  options).then((dados) => console.log(dados));
      /*   .then((informacoes) => {
            const links = informacoes.map((item) => item.href);
            const linksQuebrados = [];
            Promise.all(informacoes.map((item) =>
                fetch(item.href)
                    .then((res) => {
                        if (res.status !== 200) {
                            linksQuebrados.push(item.href);
                        }
                    })
                    .catch(() => {
                        linksQuebrados.push(item.href);
                    })
            )) */
               /*  .then(() => {
                    console.log(`Total: ${informacoes.length}`);
                    console.log(`Unique: ${links.length}`);
                    console.log(`Broken: ${linksQuebrados.length}`);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });

 */} else if (options.validate) {
    mdLinks(caminhoDoArquivo, { validate: true })
        .then((informacoes) => {
            informacoes.map((item) => {
                fetch(item.href)
                    .then((res) => {
                        const status = res.status === 200 ? chalk.green('ok') : chalk.red('fail');
                        console.log(`${chalk.blue(item.file)} ${chalk.cyan(item.href)} ${chalk.yellow(status)} ${chalk.yellow(res.status)} ${chalk.green(item.text)} `);
                    })
                    .catch((err) => {
                        console.log(`${chalk.blue(item.file)} ${chalk.cyan(item.href)} ${chalk.red('fail')} ${chalk.red(err)} ${chalk.green(item.text)} `);
                    });
            });
        })
        .catch((err) => {
            console.log(err);
        });

} else if (options.stats) {
    mdLinks(caminhoDoArquivo, { stats: true })
        .then((informacoes) => {
            const links = informacoes.map((item) => item.href);
            console.log(`Total: ${informacoes.length}`);
            console.log(`Unique: ${links.length}`);
        })
} else {
    mdLinks(caminhoDoArquivo, options)
    .then((informacoes) => {
        informacoes.map((item) => {
            console.log(`${chalk.blue(item.file)} ${chalk.cyan(item.href)}${chalk.green(item.text)} `);
        });
    }).catch((err) => {
        console.log(err);
    });
}