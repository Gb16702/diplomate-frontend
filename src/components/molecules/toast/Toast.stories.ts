import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "@storybook/test";
import Toast from "./Toast.vue";

const meta = {
    title: "Molecules/Toast",
    component: Toast,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "Toast component for displaying temporary notifications to users with support for 3 types: short, descriptive and action.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "select",
            options: ["short", "descriptive", "action"],
            description: "Toast type that determines the content structure",
        },
        variant: {
            control: "select",
            options: ["info", "error"],
            description: "Variant that determines the style and colors",
        },
        title: {
            control: "text",
            description: "Main title of the toast",
        },
        description: {
            control: "text",
            description: "Optional description (for descriptive and action types)",
        },
        actionLabel: {
            control: "text",
            description: "Action button label (only for action type)",
        },
        visible: {
            control: "boolean",
            description: "Controls the visibility of the toast",
        },
        onClose: {
            description: "Callback fired when the toast is closed",
        },
        onAction: {
            description: "Callback fired when the action button is clicked",
        },
    },
    args: {
        onClose: fn(),
        onAction: fn(),
    }
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Short: Story = {
    args: {
        title: "Settings saved",
        type: "short",
        variant: "info",
        visible: true,
    },
} satisfies StoryObj<typeof Toast>;

export const Descriptive: Story = {
    args: {
        title: "Settings saved",
        description: "Your settings have been saved successfully",
        type: "descriptive",
        variant: "info",
        visible: true,
    },
} satisfies StoryObj<typeof Toast>;
