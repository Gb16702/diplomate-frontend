import { ref, type Ref } from "vue";
import type { ToastProps } from "@/components/molecules/toast/Toast.vue";

export interface Toast extends Omit<ToastProps, "visible"> {
    id: number;
    duration: number;
    visible: boolean;
}

export interface ToastOptions extends Partial<Omit<ToastProps, "title" | "visible">> {
    duration?: number;
}

const toasts: Ref<Toast[]> = ref([]);
let toastId = 0;

export const useToast = () => {
    const addToast = (title: string, options: ToastOptions = {}): number => {
        const id = ++toastId;
        const toast: Toast = {
            id,
            title,
            description: options.description,
            type: options.type ?? "short",
            variant: options.variant ?? "info",
            actionLabel: options.actionLabel,
            duration: options.duration ?? 4000,
            visible: true,
        };

        toasts.value.push(toast);
        if (toast.duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, toast.duration);
        }

        return id;
    };

    const removeToast = (id: number): void => {
        const index = toasts.value.findIndex(toast => toast.id === id);
        if (index > -1) {
            toasts.value[index].visible = false;
            setTimeout(() => {
                const currentIndex = toasts.value.findIndex(toast => toast.id === id);
                if (currentIndex > -1) {
                    toasts.value.splice(currentIndex, 1);
                }
            }, 300);
        }
    };

    const clearAll = (): void => {
        toasts.value.forEach(toast => (toast.visible = false));
        setTimeout(() => {
            toasts.value.length = 0;
        }, 300);
    };

    const success = (title: string, options: Omit<ToastOptions, "variant"> = {}): number => {
        return addToast(title, { ...options, variant: "info" });
    };

    const error = (title: string, options: Omit<ToastOptions, "variant"> = {}): number => {
        return addToast(title, { ...options, variant: "error" });
    };

    return {
        addToast,
        removeToast,
        clearAll,
        success,
        error,
        toasts,
    };
};
