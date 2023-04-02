const fs = require('fs/promises');
const fetchUsers = require('./fetchUsers');

async function fetchNames(){
return (await fetchUsers()).map((e) => e.name)
}

async function saveNames(names) {
  return fs.writeFile('./names.txt', names.join('\n'), 'utf-8');
}

async function getName(el) {
  return fs.readFile('./names.txt', 'utf-8').then((data) => data.split('\n')[el - 1]);
}

module.exports = {
  fetchNames,
  getName,
  saveNames,
};
