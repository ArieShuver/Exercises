process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => {
//         return res.json();
//     })
//     .then((date) => {
//         console.log(date);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
   
  },
  body: JSON.stringify({
    name: 'nisim',
    job: 'student'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));