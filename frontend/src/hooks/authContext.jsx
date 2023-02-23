/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import { createContext, useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext({});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ data: null });
  const navigate = useNavigate();
  const login = (data) => {
    setAuth({ data });
    if (auth.data.role === 1) {
      navigate("/home");
    } else if (auth.data.role === 2) {
      navigate("/technicien");
    } else if (auth.data.role === 3) {
      navigate("/admin");
    } else {
      navigate("/*");
    }
  };

  const logout = () => {
    setAuth({});
    window.localStorage.removeItem("user");
    navigate("/", { replace: true, state: "Disconnected" });
  };

  useEffect(() => {
    const data = window.localStorage.getItem("user");

    if (data) {
      setAuth({
        data: JSON.parse(data),
      });
    }
  }, []);

  useEffect(() => {
    if (auth.data) {
      window.localStorage.setItem("user", JSON.stringify(auth.data));
    }
  }, [auth]);

  const value = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
