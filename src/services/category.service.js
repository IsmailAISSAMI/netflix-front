export default {
    getGenres(token) {
        // return fetch(process.env.NEXT_PUBLIC_API_URLAPI_URL+"/api/v1/products", {
        return fetch("http://localhost:3131/api/v1/genres/genre/", {
        // return fetch(`https://app-e-shop-ynov.herokuapp.com/api/v1/users/login`, {
            method: "GET",
            headers: {
            //   "content-type": "application/json",
              "authorization":token
            },
            // body: JSON.stringify(products),
          }).then((res) => res.json())
    },
    getGenre(genre, token) {
        // return fetch("http://localhost:3131/api/v1/users/get-user", {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/genres/genre/`+genre._id, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    updateGenre(token, user) {
        // return fetch("http://localhost:3131/api/v1/users/update-user", {
        return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/genres/genre/edit/`+product._id, {
            method: "PUT",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
    deleteGenre(genre, token) {
        // return fetch(`http://localhost:3131/api/v1/users/delete/${user._id}`, {
        return fetch(process.env.NEXT_PUBLIC_API_URLAPI_URL+"api/v1/genres/delete/"+genre._id, {
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

    createCategory(token) {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/v1/categories/category`, {
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