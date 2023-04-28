import { extrairInformacoes } from "../src/md-links";


/* describe('exibir informações', () => {

    it('deveria extrair informações', () => {
        const string = 'Markdow'
        const arquivo = 'texto.md'
        extrairInformacoes(string, arquivo);
        
        expect(extrairInformacoes).toHaveBeenCalledTimes(1);
        expect(extrairInformacoes).toHaveBeenCalledWith(string, arquivo);
    });
    console.log('FIX ME!');
  });

 */
describe('exibir informações', () => {
    test('is a function', () => {
        expect(typeof extrairInformacoes).toBe('function');
    });
    it('deveria retornar um objeto', () => {
        const string = "Markdow"
        const arquivo = "texto.md"

        expect(extrairInformacoes(string, arquivo)).toEqual({});
        expect(extrairInformacoes(string, arquivo)).toEqual({});
    });
});
