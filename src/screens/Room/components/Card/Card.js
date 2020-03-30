import CardComponent from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import classnames from 'classnames';

import { useSocket } from '../../../../hooks/useSocket';
import { getCardValue, getRoomId } from "../../../../redux/selectors";
import { updateChosenCard } from "../../../../redux/actions";

import useStyle from './styles';

const Card = ({ value, disabled }) => {
    const socket = useSocket();
    const dispatch = useDispatch();
    const classes = useStyle();
    const chosenCardValue = useSelector(getCardValue);
    const roomId = useSelector(getRoomId);

    const isChosen = chosenCardValue === value;

    const onClickHandler = () => {
        dispatch(updateChosenCard(value));
        socket.emit('card chosen', roomId, value);
    };

    const actionCard = () => (
        <CardActionArea onClick={ onClickHandler } href="#" className={ classnames({
            [classes.content]: true,
            [classes.chosen]: isChosen,
        }) }>
            <Typography variant='body2' component='p'>
                {value}
            </Typography>
        </CardActionArea>
    );

    const disabledCard = () => (
        <div className={ classes.content }>
            <Typography variant='body2' component='p'>
                {value}
            </Typography>
        </div>);

    return (
        <CardComponent className={ classes.root }>
            { disabled ? disabledCard() : actionCard() }
        </CardComponent>
    );
};

export default Card;
