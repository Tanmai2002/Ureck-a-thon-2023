import React, { useContext } from 'react'
import certificate_logo from "../assets/certificate.svg"

import { CertificateContext } from '../context/CertificateContext'
import Organisations from './Organisations';

export default function Home() {


  const {connectWallet}=useContext(CertificateContext);
  return (
    <div className='flex flex-col w-full justify-center'>
      <div className='flex flex-col-reverse sm:flex-row w-full h-full justify-center items-center'>
        <div className= ' flex flex-col w-full m-5 md:mt-12 items-center'>
           <div className='flex text-blue text-4xl sm:text-5xl items-center justify-center h-36'>
            Certify yourself Now
            
           </div>
           <button type='button' className='flex justify-center itmes center rounded-2xl bg-blue-700 text-white p-2 w-3/4 hover:scale-110 hover:bg-blue-800' onClick={()=>connectWallet()}>
                Connect Now
            </button>
        </div>
        <div className='flex justify-center items-center w-full'>
          <img src={certificate_logo} alt="certificate_logo" className='w-52 md:w-96' />
        </div>
        
    </div>
    <Organisations/>
    </div>
  )
}