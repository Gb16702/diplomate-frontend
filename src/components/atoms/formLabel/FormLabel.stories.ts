import type { Meta, StoryObj } from "@storybook/vue3-vite";
import FormLabel from "./FormLabel.vue";

const meta = {
    title: "Atoms/Label",
    component: FormLabel,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Form Label",
            },
        },
    },
} satisfies Meta<typeof FormLabel>;

export default meta;

export const Base = {
    argTypes: {
        required: {
            control: "boolean",
            description: "Whether the label is required or not",
        },
        inputId: {
            control: "text",
            description: "What input is this label linked to ?",
        },
        default: {
            control: "text",
            description: "Label text content",
        },
    },
    args: {
        required: false,
        inputId: "username",
        default: "Username",
    },
    render: (args) => ({
        components: { FormLabel },
        setup() {
            return { args };
        },
        template: `
            <FormLabel :required="args.required" :input-id="args.inputId">
                {{ args.default }}
            </FormLabel>
        `,
    }),
} satisfies StoryObj<typeof FormLabel>;
