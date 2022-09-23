import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ParallaxProvider } from "react-scroll-parallax";

// import { I18nextProvider } from "react-i18next";
// import i18next from "i18next";
// import translateEN from "./Config/Translations/en.json";
// import translateCH from "./Config/Translations/en.json";

// i18next.init({
//   interpolation: { escapeValue: false }, // React already does escaping
//   lng: "en",
//   resources: {
//     en: {
//       air_citizen: translateEN,
//     },
//     ch: {
//       air_citizen: translateCH,
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18next}> */}
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
    {/* </I18nextProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
