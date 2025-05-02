import { toast } from 'react-hot-toast';

/**
 * useToast-Hook: Einfache Wrapper für react-hot-toast.
 * Bietet success, error und info für konsistente UI-Feedbacks.
 */
export function useToast() {
  return {
    success: (msg) => toast.success(msg),
    error:   (msg) => toast.error(msg),
    info:    (msg) => toast(msg),
  };
}
