import React from 'react';
import Paper from '@material-ui/core/Paper';

import Card from '../Card';
import useStyle from './styles';

const CardsList = ({ valueList = [1,2,3,5,8,13,20]}) => {
    const classes = useStyle();

    return (
        <Paper elevation={ 0 } className={ classes.root }>
            {valueList.map((value => (
                <Card value={ value } />
            )))}
        </Paper>
    );
}

export default CardsList;
