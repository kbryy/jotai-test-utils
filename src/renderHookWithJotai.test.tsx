import { atom, useAtom } from "jotai";
import { renderHookWithJotai } from "./renderHookWithJotai";
import { act } from "react";

describe("renderHookWithJotai", () => {
  const countAtom = atom(0);
  const useTest = () => {
    const [count, setCount] = useAtom(countAtom);
    return { count, setCount };
  };

  test("初期値を渡してuseAtomが動作すること", () => {
    const { result } = renderHookWithJotai(() => useTest(), {
      initialValues: [[countAtom, 10]],
    });
    expect(result.current.count).toBe(10);
  });

  test("初期値を渡さない場合はデフォルト値を使う", () => {
    const { result } = renderHookWithJotai(() => useTest());
    expect(result.current.count).toBe(0);
  });

  test("storeを通じて値を更新できる", () => {
    const { result, store } = renderHookWithJotai(() => useTest());
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.setCount(5);
    });
    expect(store.get(countAtom)).toBe(5);
  });
});
