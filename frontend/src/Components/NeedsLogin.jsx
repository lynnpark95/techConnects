import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser, clearUser } from "../Redux/Actions/user_action";

export default function NeedsLogin({ children }) {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      dispatch(setUser(user));

      if (!user) {
        navigate("/signin");
        dispatch(clearUser());
      }
    });
  }, []);

  return children;
}
