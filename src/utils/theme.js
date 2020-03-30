import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#759EB8',
            contrastText: '#2A3439',
        },
        text: {
            primary: '#2A3439',
            secondary: '#FFFFFF'
        },
        error: {
            main: '#EF959D',
        },
        success: {
            main: '#B8D8BA',
        },
        warning: {
            main: '#EAF0CE',
        },
    },
    typography: {
        fontFamily: [
            '"Poppins"',
            'cursive',
        ],
        fontSize: 16,
        body2: {
            fontSize: 30,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                fontSize: 20,
                textTransform: 'capitalize',
                borderRadius: 16,
                padding: '4px 20px',
            }
        },
        MuiInputLabel: {
            root: {
                color: '#759EB8',
            },
        },
        MuiPaper: {
            rounded: {
                borderRadius: 32,
            }
        }
    }
});
