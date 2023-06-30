import React from 'react'
import images from '../constants/images';
import CardItems from './CardItems';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <CardItems 
                imageSrc={images.double}
                altText='double'
                title='Double User'
                price='$19.99'
                features={['Over 100 Premium Webs', '2 Granted User', 'Premium Icons']}
                buttonClass='bg-[#00df9a] text-black'
                cardMargin='my-4'
                backgroundColor='bg-white'
            />
            <CardItems 
                imageSrc={images.single}
                altText='single'
                title='Single User'
                price='$9.99'
                features={['Limited Premium Webs', '1 Granted User', 'Premium Icons']}
                buttonClass='bg-black text-[#00df9a]'
                cardMargin='my-8 md:my-0 bg-gray-100'
                backgroundColor='bg-gray-50'
            />
            <CardItems 
                imageSrc={images.triple}
                altText='triple'
                title='Triple User'
                price='$29.99'
                features={['Unlimited Premium Webs', '3 Granted User', 'Premium Icons & Images']}
                buttonClass='bg-[#00df9a] text-black'
                cardMargin='my-4'
                backgroundColor='bg-white'
            />
        </div>
    </div>
  )
}

export default Cards