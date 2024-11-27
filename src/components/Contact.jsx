import Form from "./Form";

const Contact = () => {
  return (
    <section className="bg-[#fff] pt-[50px] sm:pt-[100px] pb-[50px]">
      <div className="container f ">
        <div className="flex justify-between lg:flex-row flex-col ">
          <div className="max-w-full lg:max-w-[500px] text-black">
            <h3 className="oswald text-[32px] uppercase font-semibold mb-[10px]">
              "AQVO" bilan yangicha ta’mni his eting.
            </h3>
            <p className="text-[15px]">
              Aqvo brendi sizni yangi ta'mlarni kashf etishga taklif qiladi.
              Bizning mahsulotlarimiz har bir iste’molchiga sifatli va
              innovatsion yondashuv orqali yangi, o‘ziga xos ta’mni taqdim
              etadi. Aqvo – bu nafaqat ta’m, balki sog‘lom va halol mahsulotlar
              bilan yangi tajribani his qilish imkoniyati. Yangi ta’mni biz
              bilan birga kashf eting va haqiqiy sifatni his eting!
            </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
