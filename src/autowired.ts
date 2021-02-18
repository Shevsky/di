import 'reflect-metadata';
import { Provider } from './provider';
import { provider } from './provider.default';
import { TARGET_SYMBOL } from './target';

export function Autowired<T>(target: T, propertyKey: string): void {
  const constructor = Reflect.getMetadata('design:type', target, propertyKey);

  Object.defineProperty(target, propertyKey, {
    get(): unknown {
      return ((target[TARGET_SYMBOL] as Provider) ?? provider).resolveDependency(constructor);
    }
  });
}
