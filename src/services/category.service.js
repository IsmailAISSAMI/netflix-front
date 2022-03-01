export default {
  getCategories(token) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/categories/all`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: token,
        },
      }
    ).then((res) => res.json());
  },
  getCategory(id, token) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/categories/get/${id}`,
      {
        headers: {
          authorization: token,
        },
      }
    ).then((res) => res.json());
  },
  createCategory(category) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/v1/categories/category`,
      {
        method: "POST",
        headers: {
          authorization: token,
          "content-type": "application/json",
        },
        body: JSON.stringify(category),
      }
    ).then((res) => res.json());
  },
  deleteCategory(genre, token) {
    // return fetch(`http://localhost:3131/api/v1/users/delete/${user._id}`, {
    return fetch(
      process.env.NEXT_PUBLIC_API_URLAPI_URL +
        "api/v1/genres/delete/" +
        genre._id,
      {
        // return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/products/products/delete/${product._id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
          "content-type": "application/json",
        },
        // body: JSON.stringify(user),
      }
    ).then((res) => res.json());
  },
};
