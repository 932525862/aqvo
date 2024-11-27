import Form from "../Form";
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ isOpen, setIsOpen }) => {
  const closeModal = () => setIsOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[111] p-2"
          onClick={handleOutsideClick}
        >
          <div className="rounded shadow-md shadow-red-300 w-max bg-red-800 pt-10 pb-8 px-6 relative">
            <button
              onClick={closeModal}
              className="bg-dark-red text-[#fff] transition text-2xl hover:scale-105 absolute top-5 right-6"
            >
              <IoCloseCircleOutline />
            </button>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
