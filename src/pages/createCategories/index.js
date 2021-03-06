import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import categoryService from "../../services/category.service";
import FormTitle from "../../components/UI/FormTitle/index";
import FormButton from "../../components/UI/FormButton/index";
import Input from "../../components/UI/Input/Input";
import styles from "./CreateCategories.module.sass";

const Index = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log(`[State] Category ${category || "none"}`);
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    categoryService
      .createCategory(category)
      .then((data) => {
        console.log(`[v] Create category data:\n ${data}`);
        router.push("/createCategories");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.create_category}>
      <form
        className={styles.create_category_form}
        onSubmit={(e) => handleSubmit(e)}
        method="post"
      >
        <FormTitle title="Create a new category of movies" />
        <Input
          type="text"
          id="label"
          name="label"
          placeholder="Category label"
          onChange={(e) => setCategory({ ...category, label: e.target.value })}
        />
        <FormButton label="Create" />
      </form>
    </div>
  );
};

export default Index;
