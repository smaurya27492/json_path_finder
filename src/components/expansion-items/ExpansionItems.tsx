import React from 'react';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, makeStyles, createStyles, Theme } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        fullWidth: { width: '100%' }
    }),
);
export default function ExpansionItem(props: any) {
    console.log(props);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={classes.fullWidth}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{props.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {typeof props.val === "object" ?
                        Object.keys(props.val).map((innerKey: any, i: number) => {
                            return (<ExpansionItem title={innerKey} val={props.val[innerKey]} key={i}></ExpansionItem>)
                        })
                        :
                        <Typography className={classes.heading}>{props.val}</Typography>
                    }
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}