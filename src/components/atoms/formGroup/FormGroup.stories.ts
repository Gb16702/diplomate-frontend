import type { Meta, StoryObj } from "@storybook/vue3-vite";
import FormGroup from "./FormGroup.vue";
import FormInput from "../../molecules/formInput/FormInput.vue";
import FormLabel from "../../atoms/formLabel/FormLabel.vue";
import HelperText from "../../atoms/helperText/HelperText.vue";

const meta = {
    title: "Atoms/FormGroup",
    component: FormGroup,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "A flexible wrapper used to group form elements.",
            },
        },
    },
    decorators: [
        () => ({
            template: `
                <div class="form-group-wrapper">
                    <story />
                </div>
            `,
        }),
    ],
} satisfies Meta<typeof FormGroup>;

export default meta;

export const Default = {
    render: () => ({
        components: { FormGroup, FormLabel, FormInput },
        template: `
            <FormGroup>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <FormInput id="email" type="text" placeholder="you@example.com" />
            </FormGroup>
        `,
    }),
} satisfies StoryObj<typeof FormGroup>;

export const WithHelperText = {
    render: () => ({
        components: { FormGroup, FormLabel, FormInput, HelperText },
        template: `
            <FormGroup>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <FormInput id="email" type="email" placeholder="you@example.com" />
                <HelperText>We'll only use this for spam</HelperText>
            </FormGroup>
        `,
    }),
} satisfies StoryObj<typeof FormGroup>;

export const RequiredWithHelperText = {
    render: () => ({
        components: { FormGroup, FormLabel, FormInput, HelperText },
        template: `
            <FormGroup>
                <FormLabel htmlFor="password" required>Create a Password</FormLabel>
                <FormInput id="password" type="password" placeholder="••••••••" />
                <HelperText>Must be at least 8 characters</HelperText>
            </FormGroup>
        `,
    }),
} satisfies StoryObj<typeof FormGroup>;
