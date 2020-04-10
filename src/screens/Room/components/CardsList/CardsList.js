import Typography from '@material-ui/core/Typography';

import React from 'react';

import Card from '../Card';
import useStyle from './styles';

const card = (value, position) => ({ value, position });

const DEFAULT_CARDS_LIST = [
    card('1/2', 1),
    card('1', 2),
    card('2', 3),
    card('3', 4),
    card('5', 5),
    card('8', 6),
    card('13', 7),
    card('20', 8),
    card('100', 9),
];

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
                {valueList.map(((card) => (
                    <Card value={ card.value } position={ card.position } />
                )))}
            </div>
        </div>
    );
}

export default CardsList;
