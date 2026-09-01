import React from 'react'
import {
  FooterDivider,
  FooterIcon,
} from "flowbite-react";
import {BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Bottom = () => {
  return (
    <div className='w-full px-4 py-6'>
      <FooterDivider />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:mt-0">
            <FooterIcon href="https://www.facebook.com/share/1JhSF2MD4d/" icon={BsFacebook} />
            <FooterIcon href="https://www.linkedin.com/in/aye-thazin-oo-405147433/" icon={BsLinkedin} />
            <FooterIcon href="https://github.com/ayethazinoo" icon={BsGithub} />
        </div>
    </div>
  )
}

export default Bottom
