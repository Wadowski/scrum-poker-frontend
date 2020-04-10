import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import qs from 'query-string';

import CardsList from './components/CardsList';
import PeopleList from './components/PeopleList';
import NameModal from './components/NameModal';
import { useSocket } from '../../hooks/useSocket';
import { useEmit } from '../../hooks/useEmit';
import { getRoomId, getPeople } from "../../redux/room/selectors";
import { updateChosenCard } from "../../redux/card/actions";
import { isVoteStarted } from "../../redux/room/selectors";
import { updateRoom } from "../../redux/room/actions";
import { updateUserDetails } from "../../redux/user/actions";
import { getUserDetails } from "../../redux/user/selectors";

import useStyles from './styles';

const RoomScreen = () => {
    const socket = useSocket();
    const emit = useEmit();
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const roomId = useSelector(getRoomId);
    const people = useSelector(getPeople);
    const votingStarted = useSelector(isVoteStarted);
    const userDetails = useSelector(getUserDetails);
    const [nameModalOpen, makeNameModalOpen] = useState(true);

    const queryParams = qs.parse(window.location.search);

    if (!queryParams.id) {
        history.push('/');
    }

    const leaveHandler = () => {
        emit('leave room', roomId);
        dispatch(updateRoom({}));
        dispatch(updateUserDetails({}));
        dispatch(updateChosenCard(0));
        history.push('/');
    };
    const startVotingHandler = () => {
        emit('hide cards', roomId);
    };
    const stopVotingHandler = () => {
        emit('show cards', roomId);
    };

    const nameSubmitHandler = (details) => {
        emit('update user details', roomId, details);
    };

    const isAdmin = () => userDetails && userDetails.roles && userDetails.roles.includes('admin');

    const updatePeople = (people) => {
        dispatch(updateRoom({ people }));
    };
    const cardsUpdate = (room) => {
        dispatch(updateRoom(room));
    };
    const userDetailsUpdate = (details) => {
        dispatch(updateUserDetails(details));
    };
    const voteStatusUpdate = (status) => {
        dispatch(updateChosenCard({ value: 0, position: 0 }));
        dispatch(updateRoom({ voteStarted: status }));
    };

    useEffect(() => {
        if (emit) {
            emit('update user details', roomId);
        }
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on('room people update', updatePeople);
            socket.on('user details update', userDetailsUpdate);
            socket.on('cards update', updatePeople);
            socket.on('room update', cardsUpdate);
            socket.on('vote status update', voteStatusUpdate);
        }
    }, [socket]);

    return (
        <Paper className={ classes.root } elevation={ 3 }>
            <Typography component="h5" variant="h5" className={ classes.header }>
                Welcome {userDetails.name}
            </Typography>
            <Typography component="h6" variant="h6" className={ classes.header }>
                Room number {roomId}
            </Typography>
            {isAdmin() &&
            <ButtonGroup>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={ votingStarted }
                    href=""
                    onClick={ startVotingHandler }
                >
                    Start voting
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
            <NameModal
                open={ nameModalOpen }
                onClose={ () => { makeNameModalOpen(false); } }
                onLeave={ leaveHandler }
                onSubmit={ nameSubmitHandler }
            />
        </Paper>
    );
};

export default RoomScreen;
