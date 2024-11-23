import React, { useState, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";

const FormSelect = ({ name, label, control, options, rules }) => {
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
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <div
              className="w-full mt-2 p-2 bg-transparent text-[#fff] border-b cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption || "Tanlang"}
            </div>
            {isOpen && (
              <ul className="absolute w-full mt-2 bg-white rounded-md shadow-lg z-10">
                {options.map((option) => (
                  <li
                    key={option.value}
                    className="p-2 hover:bg-gray-200 cursor-pointer rounded-md"
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