/** Allows an iterator to be used within a for loop to continue the iteration */
export function cont<T>(it: Iterator<T>) {
  return { [Symbol.iterator]() { return it } }
}

export function* groupedUntilChanged<X>(xs: Iterable<X>, equals: (a: X, b: X) => boolean = (a, b) => a === b): IterableIterator<X[]> {
  const it = xs[Symbol.iterator]();
  const { done, value: initial } = it.next();
  if (done) return;

  let group: X[] = [initial];
  let prev = initial;

  for (const x of cont(it)) {
    if (equals(x, prev)) {
      group.push(x);
    } else {
      yield group;
      group = [x];
    }
    prev = x;
  }

  yield group
}

export function first<X>(xs: Iterable<X>) {
  for (const x of xs) return x;
}

export function* takeWhile<X>(xs: Iterable<X>, f: (x: X) => boolean) {
  for (const x of xs) {
    if (f(x)) yield x;
    else break;
  }
}