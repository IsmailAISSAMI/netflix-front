import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import movieService from "../../services/movie.service";
import categoryService from "../../services/category.service";
import FormTitle from "../../components/UI/FormTitle/Index";
import FormButton from "../../components/UI/FormButton/Index";
import Input from "../../components/UI/Input/Input";
import styles from "./CreateMovies.module.sass";

const Index = () => {
  const router = useRouter();
  const [categories, setCategories] = useState();
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
    categoryService.getGenres().then((data) => {
      console.log(`[v] Create movie data:\n ${data}`);
      setCategories(data);
    });
  }, []);

  const handleSubmit = (e) => {
    console.log(product);
    e.preventDefault();
    movieService
      .addAdminProduct(product)
      .then((data) => {
        // localStorage.setItem("token", JSON.stringify(data.token));
        console.log(data);
        router.push("/productAdmin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.create_movie}>
      <form
        className={styles.create_movie_form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormTitle title="Create a new movie" />
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
          onChange={(e) => setMovie({ ...movie, maturityRating: e.target.value })}
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
        <Input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          onChange={(e) => setMovie({ ...movie, description: e.target.value })}
        />
        <Input
          type="text"
          id="releaseDate"
          name="releaseDate"
          placeholder="Release date"
          onChange={(e) => setMovie({ ...movie, releaseDate: e.target.value })}
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
          onChange={(e) => setMovie({ ...movie, scriptWriter: e.target.value })}
        />
        <Input
          type="text"
          id="distribution"
          name="distribution"
          placeholder="Distribution"
          onChange={(e) => setMovie({ ...movie, distribution: e.target.value })}
        />
        {/* TODO: category selector */}
        <FormButton label="Create" onClick={() => handleSubmit} />
      </form>
    </div>
  );
};

export default Index;
