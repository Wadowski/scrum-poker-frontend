import React from 'react';

import Person from '../Person';

import useStyle from './styles';

const PeopleList = ({ people }) => {
    const classes = useStyle();

    return (
        <div className={ classes.peopleList }>
            {people.map(person => (
                <Person { ...person } />
            ))}
        </div>
    );
}

export default PeopleList;
