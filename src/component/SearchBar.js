import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const Button = styled.button`
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
`;

const Input = styled.input`
  padding: 0.5em;
  color: black;
  border: none;
  border-radius: 3px;
`;

function SearchBar(props) {
  const { searchMovie, query, changeHandler } = props;
  return (
    <div>
      <Form className="d-flex" onSubmit={searchMovie}>
        <Input
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={changeHandler}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default SearchBar;
