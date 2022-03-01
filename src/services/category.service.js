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
        `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/categories/createCategory`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(category),
      }
    ).then((res) => res.json());
  },
  deleteCategory(category, token) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/categories/delete/${category._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: token,
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
  },
};
