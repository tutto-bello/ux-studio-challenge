import React, { useState, ReactNode } from 'react';
import MaterialUIThemeProvider from './theme-provider';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Modal,
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
import ContactForm from './contact-form';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Layout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const matchesLg = useMediaQuery('(min-width:1024px)');
  const matchesSM = useMediaQuery('(min-width:544px)');

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
          xs={matchesLg ? 3 : 1.5}
          borderBottom={0.5}
          height={matchesLg ? 96 : 72}
        ></Grid>
        <Grid
          item
          xs={matchesLg ? 6 : 9}
          borderBottom={0.5}
          borderLeft={0.5}
          borderRight={0.5}
          height={matchesLg ? 96 : 72}
        ></Grid>
        <Grid
          item
          xs={matchesLg ? 3 : 1.5}
          borderBottom={0.5}
          height={matchesLg ? 96 : 72}
        ></Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={matchesLg ? 3 : 1.5}
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
          xs={matchesLg ? 6 : 9}
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
              <Box sx={{ width: '24px', height: '24px' }}>
                <SettingsIcon mode={theme.palette.mode} />
              </Box>
            </IconButton>
            <IconButton>
              <Avatar
                alt="User"
                src="/assets/user.png"
                sx={{ width: '24px', height: '24px' }}
              />
            </IconButton>
            {matchesSM && (
              <StyledButton
                label="Add new"
                onClick={handleOpen}
                icon={<PlusIcon mode={undefined} />}
              />
            )}
            {!matchesSM && (
              <IconButton onClick={handleOpen}>
                <Box
                  sx={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PlusIcon mode={theme.palette.mode} />
                </Box>
              </IconButton>
            )}
          </Box>
        </Grid>
        <Grid
          item
          xs={matchesLg ? 3 : 1.5}
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
        <Grid item xs={matchesLg ? 3 : 1.5}></Grid>
        <Grid
          item
          xs={matchesLg ? 6 : 9}
          borderLeft={0.5}
          borderRight={0.5}
          overflow="auto"
          padding={matchesLg ? '24px' : '6px'}
        >
          <Box>{children}</Box>
        </Grid>
        <Grid item xs={matchesLg ? 3 : 1.5}></Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ContactForm setOpen={setOpen} />
        </Box>
      </Modal>
    </MaterialUIThemeProvider>
  );
};

export default Layout;
