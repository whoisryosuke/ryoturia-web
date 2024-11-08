export const isApplePlatform = () => {
  if (typeof window === `undefined` || typeof navigator === `undefined`)
    return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};
