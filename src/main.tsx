
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { setupThemeFavicon } from "./app/utils/themeFavicon";
  import "./styles/index.css";

  setupThemeFavicon();

  createRoot(document.getElementById("root")!).render(<App />);
  