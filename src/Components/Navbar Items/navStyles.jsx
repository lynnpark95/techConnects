import { red } from "@mui/material/colors";

export const navStyles = {
    drawer: {
        width: 320,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 310,
            boxSizing: 'border-box',
            backgroundColor: '#4B87C5',
            color: 'rgba(255, 255, 255)',
        },
        '& .Mui-selected': {
            color: red,
        },
    },
    icons: {
        color: 'rgba(255, 255, 255, 0.7)!important',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '20px',
        }
    } 
};