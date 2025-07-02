// GET /api/data – Default returns 1 item
// GET /api/data?limit=5 – Returns 5 items (max 10 without API key)
// GET /api/data?limit=50&api_key=xxx – Returns up to 100 with valid key
// GET /api/data?id=2 – Filters by ID
// POST /api/data – Add new item
// PUT /api/data/:id – Update item by ID
// DELETE /api/data/:id – Delete item
// POST /api/generate-key – Generate new API key


//1
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// fetch("https://api-kodkod.onrender.com/api/data")
//     .then((res) => res.text()).then(date => {
//         console.log(date)
//     })
//     .catch(error => {
//         console.log(error)
//     }
//   );

// 2
// fetch("https://api-kodkod.onrender.com/api/data?limit=5")
//     .then((res) => res.json()).then(date => {
//         console.log(date)
//     }).catch(error => {
//         console.log(error)
//     });

// const person = {
//     this.obd= {
//         name: "Arie",
//         greet: () => {
//             console.log("Hi " + this.name);
//         }
//     }
// };
// person.greet()

()=>{ 
  console.log(this);
}


