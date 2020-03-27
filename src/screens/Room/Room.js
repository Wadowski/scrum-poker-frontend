import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'query-string';

import CardsList from './components/CardsList';
import PeopleList from './components/PeopleList';
import useSocket from '../../hooks/useSocket';

import useStyles from './styles';

const RoomScreen = () => {
    const [people, makePeople] = useState([]);
    const [details, makeDetails] = useState({});
    const classes = useStyles();
    const history = useHistory();
    const socket = useSocket();

    useEffect(() => {
        const user = people.find(({ socketId }) => socketId === socket.id);

        if (user) {
            makeDetails(user);
        }
    }, [people, socket]);

    socket.on('room people update', (people) => {
        makePeople(people);
    });

    const queryParams = qs.parse(window.location.search);

    if (!queryParams.id) {
        history.push('/');
    }

    const leaveHandler = () => {
        history.push('/');
    };
    const isAdmin = () => details && details.roles && details.roles.includes('admin');

    return (
        <Paper className={ classes.root } elevation={ 3 }>
            {isAdmin() &&
            <ButtonGroup>
                <Button variant="contained" color="primary" href="">
                    Start
                </Button>
                <Button variant="contained" disabled color="primary" href="">
                    Show cards
                </Button>
            </ButtonGroup>}
            <div className={ classes.cardsList }>
                <CardsList />
                <Button variant="contained" color="primary" href="">
                    Submit
                </Button>
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
}

export default RoomScreen;
