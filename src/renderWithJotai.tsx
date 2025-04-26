import { render } from "@testing-library/react";
import { Provider } from "jotai";
import type { ReactElement } from "react";
import { createJotaiStore, type InitialValues } from ".";

export const renderWithJotai = (
  ui: ReactElement,
  options: { initialValues?: InitialValues } = {},
) => {
  const store = createJotaiStore(options.initialValues ?? []);
  const result = render(<Provider store={store}>{ui}</Provider>);
  return { ...result, store };
};
