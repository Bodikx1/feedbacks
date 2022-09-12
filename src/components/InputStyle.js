import {withStyles} from "@material-ui/core/styles";
import {TextField} from "@mui/material";

export const CssTextField = withStyles({
    root: {
        color: 'black',
        '& label.Mui-focused': {
            color: 'blue',
            width: '60px',
            background:'white'
        },
        '& label': {
            width:'60px',
            backgroundColor:'white'
        },
        '& .MuiOutlinedInput-root': {
            '& input': {
                borderRadius: '6px',
                zIndex: '0',
                width: '300px',
            },
            '&.Mui-focused input': {
                color: 'black',
                borderColor: 'blue',
                borderRadius: '6px',
            },
            '& fieldset': {
                border: 'none',
            },
        },
    },
})(TextField);
export const NameTextField = withStyles({
    root: {
        color: 'black',
        '& label.Mui-focused': {
            color: 'blue',
            backgroundColor: 'white',
        },
        '& label': {
            backgroundColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& input': {
                border: '1px solid lightgrey',
                borderRadius: '6px',
                width: '100%',
                zIndex: '0',
            },
            '&.Mui-focused input': {
                color: 'black',
                borderRadius: '6px',
            },
            '& fieldset': {
                border: 'none',
            },
        },
    },
})(TextField);