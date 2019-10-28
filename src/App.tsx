import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpacingGrid from './components/main-layout/MainLayout';
import { AppBar, Toolbar, IconButton, Typography, Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="App">
       <header>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Json Explorer
            </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      </header>
      <main className="main">
      <SpacingGrid></SpacingGrid>
      </main>
    </div>
  );
}

export default App;
