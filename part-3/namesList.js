const fs = require('fs/promises');
const fetchUsers = require('./fetchUsers');

async function fetchNames() {
  const users = await fetchUsers();
  const names = users.map((element) => element.name);
  return new Promise((resolve, reject) => {
    if (names) {
      resolve(names);
    } else {
      reject('Error');
    }
  });
}

async function saveNames(names) {
  const namesString = names.join('\n');
  await fs.writeFile('./names.txt', namesString, 'utf-8');
}

async function getName(count) {
  return (await fs.readFile('./names.txt', 'utf-8')).split('\n')[count - 1];
}

module.exports = {
  fetchNames,
  getName,
  saveNames,
};
