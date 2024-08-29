import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <SkeletonTheme baseColor="#a2a6a2" highlightColor="#8d8f8d">
        <App />
      </SkeletonTheme>
    </NextUIProvider>
  </React.StrictMode>
);

//api secret w6Jbp9kCyYTJZ5KNZyHvKJkvcVA
// api key 592923251847817
//cloud name dtiyid0pi
