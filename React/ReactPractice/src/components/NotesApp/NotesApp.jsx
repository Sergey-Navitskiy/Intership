import React, { useState } from "react";
import "./NotesApp.css";
export function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isListVisible, setIsListVisible] = useState(true);

  // Показать инпут
  const showInput = () => {
    setIsInputVisible(true);
    setInputValue("");
  };

  // Добавить з
  const AddNote = () => {
    if (inputValue !== "") {
      const newNote = {
        id: Date.now(),
        text: inputValue,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]); //`...notes`: Копируем все существующие заметки.
      setInputValue("");
      setIsInputVisible(false);
    }
  };

  // Отмена прячем инпут
  const Cancel = () => {
    setInputValue("");
    setIsInputVisible(false);
  };

  // Удаление
  const DeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id)); // создание нью массива без заметки по указанному айди - а условие оставляем всё, кроме той, которую удаляем
  };

  return (
    <div className="app">
      <header className="app-header">
        <span>📒</span>
        <h1 className="app-title">Notes App</h1>
      </header>

      {!isInputVisible ? ( // Показываем эту часть, если поле ввода скрыто
        <div className="button-row">
          <button className="btn btn-add" onClick={showInput}>
            ➕ Add Note
          </button>
          <button
            className="btn btn-toggle"
            onClick={() => setIsListVisible((prev) => !prev)}
          >
            {isListVisible ? " ⬆︎ Скрыть заметки" : " Показать заметки ⬇︎"}
          </button>
        </div>
      ) : (
        // и эту часть, если поле ввода видимо
        <div className="input-row">
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Введите текст..."
              autoFocus
              className="input-field"
            />
            <button className="btn btn-save" onClick={AddNote}>
              Save
            </button>
            <button className="btn btn-cancel" onClick={Cancel}>
              Cancel
            </button>
          </div>
          <button // дублируется чтобы было видно и так и так
            className="btn btn-toggle"
            onClick={() => setIsListVisible((prev) => !prev)}
          >
            {isListVisible ? " ⬆︎ Скрыть заметки" : " Показать заметки ⬇︎"}
          </button>
        </div>
      )}

      {isListVisible && ( // Показываем список заметок, только если true
        <div className="notes-container">
          {notes.length === 0 ? ( // если заметок нет, то p если есть то ul
            <p className="notes-empty">No notes yet</p>
          ) : (
            <ul className="notes-list">
              {notes.map((note) => (
                <li key={note.id} className="note-item">
                  <span className="note-text">{note.text}</span>
                  <button
                    className="btn btn-delete"
                    onClick={() => DeleteNote(note.id)} // data-atribute
                  >
                    🗑️
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
