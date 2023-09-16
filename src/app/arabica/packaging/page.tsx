'use client';

import weat from '.../assets/weat-raw.png'
import Image from 'next/image'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';

const Packaging = () => {
    const handleDragStart = (e : React.SyntheticEvent) => e.preventDefault();
    // https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg

    const items = [
        
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]'  />,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575408/qppp4ndl0iszfwad7lvu.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]'/>,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694328800/ustb2pysvytb0ttrxjck.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' />,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1693105356/glougaevonpwk43l79d5.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]'  />,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1693283352/bf97qcpci2ja3nepwhxe.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]'/>,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694329401/eqq5tlvuoztdrexwt7ru.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' />,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575393/sclh5pxon4ouxzaatsvm.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' />,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575437/sfykyxhsxuhepr1capaf.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' />,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575912/h5i1axfkvertqf31mifi.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' />,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575912/h5i1axfkvertqf31mifi.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]'  />,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575930/vwpkfhkbhxhujpusr81z.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]'/>,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694576077/ogdmacxnihslhwwyippd.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' />,
        <img src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694870833/vjush4ljkxsuaylrwv5t.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' />,
    ];
    return ( 
        <div className="w-[393px] h-[900px] relative bg-neutral-100 font-heading">
        <div className="w-[393px] h-[349px] left-0 top-0 absolute bg-black bg-opacity-70" />
        <div className="w-[393px] h-[73px] left-0 top-[349px] absolute bg-yellow-950" />
        <div className='flex flex-col justify-center h-[353px]'>
        <AliceCarousel autoPlay={true} disableButtonsControls={true} infinite={true}  autoPlayInterval={3000} mouseTracking items={items} autoWidth={true} disableDotsControls={true}  /> 
        </div>  
                <div className="left-[16px] top-[371px] absolute text-white text-2xl font-bold font-['Poppins']">Packaging</div>
        <div className="left-[16px] top-[482px] absolute text-black text-base font-semibold font-['Poppins']">Product Code:</div>
        <div className="left-[16px] top-[444px] absolute text-yellow-950 text-xl font-bold font-['Poppins']">Specifications :</div>
        <div className="left-[168px] top-[483px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">Arabica Washed 2023</div>
        <div className="left-[253px] top-[376px] absolute text-zinc-200 text-base font-medium font-['Poppins']">21st Sept 2023</div>
        
        <div className="left-[16px] top-[528px] absolute text-yellow-950 text-xl font-bold font-['Poppins']">Packaging Info:</div>
        <div className="w-[360px] left-[16px] top-[573px] absolute text-neutral-600 text-sm font-light font-['Poppins']">Material 1<br/>Loren Ipsum</div>
        <Link href="/arabica">   <div className="w-15 h-fit p-[5px] left-[343px] top-[32px] absolute bg-yellow-950 rounded-lg ">
        <span className='text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</span>
    </div> </Link>
    </div>
     );
}
 
export default Packaging;