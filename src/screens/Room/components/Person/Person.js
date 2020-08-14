import Typography from '@material-ui/core/Typography';
import Star from '@material-ui/icons/StarRounded';

import React, { useState, useEffect } from 'react';

import Card from '../Card';

import useStyle from './styles';

const ADMIN_ROLE = 'admin';

const Person = ({ name, roles, card = {} }) => {
    const classes = useStyle();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setIsAdmin(roles.includes(ADMIN_ROLE));
    }, [roles]);

    return (
        <div className={ classes.person }>
            <Card value={ card.value } position={ card.position } disabled />
            <Typography variant='body1' component='p' className={ classes.personName }>
                {isAdmin && <Star className={ classes.adminIcon } fontSize='small' />} {name}
            </Typography>
        </div>
    );
};

export default Person;
