import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovieStart } from "./redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import SearchBar from "./component/SearchBar";
import MovieBox from "./component/MovieBox";
import styled from "styled-components";

const StyledContainer = styled.section`
  width: 100%;
  margin: 1em auto;
  background-color: darkslategray;
  max-width: 1320px;
`;

const StyledGrid = styled.div`
  display: grid;
  margin-left: .5px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.2em;
  justify-content: center;
`;

const StyledLoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: "10px";
`;


function App() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const { posts, loading } = useSelector(state => ({ ...state.app }));

  useEffect(() => {
    dispatch(loadMovieStart({ query }));
  }, []);

  const searchMovie = async e => {
    e.preventDefault();
    dispatch(loadMovieStart({ query }));
  };

  const changeHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">MovieDb App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <SearchBar
              query={query}
              searchMovie={searchMovie}
              changeHandler={changeHandler}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {!loading
          ? <StyledContainer>
              <StyledGrid>
                {posts.map(movieReq =>
                  <MovieBox key={movieReq.id} {...movieReq} />
                )}
              </StyledGrid>
            </StyledContainer>
          : <StyledLoadingDiv>
              <div>
                <div class="spinner-grow text-success" role="status" />
                <div class="spinner-grow text-danger" role="status" />
                <div class="spinner-grow text-warning" role="status" />
              </div>

              <h5>Loading...</h5>
            </StyledLoadingDiv>}
      </div>
    </div>
  );
}

export default App;
