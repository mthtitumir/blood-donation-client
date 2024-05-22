import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#A8174E",
        },
        secondary: {
            main: "#B32346",
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained"
            }
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg"
            }
        },
    },
    typography: {
        body1: {
            color: "#000000"
        }
    }
});

theme.shadows[1] = "0px 5px 22px #550832"