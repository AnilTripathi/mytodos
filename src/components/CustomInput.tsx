import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

const CustomInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
    />
  );
});

export default CustomInput;