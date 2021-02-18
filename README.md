# Simple dependency injection for classes via decorators

## Example

```typescript
import { Autowired, Inject, Injectable } from '@shevsky/di';

@Injectable
class Foo {
  @Inject('123')
  value: string;
  
  getValue(): string {
    return this.value;
  }
}

class Bar {
  @Autowired
  readonly foo: Foo;
  
  getFooValue(): string {
    return this.foo.getValue();
  }
}

console.log(new Bar().getFooValue()); // '123'
```

## Usage with functions

```typescript
import { provider, Inject, Injectable } from '@shevsky/di';

@Injectable
class Foo {
  @Inject('123')
  value: string;

  getValue(): string {
    return this.value;
  }
}

function getFooValue(): string {
  return provider.resolveDependency(Foo).getValue();
}

console.log(getFooValue()); // '123'
```

## With custom provider

```typescript
import { Autowired, Provider, Target, Inject, Injectable } from '@shevsky/di';

const customProvider = new Provider();
const anotherCustomProvider = new Provider();

@Injectable
@Target(customProvider)
class FooCustomProvided {

}

@Injectable
@Target(anotherCustomProvider)
class FooAnotherCustomProvided {

}

@Target(customProvider)
class BarCustomProvided {
  @Autowired
  foo: FooCustomProvided;
}

@Target(anotherCustomProvider)
class BarAnotherCustomProvided {
  @Autowired
  foo: FooAnotherCustomProvided;
}

console.log(customProvider.getDependencies()); // [instanceof FooCustomProvided]
console.log(anotherCustomProvider.getDependencies()); // [instanceof FooAnotherCustomProvided]
```