import react, { Component, createContext } from 'react';
import './styles.css';
class Heading extends Component
{
    render()
     { 
        return ( 
            <div className="grid-container">
        
                 <div className="centered"><h1 className="heading">Welcom to Book Search System</h1></div>
        
            </div>

        );
    }
}
export default Heading;