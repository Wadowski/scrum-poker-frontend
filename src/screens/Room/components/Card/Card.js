import React, { useState } from 'react';
import CardComponent from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import useStyle from './styles';

const Card = ({ value, disabled, onClick = () => {} }) => {
    const [isChosen, makeChosen] = useState(false);
    const classes = useStyle();

    const onClickHandler = () => {
        makeChosen(!isChosen);
        onClick();
    };

    const actionCard = () => (
        <CardActionArea onClick={ onClickHandler } href="#" className={ classes.content }>
            {value}
        </CardActionArea>
    );

    const disabledCard = () => (
        <div className={ classes.content }>
            {value}
        </div>);

    return (
        <CardComponent className={ classes.root }>
            { disabled ? disabledCard() : actionCard() }
        </CardComponent>
    );
};

export default Card;
