import React, {Component} from 'react';

import logo from './logo.svg';
import classes from './App.module.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { id: "qwe1", name: "max", age: 28 },
            { id: "qwe2", name: "manu", age: 29},
            { id: "qwe3", name: "Stefenie", age: 24}
        ],
        otherPersons: "blabla",
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            // setState will merge the old one, 没有改变的state会保留，比如 otherPersons
            persons: [
                { id: "qwe1", name: "max", age: 28 },
                { id: "qwe2", name: "manu", age: 29},
                { id: "qwe3", name: "Stefenie", age: 24}
            ],
            otherPersons: "blabla",
            showPersons: false
        })
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // const person = Object.assign({}, this.state.persons[personIndex]); alternative way
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            // setState will merge the old one, 没有改变的state会保留，比如 otherPersons
            persons: persons
        });
    };

    togglePersonHandler = () => {
        const doseShow = this.state.showPersons;
        this.setState({showPersons: !doseShow});
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();  alternative way
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    render() {

        let persons = null;
        let btnClasses = [classes.Button];

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age = {person.age}
                            key = {person.id}
                            changed = {(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            );

            btnClasses.push(classes.Red);

        }

        let assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (

            <div className={classes.App}>
                <h1>
                    This is new React App.
                </h1>
                <p className={assignedClasses.join(' ')}>
                    This is working
                </p>
                <button onClick={this.switchNameHandler.bind(this, "xizi")}>Switch Names</button>
                {/*函数不加()是因为需要传递函数指针，而加了()直接会执行这个函数。传递函数时，可以通过匿名函数传递参数，但是效率不高*/}
                <button className={btnClasses.join(' ')} onClick={this.togglePersonHandler}>Toggle Names</button>
                {persons}
            </div>

        );
    }
}

export default App;
