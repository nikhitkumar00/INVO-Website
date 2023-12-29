import { useEffect, useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    }, [theme]);

    return (
        <div className="flex h-12 w-full items-center justify-between bg-gray-200 px-4 font-semibold capitalize sm:h-16 dark:bg-gray-900">
            <div>
                <svg
                    className="ml-2 w-10 fill-black sm:w-14 md:w-20 dark:fill-white"
                    viewBox="0 0 128 39"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M22.242 1.794C22.9873 1.794 23.618 1.98033 24.134 2.353C24.65 2.697 24.908 3.127 24.908 3.643C24.908 4.56033 24.6213 5.30567 24.048 5.879C23.4747 6.42366 22.6577 6.696 21.597 6.696C19.9343 6.696 18.673 6.71033 17.813 6.739C17.7557 7.083 17.4977 8.631 17.039 11.383C16.523 14.4503 16.2077 16.328 16.093 17.016L15.19 22.649C14.5593 26.863 14.0577 30.389 13.685 33.227C14.287 33.1983 15.104 33.184 16.136 33.184C17.6553 33.184 18.6873 33.3847 19.232 33.786C19.7767 34.1873 20.049 34.7893 20.049 35.592C20.049 36.3373 19.748 36.968 19.146 37.484C18.5727 38 17.7557 38.258 16.695 38.258C15.9783 38.258 14.846 38.2293 13.298 38.172C11.8647 38.1147 10.9187 38.086 10.46 38.086C8.654 38.086 6.676 38.2437 4.526 38.559C3.58 38.7023 2.90633 38.774 2.505 38.774C1.87433 38.774 1.344 38.602 0.914 38.258C0.484 37.914 0.269 37.4123 0.269 36.753C0.269 35.721 0.727667 34.9183 1.645 34.345C2.56233 33.7717 3.85233 33.4707 5.515 33.442L7.536 33.399L7.665 32.453C8.353 27.8663 8.85467 24.627 9.17 22.735L10.116 17.102C10.6893 13.7767 11.2053 10.351 11.664 6.825L8.052 6.868C7.02 6.868 6.30333 6.71033 5.902 6.395C5.52933 6.051 5.343 5.578 5.343 4.976C5.343 3.02667 6.74767 1.98033 9.557 1.837C10.8757 1.77966 12.481 1.751 14.373 1.751L22.242 1.794ZM32.266 38.215C31.2054 38.215 30.4457 37.9857 29.987 37.527C29.5284 37.0397 29.299 36.1367 29.299 34.818C29.299 33.9293 29.385 32.8543 29.557 31.593C29.729 30.3317 30.03 28.4253 30.46 25.874C30.5174 25.53 30.7467 24.1397 31.148 21.703C31.5494 19.2377 31.9077 16.6577 32.223 13.963C32.5097 11.6697 32.653 9.94966 32.653 8.803C32.653 7.513 32.18 6.868 31.234 6.868C30.5174 6.868 29.6144 7.255 28.525 8.029C27.4644 8.77433 26.3177 9.97833 25.085 11.641C24.6837 12.1857 24.2394 12.458 23.752 12.458C23.3507 12.458 22.9924 12.2717 22.677 11.899C22.3904 11.4977 22.247 11.0533 22.247 10.566C22.247 10.0787 22.333 9.62 22.505 9.19C22.677 8.73133 22.9924 8.18667 23.451 7.556C24.8557 5.63533 26.418 4.159 28.138 3.127C29.858 2.06633 31.664 1.536 33.556 1.536C35.1327 1.536 36.308 2.02333 37.082 2.998C37.8847 3.97267 38.286 5.39167 38.286 7.255C38.286 8.91767 38.0567 11.3257 37.598 14.479C39.0314 10.2363 40.8517 7.02566 43.059 4.847C45.2664 2.63966 47.8607 1.536 50.842 1.536C53.1927 1.536 54.9557 2.20966 56.131 3.557C57.335 4.87566 57.937 6.653 57.937 8.889C57.937 10.1503 57.7507 11.684 57.378 13.49L54.755 25.788C54.4684 27.2213 54.325 28.454 54.325 29.486C54.325 30.69 54.5974 31.593 55.142 32.195C55.7154 32.797 56.5037 33.098 57.507 33.098C58.453 33.098 59.3704 32.7827 60.259 32.152C61.1764 31.5213 62.2514 30.475 63.484 29.013C63.828 28.6117 64.215 28.411 64.645 28.411C65.0177 28.411 65.3044 28.583 65.505 28.927C65.7344 29.271 65.849 29.744 65.849 30.346C65.849 31.464 65.5767 32.3527 65.032 33.012C63.5414 34.818 62.065 36.1367 60.603 36.968C59.141 37.7993 57.6074 38.215 56.002 38.215C53.5654 38.215 51.659 37.4983 50.283 36.065C48.907 34.603 48.219 32.6537 48.219 30.217C48.219 29.271 48.2907 28.239 48.434 27.121C48.606 26.003 48.8784 24.584 49.251 22.864L50.971 14.995C51.0284 14.737 51.1287 14.2783 51.272 13.619C51.4154 12.9597 51.53 12.3433 51.616 11.77C51.702 11.168 51.745 10.5803 51.745 10.007C51.745 9.08967 51.487 8.35867 50.971 7.814C50.455 7.26933 49.724 6.997 48.778 6.997C47.058 6.997 45.338 7.91433 43.618 9.749C41.898 11.5837 40.307 14.5507 38.845 18.65C37.383 22.7207 36.2364 27.938 35.405 34.302C35.2044 35.764 34.9034 36.7817 34.502 37.355C34.1294 37.9283 33.384 38.215 32.266 38.215ZM97.445 19.424C98.1043 19.424 98.5773 19.5673 98.864 19.854C99.1793 20.1407 99.337 20.5133 99.337 20.972C99.337 21.7173 99.1076 22.3767 98.649 22.95C98.219 23.5233 97.531 23.8243 96.585 23.853C94.2916 23.9103 92.2563 23.7383 90.479 23.337C88.4436 27.6083 85.9783 31.163 83.083 34.001C80.2163 36.8103 77.3353 38.215 74.44 38.215C71.4586 38.215 69.237 36.4807 67.775 33.012C66.313 29.5433 65.582 24.8563 65.582 18.951C65.582 13.9057 65.9403 9.37633 66.657 5.363C66.915 3.87233 67.2733 2.869 67.732 2.353C68.2193 1.80833 69.0363 1.536 70.183 1.536C72.075 1.536 73.021 2.353 73.021 3.987C73.021 4.159 72.9923 4.47433 72.935 4.933C72.075 10.093 71.645 14.7657 71.645 18.951C71.645 23.337 72.0033 26.6767 72.72 28.97C73.4653 31.2347 74.569 32.367 76.031 32.367C77.5216 32.367 79.1413 31.335 80.89 29.271C82.6386 27.207 84.244 24.6127 85.706 21.488C83.9573 20.3987 82.6386 18.994 81.75 17.274C80.8613 15.5253 80.417 13.5187 80.417 11.254C80.417 8.98933 80.761 7.083 81.449 5.535C82.1656 3.95833 83.126 2.783 84.33 2.009C85.5626 1.235 86.9243 0.847999 88.415 0.847999C90.2496 0.847999 91.6973 1.50733 92.758 2.826C93.8473 4.14467 94.392 5.95067 94.392 8.244C94.392 11.5407 93.6753 15.1383 92.242 19.037C93.7613 19.295 95.4956 19.424 97.445 19.424ZM84.76 10.953C84.76 13.7623 85.663 15.8407 87.469 17.188C88.587 13.9773 89.146 11.3257 89.146 9.233C89.146 8.029 88.9883 7.15467 88.673 6.61C88.3576 6.03666 87.9276 5.75 87.383 5.75C86.609 5.75 85.9783 6.20866 85.491 7.126C85.0036 8.01466 84.76 9.29033 84.76 10.953ZM109.429 38.215C106.878 38.215 104.57 37.6417 102.506 36.495C100.471 35.3483 98.8509 33.6713 97.6469 31.464C96.4429 29.228 95.8409 26.562 95.8409 23.466C95.8409 19.1087 96.6292 15.2673 98.2059 11.942C99.8112 8.61666 101.976 6.051 104.699 4.245C107.451 2.439 110.49 1.536 113.815 1.536C116.366 1.536 118.66 2.10933 120.695 3.256C122.759 4.40267 124.393 6.094 125.597 8.33C126.801 10.5373 127.403 13.189 127.403 16.285C127.403 20.6423 126.6 24.4837 124.995 27.809C123.418 31.1343 121.254 33.7 118.502 35.506C115.779 37.312 112.754 38.215 109.429 38.215ZM109.859 33.141C112.095 33.141 114.059 32.453 115.75 31.077C117.47 29.701 118.789 27.7947 119.706 25.358C120.623 22.8927 121.082 20.112 121.082 17.016C121.082 13.6047 120.365 11.0247 118.932 9.276C117.499 7.49867 115.65 6.61 113.385 6.61C111.178 6.61 109.228 7.298 107.537 8.674C105.846 10.0213 104.527 11.9277 103.581 14.393C102.635 16.8297 102.162 19.6103 102.162 22.735C102.162 26.1463 102.879 28.7407 104.312 30.518C105.745 32.2667 107.594 33.141 109.859 33.141Z" />
                </svg>
            </div>
            <div className="flex gap-7">
                <div className="hidden gap-6 text-sm text-gray-900 sm:flex dark:text-white ">
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">Implementation</a>
                    <a href="#">Contact Us</a>
                </div>
                <svg
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="w-5 fill-black dark:fill-white"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <div className="relative sm:hidden">
                    <svg
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-7  cursor-pointer rounded-md fill-black hover:bg-gray-300 dark:fill-white"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"></path>
                    </svg>
                    {isOpen ? (
                        <div className="w-46 absolute right-0 top-10 flex flex-col gap-3 rounded-md bg-gray-200 p-1 shadow-lg shadow-gray-400 md:hidden dark:bg-slate-800 dark:text-white">
                            <a
                                className="flex gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-300 dark:hover:bg-slate-700"
                                href="#"
                            >
                                <svg
                                    className="w-5 fill-black dark:fill-white"
                                    viewBox="0 0 15 15"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 11L6 4L10.5 7.5L6 11Z"></path>
                                </svg>
                                Home
                            </a>
                            <a
                                className="flex gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-300 dark:hover:bg-slate-700"
                                href="#"
                            >
                                <svg
                                    className="w-5 fill-black dark:fill-white"
                                    viewBox="0 0 15 15"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 11L6 4L10.5 7.5L6 11Z"></path>
                                </svg>
                                Features
                            </a>
                            <a
                                className="flex gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-300 dark:hover:bg-slate-700"
                                href="#"
                            >
                                <svg
                                    className="w-5 fill-black dark:fill-white"
                                    viewBox="0 0 15 15"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 11L6 4L10.5 7.5L6 11Z"></path>
                                </svg>
                                Implementation
                            </a>
                            <a
                                className="flex gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-300 dark:hover:bg-slate-700"
                                href="#"
                            >
                                <svg
                                    className="w-5 fill-black dark:fill-white"
                                    viewBox="0 0 15 15"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 11L6 4L10.5 7.5L6 11Z"></path>
                                </svg>
                                Contact Us
                            </a>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
