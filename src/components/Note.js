import deleteIcon from "../assets/icons/delete_icon.svg";
import editIcon from "../assets/icons/edit_icon.svg";

const Note = ({
  note,
  handleDeleteNote,
  handleEditNoteClick,
}) => {
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <p>{note.date}</p>
        <div>
          <img
            className="note-edit-icon"
            src={editIcon}
            alt="Edit"
            onClick={(event) => handleEditNoteClick(event, note.id)}
          />
          <img
            className="note-delete-icon"
            src={deleteIcon}
            alt="Delete"
            onClick={() => handleDeleteNote(note.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
