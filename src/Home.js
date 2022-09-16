import { Link, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  let [petList, setPetList] = React.useState([]);
  let [petName, setPetName] = React.useState("");
  let [petBreed, setPetBreed] = React.useState("");
  let [petAge, setPetAge] = React.useState("");

  function handleNameInput(event) {
    setPetName(event.currentTarget.value);
  }

  function handleBreedInput(event) {
    setPetBreed(event.currentTarget.value);
  }

  function handleAgeInput(event) {
    setPetAge(event.currentTarget.value);
  }

  function handleClick(event) {
    let petObject = { name: petName, breed: petBreed, age: petAge };
    setPetList([...petList, petObject]);
    setPetName("");
    setPetBreed("");
    setPetAge("");
  }

  let petElementArray = petList.map((animal, index) => {
    return (
      

        <div key={index}>
                <div>Name: {animal.name}</div>
                <div>Breed: {animal.breed}</div>
                <div>Age: {animal.age}</div>
            </div>
      
    );
  });

  return (
    
    <><>
          <Navbar />

          <section className="section">
              <Outlet />
          </section>
      </><div>
              <h4>Pet Store Animal List</h4>
              {petElementArray}
              <input
                  value={petName}
                  onChange={handleNameInput}
                  type="text"
                  placeholder="Pet Name" />
              <input
                  value={petBreed}
                  onChange={handleBreedInput}
                  type="text"
                  placeholder="Pet Breed" />
              <input
                  value={petAge}
                  onChange={handleAgeInput}
                  type="text"
                  placeholder="Pet Age" />

              <button onClick={handleClick}>Add Animal</button>
          </div></>
  );
}

  

export default Home;
