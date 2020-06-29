import React from "react";
import Person from "./Person/Person";

const persons = (props) => (
    props.persons.map((person, index) => {
            return <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => props.changed(event, person.id)}/>
    })
);
/*
const persons = (props) => {
    return props.persons.map((person, index) => {
        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}/>
    })
};
*/

/*
(props) => (XX) XX只能是一行表达式，并且把这个表达式的结果作为一个对象return.
(props) => {YY} YY是一个函数，必须显示的return结果。所以这里有两种写法
 */


export default persons;