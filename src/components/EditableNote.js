import checkIcon from "../assets/icons/check_icon.svg";
import cancelIcon from "../assets/icons/cancel_icon.svg";

const EditableNote = ({
  note,
  editNoteData,
  handleEditNoteCancel,
  handleEditNoteChange,
  handleEditNoteSubmit,
}) => {
  return (
    <div className="note editable">
      <textarea value={editNoteData.text} onChange={handleEditNoteChange}></textarea>
      <div className="note-footer">
        <p>Edit Note</p>
        <div>
          <img
            className="note-cancel-icon"
            src={cancelIcon}
            alt="Cancel"
            onClick={handleEditNoteCancel}
          />
          <img
            className="note-check-icon"
            src={checkIcon}
            alt="Done"
            onClick={handleEditNoteSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default EditableNote;