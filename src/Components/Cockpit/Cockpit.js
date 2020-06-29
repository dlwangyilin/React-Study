import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClasses = '';
    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>
                This is new React App.
            </h1>
            <p className={assignedClasses.join(' ')}>
                This is working
            </p>
            {/*函数不加()是因为需要传递函数指针，而加了()直接会执行这个函数。传递函数时，可以通过匿名函数传递参数，但是效率不高*/}
            <button className={btnClasses} onClick={props.clicked}>Toggle Names</button>
        </div>

    );
};
export default cockpit;