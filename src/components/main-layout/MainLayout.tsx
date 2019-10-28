import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Toolbar, TextField, Button } from '@material-ui/core';
import ExpansionItem from '../expansion-items/ExpansionItems';
import * as dummy from '../../assets/dummy.json'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            justifyContent: 'space-around',

        },
        paper: {
            height: '88vh',
            width: 450,
            overflow: 'scroll',
        },
        control: {
            padding: theme.spacing(2),
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        unCenter: {
            textAlign: "left",
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: "100%",
        }
    }),
);

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const [urlVal, setUrlVal] = React.useState('');
    const classes = useStyles();
    const data: any = dummy;
    const pathContext = React.createContext('');
    const handleChange = (newPath: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrlVal(event.target.value);
    };

    return (
        <Grid container className={classes.root} spacing={0}>
            <Grid item>
                <Paper className={classes.paper}>
                    <Toolbar>
                        <Typography variant="h6">Original JSON</Typography>
                    </Toolbar>
                    <div style={{ padding: 10 }}>
                        <pre className={classes.unCenter}>
                            <code className="prettyprint">
                                {JSON.stringify(data, null, 2)}
                            </code>
                        </pre>
                    </div>
                </Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.paper}>
                    <Toolbar>
                        <TextField
                            id="outlined-name"
                            placeholder="Name"
                            className={classes.textField}
                            value={urlVal}
                            onChange={handleChange('name')}
                            margin="normal"
                            variant="filled"
                            InputProps={{
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button size="small">Copy</Button>
                    </Toolbar>
                    {
                        Object.keys(data).map((key: any, i: number) => {
                            return (
                                <ExpansionItem title={key} val={data[key]} key={i}></ExpansionItem>
                            )
                        })
                    }
                    <div>
                    </div>
                </Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.paper}>
                    <Toolbar>
                        <Typography variant="h6">Data Mapper</Typography>
                    </Toolbar>
                    <Typography variant="h5" component="h3">
                        {JSON.stringify(data)}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}