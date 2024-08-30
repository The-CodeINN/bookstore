const BookDetailsSkeleton: React.FC = () => (
  <div className='bg-skin-base min-h-screen py-12'>
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='mt-8 bg-white shadow-xl rounded-lg overflow-hidden animate-pulse'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <div className='h-48 w-full md:w-48 bg-skin-muted'></div>
          </div>
          <div className='p-8 w-full'>
            <div className='h-4 bg-skin-muted rounded w-1/4'></div>
            <div className='mt-4 h-8 bg-skin-muted rounded w-3/4'></div>
            <div className='mt-2 h-4 bg-skin-muted rounded w-1/2'></div>
            <div className='mt-4 h-4 bg-skin-muted rounded w-full'></div>
          </div>
        </div>
        <div className='px-8 py-6 border-t border-skin-muted'>
          <div className='h-6 bg-skin-muted rounded w-1/4'></div>
          <div className='mt-4 h-4 bg-skin-muted rounded w-full'></div>
          <div className='mt-2 h-4 bg-skin-muted rounded w-full'></div>
          <div className='mt-2 h-4 bg-skin-muted rounded w-3/4'></div>
        </div>
        <div className='px-8 py-6 bg-skin-muted'>
          <div className='h-6 bg-white rounded w-1/3'></div>
          <div className='mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2'>
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className='h-4 bg-white rounded w-1/4'></div>
                <div className='mt-1 h-4 bg-white rounded w-3/4'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default BookDetailsSkeleton;