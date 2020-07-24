import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountIcon from '@material-ui/icons/PersonOutlined';
import InputIcon from '@material-ui/icons/Input';
import { TopbarNav } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  profileButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  
  const pages = [
    {
      title: 'Statistics',
      href: '/statistics',
    },
    {
      title: 'Estimation',
      href: '/estimation',
    },
    {
      title: 'About',
      href: '/about',
    },
  ];


  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="inherit"
    >
      <Toolbar>
        <RouterLink to="/statistics">
          <img
            width="80" height="60"
            alt="Logo"
            src="/images/logos/logo.png"
          />
        </RouterLink>

        <TopbarNav
          className={classes.nav}
          pages={pages}
        />

        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <RouterLink to="/profile">
            <IconButton
              className={classes.profileButton}
              color="default"
            >
              <AccountIcon />
            </IconButton>
          </RouterLink>
          <IconButton
            className={classes.signOutButton}
            color="default"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
