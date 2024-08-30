import React from "react";
import { Link } from "react-router-dom";
import { Book } from "../../types";
import notFoundCover from "../../assets/images/cover_not_found.jpg";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { volumeInfo } = book;

  const formatAuthors = (authors: string[] | undefined) => {
    if (!authors || authors.length === 0) return "Unknown Author";
    if (authors.length === 1) return authors[0];
    return `${authors[0]} et al.`;
  };

  const formatDate = (date: string | undefined) => {
    if (!date) return "Unknown Date";
    return new Date(date).getFullYear().toString();
  };

  return (
    <article className='flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl'>
      <Link
        to={`/book/${book.id}`}
        title={volumeInfo?.title}
        className='relative block h-48 overflow-hidden bg-gray-100'
      >
        <img
          src={volumeInfo.imageLinks?.thumbnail ?? notFoundCover}
          alt={`${volumeInfo.title} cover`}
          sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw,50vw'
          className='h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105'
        />
      </Link>
      <div className='flex flex-1 flex-col justify-between p-4'>
        <div>
          <h3 className='mb-2 text-xl font-semibold leading-tight text-gray-900 line-clamp-2'>
            {volumeInfo.title ?? "No title"}
          </h3>
          <p className='text-sm text-gray-600 line-clamp-1'>
            {formatAuthors(volumeInfo.authors)}
          </p>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <span className='text-sm text-gray-500'>
            {formatDate(volumeInfo.publishedDate)}
          </span>
          <Link
            to={`/book/${book.id}`}
            className='rounded bg-skin-accent-dark px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-skin-accent'
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
