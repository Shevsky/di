export class Provider<T = unknown> {
  private readonly buffer: Map<new (...args: Array<unknown>) => T, T> = new Map<
    new (...args: Array<unknown>) => T,
    T
  >();

  registerDependency(dependency: new (...args: Array<unknown>) => T, implementation: T): void {
    this.buffer.set(dependency, implementation);
  }

  resolveDependency<S = T>(dependency: new (...args: Array<unknown>) => T): S {
    return (this.buffer.get(dependency) as unknown) as S;
  }

  getDependencies(): Array<T> {
    return [...this.buffer.values()];
  }
}
