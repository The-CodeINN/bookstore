import { Book } from "../../types";
import { Link } from "react-router-dom";
import notFoundCover from "../../assets/images/cover_not_found.jpg";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const { volumeInfo } = book;
  return (
    <article
      className={`flex flex-col gap-y-2 rounded font-sans shadow hover:shadow-lg `}
    >
      <Link
        to={`/book/${book.id}`}
        title={volumeInfo?.title}
        className='image-wrapper rounded border-2 border-skin-muted bg-skin-muted p-4 sm:p-8 md:p-4 lg:p-8'
      >
        <div className='relative h-44 w-full overflow-hidden transition-transform duration-200 hover:scale-105'>
          <img
            src={
              volumeInfo.imageLinks?.thumbnail ??
              volumeInfo.imageLinks?.small ??
              notFoundCover
            }
            alt={`${volumeInfo.title} cover`}
            sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw,50vw'
            className='object-contain'
          />
        </div>
      </Link>
      <div className='content px-4 pb-4'>
        <header className='h-10 line-clamp-2'>
          <h3 className='text-sm'>{volumeInfo.title ?? "No title"}</h3>
        </header>
      </div>
    </article>
  );
};

export default BookCard;
