import { createTheme, ThemeOptions } from '@material-ui/core/styles'
import * as colorManipulator from '@material-ui/core/styles/colorManipulator'

const bodyFont = 'Lato, Helvetica, sans-serif'
const unit = 4

const baseTheme: ThemeOptions = {
    // See https://material-ui.com/customization/default-theme/

    // Adapted from our own Breakpoints.js
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1600,
            xl: 1920,
        },
    },

    typography: {
        fontFamily: bodyFont,
        fontSize: 14,
        h1: { fontFamily: bodyFont },
        h2: { fontFamily: bodyFont },
        h3: { fontFamily: bodyFont },
        h4: { fontFamily: bodyFont },
        h5: { fontFamily: bodyFont },
        h6: { fontFamily: bodyFont },
        // title: { fontFamily: headingFont },
        // headline: { fontFamily: headingFont },
    },

    palette: {
        type: 'light',
        primary: {
            main: 'rgb(52, 115, 169)',
        },
        secondary: {
            main: '#00965c',
        },
        error: {
            main: '#EB011E',
        },
        background: {
            default: '#FAFAFA',
        },
    },

    shape: {
        borderRadius: 4,
    },

    spacing: unit,
    // spacing: {
    //   unit,
    // },

    // Default props go here.
    props: {
        MuiTextField: {
            variant: 'outlined',
        },
        MuiFormControl: {
            margin: 'normal',
        },
    },

    // CSS overrides go here.
    // All valid class names are listed in the API docs for material-ui.
    overrides: {
        MuiListItemIcon: {
            root: {
                minWidth: 40,
            },
        },
        MuiButton: {
            root: {
                textTransform: 'none',
            },
            contained: {
                'boxShadow': 'none',
                '&$focusVisible': {
                    boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiFab: {
            root: {
                'boxShadow': 'none',
                '&$focusVisible': {
                    boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiFormControl: {
            // The default margins aren't symmetrical, which makes it difficult to
            // nicely center things placed next to a form control. These values add up
            // to the defaults from material-ui.
            marginNormal: {
                // marginTop: 16,
                // marginBottom: 8,
                marginTop: 12,
                marginBottom: 12,
            },
            marginDense: {
                // marginTop: 8,
                // marginBottom: 4,
                marginTop: 6,
                marginBottom: 6,
            },
        },
    },
}

export const lightTheme = createTheme(baseTheme)

export const darkTheme = createTheme({
    ...baseTheme,
    palette: {
        ...baseTheme.palette,
        type: 'dark',
        contrastThreshold: 3,
        primary: {
            // Our primary color clashes with our dark background.
            main: colorManipulator.lighten(lightTheme.palette.primary.main, 0.3),
        },

        background: {
            default: 'rgb(50, 50, 50)',
        },
    },
})