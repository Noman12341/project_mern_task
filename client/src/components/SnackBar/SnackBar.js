import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// function for alert inside snack bar
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
//   default function
function SnackBar({ open, handleClose, msg, severity, hideDuration }) {
    return <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={hideDuration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
            {msg}
        </Alert>
    </Snackbar>
}
export default SnackBar;