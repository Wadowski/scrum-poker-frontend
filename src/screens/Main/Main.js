import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

import useSocket from '../../hooks/useSocket';
import { updateRoomId } from "../../redux/actions";

import useStyles from './styles';

const MainScreen = () => {
    const socket = useSocket();
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    const createRoomHandler = () => {
        const name = document.getElementById('name').value;

        if (name) {
            socket.emit('create room', name);
        }
    };

    const joinRoomHandler = () => {
        const sessionId = document.getElementById('session-id').value;
        const name = document.getElementById('name').value;

        if (name && sessionId) {
            socket.emit('join room', sessionId, name);
        }
    };

    socket.on('room joined successfully', (roomId) => {
        dispatch(updateRoomId(roomId));
        history.push(`/room?id=${roomId}`);
    });

    socket.on('room not joined successfully', () => {
        console.log('room not joined successfully');
    });

    return (
        <Paper elevation={ 3 } className={ classes.root }>
            <Typography variant="h2" component="h1">
                Scrum poker
            </Typography>
            <div className={ classes.actions }>
                <TextField id="name" label="Enter your name" className={ classes.name } />
                <Button
                    variant="contained"
                    color="primary"
                    href=""
                    onClick={ createRoomHandler }
                    className={ classes.button }
                >
                    Create room
                </Button>
                <Typography variant="subtitle1" component="p" className={ classes.or }>
                    or
                </Typography>
                <div className={ classes.joinRoom }>
                    <TextField id="session-id" label="Session ID" />
                    <Button
                        variant="contained"
                        color="primary"
                        href=""
                        onClick={ joinRoomHandler }
                    >
                        Join room
                    </Button>
                </div>
            </div>
        </Paper>
    );
}

export default MainScreen;
