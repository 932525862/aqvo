import React, { useState, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { GrFormPrevious } from "react-icons/gr";

const FormSelect = ({ name, label, control, options, rules, placeholder}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const selectRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={selectRef} className="relative w-full">
      <label htmlFor={name} className="text-black">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <div
              className="w-full text-[14px] ss:text-[16px] mt-2 p-2 pl-0 ss:pl-2 bg-transparent text-black border-b border-black cursor-pointer flex items-center justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption || placeholder}
              <GrFormPrevious
                className={`${isOpen ? "rotate-90" : "-rotate-90"}`}
              />
            </div>
            {isOpen && (
              <ul className="absolute w-full mt-2 bg-white border border-black rounded-md shadow-lg z-10">
                {options.map((option) => (
                  <li
                    key={option.value}
                    className="p-2 hover:bg-gray-200 cursor-pointer rounded-md text-[14px] ss:text-[16px]"
                    onClick={() => {
                      setSelectedOption(option.label);
                      setIsOpen(false);
                      field.onChange(option.value); // react-hook-form qiymatini o'zgartirish
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      />
    </div>
  );
};

export default FormSelect;
