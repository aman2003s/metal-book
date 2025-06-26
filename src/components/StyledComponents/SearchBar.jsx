import React from 'react';
import styled from 'styled-components';

const Input = styled.input({
  padding: "8px 12px",
  border: "1px solid #ccc",
  borderRadius: "20px",
  fontSize: "16px",
  maxWidth: "320px",
  width: "100%",
  margin: "0 8px",
  "@media (max-width: 1200px)": {
    maxWidth: "100%",
    margin: "0 8px",
  }
});

const SearchBar = ({ value, onChange, placeholder = 'Search here' }) => (
  <Input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default SearchBar; 