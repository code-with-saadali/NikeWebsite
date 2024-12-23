import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const Top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="z-[1000] fixed right-6 bottom-3">
      <button
        onClick={Top}
        className="cursor-pointer bg-gray-800 px-4 py-3 mobile:px-3 mobile:py-2 rounded-lg text-white tracking-wider shadow-xl animate-bounce hover:animate-none
         text-[20px] hover:bg-blue-950"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default BackToTop;
