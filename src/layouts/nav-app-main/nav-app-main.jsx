import {Link} from "react-router-dom";
import './nav-app-main.css';

function NavMain(props){
    return (
       <header>
           <div className='masthead'>
               <h1>Ardent Heavy Drink-Up</h1>
           </div>
           <ul className='nav-list'>
               <li><Link to="/intro">Intro</Link></li>
               <li><Link to="/all">All</Link></li>
               <li><Link to="/all">FAQ</Link></li>
               <li><Link to="/new">New</Link></li>
               {/*<li><Link to="/favorites">Fav</Link></li>*/}
           </ul>
           <div>
               
           </div>
       </header>
    )
}

export default NavMain;