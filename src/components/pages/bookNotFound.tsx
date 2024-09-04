import React from 'react';

const BookNotFound: React.FC = () => (
  <div className='flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
    <div className='text-center'>
      <h2 className='mt-2 text-3xl font-extrabold text-gray-900'>
        No Books Found
      </h2>
      <p className='mt-2 text-sm text-gray-600'>
        We couldn't find any books matching your search criteria in our catalog.
      </p>
      <p className='mt-1 text-sm text-gray-600'>
        Try adjusting your search terms or browse our categories for more
        options.
      </p>
    </div>
  </div>
);

export default BookNotFound;
