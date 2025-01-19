import React from 'react';
import { assets } from '../assets/assets';

const Joincompany = () => {
  return (
        <div className='text-center py-12'>
      <h5 className=' font-medium mt-8'>Join 4,000+ companies already growing</h5>
      <div className='flex flex-wrap  justify-center gap-6 py-2'>
        <img src={assets.logo1_img} alt="Logo 1" className="w-32 h-32 object-contain" />
        <img src={assets.logo2_img} alt="Logo 2" className="w-32 h-32 object-contain" />
        <img src={assets.logo3_img} alt="Logo 3" className="w-32 h-32 object-contain" />
        <img src={assets.logo4_img} alt="Logo 4" className="w-32 h-32 object-contain" />
        <img src={assets.logo5_img} alt="Logo 5" className="w-32 h-32 object-contain" />
        <img src={assets.logo6_img} alt="Logo 6" className="w-32 h-32 object-contain" />
      </div>
    </div>
  )
}

export default Joincompany
