import Link from 'next/link';
import Image from 'next/image';

export const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map(drink => (
        <li key={drink.idDrink}>
          <Link href={`drinks/${drink.idDrink}`} className="text-xl font-medium">
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                alt={`Image of drink named ${drink.strDrink}`}
                sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw"
                className="rounded-md object-cover"
                fill
              />
            </div>
            <p>{drink.strDrink}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
};