import { IconButton } from '@mui/material';
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
