"use client";
import Image from "next/image";
import styles from "./login.module.css";

import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError(null);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    });

    const result = await response.json();

    if (result.status === "success") {
      // Redirect to the homepage
      window.location.href = "/admin";
    } else {
      // Set error message
      setError(result.message);
    }
  };

  return (
    <>
    <h1 className={styles.heading}>Admin Login</h1>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/login.svg" alt="Login" fill />
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <h1 className={styles.subHeading}>Admin Login</h1>
          <input type="text" placeholder="Username" name="username" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button type="submit">Login</button>
          <h3 className={styles.error}>{error}</h3>
        </form>
      </div>
    </>
  );
};

export default Login;
