import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Checkbox from "@/components/atoms/checkbox/Checkbox.vue";

const meta: Meta<typeof Checkbox> = {
    title: "Atoms/Checkbox/UI",
    component: Checkbox,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Reusable round checkbox component. Base atom for user selections.",
            },
        },
    },
    argTypes: {
        modelValue: {
            control: "boolean",
            description: "Checkbox state (checked/unchecked)",
        },
        disabled: {
            control: "boolean",
            description: "Disables checkbox interaction",
        },
        id: {
            control: "text",
            description: "Unique ID for accessibility",
        },
        ariaLabel: {
            control: "text",
            description: "Accessible label for screen readers",
        },
        ariaDescribedBy: {
            control: "text",
            description: "ID of element that describes the checkbox",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: "checkbox-default",
        modelValue: false,
        disabled: false,
        ariaLabel: "Default checkbox",
        ariaDescribedBy: "checkbox-description",
    },
};

export const Checked: Story = {
    args: {
        id: "checkbox-checked",
        modelValue: true,
        disabled: false,
        ariaLabel: "Checked checkbox",
        ariaDescribedBy: "checkbox-description",
    },
};

export const Disabled: Story = {
    args: {
        id: "checkbox-disabled",
        modelValue: false,
        disabled: true,
        ariaLabel: "Disabled checkbox",
        ariaDescribedBy: "checkbox-description",
    },
};
