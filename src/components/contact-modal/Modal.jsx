import Contact from "../Contact";

const Modal = ({isOpen, setIsOpen}) => {
  
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[111]"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded shadow-lg w-max">
            
            <Contact/>

            <button
              onClick={closeModal}
              className="bg-dark-red text-white px-4 py-2 rounded"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
