import React, { useState, useRef, } from "react";
import Movie from "./movie";
import OrderByAlphaButton from "./orderByAlphaButton"
import OrderByGradeButton from "./orderByGradeButton"

// Funktion för att skapa en lista med filmer och presentera dessa
export default function MovieList() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Titanic",
      grade: 5
    },
    {
      id: 2,
      title: "Lord of the Rings",
      grade: 1
    },
    {
      id: 3,
      title: "Star Wars",
      grade: 5
    }
  ]);

  const inputRef = useRef();
  const gradeRef = useRef();

  // Lägger till en film och återställer värdet i formuläret
  function addMovie() {
    if (validateTitle() && validateGrade()) {

      const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

      setMovies([...movies, {
        id: newId,
        title: inputRef.current.value,
        grade: gradeRef.current.value
      }]);

      inputRef.current.value = "";
      gradeRef.current.value = 0;
    }
  }

  // Tar bort en film
  function deleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  // Ser till att användaren angett en titel innan filmen läggs till i listan
  function validateTitle() {
    const titleInput = inputRef.current.value.trim();
    if (titleInput === '') {
      alert('Var god ange en titel...');
      return false;
    }
    return true;
  }
  // Ser till att användaren har angett ett betyg innan filmen läggs till i listan
  function validateGrade() {
    const ratingInput = document.getElementById('rating-field').value;
    if (ratingInput === '0') {
      alert('Var god ange ett betyg...');
      return false;
    }
    return true;
  }

  // Sorterar filmernas titlar, både fallande och stigande
  const [orderAlpha, setAlpha] = useState(0);

  function handleOrderByAlpha() {
    if (orderAlpha === 0) {
      const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
      setMovies(sortedMovies);
      setAlpha(1);

    } else if (orderAlpha === 1) {
      const sortedMovies = [...movies].sort((a, b) => b.title.localeCompare(a.title));
      setMovies(sortedMovies);
      setAlpha(0);
    }
  }

  // Sorterar filmernas betyg, både fallande och stigande
  const [orderGrade, setGrade] = useState(0);

  function handleOrderByGrade() {
    if (orderGrade === 0) {
      const sortedMovies = [...movies].sort((a, b) => b.grade - a.grade);
      setMovies(sortedMovies);
      setGrade(1);

    } else if (orderGrade === 1) {
      const sortedMovies = [...movies].sort((a, b) => a.grade - b.grade);
      setMovies(sortedMovies);
      setGrade(0);
    }
  }

  // Presenterar komponenterna
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMovie();
        }}
        noValidate
      >
        <h6>Titel:</h6>
        <input className="form-control" placeholder="Add new title here..." ref={inputRef} required />
        <h6>Betyg:</h6>
        <select type="text" id="rating-field" className="form-control" ref={gradeRef} required>
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="btn btn-success my-2" >Spara Film</button>
      </form>
      <h4 className="mt-5">Mina Filmer:</h4>
      <div className="d-inline-flex">
        <OrderByAlphaButton handleOrderByAlpha={handleOrderByAlpha} />
        <OrderByGradeButton handleOrderByGrade={handleOrderByGrade} />
      </div>
      <ul className="list-group mt-3">

        {movies.map(movie => <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />)}

      </ul>

    </div>
  )
};