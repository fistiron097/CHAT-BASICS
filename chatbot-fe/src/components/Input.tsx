import { forwardRef } from "react";

interface InputProps {
  type: string;
  onClick: () => void;
  placeholder: string;
}
//@ts-ignore
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, onClick, placeholder }, ref) => {
    return (
      <div>
        <input
          className="bg-neutral-500 h-full w-80 text-white"
          ref={ref}
          type={type}
          onClick={onClick}
          placeholder={placeholder}
        />
      </div>
    );
  }
);
