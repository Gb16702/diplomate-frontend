import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Label from "./Label.vue";

const meta = {
    title: "Atoms/Label",
    component: Label,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Form Label",
            },
        },
    },
} satisfies Meta<typeof Label>;

export default meta;

export const Base = {
    argTypes: {
        required: {
            control: "boolean",
            description: "Whether the label is required or not",
        },
        inputId: {
            control: "text",
            description: "What input is this label linked to ?",
        },
        default: {
            control: "text",
            description: "Whether the label is required or not",
        },
    },

    args: {
        required: false,
        inputId: "username",
        default: "username",
    },
} satisfies StoryObj<typeof Label>;
