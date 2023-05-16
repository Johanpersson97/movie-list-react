import React from 'react';

export default function movie(props) {

  // returnerar antalet stjärnor baserat på filmens betyg
  const MovieRating = ({ grade }) => {
    const stars = [];

    for (let i = 0; i < grade; i++) {
      stars.push(<img src='./star.png' key={i} alt='star' Style="max-width: 35px;" />);
    }

    return stars;
  };

  // Returnerar filmen till
  return (
    <li className='list-group-item d-flex bg-body p-0 align-items-center'>
      <span className="mx-2">{props.movie.title}</span>
      <div className="d-flex ms-auto">
        <div className="mt-2"><MovieRating grade={props.movie.grade} /></div>
        <img className="" Style="max-width: 50px;" src='./delete.png' alt='delete'
          onClick={() => {
            props.deleteMovie(props.movie.id);
          }}
        ></img>
      </div>
    </li>
  );
}

