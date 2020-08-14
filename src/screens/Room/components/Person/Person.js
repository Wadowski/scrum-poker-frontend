import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Star from '@material-ui/icons/StarRounded';
import Stars from '@material-ui/icons/StarsRounded';

import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import Card from '../Card';
import { getUserDetails } from "../../../../redux/user/selectors";
import { getRoomId } from "../../../../redux/room/selectors";
import { useEmit } from "../../../../hooks/useEmit";
import { isUserAdmin } from "../../../../utils/user";

import useStyle from './styles';

const ADMIN_ROLE = 'admin';

const Person = ({ name, socketId, roles, card = {} }) => {
    const classes = useStyle();
    const emit = useEmit();
    const [isOwner, setIsOwner] = useState(false);
    const userDetails = useSelector(getUserDetails);
    const roomId = useSelector(getRoomId);

    useEffect(() => {
        setIsOwner(roles.includes(ADMIN_ROLE));
    }, [roles]);

    const assignRoomOwner = () => {
        emit('update room owner', roomId, socketId);
    };

    return (
        <div className={ classes.person }>
            <Card value={ card.value } position={ card.position } disabled />
            <Typography variant='body1' component='p' className={ classes.personName }>
                {isOwner && <Star className={ classes.adminIcon } fontSize='small' />}
                {isUserAdmin(userDetails) && !isOwner && (
                    <Tooltip title='Assign as room owner'>
                        <IconButton
                            className={ classes.adminAssignButton }
                            onClick={ assignRoomOwner }
                            aria-label='assign as room owner'
                            size='small'
                        >
                            <Stars className={ classes.adminAssignIcon } />
                        </IconButton>
                    </Tooltip>
                )}
                {name}
            </Typography>
        </div>
    );
};

export default Person;
