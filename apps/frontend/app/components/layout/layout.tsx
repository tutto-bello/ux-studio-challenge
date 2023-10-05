import React, { useState, ReactNode } from 'react';
import MaterialUIThemeProvider from '../theme-provider';
import { Box, Grid, Modal, Theme } from '@mui/material';
import { lightTheme, darkTheme } from '../../theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContactForm from '../contact/contact-form';
import FirstRow from './first-row';
import Menu from './menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({
  children,
  handleFetchContacts,
}: {
  children: ReactNode;
  handleFetchContacts: () => void;
}) => {
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
      <FirstRow />
      <Menu handleOpen={handleOpen} toggleTheme={toggleTheme} />
      <Grid container>
        <Grid item xs={matchesLg ? 3 : 1.5}></Grid>
        <Grid
          item
          xs={matchesLg ? 6 : 9}
          borderLeft={1}
          borderRight={1}
          sx={{ borderColor: '#282828', minHeight: '100vh' }}
          borderBottom={0}
          padding={matchesLg ? '24px' : '12px'}
        >
          {children}
        </Grid>
        <Grid item xs={matchesLg ? 3 : 1.5}></Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: matchesSM ? 364 : 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: '24px',
            borderRadius: '8px',
          }}
        >
          <ContactForm
            setOpen={setOpen}
            handleFetchContacts={handleFetchContacts}
          />
        </Box>
      </Modal>
      <ToastContainer position="bottom-left" theme="dark" />
    </MaterialUIThemeProvider>
  );
};

export default Layout;
