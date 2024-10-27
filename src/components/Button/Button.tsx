import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  className?: string;
}

const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-black p-2 bg-white text-black duration-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
