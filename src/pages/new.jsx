import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import FormAddComp from '../components/form-add-comp/form-add-comp.jsx'

function NewMeetUpPage () {
    const history = useHistory();
    // const[ lastID, setLastID ] = useState();

    // useEffect(() => {
    //     console.log("use efect test");
    //     fetch('http://localhost:8000/events?_sort=ids&_order=desc').then(responce => { 
    //         return responce.json();
    //     }).then(
    //     (data) => {
    //         console.log(data);
    //         setLastID(data);
    //     })
    // },[]);


    function addNewMeetHandler(Data) {
        fetch(
            'http://localhost:8000/events', 
            { 
                method: 'POST', 
                body: JSON.stringify(Data),
                headers: {
                    'Content-type': 'application/json'
                }
            } 
            ).then( (data) => {
                console.log(Data.title);
                alert(Data.title + `Added Succesfully`);
                history.replace('/');
              }
            );
    }

    return (
        <section>
            <div>
                <h1>Add New Meet</h1>
            </div>
            <FormAddComp onAddNewMeet={addNewMeetHandler} />
        </section>
    )
}

export default NewMeetUpPage;