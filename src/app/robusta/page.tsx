import Image from 'next/image'
import tesicon from '../assets/bxs_coffee-bean.svg';
import bicon from '../assets/Brown-bxs_coffee-bean.svg';
import arricn from '../assets/heroicons_arrow-top-right-on-square-20-solid.svg'
import oicon from '../assets/WHITEbxs_coffee-bean (1).svg'
import Link from 'next/link';
import skia from '../assets/image 35.svg';

const Robusta = () => {
    return ( 
        <div className="w-[393px] h-[983px] relative bg-neutral-100 font-heading">
  <div className="w-[393px] h-[983px] relative bg-neutral-100">

   <Link href="/robusta/harvest"> <div className="w-[361px] h-20 left-[16px] top-[442px] absolute bg-white rounded-[20px] shadow" /> </Link>
   <Link href="/robusta/process">     <div className="w-[361px] h-20 left-[16px] top-[530px] absolute bg-white rounded-[20px] shadow" /> </Link>
   <Link href="/robusta/hulling">     <div className="w-[361px] h-20 left-[16px] top-[618px] absolute bg-white rounded-[20px] shadow" /></Link>
   <Link href="/robusta/roasting">    <div className="w-[361px] h-20 left-[16px] top-[706px] absolute bg-white rounded-[20px] shadow" /></Link>
   <Link href="/robusta/packaging">    <div className="w-[361px] h-20 left-[16px] top-[794px] absolute bg-white rounded-[20px] shadow" /></Link>
   <Link href="/robusta/harvest">     <div className="left-[95px] top-[458px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Harvesting</div></Link>
   <Link href="/robusta/process">     <div className="left-[95px] top-[546px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Processing</div></Link>
   <Link href="/robusta/hulling">   <div className="left-[95px] top-[634px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Hulling</div></Link>
   <Link href="/robusta/roasting">   <div className="left-[94px] top-[722px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Roasting</div></Link>
   <Link href="/robusta/packaging">   <div className="left-[93px] top-[810px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Packaging</div></Link>
   <div className="left-[14px] top-[404px] absolute text-center text-yellow-950 text-2xl font-bold  leading-snug">Tracking</div>
   <Link href="/robusta/harvest">   <div className="w-[5px] h-[5px] left-[282px] top-[480px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" /></Link>
   <Link href="/robusta/process">   <div className="w-[5px] h-[5px] left-[282px] top-[568px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" /></Link>
   <Link href="/robusta/hulling">   <div className="w-[5px] h-[5px] left-[282px] top-[656px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" /></Link>
   <Link href="/robusta/roasting">   <div className="w-[5px] h-[5px] left-[281px] top-[744px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" /></Link>
   <Link href="/robusta/packaging">   <div className="w-[5px] h-[5px] left-[282px] top-[832px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" /></Link>
   <Link href="/robusta/harvest">   <div className="left-[284px] top-[471px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/robusta/process">   <div className="left-[284px] top-[559px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/robusta/hulling">   <div className="left-[284px] top-[647px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/robusta/roasting">   <div className="left-[285px] top-[735px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/robusta/packaging">   <div className="left-[287px] top-[823px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/robusta/harvest">   <div className="left-[98px] top-[484px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">18 Jan, 2023</div></Link>
   <Link href="/robusta/process">   <div className="left-[98px] top-[572px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">18 Jan, 2023</div></Link>
   <Link href="/robusta/hulling">   <div className="left-[98px] top-[660px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">30 Aug, 2023</div></Link>
   <Link href="/robusta/roasting">   <div className="left-[98px] top-[748px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">9 Sep, 2023</div></Link>
   <Link href="/robusta/packaging">   <div className="left-[98px] top-[836px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">16 Sep, 2023</div></Link>
   <Link href="/robusta/harvest"> <div className="w-12 h-12 left-[32px] top-[458px] absolute bg-green-50 rounded-[15px]" /></Link>
 <Image className="w-22 h-22 left-[45px] top-[471px] absolute" src={tesicon} alt="Icon"/>    
 <Link href="/robusta/process">   <div className="w-12 h-12 left-[32px] top-[546px] absolute bg-green-50 rounded-[15px]" /></Link>
       <Image className="w-22 h-22 left-[45px] top-[559px] absolute" src={tesicon} alt="Icon"/> 
       <Link href="/robusta/hulling">    <div className="w-12 h-12 left-[32px] top-[634px] absolute bg-green-50 rounded-[15px]" /></Link>
      <Image className="w-22 h-22 left-[45px] top-[647px] absolute" src={tesicon} alt="Icon"/> 
      <Link href="/robusta/roasting">    <div className="w-12 h-12 left-[32px] top-[722px] absolute bg-green-50 rounded-[15px]" /></Link>
       <Image className="w-22 h-22 left-[45px] top-[735px] absolute" src={tesicon} alt="Icon"/> 
       <Link href="/robusta/packaging">  <div className="w-12 h-12 left-[32px] top-[810px] absolute bg-green-100 rounded-[15px]" /></Link>
       <Image className="w-22 h-22 left-[45px] top-[823px] absolute" src={tesicon} alt="Icon"/> 
    <div className="w-[22px] h-[22px] left-[45px] top-[471px] absolute" />
    <div className="w-[22px] h-[22px] left-[45px] top-[559px] absolute" />
    <div className="w-[22px] h-[22px] left-[45px] top-[647px] absolute" />
    <div className="w-[22px] h-[22px] left-[45px] top-[735px] absolute" />
    <div className="w-[22px] h-[22px] left-[45px] top-[823px] absolute" />
    <div className="w-[361px] h-[140px] left-[16px] top-[232px] absolute">
        <div className="w-[361px] h-[140px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
        <Image className="w-8 h-8 left-[16px] top-[16px] absolute" src={bicon} alt="Icon"/>
        <div className="left-[53px] top-[19px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Robusta 2023</div>
        <div className="w-7 h-7 left-[16px] top-[16px] absolute" />
        <a href='https://mumbai.polygonscan.com/tx/0xe9ef78e9844de11decc7a1753eddcf1c70f66d50b062ce5337fa40ccea50d03e' target="_blank">
        <div className="left-[50px] top-[49px] absolute text-center text-neutral-400 text-sm font-semibold  leading-snug">Blockchain verified</div>
        <Image className="w-15 h-15 left-[188px] top-[50px] absolute" src={arricn} alt="Icon"/></a>
        <div className="w-[15px] h-[15px] left-[180px] top-[52px] absolute">
            <div className="w-3 h-[11.25px] left-[1.50px] top-[1.50px] absolute">
            </div>
        </div>
        <div className="w-[5px] h-[5px] left-[240px] top-[33px] absolute origin-top-left rotate-180 bg-orange-400 rounded-full" />
        <div className="left-[247px] top-[19px] absolute text-center text-orange-400 text-lg font-bold  leading-snug">Packaging</div>
        <div className="left-[262px] top-[49px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">16 Sep, 2023</div>
        <div className="w-[13px] h-[13px] left-[16px] top-[102px] absolute bg-orange-400 rounded-full" />
        <div className="w-[57px] h-[1px] left-[31px] top-[109px] absolute bg-orange-400     "/>
        <div className="w-[13px] h-[13px] left-[90px] top-[102px] absolute bg-orange-400 rounded-full" />
        <div className="w-[58px] h-[1px] left-[105px] top-[109px] absolute bg-orange-400     "/>
        <div className="w-[13px] h-[13px] left-[165px] top-[102px] absolute bg-orange-400 rounded-full" />
        <div className="w-[58px] h-[1px] left-[180px] top-[109px] absolute bg-orange-400     "/>
        <div className="w-[13px] h-[13px] left-[240px] top-[102px] absolute bg-orange-400 rounded-full" />
      
        <div className="w-[58px] h-[1px] left-[255px] top-[109px] absolute bg-orange-400     "/>
       
        <div className="w-[31px] h-[31px] left-[315px] top-[93px] absolute bg-orange-400 rounded-full" />
        <Image className="w-15 h-15 left-[323px] top-[101px] absolute" src={oicon} alt="Icon"/>
        {/* <div className="w-[31px] h-[31px] left-[333px] top-[102px] absolute bg-orange-400 rounded-full" />
        <div className="w-[31px] h-[31px] left-[240px] top-[93px] absolute bg-orange-400 rounded-full" />
        <div className="w-[15px] h-[15px] left-[248px] top-[101px] absolute" /> */}
    </div>
    <div className="w-[393px] h-[195px] left-0 top-0 absolute">
        <div className="w-[393px] h-[195px] left-0 top-0 absolute bg-yellow-950" />
        <div className="w-[361px] left-[16px] top-[124px] absolute text-white text-[22px] font-normal  leading-[17px] ">Trace the taste :Track Your <br/><br/>Bean s Blockchain Path!</div>
        <div className="left-[15px] top-[70px] absolute text-center text-stone-50 text-3xl font-bold  leading-snug">Skiá Coffee</div>
    </div>
    <div className="w-[392px] h-[50px] absolute bg-white shadow">
    <Image className="w-12 h-8 left-[172px] top-[10px] absolute" src={skia} alt='Op' />
</div>
</div>
</div>
     );
}
 
export default Robusta;