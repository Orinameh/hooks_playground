import React, {useState} from 'react'


const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');

    const submit = e => {
        e.preventDefault();
        addSong(title);
        setTitle('')
    }
    return ( 
        <form onSubmit={submit}>
            <label>Song name:</label>
            <input type="text" value={title} required onChange={e =>  setTitle(e.target.value)} />
            <input type="submit" value="Add song" />
        </form>
     );
}
 
export default NewSongForm;