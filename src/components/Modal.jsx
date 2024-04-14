/* eslint-disable react/prop-types */
const Modal = ({ children, show }) => {
  return (
    <>
      {show && (
        <div className="absolute h-full w-full backdrop-blur-sm bg-white/30 left-0 top-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
