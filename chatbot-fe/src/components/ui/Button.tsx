interface ButtonProps {
  onClick: () => void;
  text: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}

const sizeStyles = {
  sm: "p-2 text-sm w-20",
  md: "p-3 text-base",
  lg: "p-4 text-lg",
};

const variantStyles = {
  primary: "bg-blue-500 text-white cursor-pointer",
  secondary: "bg-gray-500 text-white cursor-pointer",
};

export function Button({
  text,
  size = "md",
  variant = "primary",
  onClick,
}: ButtonProps) {
  const className = `${sizeStyles[size]} ${variantStyles[variant]} rounded`;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
