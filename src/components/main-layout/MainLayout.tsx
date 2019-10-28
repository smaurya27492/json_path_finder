import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Toolbar } from '@material-ui/core';
import ExpansionItem from '../expansion-items/ExpansionItems';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            justifyContent: 'space-around',

        },
        paper: {
            height: '88vh',
            width: 450
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
        }
    }),
);

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();
    const data: any = [{ a: 1 }, { b: { x: 1 } }, 1, [{ a: { x: 9 } }, 'v', 'x']];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
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
                        <Typography variant="h6">Explorer</Typography>
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