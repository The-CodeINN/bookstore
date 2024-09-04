import React, { useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBookDetails } from '../../services/googleBooksApi';
import notFoundCover from '../../assets/images/cover_not_found.jpg';
import BookDetailsSkeleton from '../../components/pages/bookDetailsSkeleton';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { query, data: previousData } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: book,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['book', id],
    queryFn: () => getBookDetails(id!),
  });

  if (isLoading) return <BookDetailsSkeleton />;
  if (isError)
    return (
      <div className='text-center text-red-500'>
        Error fetching book details
      </div>
    );
  if (!book) return <div className='text-center'>Book not found</div>;

  const { volumeInfo } = book;

  return (
    <div className='bg-skin-base min-h-screen py-12 overflow-y-auto'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Link
          to='/#books'
          className='text-skin-accent hover:text-skin-accent-dark transition-colors duration-200'
          state={{ query, data: previousData }}
        >
          &larr; Back to Search
        </Link>
        <div className='mt-8 bg-white shadow-xl rounded-lg overflow-hidden'>
          <div className='md:flex'>
            <div className='md:flex-shrink-0'>
              <img
                className='h-48 w-full object-cover md:w-48'
                src={volumeInfo.imageLinks?.thumbnail ?? notFoundCover}
                alt={`${volumeInfo.title} cover`}
              />
            </div>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-skin-accent font-semibold'>
                {volumeInfo.categories?.[0] || 'Uncategorized'}
              </div>
              <h1 className='mt-1 text-4xl font-serif leading-tight font-medium text-skin-dark'>
                {volumeInfo.title ?? 'Unknown Title'}
              </h1>
              <p className='mt-2 text-skin-dark'>
                by {volumeInfo.authors?.join(', ') || 'Unknown Author'}
              </p>
              <div className='mt-4 flex items-center'>
                <span className='text-skin-dark'>
                  Published: {volumeInfo.publishedDate || 'Unknown'}
                </span>
                <span className='mx-2'>•</span>
                <span className='text-skin-dark'>
                  {volumeInfo.pageCount} pages
                </span>
              </div>
              {volumeInfo.previewLink && (
                <a
                  href={volumeInfo.previewLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'
                >
                  Preview on Google Books
                </a>
              )}
            </div>
          </div>
          <div className='px-8 py-6 border-t border-skin-muted'>
            <h2 className='text-2xl font-serif font-medium text-skin-dark'>
              Description
            </h2>
            <p
              className='mt-4 text-skin-dark leading-relaxed'
              dangerouslySetInnerHTML={{
                __html: volumeInfo.description || 'No description available.',
              }}
            ></p>
          </div>
          <div className='px-8 py-6 bg-skin-muted'>
            <h2 className='text-2xl font-serif font-medium text-skin-dark'>
              Additional Information
            </h2>
            <dl className='mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2'>
              <DetailItem
                title='Publisher'
                content={volumeInfo.publisher || 'Unknown'}
              />
              <DetailItem
                title='ISBN'
                content={
                  volumeInfo.industryIdentifiers?.[0]?.identifier || 'N/A'
                }
              />
              <DetailItem
                title='Language'
                content={volumeInfo.language || 'Unknown'}
              />
              <DetailItem
                title='Print Type'
                content={volumeInfo.printType || 'Unknown'}
              />
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <div>
    <dt className='font-medium text-skin-dark'>{title}</dt>
    <dd className='mt-1 text-skin-dark'>{content}</dd>
  </div>
);

export default BookDetails;
