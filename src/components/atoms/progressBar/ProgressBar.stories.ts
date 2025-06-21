import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ProgressBar from "@/components/atoms/progressBar/ProgressBar.vue";

const meta = {
    title: "Atoms/ProgressBar",
    component: ProgressBar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "Simple progress bar component showing completion percentage with orange fill.",
            },
        },
    },
    argTypes: {
        value: {
            control: { type: "range", min: 0, max: 100, step: 1 },
            description: "Current progress value",
        },
        max: {
            control: { type: "number", min: 1, max: 500, step: 1 },
            description: "Maximum value (default: 100)",
        },
        showShine: {
            control: "boolean",
            description: "Whether to show a shine effect on the bar",
        },
    },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
        max: 100,
        showShine: false,
    },
};

export const Shiny: Story = {
    args: {
        value: 100,
        max: 100,
        showShine: true,
    },
};
