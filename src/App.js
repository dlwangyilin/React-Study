import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: "max", age: 28 },
            { name: "manu", age: 29},
            { name: "Stefenie", age: 24}
        ],
        otherPersons: "blabla",
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            // setState will merge the old one, 没有改变的state会保留，比如 otherPersons
            persons: [
                { name: newName, age: 28 },
                { name: "manu", age: 29},
                { name: "Stefenie", age: 35}
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            // setState will merge the old one, 没有改变的state会保留，比如 otherPersons
            persons: [
                { name: "max", age: 28 },
                { name: event.target.value, age: 21},
                { name: "Stefenie", age: 24}
            ]
        })
    };

    togglePersonHandler = () => {
        const doseShow = this.state.showPersons;
        this.setState({showPersons: !doseShow});
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    render() {
        const style = {
            backgroundColor: 'White',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer',

        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age = {person.age} />
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>
                    This is new React App.
                </h1>
                <p>
                    This is working
                </p>
                <button onClick={this.switchNameHandler.bind(this, "xizi")}>Switch Names</button>
                {/*函数不加()是因为需要传递函数指针，而加了()直接会执行这个函数。传递函数时，可以通过匿名函数传递参数，但是效率不高*/}
                <button onClick={this.togglePersonHandler} style={style}>Toggle Names</button>
                {persons}
            </div>
        );
    }
}

export default App;
