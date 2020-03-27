import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '900px',
        minWidth: '320px',
        minHeight: '350px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '64px',
    },
    joinRoom: {
        display: 'flex',
    },
    actions: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
    },
    or: {
        padding: '8px',
    },
    button: {
        minHeight: '48px',
    },
    name: {
        paddingBottom: '32px',
    },
}));

export default useStyles;
