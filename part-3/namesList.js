const fs = require('fs/promises');
const fetchUsers = require('./fetchUsers');

async function fetchNames() {
  const users = await fetchUsers();
  let names = [];
  users.forEach((element) => {
    names.push(element.name);
  });
  return names;
}

async function saveNames(names) {
  if (names === []) {
    const users = await fetchUsers();
    let names = '';
    users.forEach((element, i, arr) => {
      if (i === arr.length - 1) {
        names += element.name;
      } else {
        names += element.name + '\n';
      }
    });
    fs.writeFile('./names.txt', names, 'utf8', (err) => {});
    //тут я так и не понял обязательно ли в fs писать калбек или можно просто await
  } else {
    const users = await fetchUsers();
    let names2 = '';
    names.forEach((element, i, arr) => {
      if (i === arr.length - 1) {
        names2 += element;
      } else {
        names2 += element + '\n';
      }
    });
    fs.writeFile('./names.txt', names2, 'utf8', (err) => {});
  }
    // ● part3 › saveNames › после резолва промиса массив строк записан в файл
    // этот тест у меня иногда отваливался, не знаю почему, какой-то блуждающий баг
}

async function getName(count) {
  let names = await fs.readFile('./names.txt', 'utf8', (err) => {});
  names = names.split('\n');
  return names[count-1];
}

module.exports = {
  fetchNames,
  getName,
  saveNames,
};
