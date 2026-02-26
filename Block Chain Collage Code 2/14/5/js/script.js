// const productContainer = document.querySelector("#Products");

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((product) => {
//       productContainer.innerHTML += `
//         <div class="card">
//             <img src="${product.image}" alt="${product.title}">
//             <h2>${product.title}</h2>
//             <p>${product.price}</p>
//             <p>${product.description}</p>
//         </div>
// `;
//     });
//   })
// .catch(err => console.log("Error fetching products",err))

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2);
// console.log("Original:", numbers);
// console.log("Doubled:", doubled);

const productContainer = document.querySelector("#Products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const productCards = data.map(
      (product) =>
        `
        <div class="card">
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.price}</p>
            <p>${product.description}</p>
        </div>
`,
    );
    productContainer.innerHTML = productCards.join("");
  })
  .catch((err) => console.log("Error fetching products", err));
