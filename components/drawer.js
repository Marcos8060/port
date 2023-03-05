import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <>
      <main
        className={
          " fixed overflow-hidden z-10 bg-white bg-opacity-25 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            "right-0 w-full absolute bg-tertiary opacity-100 p-4 h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          {/* relative max-w-lg pb-10 flex flex-col space-y-6 overflow-y-auto h-full */}
          <article className="">
            <div className="flex items-center justify-between">
              <div>
                <p className="uppercase text-white border border-white p-2 text-sm">Company Logo</p>
              </div>
              <div>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl float-right cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-end px-48">
                <ul className="text-center space-y-8 w-48">
                    <li className="w-72 border border-white px-3 py-2">
                        <a className="no-underline text-xl text-white" href="/">Home</a>
                    </li>
                    <li className="w-72 border border-white px-3 py-2 hover:bg-white group">
                        <a className="text-white no-underline text-xl" href="/">About</a>
                    </li>
                    <li className="w-72 border border-white px-3 py-2 hover:bg-white group">
                        <a className="text-white no-underline text-xl" href="/">Products</a>
                    </li>
                    <li className="w-72 border border-white px-3 py-2 hover:bg-white group">
                        <a className="text-white no-underline text-xl" href="/">Services</a>
                    </li>
                    <li className="w-72 border border-white px-3 py-2 hover:bg-white group">
                        <a className="text-white no-underline text-xl" href="/">Contact</a>
                    </li>
                </ul>
            </div>
          </article>
        </section>
        <section
          className=" w-1/2 h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
}
