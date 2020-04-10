import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import useStyle from './styles';

const NameModal = ({ open, onClose, onSubmit }) => {
    const history = useHistory();
    const classes = useStyle();
    const [name, makeName] = useState(null);

    const updateName = (e) => {
        makeName(e.target.value);
    };

    const handleSubmit = () => {
        if (name) {
            onSubmit({ name });
            onClose();
        }
    };

    const handleClose = () => {
        onClose();
        history.push('/');
    };

    return (
        <Dialog open={ open } onClose={ handleClose } aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Enter your name</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="name"
                    type="email"
                    onChange={ updateName }
                    fullWidth
                />
            </DialogContent>
            <DialogActions className={ classes.actions }>
                <Button
                    onClick={ handleSubmit }
                    color="primary"
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NameModal;
