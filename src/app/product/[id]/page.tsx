import React from 'react';
import Image from 'next/image';
import { burgers, pastas, pizzas } from '../../../../data';
import Price from '@/app/components/Price';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    id: string;
  };
};

const SingleProduct = ({ params }: Params) => {
  const { id } = params;

  // Find the product by ID in the appropriate category
  const findProductById = (id: string) => {
    return (
      [...pastas, ...burgers, ...pizzas].find(product => product.id.toString() === id) || null
    );
  };

  const product = findProductById(id);

  if (!product) {
    return notFound();// if product null || undefined
   }

  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>
      {/* IMAGE CONTAINER */}
      {product.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image src={product.img} alt={product.title} fill className='object-contain' />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{product.title}</h1>
        <p>{product.desc}</p>
        <Price price={product.price} id={product.id} options={product.options} />
      </div>
    </div>
  );
};

export default SingleProduct;
