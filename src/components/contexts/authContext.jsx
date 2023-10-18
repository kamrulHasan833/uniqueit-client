import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
const authContext = createContext(null);

// hook for use auth context
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const value = useContext(authContext);
  return value;
}
function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  useEffect(() => {
    setError(false);
    const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser({});
      }
      setLoading(false);
      return () => {
        unSubscrib();
      };
    });
  }, [auth]);
  // register user
  const register = (image, name, email, password) => {
    setError(false);
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setUser(data.user);

        // update profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        });
      })
      .catch((err) => setError(err));
  };

  // login
  const login = (email, password) => {
    setError(false);
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // logout
  const logout = () => {
    signOut(auth);
  };
  return (
    <authContext.Provider
      value={{
        register,
        user,
        loading,
        error,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children && children}
    </authContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.element,
};
export default AuthProvider;
