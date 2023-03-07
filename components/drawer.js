import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <>
      <main
        className={
          " fixed overflow-hidden z-40 bg-black bg-opacity-50 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            "right-0 w-3/12 absolute bg-tertiary opacity-100 px-8 py-12 h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="">
            <div className="flex items-center justify-end">
              <div>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl float-right cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-end px-48">
              <ul className="text-center space-y-8 w-48 py-12">
                <li className="w-72 px-3 py-2 flex flex-col gap-1 border-b border-primary">
                  <small className="text-secondary font-bold">01.</small>
                  <a className="no-underline text-white hover:text-secondary" href="/">
                    About
                  </a>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 border-b border-primary">
                  <small className="text-secondary font-bold">02.</small>
                  <a className="text-white no-underline hover:text-secondary" href="/">
                    Experience
                  </a>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 border-b border-primary">
                  <small className="text-secondary font-bold">03.</small>
                  <a className="text-white no-underline hover:text-secondary" href="/">
                    Work
                  </a>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 border-b border-primary">
                  <small className="text-secondary font-bold">04.</small>
                  <a className="text-white no-underline hover:text-secondary" href="/">
                    Contact
                  </a>
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
