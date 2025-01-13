import { Observer } from "rxjs";

export type Suscription = Partial<Observer<Object>> | ((value: Object) => void) | undefined 