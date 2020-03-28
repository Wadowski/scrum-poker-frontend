import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '60px',
        height: '100px',
        margin: '8px',
    },
    content: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        fontSize: '30px',
    },
    chosen: {
        backgroundColor: 'red',
    },
}));

export default useStyles;
