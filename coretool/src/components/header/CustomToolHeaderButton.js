'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme, useColorScheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

const CustomToolHeaderButton=()=> {
    const { setMode } = useColorScheme();
  
    const handleThemeChange = React.useCallback(
      (event) => {
        setMode(event.target.value);
      },
      [setMode],
    );
  
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  
    const toggleMenu = React.useCallback(
      (event) => {
        setMenuAnchorEl(isMenuOpen ? null : event.currentTarget);
        setIsMenuOpen((previousIsMenuOpen) => !previousIsMenuOpen);
      },
      [isMenuOpen],
    );
  
    return (
      <React.Fragment>
        <Tooltip title="Settings" enterDelay={1000}>
          <div>
            <IconButton type="button" aria-label="settings" onClick={toggleMenu}>
              <SettingsIcon />
            </IconButton>
          </div>
        </Tooltip>
        <Popover
          open={isMenuOpen}
          anchorEl={menuAnchorEl}
          onClose={toggleMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          disableAutoFocus
        >
          <Box sx={{ p: 2 }}>
            <FormControl>
              <FormLabel id="custom-theme-switcher-label">Theme</FormLabel>
              <RadioGroup
                aria-labelledby="custom-theme-switcher-label"
                defaultValue="system"
                name="custom-theme-switcher"
                onChange={handleThemeChange}
              >
                <FormControlLabel value="light" control={<Radio />} label="Light" />
                <FormControlLabel value="system" control={<Radio />} label="System" />
                <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              </RadioGroup>
            </FormControl>
          </Box>
        </Popover>
      </React.Fragment>
    );
  }

  export default CustomToolHeaderButton;