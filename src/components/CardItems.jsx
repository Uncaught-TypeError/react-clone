import React from 'react'

const CardItems = ({imageSrc, altText, title, price, features, buttonClass, cardMargin, backgroundColor }) => {
  return (
    <div className={`card border md:border-none ${cardMargin}`}>
        <img src={imageSrc} alt={altText} className={`w-20 mx-auto mt-[-3rem] ${backgroundColor}`}/>
        <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
        <p className='text-center text-4xl font-bold mb-8'>{price}</p>
        <div className='text-center font-medium'>
            {features.map((feature, index) =>(
                <p key={index} className='py-2 border-b mx-8'>
                    {feature}
                </p>
            ))}
        </div>
        <button className={`green-btn ${buttonClass}`}>Start Trial</button>
    </div>
  );
}

export default CardItems