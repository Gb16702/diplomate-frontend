import type { Preview } from "@storybook/vue3-vite";
import "../src/styles/fonts";
import "../src/styles/globals.css";

const preview: Preview = {
    parameters: {
        backgrounds: {
            options: {
                dark: { name: "Dark", value: "#333333" },
                light: { name: "Light", value: "#F7F9F2" },
                cream: { name: "Cream", value: "#FCF7EE" },
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: "todo",
        },
    },
    initialGlobals: {
        backgrounds: { value: "Cream" },
    },
};

export default preview;
