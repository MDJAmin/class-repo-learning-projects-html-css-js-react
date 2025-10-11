const productContainer = document.querySelector("#Products")

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data =>{
data.forEach(product => {
    productContainer.innerHTML += `
         <div class="card">
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.price}</p>
        </div>
    `
});
})
.catch(err => console.error("Error fetching products:",err));



// try {
//     let result = 10 / 0;
//     console.log(result)
// } catch (error) {
//     console.log("There was a problem!", error.massage)
// }


// try {
//     console.log(username)
// } catch (error) {
//     console.log("error!", error.massage)
// }


// function aminAge(age){
//     try{
//         let amin = 18
//         if(isNaN(amin)){
//             throw new Error("age is not valid!")
//         }
//         console.log("Your age:",amin)
//     }catch (error){
//         console.log("error",error.massage)
//     }
// }

// aminAge()