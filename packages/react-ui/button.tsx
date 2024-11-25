import React from 'react';
import type { ReactNode } from 'react';

const delay = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

interface Props {
  children: ReactNode;
}

export const Button = (props: Props): ReactNode => {
  const { children } = props;
  const [tmp, setTmp] = React.useState(0);

  const [isPending, startTransition] = React.useTransition();
  console.log(isPending);

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await delay(5000);
          setTmp((prev) => prev + 1);
        });
      }}
    >
      <span>{children}</span>
      <span>{tmp}</span>
      <span style={{ fontSize: '20px', lineHeight: 1 }}>&reg;</span>
    </button>
  );
};

export default Button;
