import React from 'react'
import io from "socket.io-client";
import { useEffect, useState } from "react";
const socket=io.connect("http://localhost:5173");

const ConnectWithName = () => {
    const [username,setUsername] = useState("")
    const [otherUsername, setOtherUsername] = useState("")
    
    const connect = () => {
        socket.emit("send_username",{username});
    }

    useEffect(() => {
        socket.on("getOther_username", (data) => {
          setOtherUsername(data.username);
        });
      }, [socket]);
  
    return (
    <div className='flex justify-center' >
        <input onChange={(event) => {setUsername(event.target.value);}} placeholder='Username...' className='bg-gradient-to-tr from-slate-800 to-slate-900 font-mono font-bold text-lg absolute top-8 left-64 h-12 w-48 rounded-2xl ring-2 ring-black'>
        
        </input>
        
        <button onClick={connect} className='bg-gradient-to-tr from-slate-800 to-slate-900 font-mono font-bold text-lg absolute top-8 right-64 h-12 w-32 rounded-2xl ring-2 ring-black transition duration-300 ease-in-out hover:scale-105'>
            <h1 className='text-white absolute top-2.5 left-7'>Connect</h1>
        </button>
        {otherUsername}
    </div>
  )
}

export default ConnectWithName