import { render } from "@testing-library/react";
import { RenderResult } from "@testing-library/react";
import { Provider } from "jotai";
import { ReactElement } from "react";
import { InitialValues, createJotaiStore } from ".";

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
