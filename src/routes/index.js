import React, { useContext } from "react";
import { AppRoutes } from "./app.routes";
import { SignIn } from "../pages/SignIn";
import { AppContext } from "../contexts/appContext";

export default function Routes() {
  const { signed } = useContext(AppContext);
  return signed ? <AppRoutes /> : <SignIn />;
}
