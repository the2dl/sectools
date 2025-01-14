import { toast as sonnerToast } from 'sonner';

export interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

export function useToast() {
  return {
    toast: ({ title, description, variant }: ToastProps) => {
      sonnerToast[variant === 'destructive' ? 'error' : 'success'](title, {
        description,
      });
    },
  };
}