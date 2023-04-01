const fs = require('fs/promises');
const fetchUsers = require('./fetchUsers');

async function fetchNames() {
  return fetchUsers().then((data) => data.map((elem) => elem.name));
}

async function saveNames(names) {
  return fs.writeFile('./names.txt', names.join('\n'), 'utf-8');
}

async function getName(count) {
  return fs.readFile('./names.txt', 'utf-8').then((data) => data.split('\n')[count - 1]);
}

module.exports = {
  fetchNames,
  getName,
  saveNames,
};
