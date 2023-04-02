module.exports = function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users/').then((response) => response.json());
};
// fetch('https://jsonplaceholder.typicode.com/users/').then((response) => response.json())
// .then(data=>data.map((el)=> console.log(el.name)))