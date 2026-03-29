import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");

if (container) {
	const app = (
		<StrictMode>
			<App />
		</StrictMode>
	);

	if (container.hasChildNodes()) {
		hydrateRoot(container, app);
	} else {
		createRoot(container).render(app);
	}
}
