const fs = require('fs/promises');
const fetchUsers = require('./fetchUsers');

async function fetchNames() {
  const promis = await fetchUsers().then((el)=> el.map((elem)=> elem.name))
 return promis
}

 async function saveNames(names) {
  const result = names.join('\n')
  fs.writeFile('names.txt', result, 'utf-8')
 }

async function getName(count) {
const readFile = await fs.readFile('names.txt', 'utf-8', (err)=> {
  if(err) throw err
})
const arr = readFile.split('\n')
return  arr[count-1]
}

module.exports = {
  fetchNames,
  getName,
  saveNames,
};
