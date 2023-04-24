import React, { ChangeEventHandler } from 'react';

interface InputProps {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className="
            block
            rounded-md
            p-6
            pb-2
            w-full
            text-md
            text-white
            bg-neutral-700
            appearence-none
            focus:outline-none
            focus:ring-0
            peer
        "
        placeholder=" "
      />
      <label
        className="
            absolute
            text-md
            text-zinc-400
            duration-150
            transform
            -traslate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
