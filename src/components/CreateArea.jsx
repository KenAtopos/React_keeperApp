import React, {useState} from "react";


function CreateArea(props) {

    const [pair, setPair] = useState({
        title: "",
        content: ""
    });

    function getChange(event) {
        const {name, value} = event.target;
        setPair((prevPairs) => {
            return {
                ...prevPairs,
                [name] : value,
            };
        });
    }

    function addNote(event) {
        props.submitNote(pair);
        setPair({
            title: "",
            content: ""
          });
        event.preventDefault();
    }

    return (
        <div>
        <form>
            <input 
                onChange={getChange} 
                name="title" 
                placeholder="Title" 
                value={pair.title} 
            />
            <textarea 
                onChange={getChange} 
                name="content" 
                placeholder="Take a note..." 
                rows="3" 
                value={pair.content}
            />
            <button onClick={addNote} >Add</button>
        </form>
        </div>
    );
}

export default CreateArea;