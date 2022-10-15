/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

type ButtonProps = {
  children: string | JSX.Element;
  disabled?: boolean | null | undefined;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  type,
  className,
  onClick,
}) => (
  <button
    type={type ? 'submit' : 'button'}
    className={className}
    // disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  disabled: false,
  type: 'submit',
  className: 'form__button',
  onClick: () => {},
};

export default Button;
