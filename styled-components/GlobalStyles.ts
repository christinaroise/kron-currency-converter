import { createGlobalStyle } from "styled-components";

export enum Colors {
    WHITE = "#fff",
    LIGHTPURPLE = "#f5ecff",
    PURPLE = "#5b4379",
    DARKPURPLE = "#503374",
    YELLOW = "#FFBF44",
    GRAY = "#9f95bc",
};


export const GlobalStyles = createGlobalStyle`
    *:focus {
      outline: 2px solid ${Colors.YELLOW};
    }
    body {
        margin: 0;
        background-color: ${Colors.LIGHTPURPLE};
        color: ${Colors.DARKPURPLE};
        font-family: StabilGrotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    small {
        font-weight: 600;
        color: ${Colors.GRAY}; // TODO; doesn't actually pass the color contrast check, but keeping for now
    }

    p {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin: .5rem 0;
    }

    label, button {
        font-weight: 600;
        font-size: 1.25rem;
    }

    hr {
        border: 1px solid ${Colors.LIGHTPURPLE};
        border-radius: 100px;
        width: 100%;
    }
`;