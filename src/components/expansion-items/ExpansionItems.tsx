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
        panel: {
            margin: '2px'
        },
        control: {
            padding: theme.spacing(2),
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
            wordWrap: "break-word"
        },
        fullWidth: { width: '100%' },
        flexCol: {
            flexDirection: 'column',
        }
    }),
);
export default function ExpansionItem(props: any) {
    console.log(props);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleClick = (event: React.ChangeEvent<{}>) => {

    };

    return (
        <div className={classes.fullWidth}>
            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onClick={handleClick}
                >
                    <Typography className={classes.heading}>{props.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.flexCol}>
                    {typeof props.val === "object" ?
                        Object.keys(props.val).map((innerKey: any, i: number) => {
                            return (<ExpansionItem title={innerKey} val={props.val[innerKey]} key={i}></ExpansionItem>)
                        })
                        :
                        <Typography className={classes.heading}>{props.val.toString()}</Typography>
                    }
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}