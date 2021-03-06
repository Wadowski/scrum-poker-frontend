import CardComponent from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import classnames from 'classnames';

import { useEmit } from '../../../../hooks/useEmit';
import { getCardValue } from "../../../../redux/card/selectors";
import { getRoomId, isVoteStarted, getPeople } from "../../../../redux/room/selectors";
import { updateChosenCard } from "../../../../redux/card/actions";

import useStyle from './styles';

const getMostCommonCard = (people) => {
    let sum = 0;
    let num = 0;
    people.forEach(({ card }) => {
        if (card && card.position) {
            sum += card.position;
            num += 1;
        }
    });

    return Math.round(sum/num);
};

const Card = ({ value, position, disabled }) => {
    const emit = useEmit();
    const dispatch = useDispatch();
    const classes = useStyle();

    const chosenCardValue = useSelector(getCardValue);
    const roomId = useSelector(getRoomId);
    const voteStarted = useSelector(isVoteStarted);
    const people = useSelector(getPeople);

    const isChosen = chosenCardValue === value;

    const onClickHandler = () => {
        dispatch(updateChosenCard({ value, position }));
        emit('card chosen', roomId, { value, position });
    };

    const actionCard = () => (
        <CardActionArea onClick={ onClickHandler } disabled={ !voteStarted } href="#" className={ classnames({
            [classes.content]: true,
            [classes.chosen]: isChosen,
            [classes.disabled]: !voteStarted,
        }) }>
            <Typography variant='body2' component='p'>
                {value}
            </Typography>
        </CardActionArea>
    );

    const disabledCard = () => (
        <div className={ classnames({
            [classes.content]: true,
            [classes.notMatched]: position && getMostCommonCard(people) !== position,
        }) }>
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
