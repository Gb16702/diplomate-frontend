import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from "@storybook/test";
import Checkbox from "@/components/atoms/checkbox/Checkbox.vue";

const meta: Meta<typeof Checkbox> = {
    title: "Atoms/Checkbox/Tests",
    component: Checkbox,
    tags: ["test"],
    parameters: {
        layout: "centered",
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

export const BasicInteraction: Story = {
    args: {
        id: "checkbox-basic",
        modelValue: false,
        disabled: false,
        ariaLabel: "Basic checkbox test",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const checkbox = canvas.getByRole("checkbox");

        await expect(checkbox).not.toBeChecked();

        const labelElement = canvasElement.querySelector("label");
        if (labelElement) {
            await userEvent.click(labelElement);
        }
        await expect(checkbox).toBeChecked();

        if (labelElement) {
            await userEvent.click(labelElement);
        }
        await expect(checkbox).not.toBeChecked();
    },
};

export const KeyboardNavigation: Story = {
    args: {
        id: "checkbox-keyboard",
        modelValue: false,
        disabled: false,
        ariaLabel: "Keyboard navigation test",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const checkbox = canvas.getByRole("checkbox");

        await userEvent.tab();
        await expect(checkbox).toHaveFocus();

        await userEvent.keyboard(" ");
        await expect(checkbox).toBeChecked();

        await userEvent.keyboard(" ");
        await expect(checkbox).not.toBeChecked();

        await userEvent.tab();
        await expect(checkbox).not.toHaveFocus();
    },
};

export const AccessibilityAttributes: Story = {
    args: {
        id: "checkbox-a11y",
        modelValue: false,
        disabled: false,
        ariaLabel: "Accessibility test checkbox",
        ariaDescribedBy: "checkbox-description",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const checkbox = canvas.getByRole("checkbox");

        await expect(checkbox).toHaveAttribute("id", "checkbox-a11y");
        await expect(checkbox).toHaveAttribute("aria-label", "Accessibility test checkbox");
        await expect(checkbox).toHaveAttribute("aria-describedby", "checkbox-description");
        await expect(checkbox).toHaveAttribute("type", "checkbox");

        const labelElement = canvasElement.querySelector("label");
        if (labelElement) {
            await expect(labelElement).toHaveAttribute("for", "checkbox-a11y");
        }
    },
};
