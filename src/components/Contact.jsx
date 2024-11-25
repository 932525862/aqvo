import Form from "./Form";

const Contact = () => {
  
  return (
    <section className="bg-[#e03636] pt-[50px] sm:pt-[100px] pb-[50px]">
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
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
