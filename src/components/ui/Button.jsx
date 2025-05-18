'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const variants = {
  primary: 'bg-purple-600 hover:bg-purple-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  outline: 'bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50',
  text: 'bg-transparent text-purple-600 hover:underline',
  ghost: 'bg-transparent text-purple-600 hover:bg-purple-50 hover:text-purple-700',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2.5 px-6 text-base',
  lg: 'py-3 px-8 text-lg',
};

export default function Button({
  children,
  className,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses = 'font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50';
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const classes = twMerge(baseClasses, variantClasses, sizeClasses, disabledClasses, className);

  // If href is provided, render as a Link
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise render as a button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
} 