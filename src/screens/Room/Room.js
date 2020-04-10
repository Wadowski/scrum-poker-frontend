import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import qs from 'query-string';

import CardsList from './components/CardsList';
import PeopleList from './components/PeopleList';
import useSocket from '../../hooks/useSocket';
import { getRoomId, getPeople } from "../../redux/room/selectors";
import { updateChosenCard } from "../../redux/card/actions";
import { updateRoom } from "../../redux/room/actions";

import useStyles from './styles';

const RoomScreen = () => {
    const socket = useSocket();
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [userDetails, makeUserDetails] = useState({});
    const [votingStarted, makeVotingStarted] = useState(false);
    const roomId = useSelector(getRoomId);
    const people = useSelector(getPeople);
    const queryParams = qs.parse(window.location.search);

    if (!queryParams.id) {
        history.push('/');
    }

    useEffect(() => {
        const user = people.find(({ socketId }) => socketId === socket.id);

        if (user) {
            makeUserDetails(user);
        }
    }, [people, socket]);

    const leaveHandler = () => {
        socket.emit('leave room', roomId);
        history.push('/');
    };
    const startVotingHandler = () => {
        makeVotingStarted(true);
        dispatch(updateChosenCard(0));
        socket.emit('hide cards', roomId);
    };
    const stopVotingHandler = () => {
        makeVotingStarted(false);
        socket.emit('show cards', roomId);
    };

    const isAdmin = () => userDetails && userDetails.roles && userDetails.roles.includes('admin');

    const updatePeople = (people) => {
        dispatch(updateRoom({ people }));
    };
    const cardsUpdate = (room) => {
        dispatch(updateRoom(room));
    };

    socket.on('room people update', updatePeople);
    socket.on('cards update', updatePeople);
    socket.on('room update', cardsUpdate);
    socket.on('vote status update', (status) => {
        dispatch(updateChosenCard({ value: 0 }));
        dispatch(updateRoom({ voteStarted: status }));
    });

    return (
        <Paper className={ classes.root } elevation={ 3 }>
            {isAdmin() &&
            <ButtonGroup>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={ votingStarted }
                    href=""
                    onClick={ startVotingHandler }
                >
                    Start
                </Button>
                <Button
                    variant="contained"
                    disabled={ !votingStarted }
                    color="primary"
                    href=""
                    onClick={ stopVotingHandler }
                >
                    Show cards
                </Button>
            </ButtonGroup>}
            <div className={ classes.cardsList }>
                <CardsList />
            </div>
            <div className={ classes.peopleManagement }>
                <PeopleList people={ people } />
                <Button
                    variant="contained"
                    color="primary"
                    href=""
                    onClick={ leaveHandler }
                >
                    Leave
                </Button>
            </div>
        </Paper>
    );
};

export default RoomScreen;
