import Contact from "./Contact";
import contacts from "../contacts.json";
import { useState } from "react";

function ContactTable() {
  const sampleSize = 5;
  const [contactsToAdd, setContactsToAdd] = useState([]);

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - sampleSize) + sampleSize);
    setContactsToAdd(contactsToAdd.push(contacts[randomIndex]));
    console.log(randomIndex);
    console.log(contactsToAdd);
  };

  console.log(contactsToAdd);

  return (
    <div id="tableContainer">
      <h2>IronContacts</h2>
      <button className="btn" onClick={addRandomContact}>
        Add Random Contact
      </button>
      <button>Sort by popularity</button>
      <button>Sort by name</button>
      <table id="contactTable">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsToAdd.map((person) => (
            <Contact
              key={person.id}
              pictureURL={person.pictureUrl}
              name={person.name}
              popularity={person.popularity.toFixed(2)}
              oscar={person.wonOscar && "🏆"}
              emmy={person.wonEmmy && "🌟"}
            />
          ))}

          {contacts
            .filter((Element, index) => index < sampleSize)
            .map((person) => (
              <Contact
                key={person.id}
                pictureURL={person.pictureUrl}
                name={person.name}
                popularity={person.popularity.toFixed(2)}
                oscar={person.wonOscar && "🏆"}
                emmy={person.wonEmmy && "🌟"}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
