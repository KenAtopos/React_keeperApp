import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea"

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newPair) {
        setNotes((prevPairs) => {
            return [...prevPairs, newPair]
        });
    }

    function deleteNote(id) {
        setNotes((prevPairs) => {
            return prevPairs.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea submitNote={addNote} />
            {notes.map((note, index) => (
                <Note 
                    key={index} 
                    id={index} 
                    title={note.title} 
                    content={note.content} 
                    onDelete={deleteNote} 
                />
            ))}
            <Footer />
        </div>
        );
    }

export default App;