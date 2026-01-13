import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../features/api/apiSlice";
import { setCredentials } from "../features/auth/authSlice";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("emilys"); // Предзаполнил для удобства
  const [password, setPassword] = useState("emilyspass");

  const [login, { isLoading }] = useLoginMutation(); // Хук из RTK Query
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Отправляем запрос на сервер
      const userData = await login({ username, password }).unwrap();

      // Если успех сохраняем в Redux
      dispatch(
        setCredentials({
          user: userData,
          token: userData.token,
        })
      );

      //страницу с полями
      navigate("/locations");
    } catch (err) {
      alert(
        "Ошибка входа! Проверьте логин/пароль (попробуйте emilys / emilyspass)"
      );
      console.error("Failed to login:", err);
    }
  };

  return (
    <div className="container">
      <div className="container_card">
        <h2 className="container_text">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            className="form_input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="form_input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="form_btn" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>

        <p className="container_hint">
          Hint: use <b>emilys</b> / <b>emilyspass</b>
        </p>
      </div>
    </div>
  );
};

export default Login;
