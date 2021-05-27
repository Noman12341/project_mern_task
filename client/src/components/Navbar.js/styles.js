import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 4,
        marginTop: theme.spacing(4),
        textAlign: "center",
        padding: theme.spacing(1.5, 6),
        backgroundColor: theme.palette.common.white,
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    }
}));