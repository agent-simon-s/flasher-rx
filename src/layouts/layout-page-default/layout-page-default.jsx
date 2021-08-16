// import {Link} from "react-router-dom"
import NavMain from '../nav-app-main/nav-app-main.jsx'
import './layout-page-default.css'

function LayoutPageDef(props){
    return (
       <div className="layout-page-default">
           <NavMain></NavMain>
           <main className="content-main">
               {props.children}
           </main>
       </div>
    )
}

export default LayoutPageDef;