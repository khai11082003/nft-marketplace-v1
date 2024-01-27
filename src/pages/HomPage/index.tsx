import React from 'react';
// import HomeFooter from '../components/HomeFooter';
import NFTGrid from '../../components/NFT/NFTGrid';
// import Container from '../components/Container/Container';
// import '../styles/Buy.module.css';
import './index.scss';
import HeaderApp from '../../components/HeaderApp';
import HomeFooter from '../../components/FooterApp';

export default function Home () {
  return (
    <div className='bg-[#191c1f]    xs:px-[5px]  '>
      <div className='bg-[url(https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pattern.jpg?id=6678)]'>
        <HeaderApp />
        <div className='container mx-auto lg:flex  mt-[50px]  items-center pb-[150px] sm:block'>
          <img
            src='https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-1024x710.jpg'
            alt=''
            className='lg:w-[55%] sm:w-[100%] xs:hidden md:block'
          />
          <div className='text-white lg:ml-[40px] sm:ml-0 sm:mt-5 relative z-0'>
            <div className='font-bold-1 font-bold xl:text-[60px] sm:text-[45px] xs:text-[28px]'>
              Discover, Collect &<br /> Sell{' '}
              <strong className='bg-gradient-to-r from-pink-500 to-indigo-500 w-full h-20 bg-clip-text text-transparent'>
                Extraordinary
              </strong>
              <br /> NFTs
            </div>
            <div className='text-[16px]'>
              The Crypto Monkey is a high-quality collection of 100 <br />
              unique monkeys on the NFTMart marketplace.
            </div>
          </div>
        </div>
      </div>
      {/* Product */}
      <div className='container mx-auto mb-5'>
        {' '}
        <div className='container mx-auto text-white sm:text-[30px] font-bold xs:text-[20px] mt-5 mb-1'>
          Explore NFTs
        </div>
        <div className='container mx-auto'>
          {/* <Container maxWidth='lg'> */}
          <NFTGrid
            isLoading={false}
            data={[
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
              { name: 'kai', id: '1' },
            ]}
          />
          {/* </Container> */}
        </div>
      </div>

      <div className='bg-[url(https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pattern.jpg?id=6678)] text-white py-[80px] pb-[150px]'>
        <div className='text-center py-[20px] text-[40px] font-bold'>
          Create and Sell Your NFTs
        </div>

        <div className='md:grid grid-cols-4 gap-10 container mx-auto text-[18px] sm:block my-[40px]'>
          {' '}
          <div>
            <div className='py-[10px] xs:text-center'>
              {' '}
              <i className='fa-solid fa-book text-[25px] bg-[#d01498] py-[20px] px-[20px] rounded-[50%] cursor-pointer transition duration-150 ease-in-out hover:scale-[110%]'></i>
            </div>
            <div className='font-bold xs:text-center text-[20px] py-[10px]'>
              Set up your Wallet
            </div>
            <div className='xs:text-center'>
              Et ligula ullamcorper malesuada proin libero nunc consequat.
              Sagittis aliquam malesuada bibendum arcu.
            </div>
          </div>
          <div>
            <div className='py-[10px] xs:text-center'>
              {' '}
              <i className='fa-regular fa-image text-[25px] xs:text-center bg-[#d01498] py-[20px] px-[20px] rounded-[50%] cursor-pointer transition duration-150 ease-in-out hover:scale-[110%]'></i>{' '}
            </div>
            <div className='font-bold text-[20px] py-[10px] xs:text-center'>
              Create your Collection
            </div>
            <div className='xs:text-center'>
              At in tellus integer feugiat scelerisque varius morbi enim nunc.
              Faucibus ornare suspendisse sed nisi lacus.
            </div>
          </div>
          <div>
            <div className='py-[10px] xs:text-center'>
              {' '}
              <i className='fa-solid fa-tv xs:text-center text-[25px] bg-[#d01498] py-[20px] px-[20px] rounded-[50%] cursor-pointer transition duration-150 ease-in-out hover:scale-[110%]'></i>
            </div>
            <div className='font-bold text-[20px] py-[10px] xs:text-center'>
              Add your NTFs
            </div>
            <div className='sm:text-center'>
              Varius sit amet mattis vulputate enim nulla. Pulvinar mattis nunc
              sed blandit libero volutpat sed. In nulla.
            </div>
          </div>
          <div>
            <div className='py-[10px] xs:text-center'>
              {' '}
              <i className='fa-regular xs:text-center fa-paper-plane text-[25px] bg-[#d01498] py-[20px] px-[20px] rounded-[50%] cursor-pointer transition duration-150 ease-in-out hover:scale-[110%]'></i>{' '}
            </div>
            <div className='font-bold text-[20px] py-[10px] xs:text-center'>
              List item for Sale
            </div>
            <div className='xs:text-center'>
              Placerat vestibulum lectus mauris ultrices eros. Cursus vitae
              congue mauris rhoncus aenean vel.
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto text-white sm:text-[30px] font-bold pt-[100px] xs:text-[20px]'>
        Hottest Bids
      </div>
      <div className='pb-[100px] container mx-auto'>
        {/* <Container maxWidth='xl'> */}
        <NFTGrid
          isLoading={false}
          data={[
            { name: 'kai', id: '1' },
            { name: 'kai', id: '1' },
            { name: 'kai', id: '1' },
            { name: 'kai', id: '1' },
            { name: 'kai', id: '1' },
          ]}
        />
        {/* </Container> */}
      </div>
      <HomeFooter />
    </div>
  );
}
