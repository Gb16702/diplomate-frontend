import type { Meta, StoryObj } from "@storybook/vue3-vite";
import IconButton from "./IconButton.vue";

const meta: Meta<typeof IconButton> = {
    title: "Molecules/IconButton",
    component: IconButton,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["contained", "outlined"],
        },
        color: {
            control: "select",
            options: ["primary", "secondary", "tertiary"],
        },
        rounded: {
            control: "select",
            options: ["light", "medium", "maximum"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "contained",
        color: "primary",
        rounded: "medium",
    },
    render: args => ({
        components: { IconButton },
        setup() {
            return { args };
        },
        template: `
            <IconButton v-bind="args">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
            </IconButton>
        `,
    }),
};
