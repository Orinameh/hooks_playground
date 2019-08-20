import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

// class Navbar extends React.Component {
//     // Can only be done in a class component
//     static contextType = ThemeContext
//     render() { 
//         const { dark, isLightTheme, light } = this.context;
//         const theme = isLightTheme ? light : dark
//         return (

//             <nav style={{ background: theme.ui, color: theme.syntax}}>
//                 <h1>Context App</h1>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>

//                 </ul>
//             </nav>
            
//         );
//     }
// }



const Navbar = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return ( 
        <nav style={{ background: theme.ui, color: theme.syntax}}>
        <h1>Context App</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        </nav>
     );
}
 
 
export default Navbar;