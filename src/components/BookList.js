import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { BookContext } from '../context/BookContext';

// class BookList extends React.Component {
//     // static contextType = ThemeContext
//     // state = {  }
//     render() { 
//         // const { dark, isLightTheme, light } = this.context;
//         // const theme = isLightTheme ? light : dark
//         return ( 
//             <AuthContext.Consumer>
//                 {(authContext) => (
//                     <ThemeContext.Consumer>
//                     {(themeContext) => {
//                         const { isAuthenticated, toggleAuth } = authContext
//                         const { dark, isLightTheme, light } = themeContext;
//                         const theme = isLightTheme ? light : dark
//                         return (
//                             <div className="book__list" style={{ color: theme.syntax, background: theme.bg}}>
//                                 {
//                                     isAuthenticated ?
//                                     <ul>
//                                     <li style={{background: theme.ui}}>the way of kings</li>
//                                     <li style={{background: theme.ui}}>the name of the wind</li>
//                                     <li style={{background: theme.ui}}>the final empire</li>
    
//                                     </ul>

//                                     :
//                                     <button onClick={toggleAuth}>
//                                         Login to view
//                                     </button>
//                                 }
//                             </div>
//                         )
//                     }}
//                 </ThemeContext.Consumer>
//                 )}
//             </AuthContext.Consumer>
//          );
//     }
// }

const BookList = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { dark, isLightTheme, light } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark

    const { books } = useContext(BookContext);

    return ( 
        <div className="book__list" style={{ color: theme.syntax, background: theme.bg}}>
            {
                isAuthenticated ?
                <ul>
                    {
                        books.map(book => {
                            return (
                                <li key={book.id} style={{background: theme.ui}}>{book.title}</li>

                            )
                        })
                    }
    
                </ul>

                :
                <button onClick={toggleAuth}>
                    Login to view
                </button>
            }
                                    
        </div>
                                
     );
}
 
 
export default BookList;