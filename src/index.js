import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";
//import App from "./server/App";

import App from "./App2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
