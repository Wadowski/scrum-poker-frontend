import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { useSocket } from '../../hooks/useSocket';
import { useEmit } from '../../hooks/useEmit';
import { updateRoom } from "../../redux/room/actions";

import useStyles from './styles';

const MainScreen = () => {
    const socket = useSocket();
    const emit = useEmit();
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    const createRoomHandler = () => {
        emit('create room');
    };

    const joinRoomHandler = () => {
        const sessionId = document.getElementById('session-id').value;

        if (sessionId) {
            emit('join room', sessionId);
        }
    };

    useEffect(() => {
        if (socket) {
            socket.on('room joined successfully', (roomId) => {
                dispatch(updateRoom({ id: roomId }));
                history.push(`/room?id=${roomId}`);
            });

            socket.on('room not joined successfully', () => {
                console.log('room not joined successfully');
            });
        }
    }, [socket]);


    return (
        <Paper elevation={ 3 } className={ classes.root }>
            <Typography variant="h2" component="h1">
                Scrum poker
            </Typography>
            <div className={ classes.actions }>
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
                    <TextField id="session-id" label="Room number" />
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
};

export default MainScreen;
