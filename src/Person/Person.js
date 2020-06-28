import React from 'react';
import './Person.css';
import styled from 'styled-components'

const person = (props) => {
    const StyledDiv = styled.div`
            width: 60%;
            margin: auto;
            border: 1px solid #eeeeee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
            color: black;
              
            @media (min-width: 500px) {
                .Person {
                    width: 450px;
                }
            }
            `;
    return (
        <StyledDiv>
            <p onClick={props.click}> I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>

    )
};


export default person;
