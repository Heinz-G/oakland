import React, { useState, Fragment, useEffect} from "react"
import NextLink from 'next/link';
import Head from 'next/head';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from "prop-types";

import {AuthGuard} from '../../components/authentication/auth-guard';
import {DashboardLayout} from '../../components/dashboard/dashboard-layout';
import {useMounted} from '../../hooks/use-mounted';
import {ChevronDown as ChevronDownIcon} from '../../icons/chevron-down';
import {PencilAlt as PencilAltIcon} from '../../icons/pencil-alt';
import {gtm} from '../../lib/gtm';
import {
    AppBar,
    Autocomplete,
    Avatar,
    Box,
    Button,
    CardContent,
    CardHeader,
    Checkbox,
    Chip,
    FormControlLabel,
    Divider,
    Grid,
    IconButton,
    Paper,
    Tab,
    Tabs,
    TextField,
    Typography
} from '@mui/material';
import { Plus as PlusIcon } from '../../icons/plus';
import {Upload as UploadIcon} from "../../icons/upload";
import { DateTimePicker } from '@mui/lab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
  }

const countries = [
    { text: 'Jersey', value: 'JE' },
    { text: 'Jordan', value: 'JO' },
    { text: 'Kazakhstan', value: 'KZ' },
    { text: 'Kenya', value: 'KE' },
    { text: 'Kiribati', value: 'KI' },
    { text: 'Korea, Democratic People\'S Republic of', value: 'KP' },
    { text: 'Korea, Republic of', value: 'KR' },
    { text: 'Kuwait', value: 'KW' },
    { text: 'Kyrgyzstan', value: 'KG' },
    { text: 'Lao People\'S Democratic Republic', value: 'LA' }
];


const Citations = () => {
    const isMounted = useMounted();
    const [citation, setCitation] = useState(null);
    const [inputFields, setInputFields] = useState([
        {firstName: '', lastName: ''}
    ]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }


    useEffect(() => {
        gtm.push({event: 'page_view'});
    }, []);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({firstName: '', lastName: ''});
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "firstName") {
            values[index].firstName = event.target.value;
        } else {
            values[index].lastName = event.target.value;
        }

        setInputFields(values);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // handle form submission here
      
    };

    const resetForm = e => setInputFields([{firstName: '', lastName: ''}])


    return (
        <>
            <Head>
                <title>
                    Citations
                </title>
            </Head>
            <Divider/>
            <Box sx={{mb: 4, backgroundColor: 'white', width: '100%', pl: 2}}>
            <Grid
                container
                sx={{p: 1}}
                justifyContent="space-between"
                spacing={3}>
                <Grid item>
                    <Typography variant="h5">Add Citation</Typography>
                </Grid>
                <Grid item>
                    <Button startIcon={<PlusIcon fontSize="small"/>} variant="contained">Add</Button>
                    <Button startIcon={<UploadIcon fontSize="small"/>} variant="contained" sx={{ml: 1}}>Upload CSV</Button>
                </Grid>
            </Grid>
            </Box>
            <div style={{ display: 'flex', height: '95%',  paddingBottom: '15px'  }}>
                <Paper elevation={12} sx={{flexGrow: 1, maxWidth: '95%', alignItems: 'center', mx: 'auto'}}>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    {inputFields.map((inputField, index) => (
                        <Fragment key={`${inputField}~${index}`}>
 
                            <Box sx={{ mt: 3 }}>
                                <Grid
                                    container
                                    spacing={3}
                                >
                            <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Case Type"
                           name="country"
                           value={inputField.lastName}
                            onChange={event => handleInputChange(index, event)}
                />
              )}
            />
          </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Case Year"
                                            name="firstName"
                                            value={inputField.lastName}
                                            onChange={event => handleInputChange(index, event)}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Case Number"
                                            name="address"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Citation/File Number"
                                            name="optionalAddress"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Incident Number"
                                            name="state"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Lases Number"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                    <DateTimePicker
                                    onChange={(newDate) => setStartDate(newDate)}
                                    label="Date Filed"
                                    renderInput={(inputProps) => (
                                    <TextField
                                    fullWidth
                                    {...inputProps} />
                                    )}
                                    value={startDate}
                                    />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                    <DateTimePicker
                                    onChange={(newDate) => setEndDate(newDate)}
                                    label="Citation Due Date"
                                    renderInput={(inputProps) => (
                                    <TextField
                                    fullWidth
                                    {...inputProps} />
                                    )}
                                    value={endDate}
                                    />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Agency"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Division"
                           name="country"
                />
              )}
            />
          </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="DA"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Parish"
                           name="country"
                />
              )}
            />
          </Grid>
                                    <Grid
                                        item
                                        sm={3}
                                        xs={12}
                                    >
      <FormControlLabel
        control={<Checkbox name="isTaxable" />}
        label="Notify Victim"
      />
    </Grid>
    <Grid
                                        item
                                        sm={3}
                                        xs={12}
                                    >
      <FormControlLabel
        control={<Checkbox name="includesTaxes" />}
        label="Court Required"
      />
    </Grid>
    <Grid
                                        item
                                        sm={3}
                                        xs={12}
                                    >
      <FormControlLabel
        control={<Checkbox name="isTaxable" />}
        label="Vehicle Inclued"
      />
    </Grid>
    
                                </Grid>
                            </Box>

                            <div className="form-group col-sm-2">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    disabled={index === 0}
                                    onClick={() => handleRemoveFields(index)}
                                >
                                    -
                                </button>
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    onClick={() => handleAddFields()}
                                >
                                    +
                                </button>
                            </div>
                        </Fragment>
                    ))}
                </div>
            

                <br/>
                <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
      <CardHeader title="Profile" />
      <CardContent>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            sm={1}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Title"
                           name="country"
                />
              )}
            />
          </Grid>
          <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Middle Name"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
            item
            sm={1}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Suffix"
                           name="country"
                />
              )}
            />
          </Grid>
          <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="DOB"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Sex"
                           name="country"
                />
              )}
            />
          </Grid>
          <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="SSN"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Driver's License State"
                           name="country"
                />
              )}
            />
          </Grid>
          <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Driver's License No."
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Driver's License Class"
                           name="country"
                />
              )}
            />
          </Grid>
          <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="State ID"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="FBI ID"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Address Type"
                           name="country"
                />
              )}
            />
          </Grid>
          <Grid
                                        item
                                        sm={4}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Address"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={4}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Address 2"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="City"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="State"
                           name="country"
                />
              )}
            />
          </Grid>
          <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="ZIP"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        sm={2}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="ZIP +4"
                                            name="zip"
                                        />
                                    </Grid>
                                    <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Race"
                           name="country"
                />
              )}
            />
          </Grid>
          <Grid
            item
            sm={2}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField {...params}
                           fullWidth
                           label="Ethnicity"
                           name="country"
                />
              )}
            />
          </Grid>
          </Grid>
          </CardContent>
                </Box>
      </TabPanel>
    </div>
            </form>
                </Paper>
            </div>
        </>
    );

}
Citations.getLayout = (page) => (
    <AuthGuard>
        <DashboardLayout>
            {page}
        </DashboardLayout>
    </AuthGuard>
);


export default Citations;