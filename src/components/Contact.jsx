import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "./InputFielad";
import FormSelect from "./FormSelect";

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const regionOptions = [
    { label: 'Toshkent', value: 'Toshkent' },
    { label: 'Samarqand', value: 'Samarqand' },
    { label: 'Buxoro', value: 'Buxoro' },
  ];
  return (
    <section className="bg-[#e03636] pt-[100px] pb-[50px]">
      <div className="container flex justify-between">
        <div className="max-w-[500px] text-[#fff]">
          <h3 className="oswald text-[32px] uppercase font-semibold mb-[10px]">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            totam, quasi aut nisi temporibus animi consectetur assumenda ipsam
            doloribus perspiciatis! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Provident, rerum!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex gap-4">
            <div>
              <InputField
                name="firstName"
                placeholder="Ismingiz"
                type="text"
                control={control}
                rules={{ required: "Ismni kiriting" }}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <InputField
                name="lastName"
                placeholder="Familiyangiz"
                type="text"
                control={control}
                rules={{ required: "Familiya kiriting" }}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div>
            <InputField
              name="phoneNumber"
              placeholder="Telefon raqamingiz"
              type="tel"
              control={control}
              rules={{ required: "Telefon raqam kiriting" }}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
            </div>
            <div>
            <InputField
              name="telegramUsername"
              placeholder="Telegram username"
              type="text"
              control={control}
            />
            {errors.telegramUsername && (
              <p className="text-red-500">{errors.telegramUsername.message}</p>
            )}
            </div>
          </div>
          <div className="flex gap-4">
          <div className="w-full">
          <InputField
            name="region"
            placeholder="Hudud"
            type="select"
            control={control}
          >
          </InputField>
          </div>
            <div className="w-full">
            <FormSelect
            name="select"
            placeholder="Select"
            control={control}
            options={regionOptions}
            rules={{ required: "Select" }}
            />
            {errors.select && <p className="text-red-500">{errors.select.message}</p>}
            </div>

          </div>

          
          <InputField
            name="message"
            placeholder="Xabar"
            type="text"
            control={control}
            isTextArea
          />
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-orange-500 text-white rounded-md"
          >
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
