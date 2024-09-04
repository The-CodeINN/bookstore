import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchStore } from '../../store/searchStore';
import { searchBooks } from '../../services/googleBooksApi';
import BookCard from './bookCard';
import LoadMoreButton from './loadMoreButton';
import { Book } from '../../types';
import CardSkeletons from './cardSkeleton';
import { Link } from 'react-router-dom';
import withLoading from '../hoc/withLoading';

interface BooksPage {
  items: Book[];
  totalItems: number;
}

interface BookListProps {
  data: { pages: BooksPage[] } | undefined;
  isPending: boolean;
  isLoadingMore: boolean;
  query: string;
}

const BooksSection: React.FC = () => {
  const query = useSearchStore((state) => state.query);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
  } = useInfiniteQuery({
    queryKey: ['books', query],
    queryFn: ({ pageParam = 0 }) => searchBooks(query, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextIndex = allPages.length * 10;
      return nextIndex < lastPage.totalItems ? nextIndex : undefined;
    },
    enabled: !!query,
  });

  const handleLoadMore = async () => {
    if (hasNextPage && !isFetchingNextPage) {
      setIsLoadingMore(true);
      await fetchNextPage();
      setIsLoadingMore(false);
    }
  };

  const loadMoreText = isFetchingNextPage ? 'Loading...' : 'Load More Books';

  if (isError) return <div>Error fetching data</div>;

  const LoadMoreButtonWithHoc = withLoading(LoadMoreButton);

  return (
    <div className='py-14'>
      <section className='mx-auto max-w-6xl px-4 py-6 md:px-8'>
        <div className='flex items-baseline justify-between'>
          <h2
            id='books'
            className='font-serif text-2xl font-medium capitalize md:text-2xl'
          >
            Our Catalog
          </h2>
        </div>
        <BookList
          data={data}
          isPending={isPending}
          isLoadingMore={isLoadingMore}
          query={query}
        />
        <div className='mt-8 flex items-center justify-center'>
          {hasNextPage && (
            <LoadMoreButtonWithHoc
              onClick={handleLoadMore}
              text={loadMoreText}
              disabled={isFetchingNextPage || isLoadingMore}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default BooksSection;

const BookList: React.FC<BookListProps> = ({
  data,
  isPending,
  isLoadingMore,
  query,
}) => {
  if (isPending) {
    return <CardSkeletons num={10} />;
  }

  if (!data?.pages.length) {
    return <div>No books found</div>;
  }

  return (
    <>
      {data.pages.map((page, pageIndex) => (
        <div
          className={`cards-container transition-all duration-300 ease-in-out ${
            pageIndex === data.pages.length - 1 ? 'animate-fade-in-up' : ''
          }`}
          key={page.items[0].id}
        >
          {page.items.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`} state={{ query, data }}>
              <BookCard book={book} />
            </Link>
          ))}
        </div>
      ))}
      {isLoadingMore && (
        <div className='animate-fade-in-up mt-4'>
          <CardSkeletons num={10} slug='load-more' />
        </div>
      )}
    </>
  );
};
