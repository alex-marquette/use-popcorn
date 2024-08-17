import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

import StarRating from "./StarRating";
// import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="#00f" maxRating={10} onSetRating={setMovieRating} />
      <p> this movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={5} color="#ff0000" size={24} /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
