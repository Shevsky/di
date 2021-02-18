import { Provider } from 'provider';

/** @internal */
export const TARGET_SYMBOL = Symbol('di-target');

export function Target<T>(provider: Provider): (target: T) => void {
  return (target: T): void => {
    const descriptor = {
      get(): Provider {
        return provider;
      }
    };

    Object.defineProperty(target, TARGET_SYMBOL, descriptor);
  };
}
