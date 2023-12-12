import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const fetchDrinkById = async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

  // throw error
  if (!response.ok) {
    throw new Error('Failed to fetch a drink with this ID');
  }

  const data = await response.json();
  return data;
}

const SingleDrinkPage =  async ({ params }) => {
  const data = await fetchDrinkById(params.id);
  const { strDrinkThumb, strDrink, strInstructions } = data.drinks[0];

  return (
    <>
      <Link href="/drinks" className='btn btn-primary mb-8'>Back to drinks</Link>
      <h1 className="text-4xl mb-8">{strDrink}</h1>
      <div className="relative h-96 mb-4">
      <Image
        src={strDrinkThumb}
        alt={`Image of drink named ${strDrink}`}
        sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw"
        className="rounded-md object-cover"
        priority
        fill
      />
      </div>
      <h2 className="text-2xl my-8">Instruction:</h2>
      <p>{strInstructions}</p>
    </>
  );
};

export default SingleDrinkPage;