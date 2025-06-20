import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from '@storybook/test';
import FormInput from "./FormInput.vue";

const meta: Meta<typeof FormInput> = {
    title: "Molecules/FormInput/Tests",
    component: FormInput,
    tags: ["test"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        id: {
            control: "text",
            description: "Label content",
        },
        type: {
            control: "select",
            options: ["text", "email", "password"],
            description: "Input type",
        },
        placeholder: {
            control: "text",
            description: "Input placeholder",
        },
        isDisabled: {
            control: "boolean",
            description: "Whether the input is disabled or not",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
    args: {
        id: "username",
        type: "text",
        placeholder: "Enter your username",
        isDisabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox');

        await expect(input).toHaveAttribute("placeholder", "Enter your username");

        await userEvent.type(input, "john");
        await expect(input).toHaveValue("john");

        await expect(input).toHaveAttribute("id", "username");
        await expect(input).toHaveAttribute("name", "username");
        await expect(input).toHaveAttribute("type", "text");
    },
};

export const EmailInput: Story = {
    args: {
        id: "email",
        type: "email",
        placeholder: "socrates@gmail.com",
        isDisabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole("textbox");

        await expect(input).toHaveAttribute("type", "email");

        await userEvent.type(input, "test@example.com");
        await expect(input).toHaveValue("test@example.com");
    },
};

export const PasswordToggle: Story = {
    args: {
        id: "password",
        type: "password",
        placeholder: "Enter your password",
        isDisabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByPlaceholderText("Enter your password");
        const toggleButton = canvas.getByRole("button");

        await expect(input).toHaveAttribute("type", "password");

        await userEvent.type(input, "password");
        await expect(input).toHaveValue("password");

        await userEvent.click(toggleButton);
        await expect(input).toHaveAttribute("type", "text");

        await userEvent.click(toggleButton);
        await expect(input).toHaveAttribute("type", "password");
    },
};

export const ClearAndRetype: Story = {
    args: {
        id: "input-test",
        type: "text",
        placeholder: "Type something",
        isDisabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole("textbox");

        await userEvent.type(input, "Initial text");
        await expect(input).toHaveValue("Initial text");

        await userEvent.clear(input);
        await userEvent.type(input, "New text");
        await expect(input).toHaveValue("New text");
    },
};

export const KeyboardNavigation: Story = {
    args: {
        id: "keyboard-test",
        type: "text",
        placeholder: "Keyboard navigation test",
        isDisabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole("textbox");

        await userEvent.tab();
        await expect(input).toHaveFocus();

        await userEvent.keyboard("Hello keyboard!");
        await expect(input).toHaveValue("Hello keyboard!");

        await userEvent.tab();
        await expect(input).not.toHaveFocus();
    },
};

export const PasswordAccessibility: Story = {
    args: {
        id: "password-a11y",
        type: "password",
        placeholder: "Password accessibility test",
        isDisabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByPlaceholderText("Password accessibility test");
        const toggleButton = canvas.getByRole("button");

        await expect(toggleButton).toHaveAttribute("tabindex", "-1");

        await userEvent.type(input, "test123");
        await userEvent.click(toggleButton);
        await expect(input).toHaveAttribute("type", "text");

        await expect(input).toHaveValue("test123");
    },
};

export const DisabledState: Story = {
    args: {
        id: "disabled-test",
        type: "text",
        placeholder: "Disabled input",
        isDisabled: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole("textbox");

        await expect(input).toBeDisabled();
        await expect(input).toHaveAttribute("disabled");

        await userEvent.type(input, "Should not work");
        await expect(input).toHaveValue("");
    },
};

export const FocusStates: Story = {
    args: {
        id: "focus-test",
        type: "text",
        placeholder: "Focus test",
        isDisabled: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole("textbox");

        await expect(input).not.toHaveFocus();

        await userEvent.click(input);
        await expect(input).toHaveFocus();

        await userEvent.tab();
        await expect(input).not.toHaveFocus();

        await userEvent.tab();
        await expect(input).toHaveFocus();
    },
};
