import Typography from '@material-ui/core/Typography';

import React from 'react';

import Card from '../Card';
import useStyle from './styles';

const DEFAULT_CARDS_LIST = ['1/2', '1', '2', '3', '5', '8', '13', '20', '100'];

const CardsList = ({ valueList = DEFAULT_CARDS_LIST}) => {
    const classes = useStyle();

    return (
        <div className={ classes.root }>
            <Typography
                component='p'
                variant='h5'
            >
                Your vote
            </Typography>
            <div className={ classes.cardsList }>
                {valueList.map((value => (
                    <Card value={ value } />
                )))}
            </div>
        </div>
    );
}

export default CardsList;
