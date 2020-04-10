import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '60px',
        height: '100px',
        margin: '8px',
        borderRadius: 8,
    },
    content: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        fontSize: '32px',
    },
    chosen: {
        backgroundColor: theme.palette.success.main,
    },
    disabled: {
        backgroundColor: '#f0f0f0',
        color: '#9b9b9b',
    },
}));

export default useStyles;
