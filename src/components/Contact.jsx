import Form from "./Form";
import backgroundImage from "../assets/img2/hhhmmm4.jpg";
const Contact = () => {
  
  return (
    <section className="bg-[#e03636] pt-[50px] sm:pt-[100px] pb-[50px]">
		<div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      ></div>
      <div className="container f ">
        <div className="flex justify-between lg:flex-row flex-col ">
          <div className="max-w-full lg:max-w-[500px] text-[#fff]">
            <h3 className="oswald text-[32px] uppercase font-semibold mb-[10px]">
			"AQVO" bilan yangicha ta’mni his eting.
            </h3>
            <p className="text-[15px]">
			Aqvo brendi sizni yangi ta'mlarni kashf etishga taklif qiladi. Bizning mahsulotlarimiz har bir iste’molchiga sifatli va innovatsion yondashuv orqali yangi, o‘ziga xos ta’mni taqdim etadi. Aqvo – bu nafaqat ta’m, balki sog‘lom va halol mahsulotlar bilan yangi tajribani his qilish imkoniyati. Yangi ta’mni biz bilan birga kashf eting va haqiqiy sifatni his eting!
            </p>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
