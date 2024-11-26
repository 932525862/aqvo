import Form from "./Form";

const Contact = () => {
  
  return (
    <section className="bg-[#e03636] pt-[50px] sm:pt-[100px] pb-[50px]">
      <div className="container f ">
        <div className="flex justify-between lg:flex-row flex-col ">
          <div className="max-w-full lg:max-w-[500px] text-[#fff]">
            <h3 className="oswald text-[32px] uppercase font-semibold mb-[10px]">
            Biz bilan bog‘laning
            </h3>
            <p className="text-[15px]">
            Sizda savollar yoki takliflar bormi? Biz har doim mijozlarimiz
              bilan aloqada bo‘lishga tayyormiz. Quyidagi shaklni to‘ldirib,
              bizga murojaat qilishingiz mumkin.
            </p>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
