import React, { useState, useEffect } from "react";
import categoryService from "../../services/category.service";
import movieService from "../../services/movie.service";
import FormTitle from "../../components/UI/FormTitle/index";
import FormButton from "../../components/UI/FormButton/index";
import Input from "../../components/UI/Input/Input";
import SelectInput from "../../components/UI/SelectInput/index";
import styles from "./CreateMovies.module.sass";

const Index = () => {
  const [categories, setCategories] = useState([]);
  const [movie, setMovie] = useState({
    title: "",
    image: "",
    trailer: "",
    maturityRating: 0,
    language: "",
    duration: "",
    description: "",
    releaseDate: "",
    director: "",
    scriptWriter: "",
    distribution: "",
    categories: [],
  });

  useEffect(() => {
    console.log(`[State] Movie ${JSON.stringify(movie)}`);
  }, [movie]);

  useEffect(() => {
    categoryService.getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleSubmit = (e) => {
    console.log(movie);
    e.preventDefault();
    movieService
      .createMovie(movie)
      .then((data) => {
        console.log(`[V] successfully adding the movie :\n${JSON.stringify(data)}`);
        //router.push("/productAdmin");
      })
      .catch((err) => {
        console.log(`[X] Error while creating a new movie:\n${err}`);
      });
  };

  return (
    <div className={styles.create_movie}>
      <FormTitle title="Create a new movie" />
      <form
        className={styles.create_movie_form}
        onSubmit={(e) => handleSubmit(e)}
        method="post"
      >
        <div className={styles.left}>
          
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Movie title"
            onChange={(e) => setMovie({ ...movie, title: e.target.value })}
          />
          <Input
            type="text"
            id="image"
            name="image"
            placeholder="Image address"
            onChange={(e) => setMovie({ ...movie, image: e.target.value })}
          />
          <Input
            type="text"
            id="trailer"
            name="trailer"
            placeholder="Trailer address"
            onChange={(e) => setMovie({ ...movie, trailer: e.target.value })}
          />
          {/* TODO: age selector */}
          <Input
            type="text"
            id="maturityRating"
            name="maturityRating"
            placeholder="Maturity Rating of the movie"
            onChange={(e) =>
              setMovie({ ...movie, maturityRating: e.target.value })
            }
          />
          <Input
            type="text"
            id="language"
            name="language"
            placeholder="Language"
            onChange={(e) => setMovie({ ...movie, language: e.target.value })}
          />
          <Input
            type="text"
            id="duration"
            name="duration"
            placeholder="Duration"
            onChange={(e) => setMovie({ ...movie, duration: e.target.value })}
          />
        </div>
        <div className={styles.right}>
          <Input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            onChange={(e) =>
              setMovie({ ...movie, description: e.target.value })
            }
          />
          <Input
            type="text"
            id="releaseDate"
            name="releaseDate"
            placeholder="Release date"
            onChange={(e) =>
              setMovie({ ...movie, releaseDate: e.target.value })
            }
          />
          <Input
            type="text"
            id="director"
            name="director"
            placeholder="Director"
            onChange={(e) => setMovie({ ...movie, director: e.target.value })}
          />
          <Input
            type="text"
            id="scriptWriter"
            name="scriptWriter"
            placeholder="Script writer"
            onChange={(e) =>
              setMovie({ ...movie, scriptWriter: e.target.value })
            }
          />
          <Input
            type="text"
            id="distribution"
            name="distribution"
            placeholder="Distribution"
            onChange={(e) =>
              setMovie({ ...movie, distribution: e.target.value })
            }
          />
          <SelectInput
            data={categories}
            onChange={(e) =>
              setMovie({
                ...movie,
                categories: [...movie.categories, e.target.value],
              })
            }
          />
          <FormButton label="Create" />
        </div>
      </form>
    </div>
  );
};

export default Index;
