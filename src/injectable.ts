import { Provider } from 'provider';
import { provider } from 'provider.default';
import { TARGET_SYMBOL } from 'target';

export function Injectable<T>(target: new (...args: Array<unknown>) => T): void {
  ((target[TARGET_SYMBOL] as Provider) ?? provider).registerDependency(target, new target());
}
