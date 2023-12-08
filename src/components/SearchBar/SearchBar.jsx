import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = event => {
    event.preventDefault();
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!query) {
      console.log('error');
      return;
    }
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <SearchBlok>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <HiMagnifyingGlass size="15" />
          </Button>
          <Input
            type="text"
            placeholder="Enter for search movies"
            name="query"
            value={query}
            onChange={changeQuery}
          />
        </Form>
      </SearchBlok>
    </>
  );
};
