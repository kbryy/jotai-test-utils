import { render } from "@testing-library/react";
import { Provider } from "jotai";
import { createJotaiStore, type InitialValues } from ".";
import type { RenderResult } from "@testing-library/react";
import type { ReactElement } from "react";

type RenderWithJotaiResult = RenderResult & {
  store: ReturnType<typeof createJotaiStore>;
};

export const renderWithJotai = (
  ui: ReactElement,
  options: { initialValues?: InitialValues } = {},
): RenderWithJotaiResult => {
  const store = createJotaiStore(options.initialValues ?? []);
  const result = render(<Provider store={store}>{ui}</Provider>);
  return { ...result, store };
};
