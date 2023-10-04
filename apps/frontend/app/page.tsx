'use client';
import React, { useEffect, useState } from 'react';
import { fetchContact } from './contact-service';
import { IContactResponse } from '@ux-studio-challenge/shared';
import Layout from './components/layout';
import Contact from './components/contact';
import ContactLoading from './components/contact-loading';
import { Modal, Box, useMediaQuery } from '@mui/material';
import ContactForm from './components/contact-form';

const Page = () => {
  const matchesSM = useMediaQuery('(min-width:544px)');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contacts, setContacts] = useState<IContactResponse[]>();
  const [contactForEdit, setContactForEdit] = useState<IContactResponse>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setContactForEdit(undefined);
  };

  const handleEdit = (contact: IContactResponse) => {
    setContactForEdit(contact);
    handleOpen();
  };

  const handleFetchContacts = () => {
    setIsLoading(true);
    fetchContact()
      .then((data) => {
        if (data) {
          setContacts(data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    handleFetchContacts();
  }, []);

  return (
    <Layout handleFetchContacts={handleFetchContacts}>
      {isLoading && <ContactLoading />}
      {!isLoading &&
        contacts &&
        contacts?.map((c) => (
          <Contact
            key={c._id}
            contact={c}
            handleFetchContacts={handleFetchContacts}
            handleEdit={handleEdit}
          />
        ))}

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
            contact={contactForEdit}
            setOpen={setOpen}
            handleFetchContacts={handleFetchContacts}
          />
        </Box>
      </Modal>
    </Layout>
  );
};

export default Page;
