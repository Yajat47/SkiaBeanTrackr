
'use client';

import weat from './assets/rc.jpg';
import Image from 'next/image'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Link from 'next/link';
import 'react-alice-carousel/lib/alice-carousel.css';
import arricn from '../assets/whitehero.svg'
const Roasting = () => {
    const handleDragStart = (e : React.SyntheticEvent) => e.preventDefault();
    // https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg

    const items = [
        
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={31}  />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575408/qppp4ndl0iszfwad7lvu.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={32}/>,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694328800/ustb2pysvytb0ttrxjck.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={33} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1693105356/glougaevonpwk43l79d5.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={34}  />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1693283352/bf97qcpci2ja3nepwhxe.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={35}/>,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694329401/eqq5tlvuoztdrexwt7ru.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={36} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575393/sclh5pxon4ouxzaatsvm.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={37} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575437/sfykyxhsxuhepr1capaf.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={38} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575912/h5i1axfkvertqf31mifi.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={39} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575912/h5i1axfkvertqf31mifi.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={40}  />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575930/vwpkfhkbhxhujpusr81z.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={41}/>,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694576077/ogdmacxnihslhwwyippd.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={43} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694870833/vjush4ljkxsuaylrwv5t.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={43} />,
    ];
    return ( 
        <div className="w-[393px] h-[950px] relative bg-neutral-100 font-heading">
        <div className="w-[393px] h-[349px] left-0 top-0 absolute bg-black bg-opacity-70" />
        <div className="w-[393px] h-[73px] left-0 top-[349px] absolute bg-yellow-950" />
        <div className='flex flex-col justify-center h-[353px]'>
        <AliceCarousel autoPlay={true} disableButtonsControls={true} infinite={true}  autoPlayInterval={3000} mouseTracking items={items} autoWidth={true} disableDotsControls={true}  /> 
        </div>      
        <a href='https://mumbai.polygonscan.com/tx/0x833f14b2f74d1b44bd15c35c7fe9365b8da99ff37103bff361f58eda144e9cdc' target="_blank">
        <div className="left-[16px] top-[393px] absolute text-white text-sm font-light  leading-snug">Block Explorer</div>
        <Image className="w-4 h-4 left-[114px] top-[394px] absolute" src={arricn} alt="Icon"/></a>
          <div className="left-[16px] top-[360px] absolute text-white text-2xl font-bold font-['Poppins']">Roasting</div>
        <div className="left-[16px] top-[482px] absolute text-black text-base font-semibold font-['Poppins']">Product Code:</div>
        <div className="left-[16px] top-[514px] absolute text-black text-base font-semibold font-['Poppins']">Degassing Time:</div>
        <div className="left-[16px] top-[444px] absolute text-yellow-950 text-xl font-bold font-['Poppins']">Specifications :</div>
        <div className="left-[168px] top-[483px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">Arabica Washed 2023</div>
        <div className="left-[181px] top-[517px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">10 Days</div>
        <div className="left-[253px] top-[376px] absolute text-zinc-200 text-base font-medium font-['Poppins']">9th Sept 2023</div>
        
        <div className="left-[16px] top-[560px] absolute text-yellow-950 text-xl font-bold font-['Poppins']">Roasting Curve:</div>
        <div className="left-[185px] top-[565px] absolute text-yellow-950 text-sm font-light">(Illustration Only)</div>
        
    <Image className="w-358 h-270 left-[16px] bottom-[30px] absolute" src={weat} alt="Icon" width={351} height={230}/>
    <Link href="/arabica/hulling">
    <div className="w-15 h-fit p-[8px] left-[16px] top-[32px] absolute bg-yellow-950 rounded-full">
    <span className='text-white '>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
</span>
    </div>
    </Link>

    <Link href="/arabica/packaging">
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
 
export default Roasting;