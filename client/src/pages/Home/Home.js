import React, { useState } from 'react';
import { Container, Paper, Button, Box, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import useStyles from './styles';
import SnackBar from '../../components/SnackBar/SnackBar';
import { useDispatch } from 'react-redux';
import { searchPhrase } from '../../actions/search';
import { useHistory } from 'react-router-dom';

function Home() {

    const classes = useStyles();
    const [value, setValue] = useState("# Start Typing");
    const [isLoading, setIsloading] = useState(false);
    const [msg, setMessage] = useState("");
    const history = useHistory();

    const dispatch = useDispatch();

    // snak bar hooks
    const [open, setOpen] = React.useState(false);

    const handleClick = (msg) => {
        setMessage(msg);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const getSelectedText = () => {
        setIsloading(true);

        const selectedText = window.getSelection().toString();
        if (selectedText.length) {
            dispatch(searchPhrase(selectedText, setIsloading, history, handleClick));
        } else {
            handleClick("No String is selected.");
            console.log("No value selected yet");
            setIsloading(false);
        }
    }

    return (
        <Container maxWidth="xl">
            <div className={classes.markDownBox}>
                <textarea
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <Paper>
                    <Typography variant="h4" align="center">MarkDown</Typography>
                    <ReactMarkdown children={value} className={classes.markDown} />
                    <Box align="center" my={2}>
                        <Button variant="contained" style={{ marginRight: 10 }} color="primary" onClick={getSelectedText} disabled={isLoading}>{isLoading ? "Working..." : "Search"}</Button>
                        <Button variant="contained" color="secondary" onClick={() => setValue("")}>Clear</Button>
                    </Box>
                </Paper>
            </div>
            <SnackBar open={open} handleClose={handleClose} msg={msg} severity="error" hideDuration={6000} />
        </Container>
    );
}
export default Home;