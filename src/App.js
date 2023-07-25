import { useState, useEffect} from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editNoteId, setEditNoteId] = useState(null);
  const [editNoteData, setEditNoteData] = useState({ text: "" });
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  //save notes to local storage
  useEffect(() => {
		const storedNotes = JSON.parse(localStorage.getItem("noted.notes"));
		if (storedNotes) {
      setNotes(storedNotes);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("noted.notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("noted.notes")))
  }, [notes]);

  //save dark mode to local storage
  useEffect(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem("noted.dark.mode"));
    if (storedDarkMode) setDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("noted.dark.mode", JSON.stringify(darkMode));
  }, [darkMode]);

  //handle dark mode toggle
  const handleDarkMode = () => {
    setDarkMode((previousDarkMode) => !previousDarkMode)
  }

  //add note
  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  //delete note
  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  //handle click of edit button
  const handleEditNoteClick = (event, note) => {
    event.preventDefault();

    setEditNoteId(note.id);
    console.log("pressed");

    const noteValues = {
      text: note.text,
    };

    setEditNoteData(noteValues);
  };

  //handle click of cancel button
  const handleEditNoteCancel = () => {
    setEditNoteId(null);
  };

  //handle editing of note
  const handleEditNoteChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("text");
    const fieldValue = event.target.value;

    const newNoteData = { ...editNoteData };
    newNoteData[fieldName] = fieldValue;

    setEditNoteData(newNoteData);
  };

  //handle submit of edited note
  const handleEditNoteSubmit = (event) => {
    event.preventDefault();

    const editedNote = {
      id: editNoteId,
      text: editNoteData.text,
    };

    const newNotes = [...notes];

    const index = notes.findIndex((note) => note.id === editNoteId);

    newNotes[index] = editedNote;

    setNotes(newNotes);
    setEditNoteId(null);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          editNoteId={editNoteId}
          editNoteData={editNoteData}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
          handleEditNoteClick={handleEditNoteClick}
          handleEditNoteCancel={handleEditNoteCancel}
          handleEditNoteChange={handleEditNoteChange}
          handleEditNoteSubmit={handleEditNoteSubmit}
        />
      </div>
    </div>
  );
};

export default App;