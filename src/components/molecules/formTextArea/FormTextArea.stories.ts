import type { Meta, StoryObj } from "@storybook/vue3-vite";
import FormTextArea from "./FormTextArea.vue";

const meta: Meta<typeof FormTextArea> = {
    title: "Molecules/FormTextArea/UI",
    component: FormTextArea,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        placeholder: {
            control: "text",
            description: "Textarea placeholder",
        },
        maxLength: {
            control: "number",
            description: "Textarea maxlength",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Write your opening...",
        maxLength: 200,
    },
};

export const ShortLimit: Story = {
    args: {
        placeholder: "Tweet something...",
        maxLength: 50,
    },
};

export const LongLimit: Story = {
    args: {
        placeholder: "Write a detailed description...",
        maxLength: 500,
    },
};

export const EmptyPlaceholder: Story = {
    args: {
        placeholder: "",
        maxLength: 200,
    },
};


