import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./core/App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/StyledComponents/theme.ts";
import { GlobalStyles } from "./core/StyledComponents/globalStyles.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </StrictMode>
);
