import React, { useState, ReactNode } from 'react';
import MaterialUIThemeProvider from './theme-provider';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Theme,
  Typography,
} from '@mui/material';
import { lightTheme, darkTheme } from '../style/theme';
import ThemeToggle from './material-ui-theme-toggle';
import SettingsIcon from './icons/settings';
import StyledButton from './styled-button';
import PlusIcon from './icons/plus';
import BackIcon from './icons/back';
import useMediaQuery from '@mui/material/useMediaQuery';

const Layout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const matchesLg = useMediaQuery('(min-width:1024px)');

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === 'light' ? darkTheme : lightTheme
    );
  };
  return (
    <MaterialUIThemeProvider theme={theme}>
      <Grid container>
        <Grid
          item
          xs={matchesLg ? 3 : 2}
          borderBottom={0.5}
          height={matchesLg ? 96 : 72}
        ></Grid>
        <Grid
          item
          xs={matchesLg ? 6 : 8}
          borderBottom={0.5}
          borderLeft={0.5}
          borderRight={0.5}
          height={matchesLg ? 96 : 72}
        ></Grid>
        <Grid
          item
          xs={matchesLg ? 3 : 2}
          borderBottom={0.5}
          height={matchesLg ? 96 : 72}
        ></Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={matchesLg ? 3 : 2}
          borderBottom={0.5}
          height={matchesLg ? 96 : 72}
          display="flex"
          paddingX={matchesLg ? '24px' : '6px'}
          alignItems="end"
          flexDirection="column"
          justifyContent="center"
        >
          <IconButton>
            <BackIcon mode={theme.palette.mode} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={matchesLg ? 6 : 8}
          borderBottom={0.5}
          borderLeft={0.5}
          borderRight={0.5}
          height={matchesLg ? 96 : 72}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingX={matchesLg ? '24px' : '6px'}
        >
          <Typography variant={matchesLg ? 'h4' : 'h6'}>Contacts</Typography>
          <Box
            display="flex"
            width={matchesLg ? 232 : 'min-content'}
            justifyContent="space-between"
          >
            <IconButton>
              <SettingsIcon mode={theme.palette.mode} />
            </IconButton>
            <IconButton>
              <Avatar
                alt="User"
                src="/assets/user.png"
                sx={{ width: '24px', height: '24px' }}
              />
            </IconButton>
            <StyledButton
              label="Add new"
              onClick={() => console.log('click')}
              icon={<PlusIcon />}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={matchesLg ? 3 : 2}
          borderBottom={0.5}
          height={matchesLg ? 96 : 72}
          display="flex"
          paddingX={matchesLg ? '24px' : '6px'}
          alignItems="center"
        >
          <ThemeToggle toggleTheme={toggleTheme} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={matchesLg ? 3 : 2}></Grid>
        <Grid
          item
          xs={matchesLg ? 6 : 8}
          borderLeft={0.5}
          borderRight={0.5}
          overflow="auto"
          padding={matchesLg ? '24px' : '6px'}
        >
          <Box>{children}</Box>
        </Grid>
        <Grid item xs={matchesLg ? 3 : 2}></Grid>
      </Grid>
    </MaterialUIThemeProvider>
  );
};

export default Layout;
