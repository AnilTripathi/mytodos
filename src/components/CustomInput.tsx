import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

const CustomInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <div className="col">
        <input ref={ref}  {...props} type="text" className="form-control" placeholder="Enter Todo" aria-label="todo"/>
    </div>
  );
});

export default CustomInput;