import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

function DetailPage() {
    const classes = useStyles();

    // const [data,setData] = useState("");
    const data = useSelector(state => state.search);


    return (
        <Paper elevation={6} className={classes.paper}>
            <Typography variant="body1" align="left" component="p">page ID: {data.pageId}</Typography>
            <Typography variant="h4" align="center">Title: {data.title}</Typography>
            <Typography variant="body2" align="center">{data.para}</Typography>
        </Paper>
    );
}
export default DetailPage;