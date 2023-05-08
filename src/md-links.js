import { file } from '@babel/types';
import { readFile } from 'node:fs';

export const extrairInformacoes = (string, arquivo) => {
    if (!string && !file) throw new Error('Dados Inválidos')
    const informacoes = string.split('](');
    const texto = informacoes[0].replace('[', '');
    const link = informacoes[1].replace(')', '');
    return {
        href: link,
        text: texto,
        file: arquivo,
    };
};

export const mdLinks = (caminhoDoArquivo, options) => {
    if(!caminhoDoArquivo) throw new Error ('paramêtro inválido');
    return new Promise((resolve, reject) => {
        const encode = 'utf-8';
        const regex = /\[[^\]]+\]\(([^)]+)\)/gm
        readFile(caminhoDoArquivo, encode, (err, data) => {
            if (err) throw reject(err);
            const conteudo = data.match(regex);
            const informacoes = conteudo.map((item) => extrairInformacoes(item, caminhoDoArquivo));
           
            if (options.validate) {
                Promise.all(informacoes.map((item) =>
                    fetch(item.href)
                        .then((res) => {
                            item.status = res.status;
                            if (res.status !== 200) {
                                item.message = 'FAIL'
                            } else {
                                item.message = res.statusText;
                            }
                            return item;
                        })
                        .catch((err) => {
                            item.status = err;
                            item.message = 'Esse link não existe';
                            return item;
                        })
                ))
                    .then(resolve)
            } else {
                resolve(informacoes);
            }

        });
    });
};

