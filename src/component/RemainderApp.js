import { useState } from "react";
import data from "./data";
function RemainderApp() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <div className="container">
      <div className="head">
        <div className="section">
          We have {people.length} people's birthday today
        </div>
        {people.map((person) => {
          const { id, name, image } = person;

          return (
            <div className="container" key={id}>
              <div className="avatar d-flex ">
                <img
                  src={image}
                  alt={name}
                  style={{ width: "200px", height: "200px" }}
                />
                <div>{name}</div>
                <div className="button">
                  <button
                    className="btn btn-primary"
                    onClick={() => removePerson(id)}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RemainderApp;
