import { useEffect, useState } from "react";
import ContactList from "./ContactList";
const Home = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Messi", number: "085627871665" },
    { id: 2, name: "Murdik", number: "081627779835" },
    { id: 3, name: "Cucur", number: "087633899273" },
  ]);

  const handleDelete = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  const [nakama, setNakama] = useState("Robin");

  console.log("Component is rendered");

  useEffect(() => {
    console.log("useEffect1 is called");
  }, [contacts]);
  useEffect(() => {
    console.log("useEffect2 is called");
  }, [nakama]);

  return (
    <div className="home">
      <ContactList
        contacts={contacts}
        title="All Contact"
        onDelete={handleDelete}
      />
      <button onClick={() => setNakama("Frank")}>Update nakama</button>
      <h5>{nakama}</h5>
    </div>
  );
};

export default Home;
