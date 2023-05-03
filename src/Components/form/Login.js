import React, { useState, useEffect } from "react";
import style from "./Login.module.css";
import CustomButton from "../CUstom/CustomButton";
import CustomInput from "../CUstom/CustomInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Background from "../Backround/Backround";
import log from "../../images/login.jpg"
import { useSetRecoilState } from "recoil";
import { isRefresh } from "../../Recoil";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const nav = useNavigate();
  const setLogin = useSetRecoilState(isRefresh);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData"));

    setUserList(data);
  }, []);
  // console.log(userList);
  function handleLogin() {
    if (email === "" || password === "") {
      alert("FIll the form first");
    } else if (userList !== null) {
      const userFind = userList.find(
        (x) =>
          (x.email === email || x.email === "") &&
          (x.password === password || x.password === "")
      );

      if (!userFind) {
        alert("No user found. Please sign up!! 😥😥");
        setEmail("");
        setPassword("");
      } else {
        alert(`${userFind.userName} you are successfully  login 🎉🎉`);
        setLogin(true);
        nav("/home");
      }
    } else {
      alert("Please Signup first 😊😊");
    }
  }

  return (
    <>
      <Background
        url={log}
        heading="LOGIN PAGE"
        desc="LOGIN TO AVAIL EXTRA BENIFITS"
      />
      <div className={style.wrap}>
        <h3>Login Page</h3>
        <CustomInput
          className={style.email}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onChange={(e) => {...obj,obj.setEmail(e.target.value)}}
        />
        <CustomInput
          className={style.password}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton
          style={style.button}
          onClick={handleLogin}
          btntxt="Login"
        />
        <p>
          Not registered yet? <Link to="/signup"> Signup</Link>
        </p>
      </div>
    </>
  );
}
