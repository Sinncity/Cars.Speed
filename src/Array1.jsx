import React from "react";
import CarProps from "./CarProps";

const cars = [
  {
    Make: "Toyota",
    Model: "Supra",
    Color: "Yellow"
  },
  {
    Make: "Honda",
    Model: "Civic",
    Color: "Black"
  },
  {
    Make: "Dodge",
    Model: "Charger",
    Color: "Green"
  },
  {
    Make: "Ford",
    Model: "Mustang",
    Color: "red"
  }
];

// function speed(a, b) {
//   return (a = Math.floor(Math.random) * 10 * b);
// }
// console.log(speed(2,4);

const Array1 = (props) => {
  return (
    <div>
      {cars.map((car) => {
        return (
          <div>
            <CarProps Make={car.Make} Model={car.Model} Color={car.Color} />
          </div>
        );
      })}
    </div>
  );
};

export default Array1;
