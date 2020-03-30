import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardsList: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
    },
}));

export default useStyles;
