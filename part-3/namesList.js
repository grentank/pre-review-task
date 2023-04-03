const fs = require('fs/promises');
const fetchUsers = require('./fetchUsers');

async function fetchNames() {
  const arr = []
const a = await fetchUsers()
for (let i = 0; i < a.length; i += 1) {
  arr.push(a[i].name)
}
return arr
}

async function saveNames(names) {
  await fs.writeFile('./names.txt', names.join('\n'), 'utf-8')
}

async function getName(count) {
const str = await fs.readFile('./names.txt', 'utf-8')
return str.split('\n')[count -1]
}

module.exports = {
  fetchNames,
  getName,
  saveNames,
};
