import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <>
      <div>Home</div>
      <ul>
        <li>
          <Link to={`/canvases/1`}>1번 게시글</Link>
        </li>
        <li>
          <Link to={`/canvases/2?keyword=canvas#helloWord!`}>2번 게시글</Link>
        </li>
        <li>
          <Link to={`/canvases/3`}>3번 게시글</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
