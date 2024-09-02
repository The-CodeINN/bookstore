import React, { useState, useEffect } from 'react';
import { useSearchStore } from '../../store/searchStore';
import { useQueryClient } from '@tanstack/react-query';
import debounce from 'lodash/debounce';
import SearchIcon from '../../assets/icons/searchIcon';

const SearchBar: React.FC = () => {
  const { query, setQuery } = useSearchStore();
  const [localQuery, setLocalQuery] = useState('');
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
  }, [debouncedSetQuery]);

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

  const handleBlur = () => {
    if (!localQuery.trim()) {
      setLocalQuery(''); // Clear local input
    }
  };

  return (
    <div className='flex justify-between'>
      <label className='relative block w-full'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2 opacity-75'>
          <SearchIcon />
        </span>
        <input
          type='text'
          placeholder={query ? `${query}` : 'Find your next favourite book'}
          value={localQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className='block w-full rounded border-2 border-skin-base 
        border-opacity-40 bg-skin-base py-3 pl-10
        pr-16 caret-skin-accent placeholder:italic 
        placeholder:text-opacity-75 focus:border-skin-accent focus:outline-none'
        />
      </label>
    </div>
  );
};

export default SearchBar;
