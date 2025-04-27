import type { PrimitiveAtom } from "jotai";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type InitialValues = Array<[PrimitiveAtom<any>, any]>;
