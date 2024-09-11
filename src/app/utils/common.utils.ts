var throttleTimer = false;

export function throttle(callback: any, timeout: number = 1000) {
  if (throttleTimer) {
    return;
  }

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, timeout);
}
