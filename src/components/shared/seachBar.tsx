import React, { useState, useEffect } from 'react';
import { useSearchStore } from '../../store/searchStore';
import { useQueryClient } from '@tanstack/react-query';
import debounce from 'lodash/debounce';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [localQuery, setLocalQuery] = useState('');
  const { setQuery } = useSearchStore();
  const queryClient = useQueryClient();

  const debouncedSetQuery = debounce((value: string) => {
    if (value.trim()) {
      setQuery(value);
      queryClient.invalidateQueries({ queryKey: ['books', value] });
    }
  }, 300);

  useEffect(() => {
    return () => {
      debouncedSetQuery.cancel();
    };
  }, []);

  const handleSearch = () => {
    if (localQuery.trim()) {
      setQuery(localQuery);
      queryClient.invalidateQueries({ queryKey: ['books', localQuery] });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);
    debouncedSetQuery(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='mb-4 relative'>
      <input
        type='text'
        value={localQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='Search for books...'
        className='w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button
        onClick={handleSearch}
        className='absolute right-2 top-1/2 transform -translate-y-1/2'
        aria-label='Search'
      >
        <Search className='text-gray-400' />
      </button>
    </div>
  );
};

export default SearchBar;
