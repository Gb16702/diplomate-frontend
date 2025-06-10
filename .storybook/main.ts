import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "@storybook/addon-vitest",
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    typescript: {
        check: false,
    },
    viteFinal: async (config) => {
        config.plugins = config.plugins?.filter(plugin =>
            !(plugin && typeof plugin === 'object' && plugin.name === 'storybook:vue-docgen-plugin')
        );
        return config;
    },
};

export default config;