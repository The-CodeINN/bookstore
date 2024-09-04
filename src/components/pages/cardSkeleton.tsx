// import HeartIcon from "@/icons/HeartIcon"
import { generateUniqueArray } from '../../libs/utils';

const CardSkeletons = ({ num, slug }: { num: number; slug?: string }) => {
  // Generate Unique set of numbers array
  const numOfCards = generateUniqueArray(num);

  return (
    <div className='cards-container'>
      {numOfCards.map((id) => (
        <div
          key={`${slug}${id}`}
          className='flex flex-col gap-y-2 rounded border-2 border-gray-100 last:hidden sm:last:flex sm:even:hidden md:last:hidden md:even:flex lg:last:flex'
        >
          <div className='p-4 sm:p-8 md:p-4 lg:p-8'>
            <div className='h-44 animate-pulse bg-slate-200' />
          </div>
          <div className='content px-4 pb-4'>
            <header className='h-10 line-clamp-2'>
              <h3 className='h-4 w-1/2 animate-pulse bg-slate-200 text-sm' />
            </header>
            <div className='price mb-3 font-medium'>
              <div className='h-4 w-2/3 animate-pulse bg-slate-200'></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeletons;
