import { useRef, useState } from "react";
import Header from "./Header";
import { validateEmailPAssword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { MAIN_BG_IMG } from "../utils/contants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [error, setError] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const submitForm = () => {
    const err = validateEmailPAssword(
      email.current.value,
      password.current.value
    );
    setError(err);
    if (err) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img src={MAIN_BG_IMG} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-6 bg-black w-1/4 bg-opacity-80 mx-auto right-0 left-0 my-48 text-green-100 rounded"
      >
        <h1 className="text-3xl my-4 px-2">{signIn ? "Sign In" : "SignUp"}</h1>

        {!signIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-800 rounded"
          />
        )}

        <input
          type="text"
          placeholder="Email address"
          className="p-2 m-2 w-full bg-gray-800 rounded"
          ref={email}
        />
        {}
        <input
          type="password"
          placeholder="Password"
          className="m-2 p-2 w-full bg-gray-800 rounded"
          ref={password}
        />
        {error ? <p className="text-red-700">{error}</p> : null}
        <button
          onClick={submitForm}
          className="m-4 p-4 bg-red-700 w-full mx-2 p-4 rounded"
        >
          {signIn ? "Sign In" : "sign Up"}
        </button>
        <p className="px-2 cursor-pointer" onClick={() => setSignIn(!signIn)}>
          {signIn ? "new to Netflix? Sign up now" : "already a member? Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
