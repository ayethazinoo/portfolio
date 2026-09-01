import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "flowbite-react";
import { MdOutlinePhone } from "react-icons/md";
import { LuMapPinHouse } from "react-icons/lu";



const Contact = () => {
  return (
    <div className='w-full'>
        <h4 className='mt-10 text-3xl text-center font-bold tracking-tight text-blue-900'>お問い合わせ</h4>
        <div className="container mx-auto mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 m-3">
                {/* contact icon */}
                <div className="mx-auto w-full max-w-sm p-2 text-center">
                    <p className='text-lg font-semibold text-gray-900'>お気軽にご連絡ください。</p>
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
                    <form>                        
                        <div className="mb-6">
                            <label htmlFor="user-name" className="block mb-2.5 text-lg font-medium text-heading">お名前</label>
                            <input type="text" id="user-name" className="border border-default-medium text-heading text-sm rounded-base w-full px-3 py-3 shadow-lg placeholder:text-body" placeholder="Aye Thazin Oo" required />
                        </div> 
                        <div className="mb-6">
                            <label htmlFor="user-email" className="block mb-2.5 text-lg font-medium text-heading">メール</label>
                            <input type="email" id="user-email" className="border border-default-medium text-heading text-sm rounded-base w-full px-3 py-3 shadow-lg placeholder:text-body" placeholder="ayethazinoo@gmail.com" required />
                        </div> 
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2.5 text-lg font-medium text-heading">メッセージ</label>
                            <textarea id="message" rows="4" className="border border-default-medium text-heading text-sm rounded-base w-full p-3.5 shadow-lg placeholder:text-body" placeholder="メッセージを入力ください。"></textarea>
                        </div>                         
                        <button type="submit" className="w-full shadow-md bg-blue-200 text-blue-900 font-semibold text-lg px-3 py-3">送信する</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
