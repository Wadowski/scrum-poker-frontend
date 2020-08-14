import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    person: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '8px',
    },
    personName: {
        display: 'flex',
        alignItems: 'center',
    },
    adminIcon: {
        fill: 'gold',
    },
    adminAssignIcon: {
        fill: 'lightgray',
    },
    adminAssignButton: {
        padding: 0,
        marginRight: '4px',
    },
}));

export default useStyles;
