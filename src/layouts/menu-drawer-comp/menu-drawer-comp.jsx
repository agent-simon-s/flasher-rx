import React, { useState } from "react";
import './menu-drawer-comp.scss';

export default function MenuDrawerComp(props) {
    const[ isMenuOpen, setIsMenuOpen ] = useState(false);
    const[ menulable, setMenulable ] = useState("⟫");

    function toggleMenuOpen() { 
       if (isMenuOpen) {
           setIsMenuOpen(false); 
           setMenulable("⟫");
       } else {
          setIsMenuOpen(true); 
           setMenulable("⟪");
       }
       console.log("toggle menu"); 
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log("settings update");
    }

    return (
        <div className={`menu-drawer ${isMenuOpen ? "menu-open" : ""}`}>
            <div>
               <button onClick={toggleMenuOpen}><span className="gliph">{menulable}</span></button>
            </div>
            <div className="settings">
               <form action=""  className="form" onSubmit={submitHandler}>
                    <div className="inputGroup">
                       <div className="control">
                           <label>
                              <input
                                type="radio"
                                name="react-tips"
                                value="option1"
                                checked={true}
                                className="form-check-input"
                              />
                              Setting A
                            </label>
                       </div>
                       <div className="control">
                           <label>
                              <input
                                type="radio"
                                name="react-tips"
                                value="option1"
                                checked={true}
                                className="form-check-input"
                              />
                              Setting B
                            </label>
                       </div>
                       <div className="control">
                           <label>
                              <input
                                type="radio"
                                name="react-tips"
                                value="option1"
                                checked={true}
                                className="form-check-input"
                              />
                              Setting C
                            </label>
                       </div>
                       <div className="control select">
                            <label>
                              <select name="topics" id="" >
                                  <option>Topic 1</option>
                                  <option>Topic 2</option>
                              </select>
                            </label>
                       </div>
                    </div>
                </form> 
            </div>
            
            
        </div>
        )
}