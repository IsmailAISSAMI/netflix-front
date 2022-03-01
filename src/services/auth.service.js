export default {
  signup(user) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/createUser`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    ).then((res) => res.json());
  },
  signin(user) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/signin`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    ).then((res) => res.json());
  },
  getUser(token) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/get-user`,
      {
        headers: {
          authorization: token,
        },
      }
    ).then((res) => res.json());
  },
  getUsers(token) {
    return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/getUsers`,
      {
        headers: {
          authorization: token,
        },
      }
    ).then((res) => res.json());
  },
  updateUser(token, user) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/edit/${user._id}`,
      {
        method: "PUT",
        headers: {
          authorization: token,
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    ).then((res) => res.json());
  },
  deleteUser(user, token) {
    return fetch(`${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/delete/${user._id}`, {
        method: "DELETE",
        headers: {
            "authorization": token,
            "content-type":"application/json"
        },
    })
    .then(res => res.json())
},
  verifyToken(token) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/users/verifytoken`,
      {
        headers: {
          authorization: token,
        },
      }
    ).then((res) => res.json());
  },
};
