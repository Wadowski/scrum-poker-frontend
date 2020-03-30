import Typography from '@material-ui/core/Typography';

import React from 'react';

import Person from '../Person';

import useStyle from './styles';

const PeopleList = ({ people }) => {
    const classes = useStyle();

    return (
        <div>
            <Typography
                component='p'
                variant='h5'
            >
                Votes summary
            </Typography>
            <div className={ classes.peopleList }>
                {people.map(person => (
                    <Person { ...person } />
                ))}
            </div>
        </div>
    );
}

export default PeopleList;
