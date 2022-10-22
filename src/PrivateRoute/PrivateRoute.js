import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  //children er vitore jathakbe ta permission bade dukte parba nah
  const { user, loading } = useContext(AuthContext);
  //want to same page current location

  const location = useLocation();
  //check loading
  if (loading) {
    console.log("yes loading found");
    return <div>Loading...or use toast or spinner</div>;
  }
  //check user to login or not
  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
