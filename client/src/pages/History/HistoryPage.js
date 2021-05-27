import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, IconButton } from '@material-ui/core';
import DelteIcon from '@material-ui/icons/Delete';
import axios from 'axios';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function HistoryPage() {
    const [arr, setArray] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        const getHistory = async () => {
            await axios.get("http://localhost:4000/search/history")
                .then(res => {
                    console.log(res.data);
                    setArray(res.data);
                }).catch(error => {
                    console.log(error.message);
                });
        }
        getHistory();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:4000/search/history/${id}`)
            .then(res => {
                setArray(prevValue => prevValue.filter(value => value._id !== id));
            }).catch(error => {
                console.log(error);
            });
    }
    return (
        <Paper style={{ marginTop: 24, padding: 20 }}>
            <Container maxWidth="lg" >
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Page Id</StyledTableCell>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell>Phrase</StyledTableCell>
                                <StyledTableCell>Delete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!arr.length > 0 ? "Nothing to show" :
                                arr.map((item, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell >{item.pageId}</StyledTableCell>
                                        <StyledTableCell>{item.title}</StyledTableCell>
                                        <StyledTableCell >{item.phrase}</StyledTableCell>
                                        <StyledTableCell><IconButton onClick={() => handleDelete(item._id)}><DelteIcon /></IconButton></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </ Paper>
    );
}
export default HistoryPage;