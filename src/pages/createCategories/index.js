import React, { useState } from "react";
import genreService from "../../services/genre.service";
import AccueilTitle from "../../components/UI/AccueilTitle/AccueilTitle";
import Input from "../../components/UI/Input/Input";
import AccueilButton from "../../components/UI/AccueilButton/AccueilButton";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    genreService
      .addAdminGenre(category)
      .then((data) => {
          console.log(`[v] create category data:\n ${data}`);
        router.push("/createCategories");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.add_genre}>
      <form className={styles.add_genre_form} onSubmit={(e) => handleSubmit(e)}>
        <AccueilTitle title="Create a new genre" />
        <Input
          type="text"
          label="title"
          id="title"
          name="title"
          placeholder="Title"
          onChange={(e) => setGenre({ ...genre, title: e.target.value })}
        />
        <AccueilButton label="Create" onClick={()=>handleSubmit}/>
      </form>
      <br></br>
    </div>
  );
};

export default index;