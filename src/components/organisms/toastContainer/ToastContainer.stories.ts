import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ToastContainer from "./ToastContainer.vue";
import Button from "@/components/atoms/button/Button.vue";
import { useToast } from "@/composables/useToast";

const meta = {
    title: "Organisms/ToastContainer",
    component: ToastContainer,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Toast container for displaying toasts",
            },
        },
    },
    argTypes: {
        position: {
            control: "select",
            options: ["top-left", "top-right", "bottom-left", "bottom-right"],
            description: "Position of the toast container",
        },
    },
    args: {
        position: "bottom-right",
    },
} satisfies Meta<typeof ToastContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Short: Story = {
    decorators: [
        () => ({
            components: { Button },
            setup() {
                const { success } = useToast();

                const showSuccess = () => {
                    success("Settings saved");
                };

                return { showSuccess };
            },
            template: `
                <div>
                    <div style="margin: 20px; display: flex; column-gap: 12px">
                        <Button
                            color="primary"
                            variant="contained"
                            @click="showSuccess"
                        >
                            Show Short Toast
                        </Button>
                    </div>
                    <story />
                </div>
            `,
        }),
    ],
};

export const Descriptive: Story = {
    decorators: [
        () => ({
            components: { Button },
            setup() {
                const { success } = useToast();

                const showSuccess = () => {
                    success("Settings saved", {
                        description: "Your settings have been saved successfully",
                        type: "descriptive",
                    });
                };

                return { showSuccess };
            },
            template: `
                <div>
                    <div style="margin: 20px; display: flex; column-gap: 12px">
                        <Button
                            color="primary"
                            variant="contained"
                            @click="showSuccess"
                        >
                            Show Descriptive Toast
                        </Button>
                    </div>
                    <story />
                </div>
            `,
        }),
    ],
};

export const ShortAction: Story = {
    decorators: [
        () => ({
            components: { Button },
            setup() {
                const { success } = useToast();

                const showSuccess = () => {
                    success("File uploaded successfully", {
                        type: "action",
                        actionLabel: "Open",
                    });
                };

                return { showSuccess };
            },
            template: `
                <div>
                    <div style="margin: 20px; display: flex; column-gap: 12px">
                        <Button
                            color="primary"
                            variant="contained"
                            @click="showSuccess"
                        >
                            Show Short Action Toast
                        </Button>
                    </div>
                    <story />
                </div>
            `,
        }),
    ],
};

export const DescriptiveAction: Story = {
    decorators: [
        () => ({
            components: { Button },
            setup() {
                const { success } = useToast();

                const showSuccess = () => {
                    success("File uploaded successfully", {
                        description: "Your document has been saved to the cloud",
                        type: "action",
                        actionLabel: "Open",
                    });
                };

                return { showSuccess };
            },
            template: `
                <div>
                    <div style="margin: 20px; display: flex; column-gap: 12px">
                        <Button
                            color="primary"
                            variant="contained"
                            @click="showSuccess"
                        >
                            Show Descriptive Action Toast
                        </Button>
                    </div>
                    <story />
                </div>
            `,
        }),
    ],
};

export const ActionShortError: Story = {
    decorators: [
        () => ({
            components: { Button },
            setup() {
                const { error } = useToast();

                const showError = () => {
                    error("Uh oh! Something went wrong.", {
                        type: "action",
                        actionLabel: "Try again",
                    });
                };

                return { showError };
            },
            template: `
                <div>
                    <div style="margin: 20px; display: flex; column-gap: 12px">
                        <Button
                            color="primary"
                            variant="contained"
                            @click="showError"
                        >
                            Show Short Action Error Toast
                        </Button>
                    </div>
                    <story />
                </div>
            `,
        }),
    ],
};

export const ActionDescriptiveError: Story = {
    decorators: [
        () => ({
            components: { Button },
            setup() {
                const { error } = useToast();

                const showError = () => {
                    error("Uh oh! Something went wrong.", {
                        description: "There was a problem with your request.",
                        type: "action",
                        actionLabel: "Try again",
                    });
                };

                return { showError };
            },
            template: `
                <div>
                    <div style="margin: 20px; display: flex; column-gap: 12px">
                        <Button
                            color="primary"
                            variant="contained"
                            @click="showError"
                        >
                            Show Descriptive Action Error Toast
                        </Button>
                    </div>
                    <story />
                </div>
            `,
        }),
    ],
};
