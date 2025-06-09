import type { Meta, StoryObj } from "@storybook/vue3-vite"
import Loader from "./Loader.vue";

const meta = {
    title: "Atoms/Loader",
    component: Loader,
    tags: ["autodocs"],
    argTypes: {
        stroke: {
            control: "color",
            description: "The color of the loader",
        }
    }
} satisfies Meta<typeof Loader>

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        stroke: "#000000",
    },
}
