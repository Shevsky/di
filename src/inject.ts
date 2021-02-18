export function Inject<T, S>(value: T): PropertyDecorator {
  return (target: S, propertyKey: string): void => {
    Object.defineProperty(target, propertyKey, { value });
  };
}
