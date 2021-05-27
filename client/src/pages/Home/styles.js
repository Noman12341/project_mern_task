import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    markDownBox: {
        minHeight: '60vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(1.4),
        marginTop: theme.spacing(4),
        '& textarea': {
            background: '#eff1f5',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            outline: 'none',
            border: 'none',
            borderRadius: 5,
            padding: 20,
            fontSize: 22,
        }
    }, markDown: {
        padding: 20,
        minHeight: '60vh'
    }
}));