import { BehaviorSubject } from "rxjs";

const order$ = new BehaviorSubject(new Set());

export const orderService$ = {
  addProduct: (product) => {
    const currentValue = order$.value;

    if (currentValue.has(product)) {
      currentValue.delete(product);
    } else {
      currentValue.add(product);
    }
    order$.next(new Set(currentValue));
  },
  clearOrder: () => order$.next(new Set<any>()),
  getOrder: () => order$.asObservable(),
};
