import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FormTextArea from './FormTextArea.vue'

const meta: Meta<typeof FormTextArea> = {
    title: 'Molecules/FormTextArea',
    component: FormTextArea,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        placeholder: {
            control: "text",
            description: "textarea placeholder"
        },
        maxLength: {
            control: "number"
        }
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'Write your opening...',
        maxLength: 200
    }
}
