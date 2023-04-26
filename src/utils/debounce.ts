export const debounceSearchQuery = (callback: () => void, delay: number) => {
  let timerId: NodeJS.Timeout | null = null;
  
  const cancel = () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  const execute = () => {
    cancel();
    timerId = setTimeout(() => {
      callback();
    }, delay);
  };

  return {
    cancel,
    execute,
  };
}
