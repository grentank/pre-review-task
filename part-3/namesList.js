const fs = require('fs/promises');
const fetchUsers = require('./fetchUsers');

async function fetchNames() {
  let arr = [];
  const fetch = await fetchUsers();
  for (let i = 0; i < fetch.length; i++) {
    arr.push(fetch[i].name);
  }
  return arr;
}

function saveNames(names) {
  return fs.writeFile('./names.txt', names.join('\n'), 'utf8');
}

function getName(count) {
  return fs.readFile('./names.txt', 'utf8').then((name) => name.split('\n')).then((el) => el[count - 1]);
}

module.exports = {
  fetchNames,
  getName,
  saveNames,
};
