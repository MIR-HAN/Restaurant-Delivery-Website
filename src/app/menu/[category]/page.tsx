
import React from 'react'
import { burgers, pastas, pizzas } from '../../../../data'
import Link from 'next/link'
import Image from 'next/image'


type Params = {
  params: {
    category: string;
  };
};

const CategoryPage = ({params}:Params) => {

  const { category } = params;

  const dataToDisplay =
  category === 'pizzas'
    ? pizzas
    : category === 'burgers'
    ? burgers
    : category === 'pastas'
    ? pastas
    : [];

  return (
    <div className='flex flex-wrap text-red-500 '>
      {dataToDisplay.map(item => (
        <Link className='w-full flex flex-col justify-between h-[60vh] border-r-2 border-b-2 p-4 border-red-500 md:w-1/2 lg:w-1/3 group odd:bg-fuchsia-50' href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img &&
            <div className='relative h-[80%]'>
              <Image src={item.img} alt="pizza" fill className='object-contain'></Image>
            </div>}
          {/* TEXT CONTAINER */}

          <div className='flex items-center justify-between '>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>€{item.price}</h2>
            <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md font-bold'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage