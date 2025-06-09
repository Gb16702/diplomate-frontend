import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";

const meta = {
    title: "Atoms/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Customizable button with different variations and colors",
            },
        },
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["contained", "outlined", "text"],
            description: "Visual style of the button",
        },
        color: {
            control: "select",
            options: ["primary", "secondary"],
            description: "Color theme of the button",
        },
        type: {
            control: "select",
            options: ["button", "submit", "reset"],
            description: "HTML button type",
        },
        isLoading: {
            control: "boolean",
            description: "Loading state of the button",
        },
        isDisabled: {
            control: "boolean",
            description: "Disabled state of the button",
        },
        withShadow: {
            control: "boolean",
            description: "Add shadow to contained buttons",
        },
        onClick: {
            action: "clicked",
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        variant: "contained",
        color: "primary",
        type: "button",
        isLoading: false,
        isDisabled: false,
        withShadow: false,
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" @click="args.onClick">Sign Up</Button>',
    }),
};

export const Outlined: Story = {
    args: {
        ...Base.args,
        variant: "outlined",
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" @click="args.onClick">Sign Up</Button>',
    }),
};

export const Text: Story = {
    args: {
        ...Base.args,
        variant: "text",
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" @click="args.onClick">Sign Up</Button>',
    }),
};

export const Secondary: Story = {
    args: {
        ...Base.args,
        color: "secondary",
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" @click="args.onClick">Sign Up</Button>',
    }),
};

export const Loading: Story = {
    args: {
        ...Base.args,
        isLoading: true,
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" @click="args.onClick">Sign Up</Button>',
    }),
};

export const Disabled: Story = {
    args: {
        ...Base.args,
        isDisabled: true,
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" @click="args.onClick">Sign Up</Button>',
    }),
};

export const WithShadow: Story = {
    args: {
        ...Base.args,
        withShadow: true,
    },
    render: args => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" @click="args.onClick">Sign Up</Button>',
    }),
};
