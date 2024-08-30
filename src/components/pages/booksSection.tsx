import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchStore } from "../../store/searchStore";
import { searchBooks } from "../../services/googleBooksApi";
import BookCard from "./bookCard";
import LoadMoreButton from "./loadMoreButton";
import { Book } from "../../types";
import CardSkeletons from "./cardSkeleton";

interface BooksPage {
  items: Book[];
  totalItems: number;
}

interface BookListProps {
  data:
    | {
        pages: BooksPage[];
      }
    | undefined;
  isPending: boolean;
}

const BooksSection: React.FC = () => {
  const query = useSearchStore((state) => state.query);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
  } = useInfiniteQuery({
    queryKey: ["books", query],
    queryFn: ({ pageParam = 0 }) => searchBooks(query, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextIndex = allPages.length * 10;
      return nextIndex < lastPage.totalItems ? nextIndex : undefined;
    },
    enabled: !!query,
  });

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const loadMoreText = isFetchingNextPage ? "Loading..." : "Load More Books";

  if (isError) return <div>Error fetching data</div>;

  return (
    <div id='books' className='py-14'>
      <section className='mx-auto max-w-6xl px-4 py-6 md:px-8'>
        <div className='flex items-baseline justify-between'>
          <h2 className='font-serif text-2xl font-medium capitalize md:text-2xl'>
            Our Catalog
          </h2>
          {hasNextPage && (
            <LoadMoreButton
              onClick={handleLoadMore}
              text={loadMoreText}
              disabled={isFetchingNextPage}
              className='hidden md:flex'
            />
          )}
        </div>
        <BookList data={data} isPending={isPending} />
        <div className='mt-8 flex items-center justify-center md:hidden'>
          {hasNextPage && (
            <LoadMoreButton
              onClick={handleLoadMore}
              text={loadMoreText}
              disabled={isFetchingNextPage}
            />
          )}
        </div>
      </section>
    </div>
  );
};

const BookList: React.FC<BookListProps> = ({ data, isPending }) => (
  <>
    {isPending ? (
      <CardSkeletons num={10} />
    ) : data?.pages.length ? (
      data.pages.map((page, i) => (
        <div className='cards-container' key={i}>
          {page.items.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ))
    ) : (
      <div>No books found</div>
    )}
  </>
);

export default BooksSection;
