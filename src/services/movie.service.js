export default {
    getProducts(token) {
        // return fetch(process.env.NEXT_PUBLIC_API_URLAPI_URL+"/api/v1/products", {
        return fetch("http://localhost:3131/api/v1/products/products/", {
        // return fetch(`https://app-e-shop-ynov.herokuapp.com/api/v1/users/login`, {
            method: "GET",
            headers: {
            //   "content-type": "application/json",
              "authorization":token
            },
            // body: JSON.stringify(products),
          }).then((res) => res.json())
    },
    getProduct(product, token) {
        // return fetch("http://localhost:3131/api/v1/users/get-user", {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/products/products/get-user`+product._id, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    updateProduct(token, product) {
        // return fetch("http://localhost:3131/api/v1/users/update-user", {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/products/products/edit`+product._id, {
            method: "POST",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
    deleteProduct(product, token) {
        // return fetch(`http://localhost:3131/api/v1/users/delete/${user._id}`, {
        return fetch(process.env.NEXT_PUBLIC_API_URLAPI_URL+"api/v1/products/products/delete/"+product._id, {
        // return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/products/products/delete/${product._id}`, {
            method: "DELETE",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            // body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
    addAdminProduct(token) {
        // return fetch(`http://localhost:3131/api/v1/users/delete/${user._id}`, {
        return fetch(process.env.NEXT_PUBLIC_API_URLAPI_URL+"api/v1/products/products/add-product", {
        // return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/delete/${user._id}`, {
            method: "POST",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            // body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
}