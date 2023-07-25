import { Fragment } from "react";
import Note from "./Note";
import EditableNote from "./EditableNote";
import AddNote from "./AddNote";

const NotesList = ({
  notes,
  editNoteId,
  editNoteData,
  handleAddNote,
  handleDeleteNote,
  handleEditNoteClick,
  handleEditNoteCancel,
  handleEditNoteChange,
  handleEditNoteSubmit,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (

        <Fragment key={note.id}>
          {editNoteId === note.id ? ( 
            <EditableNote
              note={note}
              editNoteData={editNoteData}
              handleEditNoteCancel={handleEditNoteCancel}
              handleEditNoteChange={handleEditNoteChange}
              handleEditNoteSubmit={handleEditNoteSubmit}
            />
          ) : (
            <Note
              note={note}
              handleDeleteNote={handleDeleteNote}
              handleEditNoteClick={handleEditNoteClick}
            />
          )}
        </Fragment>
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;