'use client';
import React, { useEffect, useState } from 'react';
import { fetchContactImages } from './contact-service';
import { IContactResponse } from '@ux-studio-challenge/shared';

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contacts, setContacts] = useState<IContactResponse[]>();

  useEffect(() => {
    setIsLoading(true);
    fetchContactImages()
      .then((data) => {
        if (data) {
          setContacts(data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        contacts &&
        contacts?.map((c) => <div key={c._id}>{c.name}</div>)}
    </div>
  );
};

export default Page;
