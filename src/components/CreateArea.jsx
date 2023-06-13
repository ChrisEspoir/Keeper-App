import React, { useState } from "react";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function CreateArea(props) {

  const [noteText, setNoteText] = useState({
    title: '',
    content: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    setNoteText(prevNotes => {
      return { ...prevNotes, [name]: value }
    })
  }

  const submitNote = (event) => {
    props.onAdd(noteText);
    setNoteText({ title: '', content: '' });

    event.preventDefault();
  }


  return (
    <div>
      <form>
        <input onChange={handleChange} value={noteText.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={noteText.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>
          <AddTwoToneIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
