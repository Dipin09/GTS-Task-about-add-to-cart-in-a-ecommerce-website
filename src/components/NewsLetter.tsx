import { LuMailOpen } from "react-icons/lu";

const NewsLetter = () => {
    return(
        <div className="bg-green-700 mt-16 ">
            <div className="container ml-15 py-8 flex-col md:flex-row justify-center items-center gap-4 text-white">
                <div className="flex flex-shrink-0 items-center gap-4">
                    <LuMailOpen className="text-[60px]" />
                    <div>
                        <h3 className="text-xl  sm:text-2xl font-semibold">
                            Sign up for the Newsletters
                        </h3>
                        <p>... and receive $20 for the first shopping</p>
                    </div>
                </div>
                <div className="w-full max-w-[500px] relative">
                    <input className="py-4 px-6 w-full rounded-full bg-gray-300"
                     type="text"
                     placeholder="Your Email Adress... "
                     />

                     <button className="bg-green-900 absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-green-800">
                        Subscribe!!
                     </button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;