import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { LuMapPinHouse } from "react-icons/lu";
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    let [name , setName] = useState('');
    let [email , setEmail] = useState('');
    let [message , setMessage] = useState('');
    let [error , setError] = useState('');

    let handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            
            let data = {name , email , message};
            let res = await axios.post('http://localhost:4000/api/contact' , data)
            if(res.status === 200){
                alert("メッセージを送信しました。ありがとうございます！");

                setName('');
                setEmail('');
                setMessage('');
                setError("");
            }
        }catch(e){
            console.error("Submit error :" , e);

            alert("メッセージの送信に失敗しました。")

            if (e.response?.data?.errors) {                
                setError(Object.keys(e.response.data.errors))
            } 
            
        }        

    }

  return (
    <div className='w-full'>
        <h4 className='mt-10 text-3xl text-center font-bold text-slate-900'>お問い合わせ</h4>
        <div className="container mx-auto mt-6">
            <div className="bg-slate-50 rounded-md shadow-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 m-3">
                {/* contact icon */}
                    <div className="mx-auto w-full max-w-sm p-2 text-center">
                        <p className='text-xl font-bold text-blue-800'>お気軽にご連絡ください。</p>
                        <div className="flex items-center gap-6 mt-6">
                            <MdOutlinePhone className='shrink-0 text-3xl text-blue-900'/>
                            <p className='text-lg text-gray-900'>09783131420</p>
                        </div>
                        <div className="flex items-center gap-6 mt-6">
                            <AiOutlineMail className='shrink-0 text-3xl text-blue-900'/>
                            <p className='text-lg text-gray-900'>ayethazinoo.tumlm@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-6 mt-6">
                            <LuMapPinHouse className='shrink-0 text-3xl text-blue-900'/>
                            <p className='text-lg text-gray-900'>Mawlamyine Township, Mon State and Myanmar</p>
                        </div>
                    </div>
                    {/* contact form */}
                    <div className="container shadow-sm w-full max-w-sm p-2">                        
                        <form onSubmit={handleSubmit}>                        
                            <div className="mb-6">
                                <label htmlFor="user-name" className="text-xl font-bold text-blue-800 text-heading">お名前<span className='text-md text-red-700 p-2'>*</span></label>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} id="user-name" className="border border-default-medium text-heading text-sm rounded-md w-full p-3 mt-1.5 shadow-lg placeholder:text-body" placeholder="Aye Thazin Oo" required />
                            </div> 
                            <div className="mb-6">
                                <label htmlFor="user-email" className="text-xl font-bold text-blue-800 text-heading">メール<span className='text-md text-red-700 p-2'>*</span></label>
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="user-email" className="border border-default-medium text-heading text-sm rounded-md w-full p-3 mt-1.5 shadow-lg placeholder:text-body" placeholder="ayethazinoo@gmail.com" required />
                            </div> 
                            <div className="mb-6">
                                <label htmlFor="message" className="text-xl font-bold text-blue-800 text-heading">メッセージ<span className='text-md text-red-700 p-2'>*</span></label>
                                <textarea id="message" rows="4" value={message} onChange={e => setMessage(e.target.value)} className="border border-default-medium text-heading text-sm rounded-md w-full p-3 mt-1.5 shadow-lg placeholder:text-body" placeholder="メッセージを入力ください。" required></textarea>
                            </div>                         
                            <button type="submit" className="w-full rounded-lg shadow-md bg-blue-700 text-white font-semibold text-lg px-3 py-3">送信する</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Contact
