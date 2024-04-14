import { createRoot } from "react-dom/client";
import React from "react";

// This is being imported correctly, as it fails to build when I
// change the name to a file that doesn't exist.
import "./app.css";

// This would cause the build to fail
// import "./foo.css"

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <>
    <h1>This is a header!</h1>
    <p>This is a paragraph</p>
  </>
);
