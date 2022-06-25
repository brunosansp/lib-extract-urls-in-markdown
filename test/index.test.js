
const getFile = require('../index.js');

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('getFile::', () => {
  it('deve ser uma função', () => {
    expect(typeof getFile).toBe('function');
  });
  it('deve retornar array com resultados', async () => {
    const result = await getFile('/home/shogun/wsp/nodejs/lib-extract-urls-in-markdown/test/files/file1.md')
    expect(result).toEqual(arrayResult)
  });
  it('deve retornar mensagem "Não foram encontrados links no arquivo."', async () => {
    const result = await getFile('/home/shogun/wsp/nodejs/lib-extract-urls-in-markdown/test/files/file1_nolinks.md')
    expect(result).toBe('Não foram encontrados links no arquivo');
  });
  it('deve lançar um erro na falta de arquivo', () => {
    async function capturaErro() {
      await getFile('/home/shogun/wsp/nodejs/lib-extract-urls-in-markdown/test/files')
      expect(capturaErro).toThrowError(/Não foi encontrado arquivo no caminho especificado/)
    }
  });
});