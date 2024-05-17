import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button';

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap
    items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773}
        height={687}
        className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className="mt-10 font-palanquin text-4xl caplitalize lg:max-w-lg font-bold">
         
          <span className="text-red-500 inline-block mt-3">Special</span> 
          <span className="text-red-500 inline-block mt-3"></span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg ">
        Embark on a shopping journey that 
        redefines your experience withunbeatable deals. From premier
        selections to incredible savings,
        we offer unparalleled value that
        sets us apart.

        </p>
        <p className='mt-6 lg:max-w-lg'>
          Navigate a realm of possiblitites designeted to fullfill
          your unique desiress, surpassing
          the loftiest expectations. YOur journey with us ins nothing short 
          of excepetional
         
        </p>
        <div className="mt-11 flex flex-wrap gap4">
        <Button label="View Details"/>      
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer