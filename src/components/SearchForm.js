import React from 'react';

import { useInput } from '../hooks/useInput';

/**
 *
 * SearchForm component
 */
function SearchForm({ value, onSearch = (f) => f }) {
  const [searchProps, resetSearchProp, setValue] = useInput(value);

  const submit = (e) => e.preventDefault();
  return (
    <form
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        placeItems: 'stretch start',
        gridAutoColumns: 'min-content',
        gridGap: '10px',
      }}
      onSubmit={submit}
    >
      <input
        id='searchInput'
        {...searchProps}
        type='text'
        placeholder='Github User Login...'
        required
      />
      <button
        onClick={() => {
          setValue(searchProps.value);
          onSearch(searchProps.value);
        }}
      >
        search
      </button>
    </form>
  );
}

export default SearchForm;
