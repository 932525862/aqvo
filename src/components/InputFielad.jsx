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
              className="w-full p-2 p mt-2 text-[14px] ss:text-[16px] text-[#fff] resize-none bg-transparent border outline-none focus:outline-none rounded-md h-[120px] placeholder:text-[#fff]"
            />
          ) : (
            <input
              {...field}
              type={type}
              id={name}
              placeholder={placeholder}
              className="w-full pl-0 ss:pl-2 text-[14px] ss:text-[16px] p-2 mt-2 bg-transparent border-b outline-none focus:outline-none text-[#fff] placeholder:text-[#fff]"
            />
          )
        )}
      />
    </div>
  );
};

export default InputField;