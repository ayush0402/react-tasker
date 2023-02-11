import { useState } from "react";

const AddForm = ({ onAdd }) => {
  let [title, setTitle] = useState("");
  let [date, setDate] = useState("");
  let [remindMe, setRemindMe] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title text can't be empty.");
    }
    if (!date) {
      alert("Date can't be empty.");
    }

    onAdd({ title, date, remindMe });

    setTitle("");
    setDate("");
    setRemindMe(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Title</label>
        <input
          type="text"
          id="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          placeholder="Add Date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="check-box">Set Reminder</label>
        <input
          type="checkbox"
          id="check-box"
          value={remindMe}
          checked={remindMe}
          onChange={(e) => {
            setRemindMe(e.currentTarget.checked);
          }}
        />
      </div>
      <input type="submit" className="btn btn-dark" value="Save Task" />
    </form>
  );
};

export default AddForm;
