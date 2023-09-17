'use client';


import Image from 'next/image'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Link from 'next/link';
import 'react-alice-carousel/lib/alice-carousel.css';
import arricn from '../assets/whitehero.svg'

const Hulling = () => {
    const handleDragStart = (e : React.SyntheticEvent) => e.preventDefault();
    // https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg

    const items = [
        
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694870833/vjush4ljkxsuaylrwv5t.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={61}  />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694870840/ujo4n4f1twcbqdblh4d7.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={62}/>,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694870845/xwcaqtmihqqqhddbdvk6.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={63} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694870862/szpgih0beturf9rtungt.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={64} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694870875/plnmk2taou3vbw3wjimd.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={65} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694576077/ogdmacxnihslhwwyippd.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={66} />,

    ];

    return ( 
        <div className="w-[393px] h-[900px] relative bg-neutral-100 font-heading">
        <div className="w-[393px] h-[349px] left-0 top-0 absolute bg-black bg-opacity-70" />
        <div className="w-[393px] h-[73px] left-0 top-[349px] absolute bg-yellow-950" />
        <div className='flex flex-col justify-center h-[353px]'>
        <AliceCarousel autoPlay={true} disableButtonsControls={true} infinite={true}  autoPlayInterval={3000} mouseTracking items={items} autoWidth={true} disableDotsControls={true}  /> 
        </div>
        <a href='https://mumbai.polygonscan.com/tx/0xa177fce3731db72dfbf074c58ccc66a6d38402099300ffcb9d71249399d641b5' target="_blank">
        <div className="left-[16px] top-[393px] absolute text-white text-sm font-light  leading-snug">Block Explorer</div>
        <Image className="w-4 h-4 left-[114px] top-[394px] absolute" src={arricn} alt="Icon"/></a>
        <div className="left-[16px] top-[360px] absolute text-white text-2xl font-bold font-['Poppins']">Hulling</div>
        <div className="left-[16px] top-[482px] absolute text-black text-base font-semibold font-['Poppins']">Product Code:</div>
        <div className="left-[16px] top-[514px] absolute text-black text-base font-semibold font-['Poppins']">Resting Period:</div>
        <div className="left-[17px] top-[546px] absolute text-black text-base font-semibold font-['Poppins']">Grade Size:</div>
        <div className="left-[16px] top-[578px] absolute text-black text-base font-semibold font-['Poppins']">:</div>
        <div className="left-[16px] top-[578px] absolute text-black text-base font-semibold font-['Poppins']">Bagging Date:</div>
        <div className="left-[16px] top-[444px] absolute text-yellow-950 text-xl font-bold font-['Poppins']">Specifications :</div>
        <div className="left-[168px] top-[483px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">Robusta Washed 2023</div>
        <div className="left-[167px] top-[517px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">48 Days</div>
        <div className="left-[166px] top-[549px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">Bulk</div>
        <div className="left-[164px] top-[583px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">9th Sept 2023</div>
        <div className="left-[253px] top-[376px] absolute text-zinc-200 text-base font-medium font-['Poppins']">30th Aug 2023</div>
        <Link href="/robusta/process">
    <div className="w-15 h-fit p-[8px] left-[16px] top-[32px] absolute bg-yellow-950 rounded-full">
    <span className='text-white '>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
</span>
    </div>
    </Link>

    <Link href="/robusta/roasting">
    <div className="w-15 h-fit p-[8px] left-[343px] top-[710px] fixed bg-yellow-950 rounded-full ">
        <span className='text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</span>
    </div>
    </Link>
    </div>
     );
}
 
export default Hulling;