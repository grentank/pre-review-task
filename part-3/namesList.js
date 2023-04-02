const fs = require('fs/promises');
const fetchUsers = require('./fetchUsers');

function fetchNames() {
  return fetchUsers().then((data) => data.map((el) => el.name));
}

async function saveNames(names) {
  await fs.writeFile('./names.txt', names.join('\n'), 'utf8');
}

async function getName(count) {
  return fs
    .readFile('./names.txt', 'utf-8')
    .then((name) => name.split('\n'))
    .then((el) => el[count - 1]);
}

module.exports = {
  fetchNames,
  getName,
  saveNames,
};
