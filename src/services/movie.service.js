export default {
  getMovie(movie, token) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/movies/movie/${movie._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    ).then((res) => res.json());
  },
  getMovies(token) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/movies/getMovies`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: token,
        },
      }
    ).then((res) => res.json());
  },
  createMovie(movie) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/movies/createMovie`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    ).then((res) => res.json());
  },
  updateMovie(movie, token) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/movies/edit/${movie._id}`,
      {
        method: "POST",
        headers: {
          authorization: token,
          "content-type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    ).then((res) => res.json());
  },
  deleteMovie(movie, token) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URLAPI_URL}api/v1/movies/delete/${movie._id}`,
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
