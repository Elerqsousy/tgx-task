import { FC } from 'react';

import { cn } from '@/utils/tw-clsx';

type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  startIcon?: JSX.Element | string;
  endIcon?: JSX.Element | string;
  text: JSX.Element | string;
};

const Button: FC<ButtonProps> = ({
  className,
  startIcon,
  endIcon,
  text,
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'px-3 py-1 rounded-lg border-gray-600',
        'border disabled:opacity-30 text-sm sm:text-base',
        'flex items-center gap-1',
        className
      )}
    >
      {!!startIcon && startIcon}
      {text}
      {!!endIcon && endIcon}
    </button>
  );
};

export default Button;
