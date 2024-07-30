
import React from 'react';
import yellow1 from '../assets/yellow1.png'
import red1 from '../assets/red1.png'
import curve1 from '../assets/curve1.png'
import chart1 from '../assets/chart1.png'
import { CiCalendarDate } from "react-icons/ci";
import { FcComboChart } from "react-icons/fc";
import { FaChartBar } from "react-icons/fa";
import { TiChartPie } from "react-icons/ti";
import { LuCircleDollarSign } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { BiPurchaseTag } from "react-icons/bi";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
import { FaUncharted } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { BiAlarmSnooze } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

import { PiCurrencyDollarSimpleFill } from "react-icons/pi";

const Dashboard = () => {
 
  
 
 
 
 
 
    return (
        <>

<div className="h-screen flex">
    <div className="bg-white w-1/4 ">
       {/*-- Sidebar Area */} 
<ul className='space-y-5 '>
    <li className='p-2'><a href="" className=' flex justify-center items-center bg-red-800 py-2 rounded-lg text-center text-white'><FaUncharted className='mr-2'/> Dashboard</a></li>
    <li className='p-2' ><a href="" className='flex justify-center items-center'><FaCube className='mr-2 text-red-800' />Alertes</a></li>
    <li className='p-2 '><a href="" className='flex justify-center items-center'> <HiWrenchScrewdriver className='mr-2 text-red-800'/>Historiques</a></li>
    <li className='p-2'><a href=""  className='flex justify-center items-center'>< CiCalendarDate className='mr-2 text-red-800'  />Compte</a></li>
    <li className='p-2'><a href="" className='flex justify-center items-center'><PiCurrencyDollarSimpleFill className='mr-2 text-red-800' />Paiements</a></li>
    <li className='p-2'><Link to="registration" className='flex justify-center items-center'><FaUsers className='mr-2 text-red-800' />Gestion personels</Link></li>
</ul>

    </div>

   
    <div className="w-3/1">
     {/*-- Main Content Area */} 
      
     <div className='bg-white py-5 grid grid-cols-3 gap-4'>
    <div>
<h1 className='font-bold ml-4'>Hello,FON TEBOH</h1>
<p className='text-gray-500 ml-4'>Controle voiture aujourdh'ui.</p>
    </div>

    <div className='grid grid-cols-1 gap-4'>
<form action="">
  
  <input type="text" placeholder='Recherche' className='py-2 px-4 rounded-lg text-center bg-gray-300' />

</form>
    </div>

    <div className=' grid grid-cols-2 gap-4'>
   <div className='space-x-4 flex justify-center items-center border-r p-2'>
   < FaRegEnvelope    />
   <BiAlarmSnooze   />
    </div>
  
<div className='flex flex-row space-x-2'>
<RxAvatar size={25}/>
<div  >
    <p>FON TEBOH</p>
    <p>Super Admin</p>
</div>
</div>
    </div>
</div>
        {/* Le contenu  */}
        <div className='bg-gray-300 md:px-2 p-4'>
        <div>


             {/*Data */}
  
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 mb-2'>

{/* GRID 1 */}
<div className='p-5 bg-white rounded-lg'>
<h1 className='flex justify-start items-center mb-4'>< LuCircleDollarSign className='text-red-800 mr-1' /> Nouveaux revenu net</h1>


<h3 className='text-2xl font-bold'>8 00 245 XAF</h3>
<div className='flex justify-between items-center'>
    <div>
<p className='text-gray-500' ><span className='text-red-800 font-bold'>-5</span> semaines dernieres.</p>
    </div>
    <div className='flex flex-row space-x-3'>
    <div className='py-6 px-3 bg-red-800 rounded-t-3xl'></div>
    <div className='py-5 px-3 bg-red-800 rounded-t-3xl'></div>
    <div className='py-2 px-3 bg-red-800 rounded-t-3xl'></div>
    </div>
</div>

</div>

{/* GRID 2 */}
<div className='p-5  bg-white rounded-lg'>

<h1 className='flex justify-start items-center mb-4'>< CiShoppingCart className='text-red-800 mr-1' />Total des inscriptions</h1>


<h3 className='text-2xl font-bold'>256 </h3>
<div className='flex justify-between items-center'>
    <div>
<p className='text-gray-500'><span className='text-red-800 font-bold'>+10%</span> semaines dernieres.</p>
    </div>
    <div className='flex flex-row space-x-3'>
    <div className='py-6 px-3 bg-red-800 rounded-t-3xl'></div>
    <div className='py-5 px-3 bg-red-800 rounded-t-3xl'></div>
    <div className='py-2 px-3 bg-red-800 rounded-t-3xl'></div>
    </div>
    </div> 
</div>

{/* GRID 3 */}
<div className='p-5  bg-white rounded-lg'>

<h1  className='flex justify-start items-center mb-4'><BiPurchaseTag className='text-red-800 mr-1' /> Total des resolus </h1>


<h3 className='text-2xl font-bold'>1,256</h3>
<div className='flex justify-between items-center'>
    <div>
<p className='text-gray-500'><span className='text-red-800 font-bold'>+10%</span> semaines dernieres.</p>
    </div>
    <div className='flex flex-row space-x-3'>
    <div className='py-6 px-3 bg-red-800 rounded-t-3xl'></div>
    <div className='py-5 px-3 bg-red-800 rounded-t-3xl'></div>
    <div className='py-2 px-3 bg-red-800 rounded-t-3xl'></div>
    </div>
    </div> 
</div>
</div>
        </div>
 
        <div class="grid grid-cols-3 gap-5 p-4" >

  <div class="col-span-2 bg-white p-5 rounded-lg">
    <h1 className='text-gray-500'>Overall sales</h1>
    <div className='block  md:flex md:justify-between md:items-center'>
        <h2 className='text-red-800 font-bold'>56,345,98 XAF <span className='  text-xs  text-white px-3 py-1 rounded-l-full rounded-r-full bg-red-800'>23,5</span></h2>
        <p className='flex justify-center items-center'><img src={yellow1} alt="" className='h-4 w-4 mr-2' />Organic</p>
<p className='flex justify-center items-center'><img src={red1} alt="" className='h-4 w-4 mr-2' />Professional</p>
<p className='flex justify-center items-center border  rounded-lg p-2'>Last 7 months < CiCalendarDate className='text-red-800'  /></p>
    
    </div>

 <div className='grid grid-cols-2 gap-5 p-5'>
<ul className='space-y-4'>
    <li>60K</li>
    <li>50K</li>
    <li>40K</li>
    <li>20K</li>
</ul>
<div>
   
    <FaChartBar size={200}  className='text-indigo-600' />
</div>
   </div>

  </div>
  <div class="bg-white p-8 rounded-lg">
   <div className='grid grid-cols-2 gap-20 mb-4'>
   <h1 className='font-bold'>Summary</h1>
   <div>
   <select name="" id="">
   </select> Month
   </div>
   </div>

   <div className='grid grid-cols-3 gap-10 mb-4'>
<p className='flex justify-center items-center'><img src={yellow1} alt="" className='h-4 w-4 mr-2' /> Requested</p>
<p className='flex justify-center items-center'><img src={red1} alt="" className='h-4 w-4 mr-2' /> Served</p>

<p className=''>Others</p>
   </div>


{/* Chart */}
<div className='flex flex-col justify-center items-center'>

<TiChartPie size={200} className='text-red-800'  />
</div>

 


   <div className='flex justify-center items-center'>
   <a href="" className='px-4 py-2 bg-red-800 rounded-lg text-white'>Analyse More</a>
   </div>
 
  </div>


  
</div>



<div class="grid grid-cols-3 gap-4 p-4" >

<div class="col-span-2 bg-white p-5 rounded-lg">
  <h1 className='text-gray-500 mb-4'>Derniere commande</h1>
  
{/*TABLE */}
<div className='overflow-auto rounded-lg'>
<table className='w-full'>
   <thead className='border-b '>
    <tr>
        <th>No</th>
        <th>Nom d'utilisateur</th>
        <th>Date de commande</th>
        <th>Statut</th>
        <th>Prix</th>
        <th>Clients</th>
    </tr>
   </thead>
   <tbody>
    <tr>
        <td className='font-bold text-3xl text-center text-gray-500 p-3'>01</td>
        <td className='text-center'>  Shirt Creme   </td>
        <td  className='text-center'>
            <ul>
                <li>March 24,2022</li>
                <li className='text-gray-500'>09:20 AM</li>
            </ul>

        </td>
        <td className='text-center'><span className='p-1.5 bg-green-200 px-6 font-bold rounded-l-full rounded-r-full'>Fait</span></td>
        <td  className='text-center font-bold'>1300 XAF</td>
        <td  className='text-center font-bold'>Devon Lane</td>
    </tr>

    <tr>
        <td className='font-bold text-3xl text-center text-gray-500 p-3'>02</td>
        <td className='text-center'>  Shirt Creme   </td>
        <td  className='text-center'> 
             <ul>
                <li>March 24,2022</li>
                <li className='text-gray-500'>09:20 AM</li>
            </ul></td>
        <td className='text-center'> <span className='p-1.5 bg-orange-200 text-white rounded-l-full rounded-r-full'>En cours</span></td>
        <td  className='text-center font-bold'>2500 XAF</td>
        <td  className='text-center font-bold'>Jenny Wilson</td>
    </tr>

    <tr>
        <td className='font-bold text-3xl text-center text-gray-500 p-3'>03</td>
        <td className='text-center'>  Shirt Creme   </td>
        <td  className='text-center'> 
             <ul>
                <li>March 24,2022</li>
                <li className='text-gray-500'>09:20 AM</li>
            </ul></td>
        <td className='text-center'> <span className='p-1.5 bg-orange-200 text-white rounded-l-full rounded-r-full'>En cours</span></td>
        <td  className='text-center font-bold'>2500 XAF</td>
        <td  className='text-center font-bold'>Jenny Wilson</td>
    </tr>

    <tr>
        <td className='font-bold text-3xl text-center text-gray-500 p-3'>04</td>
        <td className='text-center'>  Shirt Creme   </td>
        <td  className='text-center'> 
             <ul>
                <li>March 24,2022</li>
                <li className='text-gray-500'>09:20 AM</li>
            </ul></td>
        <td className='text-center'> <span className='p-1.5 bg-orange-200 text-white rounded-l-full rounded-r-full'>En cours</span></td>
        <td  className='text-center font-bold'>2500 XAF</td>
        <td  className='text-center font-bold'>Jenny Wilson</td>
    </tr>
   </tbody>
</table>
</div>

</div>
<div class="bg-white p-8 rounded-lg">
 <div className='grid grid-cols-2 gap-8 mb-4'>
 <h1 className='font-bold'>Weekly Transaction Summary</h1>
 <p className='flex justify-center items-center  border  rounded-lg'>Last 7 months < CiCalendarDate  /> </p>
 </div>




{/* Chart */}
<div className='flex flex-col justify-center  items-center'>
<FcComboChart size={200} />
</div>



</div>

    </div>
    </div>




      {/*-- End Main Content Area */} 
    </div>
</div>



























    </>
  )
}

export default Dashboard