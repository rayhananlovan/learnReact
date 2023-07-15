import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "./api/contact-api";
const Create = () => {
  const History = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      Api.get("/contacts/" + id).then((response) => {
        const { data } = response;
        setName(data.name);
        setNumber(data.number);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, number };
    setLoading(true);

    Api.post("/contacts", contact).then(() => {
      setLoading(false);
      History(-1);
    });
  };
  return (
    <div className="contact-form">
      Contact Form
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label">Contact Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Contact Number</label>
          <input
            type="number"
            className="form-control"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => History(-1)}
          >
            Cancel
          </button>
          <button type="Submit" className="btn btn-primary">
            {loading ? "submitting" : "submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
