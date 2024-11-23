import React from 'react';
import { Controller } from 'react-hook-form';



const InputField= ({ name, label, type, control, rules, placeholder, isTextArea }) => {
  return (
    <div>
      <label htmlFor={name} className="text-white">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          isTextArea ? (
            <textarea
              {...field}
              id={name}
              placeholder={placeholder}
              className="w-full p-2 mt-2 text-[#fff]rounded-md resize-none bg-transparent border outline-none focus:outline-none rounded-md h-[120px]"
            />
          ) : (
            <input
              {...field}
              type={type}
              id={name}
              placeholder={placeholder}
              className="w-full p-2 mt-2 bg-transparent border-b outline-none focus:outline-none text-[#fff] "
            />
          )
        )}
      />
    </div>
  );
};

export default InputField;