import {Link} from "react-router-dom";
import MenuDrawerComp from "../menu-drawer-comp/menu-drawer-comp";
import ScoreCardComp from "../../components/score-card-comp/score-card-comp";
import './nav-app-main.scss';

function NavMain(props){
    return (
       <header>
           <div className='masthead'>
               <h1>FlashRX</h1>
           </div>
           <ul className='nav-list'>
               <li><Link to="/intro">Intro</Link></li>
               <li><Link to="/quiz">Quiz</Link></li>
               <li><Link to="/faq">FAQ</Link></li>
               <li><Link to="/all">All</Link></li>
               <li><Link to="/add">ADD</Link></li>
               {/*<li><Link to="/favorites">Fav</Link></li>*/}
               <li>
                   <ScoreCardComp />
               </li>
           </ul>
           <MenuDrawerComp />
       </header>
    )
}

export default NavMain;