import React, { useState } from "react";
import { useRouter } from "next/router";
import authService from "../../services/auth.service";
import FormTitle from "../../components/UI/FormTitle/index";
import FormButton from "../../components/UI/FormButton/index";
import Input from "../../components/UI/Input/Input";
import CheckboxInput from "../../components/UI/CheckboxInput/Index";
import styles from "./createUsers.module.sass";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({ isAdmin: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .addAdminUser(user)
      .then((data) => {
        console.log(data);
        router.push("/userAdmin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.create_user}>
      <form className={styles.create_user_form} onSubmit={(e) => handleSubmit(e)}>
        <FormTitle title="Create a new user" />
        <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <CheckboxInput
          label="Is Admin"
          id="isAdmin"
          name="isAdmin"
          value={user.isAdmin}
          onChange={(e) => setUser({ ...user, isAdmin: !user.isAdmin })}
        />
        <FormButton label="Create" onClick={()=>handleSubmit}/>
      </form>
    </div>
  );
};

export default Index;
