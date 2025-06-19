import type { Preview } from "@storybook/vue3-vite";
import "../src/styles/fonts";
import "../src/styles/globals.css";

const preview: Preview = {
    parameters: {
        backgrounds: {
            options: {
                cream: { name: "Cream", value: "#FCF7EE" },
                black: { name: "Black", value: "#040402" },
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
        backgrounds: { value: "cream" },
    },
};

export default preview;
