const ContactList = ({ contacts, title }) => {
  return (
    <div className="contact-list">
      <h3>{title}</h3>
      {contacts.map((contact) => (
        <div className="contact" key={contact.id}>
          <div className="contact-info">
            <p className="contact-name">{contact.name}</p>
            <p>{contact.number} </p>
          </div>
          <div className="contact-actions">
            <button className="button-primary">Edit</button>
            <button className="button-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
