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
}));

export default useStyles;
