import React from 'react'
import {useState} from 'react'


function Signup() {

    const[input,setInput] = useState('')

    function handleinput(e){
        setInput(e.target.value);
    };
    const[modal,setModal] = useState(false);

    function openModal(){
        setModal(true);
    }

    function closeModal(){
        setModal(false);
    }

  return (
    <div>
         <div className = "bg-gray-400 h-150 w-125 rounded-4xl m-10 mr-25 p-10 border flex flex-col justify-center">
            <h1 className = " text-3xl text-center font-bold p-3">Get Started</h1>
            <p className = "text-xl py-2">Enter your username</p>
            <input type="text" value = {input} onChange = {handleinput} placeholder ="enter username" className = "rounded-lg text-black font-bold border p-2 bg-gray-300 outline-none my-1"/>
            <p className = "text-xl py-2">Enter your email</p>
            <input type="email" placeholder ="enter email" className = "rounded-lg text-black font-bold border p-2 bg-gray-300 outline-none my-1"/>
            <p className = "text-xl py-2">Enter your register No</p>
            <input type = "number" placeholder ="enter reg No" className = "rounded-lg text-black font-bold border p-2 bg-gray-300 outline-none my-1"/>
            <p className = "text-xl py-2">Enter your password</p>
            <input type = "password" placeholder ="enter password" className = "rounded-lg text-black font-bold border p-2 bg-gray-300 outline-none my-1"/>
            <div className = "flex flex-row justify-center gap-5 mt-2 text-white">
                <button className = "bg-blue-500 hover:bg-blue-600 p-3 rounded-xl" onClick = {openModal}>Sign up</button>
                {/* {openModal && (
                    <div className = "z-10 bg-black/50 fixed flex items-center justify-center"> 
                        <div className = "bg-white top-0 right-0 w-100 h-100 bg-cover rel">

                        </div>
                    </div>

                )} */}
                <button className = "bg-red-500 hover:bg-red-600 p-3 rounded-xl">Erase</button>
            </div>
        </div>
    </div>
  )
}

export default Signup