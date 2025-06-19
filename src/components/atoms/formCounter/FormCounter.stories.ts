import type { Meta, StoryObj } from "@storybook/vue3-vite";
import FormCounter from "./FormCounter.vue";

const meta: Meta<typeof FormCounter> = {
    title: "Atoms/FormCounter",
    component: FormCounter,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        remainingCharacters: {
            control: "number",
            description: "Remaining characters",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        remainingCharacters: 200,
    },
};
