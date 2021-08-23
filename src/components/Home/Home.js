import React, { Suspense } from "react";
import "../../componentStyle/home.css"
const Planet=React.lazy(()=>import("./Internals/Planet"))
const People=React.lazy(()=>import("./Internals/People"))
const Films=React.lazy(()=>import("./Internals/Films"))
const Home = ({handleCategorySearch}) => {
  
  return (
    <div className="homeContainer">
      <h1 id="home">Home</h1>
      <div id="categoryContainer">
      <div className="category">
        <h2>Planet</h2>
        <Suspense fallback={<div>Loading</div>}>
        <Planet />
        <button className="btn-primary" onClick={() => handleCategorySearch("planets")}>
          View All
        </button>
        </Suspense>
      </div>
      <div className="category">
        <h2>Films</h2>
        <Suspense fallback={<div>Loading</div>}>
        <Films />
        <button className="btn-primary"onClick={() => handleCategorySearch("films")}>View All</button>
        </Suspense>
      </div>
      <div className="category">
        <h1>People</h1>
        <Suspense fallback={<div>Loading</div>}>
        <People />
        <button className="btn-primary" onClick={() => handleCategorySearch("people")}>View All</button>
        </Suspense>
      </div>
      
      
    </div>
    </div>
  );
};

export default Home;
