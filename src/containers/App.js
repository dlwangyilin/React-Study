import React, {Component} from 'react';

import logo from '../logo.svg';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler}
                    />
                </div>
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
