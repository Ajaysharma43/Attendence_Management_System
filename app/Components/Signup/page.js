"use client"
import { useRef } from "react"
import { useSession , signIn , signOut } from "next-auth/react"


const Signup_Form = () => {
    const Formref = useRef()
    const textref = useRef()

    const password = useRef()
    const Passwordref = useRef();

    const Phone = useRef();
    const Phoneref = useRef()
    return (
        <>
            <div className="grid justify-center items-center min-h-[70vh]">
                <form action="" className="p-7 grid gap-3">
                    <h1 className="text-center font-bold">Sign up to get started today</h1>
                    <div className="border-2 grid p-2 cursor-text h-fit bg-white rounded-md" onMouseEnter={() => {
                        Formref.current.style.height = "20px"
                        textref.current.style.fontSize = "10px"
                    }}
                        onMouseLeave={() => {
                            if (Formref.current.value == "") {
                                Formref.current.style.height = "0px"
                                textref.current.style.fontSize = "14px"
                            }
                        }}>
                        <label htmlFor="" className="cursor-text text-sm transition-all duration-100 text-gray-400" ref={textref}>Username </label>
                        <input type="text" className="focus:outline-none h-0 transition-all duration-200 w-fit" ref={Formref} />
                    </div>

                    <div className="border-2 grid p-2 cursor-text h-fit bg-white rounded-md" onMouseEnter={() => {
                        Passwordref.current.style.height = "20px"
                        password.current.style.fontSize = "10px"
                    }}
                        onMouseLeave={() => {
                            if (Passwordref.current.value == "") {
                                Passwordref.current.style.height = "0px"
                                password.current.style.fontSize = "14px"
                            }
                        }}>
                        <label htmlFor="" className="cursor-text text-sm transition-all duration-100 text-gray-400" ref={password}>Password </label>
                        <input type="password" className="focus:outline-none h-0 transition-all duration-200" ref={Passwordref} />
                    </div>
                    <div className="border-2 grid p-2 cursor-text h-fit bg-white rounded-md" onMouseEnter={() => {
                        Phoneref.current.style.height = "20px"
                        Phone.current.style.fontSize = "10px"
                    }}
                        onMouseLeave={() => {
                            if (Phoneref.current.value == "") {
                                Phoneref.current.style.height = "0px"
                                Phone.current.style.fontSize = "14px"
                            }
                        }}>
                        <label htmlFor="" className="cursor-text text-sm transition-all duration-100 text-gray-400" ref={Phone}>Phone Number </label>
                        <input type="number" className="focus:outline-none h-0 transition-all duration-200" ref={Phoneref} />
                    </div>

                    <button className="bg-black text-white uppercase p-2 rounded-sm transition-all duration-150 hover:bg-blue-600">Submit</button>
                    <h1>or</h1>
                </form >
                

            </div >
        </>
    )
}

export default Signup_Form