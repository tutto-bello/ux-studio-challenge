import React, { useState } from 'react';
import { IContactResponse } from '@ux-studio-challenge/shared';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import MuteIcon from '../icons/mute';
import HeadphoneIcon from '../icons/headphone';
import MoreIcon from '../icons/more';
import SettingsLittleIcon from '../icons/settings-little';
import DeleteIcon from '../icons/delete';
import FavoriteIcon from '../icons/favorite';
import {
  deleteContact,
  handleWarning,
  updateFavorite,
} from '../../contact-service';
import Image from 'next/image';

const Contact = ({
  contact,
  handleFetchContacts,
  handleEdit,
}: {
  contact: IContactResponse;
  handleFetchContacts: () => void;
  handleEdit: (contact: IContactResponse) => void;
}) => {
  const matchesSM = useMediaQuery('(min-width:544px)');
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    try {
      handleClose();
      await deleteContact(contact._id);
      handleFetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFavorite = async () => {
    try {
      handleClose();
      await updateFavorite(contact._id);
      handleFetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      display="flex"
      alignItems={matchesSM ? 'center' : 'start'}
      justifyContent={matchesSM ? 'space-between' : 'start'}
      flexDirection={matchesSM ? 'row' : 'column'}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      mb={matchesSM ? '24px' : '0px'}
    >
      <Box display="flex" alignItems="center">
        <Image
          src={contact.imgUrl ? contact.imgUrl : '/assets/contact-default.png'}
          alt={contact.name}
          width={40}
          height={40}
          style={{ borderRadius: '100%', objectFit: 'cover' }}
          placeholder="blur"
          blurDataURL="/assets/contact-default.png"
        />
        <Box ml={2}>
          <Typography variant="body1">{contact.name}</Typography>
          <Typography variant="body2">{contact.phone}</Typography>
        </Box>
      </Box>
      <motion.div animate={{ opacity: show ? 1 : 0 }}>
        <Box>
          <IconButton onClick={handleWarning}>
            <MuteIcon mode={useTheme().palette.mode} />
          </IconButton>
          <IconButton onClick={handleWarning}>
            <Box
              width={24}
              height={24}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <HeadphoneIcon mode={useTheme().palette.mode} />
            </Box>
          </IconButton>
          <IconButton onClick={handleClick}>
            <Box
              width={24}
              height={24}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <MoreIcon mode={useTheme().palette.mode} />
            </Box>
          </IconButton>
        </Box>
      </motion.div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleEdit(contact)} sx={{ width: 219 }}>
          <SettingsLittleIcon mode={useTheme().palette.mode} />
          <span style={{ marginLeft: 12 }}>Edit</span>
        </MenuItem>
        <motion.div
          whileTap={{
            scale: 2,
            transition: { duration: 1 },
          }}
        >
          <MenuItem onClick={handleFavorite}>
            <FavoriteIcon
              favorite={contact.favorite}
              mode={useTheme().palette.mode}
            />
            <span style={{ marginLeft: 12 }}>Favorite</span>
          </MenuItem>
        </motion.div>
        <MenuItem onClick={handleDelete}>
          <DeleteIcon mode={useTheme().palette.mode} />
          <span style={{ marginLeft: 12 }}>Remove</span>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Contact;
