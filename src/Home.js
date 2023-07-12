import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import Api from "./api/contact-api";
const Home = () => {
  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.get("/contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {contacts && (
        <ContactList
          contacts={contacts}
          title="All Contact"
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
