import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import authService from "../../services/auth.service";
import Input from "../../components/UI/Input/Input";
import styles from "./index.module.sass";
import FormTitle from "../../components/UI/FormTitle";
import FormButton from "../../components/UI/FormButton";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .login(user)
      .then((data) => {
        console.log(data);
        if (data.message) {
          return false;
        }
        localStorage.setItem("token", data.token);
        router.push("/browse");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.sign_in}>
      <form className={styles.sign_in_form} onSubmit={(e) => handleSubmit(e)}>
        <FormTitle title="Sign in"/>
        <Input
          type="email"
          label="email"
          id="email"
          name="email"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          type="password"
          label="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <FormButton label="Sign in"/>
        <p className={styles.sign_in_form_text}>
            New to Netflix ?
            <Link href="/register">
              <a>Sign up now.</a>
            </Link>
        </p>
        <p className={styles.sign_in_form_captcha}>
            This page is protected by Google reCAPTCHA to ensure you are not a bot.
        </p>
      </form>
    </div>
  );
};

export default Index;
