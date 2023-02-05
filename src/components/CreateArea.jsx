import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

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

    function expand() {
        setExpanded(true);
        
    }

    return (
        <div>
        <form className="create-note">
            {isExpanded && 
            (<input 
                onChange={getChange} 
                name="title" 
                placeholder="Title" 
                value={pair.title} 
            />)}
            <textarea 
                onChange={getChange}
                onClick={expand}
                name="content" 
                placeholder="Take a note..." 
                rows={isExpanded ? "3" : "1"}
                value={pair.content}
            />
            <Zoom in={isExpanded}>
            <Fab onClick={addNote} ><AddIcon /> </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;