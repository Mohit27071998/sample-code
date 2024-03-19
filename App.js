import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [displayedPlace, setDisplayedPlace] = useState("");

  const handleSubmit = (event) => {
    // setting the values for displaying name and place
    event.preventDefault();

    setDisplayedName(name);
    setDisplayedPlace(place);
  };

  const handleClear = () => {

    // clearing all input fields
    setName("");
    setPlace("");
    setDisplayedName("");
    setDisplayedPlace("");
  };

  return (
    <>
    <h1>Patient Information</h1>
  <main>
      <section>
        <p>Name : {displayedName}</p>
        <p>Place : {displayedPlace}</p>
        <button className="btn1" onClick={handleClear}>Clear</button>
      </section>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="place">
          Place
          <input
            type="text"
            name="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </label>
        <button className="btn2" type="submit">Display</button>
      </form>
    </main>
    </>
  
  );
};

export default App;
