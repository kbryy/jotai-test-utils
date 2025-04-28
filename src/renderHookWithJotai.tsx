import { renderHook } from "@testing-library/react";
import { Provider } from "jotai";
import { InitialValues, createJotaiStore } from ".";

export const renderHookWithJotai = <T,>(
  hook: () => T,
  options: { initialValues?: InitialValues } = {},
) => {
  const store = createJotaiStore(options.initialValues ?? []);
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  const result = renderHook(hook, { wrapper });
  return { ...result, store };
};
