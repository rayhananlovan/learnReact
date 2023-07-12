import { useState } from "react";
const Home = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Messi", number: "085627871665" },
    { id: 2, name: "Murdik", number: "081627779835" },
    { id: 3, name: "Cucur", number: "087633899273" },
  ]);
  return (
    <div className="home">
      <h3>Contact List</h3>
      {contacts.map((contact) => (
        <div className="contact" key={contact.id}>
          <div className="contact-info">
            <p className="contact-name">{contact.name}</p>
            <p>{contact.number} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
