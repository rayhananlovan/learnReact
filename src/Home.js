import { useState } from "react";
import ContactList from "./ContactList";
const Home = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Messi", number: "085627871665" },
    { id: 2, name: "Murdik", number: "081627779835" },
    { id: 3, name: "Cucur", number: "087633899273" },
  ]);

  const [blockcontacts, setBlockContacts] = useState([
    { id: 3, name: "Cucur", number: "087633899273" },
  ]);
  return (
    <div className="home">
      <ContactList contacts={contacts} title="All Contact" />
      <ContactList contacts={blockcontacts} title="block Contact" />
    </div>
  );
};

export default Home;
