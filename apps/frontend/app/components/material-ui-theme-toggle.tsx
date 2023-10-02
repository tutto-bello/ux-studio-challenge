// components/ThemeToggle.tsx
import { IconButton } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import LightIcon from './icons/light';
import DarkIcon from './icons/dark';

const ThemeToggle = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const theme = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme.palette.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
