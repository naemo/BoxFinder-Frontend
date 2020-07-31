import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountIcon from '@material-ui/icons/PersonOutlined';
import InputIcon from '@material-ui/icons/Input';
import { TopbarNav } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 2
  },
  signOutButton: {
    marginLeft: theme.spacing(2),
  },
  profileButton: {
    marginLeft: theme.spacing(3)
  },
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
        <Hidden mdDown>
          <TopbarNav
            className={classes.nav}
            pages={pages}
          />
        </Hidden>
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
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden lgUp>
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{ paper: classes.drawer }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            <TopbarNav
              className={classes.nav}
              pages={pages}
            />
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
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
