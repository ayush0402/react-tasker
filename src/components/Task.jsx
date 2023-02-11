import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`Task ${task.reminder ? "remindMe" : ""}`}
      onDoubleClick={() => {
        onToggle(task.id);
      }}
    >
      <div className="Text">
        <div>{task.title}</div>
        <div>
          <FaTrashAlt
            style={{ cursor: "pointer" }}
            onClick={() => {
              onDelete(task.id);
            }}
          />
        </div>
      </div>
      <div className="Date">{task.date}</div>
    </div>
  );
};

export default Task;
