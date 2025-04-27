# jotai-test-utils

JotaiベースのReactアプリケーションに対するテストを簡単にするためのユーティリティ集です。

## インストール

```bash
npm add -D jotai-test-utils
```

## 使い方

```tsx
import { renderWithJotai } from 'jotai-test-utils';
import { atom, useAtomValue } from 'jotai';

const countAtom = atom(0);

const CountDisplay = () => {
  const count = useAtomValue(countAtom);
  return <div>{count}</div>;
};

test('renders with initial value', () => {
  const { getByText } = renderWithJotai(<CountDisplay />, {
    initialValues: [[countAtom, 10]],
  });

  expect(getByText('10')).toBeInTheDocument();
});
```

## ライセンス

MIT
