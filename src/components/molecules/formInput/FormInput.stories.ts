import type { Meta, StoryObj } from "@storybook/vue3-vite";
import FormInput from "./FormInput.vue";

const meta = {
    title: "Molecules/FormInput",
    component: FormInput,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Customizable input",
            },
        },
    },
} satisfies Meta<typeof FormInput>;

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
} satisfies StoryObj<typeof FormInput>;
