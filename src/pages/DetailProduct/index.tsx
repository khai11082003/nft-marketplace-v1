// src/ProductDetail.tsx

import React from 'react';
// import { useParams } from 'react-router-dom'; // Sử dụng useParams để lấy thông tin từ URL
import HeaderApp from '../../components/HeaderApp';
import BasicModal from '../../components/Modal';
import './index.scss';

interface Product {
  id: number;
  title: string;
  creator: string;
  edition: string;
  price: string;
  description: string;
  imageUrl: string;
}

const product: Product = {
  id: 1,
  title: 'NFT Title 1',
  creator: 'Artist 1',
  edition: '#123/500',
  price: '$100.00 ETH',
  description: 'Description for NFT 1...',
  imageUrl: 'nft_image1.jpg',
};

const ProductDetail: React.FC = () => {
  //   const { productId } = useParams<{ productId: string }>(); // Lấy productId từ URL
  //   const product = productList.find((p) => p.id.toString() === productId);

  //   if (!product) {
  //     return <div>Product not found!</div>;
  const [bidValue, setBidValue] = React.useState<string>();

  //   }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className='bg-[#000000d6] text-white'>
      <HeaderApp />
      <BasicModal open={open} setOpen={setOpen} />
      <div className='container mx-auto py-[30px]'>
        <div className=' rounded-lg shadow-lg lg:flex sm:block justify-between  '>
          <img
            src='logo512.png'
            alt={`NFT Product ${product.id}`}
            className='lg:w-[50%] sm:w-[100%] rounded-lg mb-4 bg-[#404143] '
          />
          <div className='lg:w-[46%] sm:w-[100%]'>
            <div className='mb-10'>
              <div className='font-bold text-white text-[50px]'>
                {product.title}
              </div>
              <strong className='italic'>Token ID #1</strong>
            </div>
            <div className='text-white mb-2 flex w-[36%] py-[10px] px-[10px] justify-between items-center '>
              <div>
                <img src='logo512.png' className='w-[60px]' />
              </div>
              <div className='cursor-pointer text-[16px] font-bold'>
                <strong className='text-[#939da7]'>Current Owner</strong> <br />{' '}
                0xd1bcE7...c0E6
              </div>
            </div>
            <div className='text-lg mb-2 bg-[#333639] py-[10px] px-[40px] rounded-[30px] mb-[40px]'>
              <strong className='text-[20px]'>Price</strong>
              <br />
              {product.price}
            </div>
            <div
              onClick={handleOpen}
              className='bg-[#fff] text-black text-center py-[10px] rounded-[10px] border-[1px] hover:bg-[#0000] hover:text-white transition duration-300 cursor-pointer'
            >
              Connect Wallet
            </div>
            <div className='mt-4 text-center mb-4'>or</div>

            <input
              className='input'
              defaultValue={0}
              type='number'
              step={0.000001}
              onChange={e => {
                setBidValue(e.target.value);
              }}
            />
            {/* Connect Wallet Button */}
            <div className='bg-[#fff] text-black text-center py-[10px] rounded-[10px] border-[1px] hover:bg-[#0000] hover:text-white transition duration-300 cursor-pointer'>
              Connect Wallet
            </div>
          </div>
          {/* History Section */}
        </div>
        <div className='mt-8'>
          <h2 className='text-xl font-bold  mb-4'>Description</h2>
          <div>A blue circle NFT from the Shapes Collection</div>
        </div>
        <div className='mt-8'>
          <h2 className='text-xl font-bold  mb-4'>Traits</h2>
          <div className={`traitsContainer w-[50%]`}>
            {Object.entries({
              shape: 'pentagon',
              color: 'purple',
              sides: '5',
            }).map(([key, value]) => (
              <div className={`traitContainer`} key={key}>
                <p className='traitName'>{key}</p>
                <p className='traitValue'>{value?.toString() || ''}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <h2 className='text-xl font-bold  mb-4'>History</h2>

          <div className={`traitsContainer w-[50%]`}>
            {[1]?.map((event, index) => (
              <div
                // key={event.transaction.transactionHash}
                className='eventsContainer'
              >
                <div className='eventContainer'>
                  <p className='traitName'>Event</p>
                  <p className='traitValue'>
                    {
                      // if last event in array, then it's a mint
                      //   index === transferEvents.length - 1 ? 'Mint' : 'Transfer'
                    }
                  </p>
                </div>

                <div className='eventContainer'>
                  <p className='traitName'>From</p>
                  <p className='traitValue'>
                    {/* {event.data.from?.slice(0, 4)}... */}
                    {/* {event.data.from?.slice(-2)} */}
                  </p>
                </div>

                <div className='eventContainer'>
                  <p className='traitName'>To</p>
                  <p className='traitValue'>
                    {/* {event.data.to?.slice(0, 4)}... */}
                    {/* {event.data.to?.slice(-2)} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
