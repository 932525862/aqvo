import { useForm } from "react-hook-form";
import InputField from "./InputFielad";
import FormSelect from "./FormSelect";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TOKEN = "7160474181:AAH3gUma-7m7XvwY0AYTbcKFaXjWLJ2MmUg";
const CHAT_ID = 467533539;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const Form = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({defaultValues: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    telegramUsername: "",
    region: "",
    service: "",
    message: "",
  },});

  const onSubmit = async (data) => {
    setLoading(true);

    const message = resetMessage(data);

    let response = await axios.post(TELEGRAM_API_URL, {
      chat_id: CHAT_ID,
      text: message,
    });

    if (response?.data?.ok) {
      toast.success("Success!");
      setLoading(false);
      reset();
    } else {
      toast.error("Error!");
      setLoading(false);
    }

  };

  const resetMessage = (data) => {
    let fullName =
      data?.firstName || data?.lastName
        ? `👤 F.I: ${data?.firstName} ${data?.lastName}`
        : "";

    let phone = data?.phoneNumber ? `\n📞 Telefon: ${data?.phoneNumber}` : "";

    let address = data?.region ? `\n🏠 Manzil: ${data?.region}` : "";

    let telegram = data?.telegramUsername ? `\n💬 Telegram: ${data?.telegramUsername}` : "";

    let service = data?.service ? `\n🛠 Xizmat turi: ${data?.service}` : "";

    let xabar = data?.message ? `\n📝 Izoh: ${data?.message}` : "";

    let message = fullName + phone + address + telegram  + service + xabar;

    return message;
  };

  const regionOptions = [
    { label: "Mahsulot", value: "Mahsulot" },
    { label: "Franshiza", value: "Franshiza" },
  ];

  return (
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
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.firstName?.message}
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
          {errors?.lastName && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.lastName?.message}
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
          {errors?.phoneNumber && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.phoneNumber?.message}
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
          {errors?.telegramUsername && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.telegramUsername?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-4 flex-col ss:flex-row">
        <div className="w-full">
          <InputField
            name="region"
            placeholder="Hudud"
            control={control}
            rules={{ required: "Hududingizni kiriting" }}
          ></InputField>
          {errors?.region && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.region?.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <FormSelect
            name="service"
            placeholder="Xizmat turini tanlang"
            control={control}
            options={regionOptions}
            rules={{ required: "Xizmat turini tanlang" }}
          />
          {errors?.service && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.service?.message}
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
        disabled={loading}
        className="w-full py-2 mt-4 bg-[#e67e22] font-medium text-white rounded-md"
      >
        {loading ? "Yuborish..." : "Yuborish"}
      </button>
    </form>
  );
};

export default Form;
