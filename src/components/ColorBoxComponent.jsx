import React, { Fragment, useState, useEffect } from 'react'
import { Button, TextField, Select, MenuItem, InputLabel, FormControl, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, LinearProgress, GridList, GridListTile, Card, CardContent, CardActionArea, CardMedia, Typography, CardActions } from '@material-ui/core';
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCardImage, MDBBox } from 'mdbreact';
import { makeStyles } from '@material-ui/core/styles';

const ColorBoxComponent = () => {
    const classes = useStyles();
    const [colorbox, setColorBox] = useState([])
    const [item, setItem] = useState('')
    const [saturate, setSaturate] = useState(false)

    useEffect(() => {
        
        const loopingColor = () => {           
            let color = '';
            let data_color = [];
            for (color = 1; color <= 40; color++) {
                let r = Math.round((Math.random() * 255)); //red 0 to 255
                let g = Math.round((Math.random() * 255)); //green 0 to 255
                let b = Math.round((Math.random() * 255)); //blue 0 to 255
                let correctColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
                data_color.push({ 'id': `${color}`, 'color': correctColor })
            }
            setColorBox(data_color)
        }
        loopingColor()
    }, []);

    const arrayholder = colorbox;

    const handleFilter = (color) => {
        const newData = arrayholder.filter(item => {
            const itemData = `${item.color}}`;

            const textData = color;
            return itemData.indexOf(textData) > 1;
        });
        setColorBox(newData);
    }

    const handleReload = () => {
        window.location.reload()
    }

    return (
        <Fragment>
            <MDBCard className='mb-2'>
                <MDBCardBody className='p-1'>
                    <MDBRow>
                        <MDBCol lg="2">
                            <InputLabel className="pt-2 mx-2">Saturate</InputLabel>
                            <Select fullWidth className=" mx-2" value={saturate} onChange={(event) => setSaturate(event.target.value)}>
                                <MenuItem value="">
                                    <em>Saturate</em>
                                </MenuItem>
                                <MenuItem value={true}>Enable</MenuItem>
                                <MenuItem value={false}>Disabled</MenuItem>
                            </Select>
                        </MDBCol>
                        <MDBCol lg="2">
                            {/* {item} */}
                            <InputLabel className="pt-2 mx-2">Choose Color</InputLabel>
                            <Select fullWidth className=" mx-2" value={item} onChange={(event) => setItem(event.target.value)}>
                                <MenuItem value="">
                                    <em>Choose Color</em>
                                </MenuItem>
                                <MenuItem value='rgb(255, 0, 0)'>Red</MenuItem>
                                <MenuItem value='rgb(0, 0, 0)'>Green</MenuItem>
                                <MenuItem value='rgb(255, 255, 0)'>Yellow</MenuItem>
                                <MenuItem value='rgb(0, 0, 255)'>Blue</MenuItem>
                                <MenuItem value='rgb(102, 51, 0)'>Brown</MenuItem>
                                <MenuItem value='rgb(128, 128, 128)'>Gray</MenuItem>
                                <MenuItem value='rgb(76, 0, 153)'>Purple</MenuItem>
                                <MenuItem value='rgb(552, 0, 127)'>Pink</MenuItem>
                            </Select>
                        </MDBCol>
                        <MDBCol lg="2">
                            <MDBRow className="pt-2 mx-2">
                                <MDBBtn color="dark-green"  gradient="blue" onClick={()=>handleFilter(item)}>
                                    Filter <MDBIcon icon="filter" className="ml-1" />
                                </MDBBtn>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol lg="2">
                            <MDBRow className="pt-2 mx-2">
                                <MDBBtn color="dark-red" onClick={handleReload}>
                                    Reload <MDBIcon icon="reload" className="ml-1" />
                                </MDBBtn>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <MDBCard className='mb-2'>
                {/* {JSON.stringify(colorbox)} */}
                <GridList cellHeight={350} className={classes.gridList} cols={5}>
                    {colorbox.map((item, i) => {
                        if(saturate){
                            return(
                                <Card style={{ height: 200, backgroundColor: item.color, WebkitFilter: `saturate(0.5)` }}></Card>
                            )
                        }else{
                            return(
                                <Card style={{ height: 200, backgroundColor: item.color }}></Card>
                            )
                        }
                    })}
                </GridList>
            </MDBCard>
        </Fragment>
    )
}

export default ColorBoxComponent
const useStyles = makeStyles((theme) => ({
    gridList: {
        height: 736,
    },
}));
