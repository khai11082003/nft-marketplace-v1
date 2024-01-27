import React from 'react';

export default function HomeFooter () {
  const style = {
    li: '1',
  };
  const listIcon = [
    'https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client1.png',
    'https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client6.png',
    'https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client4.png',
    'https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client3.png',
    'https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client2.png',
    'https://enefti.modeltheme.com/wp-content/uploads/2022/01/Main-Client1.png',
  ];
  return (
    <div className='bg-[#000]'>
      {' '}
      <div className='w-[90%] mx-auto'>
        <div className=' flex justify-between overflow-y-hidden'>
          {listIcon.map((item, index) => {
            return (
              <img
                src={item}
                key={index}
                className='w-[180px]  cursor-pointer py-[20px] lg:w-[160px] md:block sm:w-[130px] xs:hidden'
              />
            );
          })}
        </div>
      </div>
      <div className=' border-b-[1px] border-white w-[100%] '></div>
      <div className='text-white lg:grid md:grid grid-cols-4 gap-5  text-center w-[90%] mx-auto text-[20px] py-[80px] sm:block'>
        <ul>
          <li className='text-[30px] md:text-start font-bold mb-3 sm:text-center'>
            Our Address
          </li>
          <li className='sm:text-start xs:text-center'>
            4 Grand Central Terminal New York, NY 10 City name, CA 90896 USA.
            contact@example.com
          </li>
        </ul>
        <ul>
          <li className='text-[30px] font-bold  mb-3'>Useful Links</li>
          <li className={`mb-1 ${style.li}`}>Collectibles</li>
          <li className={`mb-1 ${style.li}`}>Photography</li>
          <li className={`mb-1 ${style.li}`}>Trading Cards</li>
          <li className={`mb-1 ${style.li}`}>Virtual Worlds</li>
        </ul>
        <ul>
          <li className='text-[30px] font-bold  mb-3'>Our Policy</li>
          <li className={`mb-1 ${style.li}`}>Help Center</li>
          <li className={`mb-1 ${style.li}`}>My Collections</li>
          <li className={`mb-1 ${style.li}`}>Platform Status</li>
          <li className={`mb-1 ${style.li}`}>Newsletter</li>
        </ul>
        <ul>
          <li className='text-[30px] md:text-start font-bold  mb-3 sm:text-center'>
            Stay Informed By Newsletter
          </li>
          <li className='sm:text-start xs:text-center'>
            *Subscribe to our newsletter to receive early discount offers and
            updates.
          </li>
        </ul>
      </div>
      <div className=' border-b-[1px] border-white w-[100%]'></div>
      <div className='w-[90%] text-white py-[30px] mx-auto sm:flex justify-between text-[20px] xs:block xs:text-center'>
        <div>Copyright by ModelTheme. All Rights Reserved.</div>
        <div>Elite Author on ThemeForest.</div>
      </div>
    </div>
  );
}
