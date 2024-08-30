import { Link } from "react-router-dom";
import { searchBooks } from "../../services/googleBooksApi";
import { useSearchStore } from "../../store/searchStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import CaretDownIcon from "../../assets/icons/caretDownIcon";
import BookCard from "./bookCard";
import React from "react";

const BooksSection = () => {
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

  return (
    <div id='books' className='py-14'>
      <section className='mx-auto max-w-6xl px-4 py-6 md:px-8'>
        <div className='flex items-baseline justify-between'>
          <h2 className='font-serif text-2xl font-medium capitalize md:text-2xl'>
            Load More
          </h2>
          <SeeAll href={`/categories/${1}`} />
        </div>
        <div className='cards-container'>
          {data?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.items.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

type SeeAllType = {
  href: string;
  bottom?: boolean;
};
const SeeAll = ({ href, bottom = false }: SeeAllType) => (
  <Link
    to={href}
    className={`${
      bottom ? "flex" : "hidden md:flex"
    } items-center font-sans font-medium`}
  >
    See All
    <CaretDownIcon className='-rotate-90 scale-75' />
  </Link>
);

export default BooksSection;
