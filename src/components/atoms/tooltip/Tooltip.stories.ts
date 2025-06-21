import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Tooltip from "@/components/atoms/tooltip/Tooltip.vue";
import Button from "@/components/atoms/button/Button.vue";

const meta = {
    title: "Atoms/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "Simple tooltip component that displays contextual information on hover. Can be positioned in 4 directions around the trigger element.",
            },
        },
    },
    argTypes: {
        content: {
            control: { type: "text" },
            description: "Text content to display in the tooltip",
        },
        position: {
            control: { type: "select" },
            options: ["top", "bottom", "left", "right"],
            description: "Position of the tooltip relative to the trigger element",
        },
    },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: "Add to library",
        position: "top",
    },
    render: args => ({
        components: { Tooltip, Button },
        setup() {
            return { args };
        },
        template: `
            <Tooltip v-bind="args">
                <Button variant="contained" color="primary">
                    Hover me
                </Button>
            </Tooltip>
        `,
    }),
};
