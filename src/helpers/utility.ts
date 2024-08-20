type Func = (...args: unknown[]) => void;

// Helper function for debouncing
export function debounce(func: Func, wait: number) {
  let timeout: number;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}