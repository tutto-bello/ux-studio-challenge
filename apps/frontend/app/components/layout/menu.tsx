import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Box,
  useTheme,
} from '@mui/material';
import React from 'react';
import BackIcon from '../icons/back';
import PlusIcon from '../icons/plus';
import SettingsIcon from '../icons/settings';
import ThemeToggle from '../material-ui-theme-toggle';
import StyledButton from '../styled-button';
import Image from 'next/image';

const Menu = ({
  toggleTheme,
  handleOpen,
}: {
  toggleTheme: () => void;
  handleOpen: () => void;
}) => {
  const matchesLg = useMediaQuery('(min-width:1024px)');
  const matchesSM = useMediaQuery('(min-width:544px)');

  const handleWarn = () => {
    alert('Sorry, but the design did not specify what should happen here.');
  };

  return (
    <Grid container>
      <Grid
        item
        xs={matchesLg ? 3 : 1.5}
        borderBottom={1}
        sx={{ borderColor: '#282828' }}
        height={matchesLg ? 96 : 72}
        display="flex"
        paddingX={matchesLg ? '24px' : '6px'}
        alignItems="end"
        flexDirection="column"
        justifyContent="center"
      >
        <IconButton onClick={handleWarn}>
          <BackIcon mode={useTheme().palette.mode} />
        </IconButton>
      </Grid>
      <Grid
        item
        xs={matchesLg ? 6 : 9}
        borderBottom={1}
        borderLeft={1}
        borderRight={1}
        sx={{ borderColor: '#282828' }}
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
          <IconButton onClick={handleWarn}>
            <Box sx={{ width: '24px', height: '24px' }}>
              <SettingsIcon mode={useTheme().palette.mode} />
            </Box>
          </IconButton>
          <IconButton onClick={handleWarn}>
            <Image
              src="/assets/user.png"
              alt="User"
              width={24}
              height={24}
              style={{ borderRadius: '100%', objectFit: 'cover' }}
              placeholder="blur"
              blurDataURL="/assets/contact-default.png"
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
                <PlusIcon mode={useTheme().palette.mode} />
              </Box>
            </IconButton>
          )}
        </Box>
      </Grid>
      <Grid
        item
        xs={matchesLg ? 3 : 1.5}
        borderBottom={1}
        sx={{ borderColor: '#282828' }}
        height={matchesLg ? 96 : 72}
        display="flex"
        paddingX={matchesLg ? '24px' : '6px'}
        alignItems="center"
      >
        <ThemeToggle toggleTheme={toggleTheme} />
      </Grid>
    </Grid>
  );
};

export default Menu;
