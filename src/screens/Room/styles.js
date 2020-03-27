import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '400px',
        minHeight: '300px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
    },
    cardsList: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '64px',
        paddingTop: '64px',
    },
    peopleManagement: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default useStyles;
