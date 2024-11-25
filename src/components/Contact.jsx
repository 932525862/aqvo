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
    { label: "Mahsulot", value: "Mahsulot" },
    { label: "Franshiza", value: "Franshiza" },
  ];
  return (
    <section className="bg-[#e03636] pt-[100px] pb-[50px]">
      <div className="container f ">
        <div className="flex justify-between lg:flex-row flex-col ">
          <div className="max-w-full lg:max-w-[500px] text-[#fff]">
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
            <div className="flex gap-4 w-full">
              <div className="w-full">
                <InputField
                  name="firstName"
                  placeholder="Ismingiz"
                  type="text"
                  control={control}
                  rules={{ required: "Ismni kiriting" }}
                />
                {errors.firstName && (
                  <p className="text-black text-[13px] mt-[2px]">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <InputField
                  name="lastName"
                  placeholder="Familiyangiz"
                  type="text"
                  control={control}
                  rules={{ required: "Familiya kiriting" }}
                />
                {errors.lastName && (
                  <p className="text-black text-[13px] mt-[2px]">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <InputField
                  name="phoneNumber"
                  placeholder="Telefon raqamingiz"
                  type="tel"
                  control={control}
                  rules={{ required: "Telefon raqam kiriting" }}
                />
                {errors.phoneNumber && (
                  <p className="text-black text-[13px] mt-[2px]">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <InputField
                  name="telegramUsername"
                  placeholder="Telegram username"
                  type="text"
                  control={control}
                  rules={{ required: "Telegram useename kiriting" }}
                />
                {errors.telegramUsername && (
                  <p className="text-black text-[13px] mt-[2px]">
                    {errors.telegramUsername.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4 flex-col ss:flex-row">
              <div className="w-full">
                <InputField
                  name="region"
                  placeholder="Hudud"
                  type="select"
                  control={control}
                  rules={{ required: "Hududingizni kiriting" }}
                ></InputField>
                {errors.region && (
                  <p className="text-black text-[13px] mt-[2px]">
                    {errors.region.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <FormSelect
                  name="service"
                  placeholder="Xizmat turini tanlang"
                  control={control}
                  options={regionOptions}
                  rules={{ required: "Select" }}
                />
                {errors.select && (
                  <p className="text-black text-[13px] mt-[2px]">
                    {errors.select.message}
                  </p>
                )}
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
              className="w-full py-2 mt-4 bg-[#d1ab7d] font-medium text-white rounded-md"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
