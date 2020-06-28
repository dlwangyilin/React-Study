// Use React hook
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import Person from './Person/Person';

const app = (props) => {
    const [personState, setPersonState] = useState(
        // setPersonState will replace the old state.
        {
            persons: [
                { name: "max", age: 28 },
                { name: "manu", age: 29},
                { name: "Stefenie", age: 24}
            ],
            otherPersons: "blabla"
        }
    );

    const [otherState, setOtherState] = useState(
        " Some other values"
    );

    console.log(personState, otherState);

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                { name: "Yilin", age: 28 },
                { name: "manu", age: 29},
                { name: "Stefenie", age: 35}
            ]
        })
    };
    return (
        <div className="App">
            <h1>
                This is new React App.
            </h1>
            <p>
                This is working
            </p>
            <button onClick={switchNameHandler}>Switch Names</button>
            <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
            <Person name = {personState.persons[1].name} age = {personState.persons[1].age}> Hobby is soccer</Person>
            <Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>
        </div>
    );
};

export default app;