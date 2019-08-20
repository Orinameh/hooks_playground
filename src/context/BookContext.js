import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'David and Goliath', id: 1},
        {title: 'Business studies', id: 2},
        {title: 'RichDad  and PoorDad', id: 3},
        {title: 'Five love languages', id: 4},

    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;