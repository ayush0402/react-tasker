const Header = ({ title, toggleForm, showForm }) => {
  return (
    <header className="Header row">
      <h2 className="col-6">{title}</h2>
      <button
        className={`btn col-3 ${showForm ? "btn-danger" : "btn-success"}`}
        onClick={toggleForm}
      >
        {showForm ? "Close" : "Add"}
      </button>
    </header>
  );
};

export default Header;
