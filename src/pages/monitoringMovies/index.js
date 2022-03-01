import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
//import categoryService from "../../services/category.service";
import movieService from "../../services/movie.service";
import CreateButton from "../../components/UI/CreateButton/index";
import DeleteButton from "../../components/UI/DeleteButton/index";
import MonitoringTable from "../../components/UI/MonitoringTable/index";
import styles from "./MonitoringMovies.module.sass";

const Index = () => {
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  //const [categories, setCategories] = useState("");
  const tableHeader = [
    "Title",
    "Maturity Rating",
    "Language",
    "Duration",
    "Description",
    "Release date",
    "Director",
    "Distribution",
    "Categories",
  ];

  useEffect(() => {
    movieService
      .getMovies()
      .then((data) => {
        setMovies(data);
        console.log(`[V] The fetched movies:\n${JSON.stringify(data)}`);
      })
      .catch((err) => {
        console.log(`[X] Error while fetching the movies:\n${err}`);
      });
  }, []);

  // TODO: Too many render 
  // const getCategories = (id) => {
  //   categoryService
  //     .getCategory(id)
  //     .then((data) => {
  //       setCategories(data.label)
  //     })
  //     .catch((err) => {
  //       console.log(`[X] Error while fetching a category:\n${err}`);
  //     });
  // };

  const handleDelete = (movie) => {
    movieService
      .deleteMovie(movie)
      .then((data) => {
        console.log(
          `[V] The next movie was successfully deleted:\n${JSON.stringify(
            data
          )}`
        );
        router.reload("/monitoringMovies");
      })
      .catch((err) => {
        console.log(
          `[X] Error while deleting a movie:\n${JSON.stringify(err)}`
        );
      });
  };

  return (
    <div className={styles.monitoring_movies}>
      <div className={styles.monitoring_movies_buttons}>
        <CreateButton onClick={() => router.push("/createMovies")} />
      </div>
      <MonitoringTable header={tableHeader} data={movies}>
        <tbody>
          {movies.map((movie, index) => {
            return (
              <tr key={`tr-key-${index}`}>
                <td>{movie.title || "None"}</td>
                <td>{movie.maturityRating || "0"}</td>
                <td>{movie.language || "None"}</td>
                <td>{movie.duration || "None"}</td>
                <td>{movie.description || "None"}</td>
                <td>{movie.releaseDate || "None"}</td>
                <td>{movie.director || "None"}</td>
                <td>{movie.distribution || "None"}</td>
                <td>{movie.categories.map((element) => `id:${element}`).join(',\n')}</td>
                {/* <td>
                  {movie.categories.map(
                    (element) => {
                      getCategories(element)
                      return categories
                    }
                  )}
                </td> */}

                <td>
                  <DeleteButton onClick={() => handleDelete(movie)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </MonitoringTable>
    </div>
  );
};

export default Index;
