import type { Meta, StoryObj } from "@storybook/vue3-vite"
import HelperText from "./HelperText.vue";

const meta = {
    title: "Atoms/HelperText",
    component: HelperText,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Helper text to display below an input for additional description"
            }
        }
    }
} satisfies Meta<typeof HelperText>

export default meta;

export const Base = {
    argTypes: {
        default: {
            control: "text",
            description: "HelperText content"
        }
    },

    args: {
        default: "We'll only use it for spam"
    }
} satisfies StoryObj<typeof HelperText>
