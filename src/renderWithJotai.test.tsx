import { screen } from "@testing-library/react";
import { atom, useAtom } from "jotai";
import React from "react";
import { renderWithJotai } from "./renderWithJotai";

const countAtom = atom(0);

const Display = () => {
  const [count] = useAtom(countAtom);
  return <div>Count: {count}</div>;
};

test("renders default atom value", () => {
  renderWithJotai(<Display />);
  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test("renders set atom value", () => {
  renderWithJotai(<Display />, { initialValues: [[countAtom, 7]] });
  expect(screen.getByText("Count: 7")).toBeInTheDocument();
});
