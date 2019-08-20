import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

// class ThemeToggle extends React.Component {

//     static contextType = ThemeContext
    
//     render() { 
//         const { toggleTheme } = this.context
//         return ( 
//             <button onClick={toggleTheme}> 
//                 Toggle Theme
//             </button>
//          );
//     }
// }

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return ( 
        <button onClick={toggleTheme}> 
        Toggle Theme
    </button>
     );
}
 
export default ThemeToggle;
 