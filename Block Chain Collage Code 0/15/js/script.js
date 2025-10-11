// let name = "amin"

// let nakxcnd = kcndakcn

// let name2 = "amin2"

// console.log(nakxcnd)

async function fetchProduct() {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) {
            throw new Error("fetching data was unsuccessful!")
        }
        const data = await response.json();
        console.log("Products:", data)
    } catch (error) {
        console.log("Error:", error.massage)
    }
}

fetchProduct()
