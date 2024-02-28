import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/fireBase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../redux/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/contants";
import { addGPTMovies, toggleGPT } from "../redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((user) => user.user);
  const gptSearch = useSelector((store) => store?.gptSearch?.gptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const signedOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        alert("successfully signed out");
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPT(!gptSearch));
  };

  return (
    <div className="absolute px-6 py-6 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={LOGO} alt="netflix-logo" />
      {users && (
        <div className="justify-content-right ">
          <button
            className="text-white m-2 bg-blue-700 p-2 rounded"
            onClick={() => handleGPTSearch()}
          >
            Search with GPT
          </button>
          <button
            className="p-2 m-2 text-white bg-red-700 rounded font-bold"
            onClick={() => signedOut()}
          >
            {gptSearch ? "Sign out" : "HOME"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
