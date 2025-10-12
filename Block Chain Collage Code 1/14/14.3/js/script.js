// const productContainer = document.querySelector("#Products")

// fetch("https://fakestoreapi.com/products") //fetch() starts an HTTP request to get data from that URL.
// .then(res => res.json()) // .then(...) runs after the Promise succeeds
// .then(data =>{
// data.forEach(product => {
//     productContainer.innerHTML += `
//          <div class="card">
//             <img src="${product.image}" alt="${product.title}">
//             <h2>${product.title}</h2>
//             <p>${product.price}</p>
//         </div>
//     `
// });
// })
// .catch(err => console.error("Error fetching products:",err)); // runs only if something goes wrong

// ________________________________________________

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// ________________________________________________

const productContainer = document.querySelector("#Products");

fetch("https://fakestoreapi.com/products") // fetch data
  .then(res => res.json())
  .then(data => {
    // create an array of HTML strings
    const productCards = data.map(product => `
      <div class="card">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.price}</p>
      </div>
    `);

    // join array into one string and insert into container
    productContainer.innerHTML = productCards.join("");
  })
  .catch(err => console.error("Error fetching products:", err));