import deleteIcon from "../assets/icons/delete_icon.svg";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <p>{date}</p>
          <img className="note-delete-icon" src={deleteIcon} alt="Delete" onClick={() => handleDeleteNote(id)}/>
      </div>
    </div>
  );
};

export default Note;
