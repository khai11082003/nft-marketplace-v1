import React from 'react';
import { Link } from 'react-router-dom';
export const style = {
  li: 'hover:text-[#D01498] cursor-pointer',
};
export default function HeaderApp () {
  type MyState = {
    status: boolean;
  };
  const [status, setStatus] = React.useState<MyState>({
    status: false,
  });

  const setState = ({ status }: any) => {
    setStatus({
      status: !status,
    });
  };
  return (
    <div className=' bg-[#00000000] text-white flex items-center py-[35px]  w-[100%] mx-auto container'>
      <ul className='flex justify-between w-[100%] items-center'>
        <div className='xs:hidden md:flex justify-between w-[550px]'>
          {' '}
          <Link to='/'>
            {' '}
            <li className={style.li}>Home</li>
          </Link>
          <li className={style.li}>Sellers</li>
          <li className={style.li}>Collectibles</li>
          <li className={style.li}>Owner</li>
          <li className={style.li}>About</li>
          <li className={style.li}>List to Market</li>
        </div>
        <div className='relative'>
          {' '}
          <i
            className='fa-solid fa-bars md:hidden sm:block text-[30px] relative mr-2'
            onClick={() => setState(status)}
          />
          <div
            className={`xs:${
              status.status ? 'block' : 'hidden'
            } md:hidden justify-between w-[100vw] absolute top-[55px]  bg-[#252222] z-10`}
          >
            {' '}
            <Link to='/'>
              {' '}
              <li className='bg-[#ddd] p-1 font-bold hover:bg-slate-50'>
                Home
              </li>
            </Link>
            <li className='bg-[#ddd] p-1  font-bold hover:bg-slate-50'>
              Sellers
            </li>
            <li className='bg-[#ddd] p-1  font-bold hover:bg-slate-50'>
              Collectibles
            </li>
            <li className='bg-[#ddd] p-1  font-bold hover:bg-slate-50'>
              Owner
            </li>
            <li className='bg-[#ddd] p-1  font-bold hover:bg-slate-50'>
              About
            </li>
            <li className='bg-[#ddd] p-1  font-bold hover:bg-slate-50'>
              List to Market
            </li>
          </div>
        </div>
        <div className='flex items-center'>
          <li>
            <button className='px-[5px] py-[2px]'> Create NFT & 1155</button>
          </li>
          <li>
            <button className='px-[5px] py-[2px]'>Connect Wallet</button>
          </li>
        </div>
      </ul>
    </div>
  );
}
