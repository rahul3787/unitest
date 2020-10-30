import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Maps from "./component/Maps";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TodayIcon from '@material-ui/icons/Today';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  selectRoot: { padding: "0", textAlign: "center" },

  textF: {
    selectRoot: { padding: "5px 0", textAlign: "center" },
  },
}));

function App() {
  const classes = useStyles();
  const [Drop, setDrop] = React.useState("");
  const [selectedDate, handleDateChange] = useState(new Date());
  const [value, setValue] = React.useState({
    Yes: false,
    No: false
  });
  const handleChange = (event) => {
    setDrop(event.target.value);
  };
  const handleChanges = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App" style={{backgroundImage: "linear-gradient(#DBEEFE, white, #DBEEFE)"}}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-start"
          >
            <Grid item xs={3}>
              <Button variant="contained" color="primary" style={{backgroundColor:"#2A8DC7"}}  size="small">
                Email all users
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary" style={{backgroundColor:"#2A8DC7"}}  size="small">
                see all users
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={3}>
              <Button variant="contained" color="primary" style={{backgroundColor:"#F1F9FF", color:"black"}} size="small">
                create customer
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" style={{backgroundColor:"#F1F9FF", color:"black"}}  size="small">
                see recent users
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <p style={{ marginLeft: "15px" }}>favorite route</p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="select"
                  variant="outlined"
                  size="small"
                  style={{
                    marginTop: "-10px",
                    marginBottom: "10px",
                    marginLeft: "15px",
                    width: "500px",
                  }}
                  value={Drop}
                  onChange={handleChange}
                 
                  label="select route"
                  select
                >
                   <MenuItem value={1}>Route One</MenuItem>
                  <MenuItem value={2}>Route Two</MenuItem>
                  <MenuItem value={3}>Route Three</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            style={{ marginLeft: "15px" }}
          >
            <Grid item>
              <PinDropOutlinedIcon fontSize='large' />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                size="small"
                style={{
                  width: "300px",
                }}
                id="input-with-icon-grid"
                label="Enter the shipping location"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            style={{ marginLeft: "15px" }}
          >
            <Grid item>
              <LocationOnOutlinedIcon  fontSize='large'/>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                size="small"
                style={{
                  width: "300px",
                }}
                id="input-with-icon-grid"
                label="Enter destination"
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginLeft: "20px" }}
          >
            <Grid item> 
              <TodayIcon style={{ marginTop: "25px" }}/>
            </Grid>
            <Grid item> 
            <p style={{ marginTop: "25px", fontSize:"18px" }}>Ship Date</p>
            </Grid>
            
            <Grid item xs={4}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Ship Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "start" }}
                onChange={(date) => handleDateChange(date)}
                style={{ marginTop: "20px", width: "200px" }}
                size="small"
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginLeft: "20px" }}
          >
            <Grid item> 
              <TodayIcon style={{ marginTop: "15px" }}/>
            </Grid>
            <Grid item> 
            <p style={{ marginTop: "15px", fontSize:"18px" }}>Estimated Transit Time :</p>
            </Grid>
            
            <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="select"
                  variant="outlined"
                  size="small"
                  style={{
                    marginTop: "10px",
                    width: "200px",
                  }}
                  value={Drop}
                  onChange={handleChange}
                  select
                >
                  <MenuItem value={1}>4 Day</MenuItem>
                  <MenuItem value={2}>5 Day</MenuItem>
                  <MenuItem value={3}>6 Day</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginLeft: "20px" }}
          >
            <Grid item> 
              <MapOutlinedIcon style={{ marginTop: "5px" }}/>
            </Grid>
            <Grid item> 
            <p style={{ marginTop: "5px", fontSize:"18px" }}>Shipment going through Chicago :</p>
            </Grid>
            
            <Grid item xs={3}>
            <RadioGroup  row aria-label="gender" name="gender1" value={value} style={{  marginLeft: "10px" }} onChange={handleChanges}>
            <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
            <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
            </RadioGroup>
            
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginLeft: "18px" }}
          >
            <Grid item> 
            <Button variant="contained" color="primary" style={{backgroundColor:"#F1F9FF", color:"black"}} size="small">
                Submit
              </Button>
            </Grid>
            <Grid item style={{ marginLeft: "20px" }}> 
            <Button variant="contained" color="primary" style={{backgroundColor:"#F1F9FF", color:"black"}} size="small">
                Save Route
              </Button>
            </Grid>
            
            
          </Grid>
         
              
        </Grid>
        <Grid item xs={6} style={{ backgroundColor: "pink" }}>
          <Maps />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
