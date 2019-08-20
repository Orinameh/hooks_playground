import React, { useState, useEffect } from 'react'
import uuid from 'uuid'
import NewSongForm from './NewSongForm';

const SognList = () => {
    const [songs, setSongs] =useState([
        {title: 'this wild darknes', id: 1},
        {title: 'memory gospel', id: 2},
        {title: 'dance with my father', id: 3}

    ]);

    useEffect(() => {
        console.log(songs)
    })

    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid()}])
    }
    return ( 
        <div className="song__list">
            <ul>
                {
                    songs.map(song => {
                        return (
                            <li key={song.id}>{song.title}</li>
                        )
                    })
                }
            </ul>
            <NewSongForm addSong={addSong} />
        </div>
     );
}
 
export default SognList;