import Typography from '@material-ui/core/Typography';

import React from 'react';

import Card from '../Card';

import useStyle from './styles';

const Person = ({ name, card = {} }) => {
    const classes = useStyle();

    return (
        <div className={ classes.person }>
            <Card value={ card.value } position={ card.position } disabled />
            <Typography variant='body1' component='p'>
                {name}
            </Typography>
        </div>
    );
};

export default Person;
