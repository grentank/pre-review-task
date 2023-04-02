const fs = require('fs/promises');
const { fetchNames, saveNames, getName } = require('../namesList');

describe('part3', () => {
  let fileData;
  beforeEach(async () => {
    await fs.writeFile('./names.txt', '', 'utf8');
  });

  describe('fetchNames', () => {
    it('возвращает промис', async () => {
      const promise = fetchNames();
      expect(promise.toString()).toBe('[object Promise]');
      await promise;
    });

    it('промис резолвится в массив строк', async () => {
      const names = await fetchNames();
      expect(Array.isArray(names)).toBe(true);
      expect(names.every((name) => typeof name === 'string')).toBe(true);
    });

    it('промис резолвится в массив строк с именами из fetchUsers', async () => {
      const names = await fetchNames();
      expect(names).toEqual(
        expect.arrayContaining(['Ervin Howell', 'Mrs. Dennis Schulist', 'Clementina DuBuque']),
      );
      expect(names).toEqual(expect.arrayContaining(['Patricia Lebsack', 'Glenna Reichert']));
      expect(names).toHaveLength(10);
    });
  });

  describe('saveNames', () => {
    it('возвращает промис', async () => {
      const promise = saveNames([]);
      expect(promise.toString()).toBe('[object Promise]');
      await promise;
    });

    it('после резолва промиса массив строк записан в файл', async () => {
      await saveNames(['Alice', 'Bob', 'Charlie']);
      fileData = await fs.readFile('./names.txt', 'utf8');
      expect(fileData).toEqual(expect.stringContaining('Alice\n'));
      expect(fileData).toEqual(expect.stringContaining('\nBob\n'));
      expect(fileData).toHaveLength(17);
    });

    it('метод работает корректно', async () => {
      await saveNames(await fetchNames());
      fileData = await fs.readFile('./names.txt', 'utf8');
      expect(fileData).toEqual(expect.stringContaining('\nPatricia Lebsack\n'));
      expect(fileData).toEqual(expect.stringContaining('\nKurtis Weissnat\n'));
      expect(fileData).toHaveLength(174);
    });
  });

  describe('getName', () => {
    it('возвращает промис', async () => {
      const promise = getName([]);
      expect(promise.toString()).toBe('[object Promise]');
      await promise;
    });

    it('промис резолвится в нужное имя из файла', async () => {
      await fs.writeFile('./names.txt', 'Bob\nBeb\nBib\nBub\nBab', 'utf8');
      //тут я так и не понял обязательно ли в fs писать калбек или можно просто await
      expect(await getName(3)).toEqual('Bib');
      expect(await getName(4)).toEqual('Bub');
    });

    it('метод работает корректно', async () => {
      await saveNames(await fetchNames());
      expect(await getName(3)).toEqual('Clementine Bauch');
      expect(await getName(9)).toEqual('Glenna Reichert');
    });
  });
});
