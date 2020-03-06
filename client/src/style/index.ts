
import {
    makeStyles,
    createStyles,
    Theme,
    createMuiTheme,
} from "@material-ui/core/styles";

// export const theme = createMuiTheme();
export const theme = createMuiTheme({
    palette: {
        type: "dark"
    },
    typography: {
        button: {
            textTransform: "none",
        }
    }
});

export const useStyles = makeStyles(({ palette }: Theme) =>
    createStyles({
        button: {
            color: palette.secondary.main,
            background: palette.primary.main
        },
        label: {
            color: palette.primary.main,
            background: palette.background.default
        }
    })
);
