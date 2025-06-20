import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from "@storybook/test";
import FormTextArea from "./FormTextArea.vue";

const meta: Meta<typeof FormTextArea> = {
    title: "Molecules/FormTextArea/Tests",
    component: FormTextArea,
    tags: ["test"],
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

export const BasicInteraction: Story = {
    args: {
        placeholder: "Write your opening...",
        maxLength: 200,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const textarea = canvas.getByRole("textbox");

        await expect(textarea).toHaveAttribute("placeholder", "Write your opening...");
        await userEvent.type(textarea, "Hello");
        await expect(textarea).toHaveValue("Hello");

        const remaining = 200 - "Hello".length;
        await expect(canvas.getByText(remaining.toString())).toBeInTheDocument();
    },
};

export const CharacterLimit: Story = {
    args: {
        placeholder: "Write your opening...",
        maxLength: 50,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const textarea = canvas.getByRole("textbox");

        const nearLimitText = "a".repeat(45);
        await userEvent.type(textarea, nearLimitText);
        await expect(textarea).toHaveValue(nearLimitText);
        await expect(canvas.getByText("5")).toBeInTheDocument();

        await userEvent.type(textarea, "123456");
        await expect(textarea).toHaveValue("a".repeat(45) + "12345");
        await expect(canvas.getByText("0")).toBeInTheDocument();
    },
};

export const ClearAndRetype: Story = {
    args: {
        placeholder: "Write your opening...",
        maxLength: 100,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const textarea = canvas.getByRole("textbox");

        await userEvent.type(textarea, "Initial content");
        await expect(textarea).toHaveValue("Initial content");

        await userEvent.clear(textarea);
        await userEvent.type(textarea, "New content");
        await expect(textarea).toHaveValue("New content");

        const remaining = 100 - "New content".length;
        await expect(canvas.getByText(remaining.toString())).toBeInTheDocument();
    },
};

export const KeyboardNavigation: Story = {
    args: {
        placeholder: "Write your opening...",
        maxLength: 200,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const textarea = canvas.getByRole("textbox");

        await userEvent.tab();
        await expect(textarea).toHaveFocus();

        await userEvent.keyboard("Hello from keyboard!");
        await expect(textarea).toHaveValue("Hello from keyboard!");

        await userEvent.tab();
        await expect(textarea).not.toHaveFocus();
    },
};

export const AccessibilityAttributes: Story = {
    args: {
        placeholder: "Accessible textarea",
        maxLength: 150,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const textarea = canvas.getByRole("textbox");

        await expect(textarea).toHaveAttribute("maxlength", "150");
        await expect(textarea).toHaveAttribute("spellcheck", "false");
        await expect(textarea).toHaveAttribute("placeholder", "Accessible textarea");

        await userEvent.type(textarea, "Test content");
        const remaining = 150 - "Test content".length;
        const counter = canvas.getByText(remaining.toString());
        await expect(counter).toBeInTheDocument();
    },
};

export const FocusStates: Story = {
    args: {
        placeholder: "Focus test...",
        maxLength: 200,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const textarea = canvas.getByRole("textbox");

        await expect(textarea).not.toHaveFocus();

        await userEvent.click(textarea);
        await expect(textarea).toHaveFocus();

        await userEvent.tab();
        await expect(textarea).not.toHaveFocus();
    },
};
