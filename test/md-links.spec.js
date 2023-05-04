import { extrairInformacoes, mdLinks } from "../src/md-links";
import { readFile } from 'node:fs';

jest.mock('node:fs')

describe('extrairInformacoes', () => {
    it('dever extrair informações de link de uma string', () => {
        const href = "https://pt.wikipedia.org/wiki/Markdown";
        const text = "Markdown"
        const string = `[Markdown](https://pt.wikipedia.org/wiki/Markdown)`;
        const file = "texto.md"
        const infos = extrairInformacoes(string, file);

        expect(infos).toEqual({ href, text, file});
       
    });
});

describe('função md-links', () => {
    it('dever resolver e retornar um array de objeto', () => {
        const encode = 'utf-8';
        const caminhoDoArquivo = 'texto.md';
        mdLinks(caminhoDoArquivo);

        expect(readFile).toHaveBeenCalledTimes(1);
        expect(readFile).toHaveBeenCalledWith(caminhoDoArquivo,encode,expect.any(Function));

    });
});