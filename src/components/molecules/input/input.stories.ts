import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Input from "./Input.vue";

const meta = {
    title: "Molecules/Input",
    component: Input,
    parameters: {
        docs: {
            description: {
                component: "Customizable input",
            },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;

export const Base = {
    argTypes: {
        id: {
            control: "text",
            description: "Label content",
        },
        type: {
            control: "select",
            options: ["text", "email", "password"],
            description: "Input type",
        },
        placeholder: {
            control: "text",
            description: "Input placeholder",
        },
        isDisabled: {
            control: "boolean",
            description: "Whether the input is disabled or not",
        },
    },
    args: {
        id: "username",
        type: "text",
        placeholder: "socrates@gmail.com",
        isDisabled: false,
    },
} satisfies StoryObj<typeof Input>;
