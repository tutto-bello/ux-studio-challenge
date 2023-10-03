'use client';
import React, { useEffect, useState } from 'react';
import { fetchContact } from './contact-service';
import { IContactResponse } from '@ux-studio-challenge/shared';
import Layout from './components/layout';
import Contact from './components/contact';

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contacts, setContacts] = useState<IContactResponse[]>();

  useEffect(() => {
    setIsLoading(true);
    fetchContact()
      .then((data) => {
        if (data) {
          setContacts(data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Layout>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        contacts &&
        contacts?.map((c) => <Contact key={c._id} contact={c} />)}
    </Layout>
  );
};

export default Page;
