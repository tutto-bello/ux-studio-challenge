/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { FormikErrors } from 'formik';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../icons/plus';
import ChangeIcon from '../icons/change';
import DeleteIcon from '../icons/delete';
import Image from 'next/image';

const FileInput = ({
  setFieldValue,
  values,
}: {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<{
    name: string;
    phone: string;
    email: string;
    imgUrl: string;
    favorite: boolean;
  }>>;
  values: {
    name: string;
    phone: string;
    email: string;
    imgUrl: string;
    favorite: boolean;
  };
}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = async (formData: FormData) => {
    const request = await axios
      .put<{ location: string }>(
        `${process.env.NEXT_PUBLIC_UXSTUDIO_API_URL}/api/contact/img-upload`,
        formData
      )
      .catch((error) => {
        console.log(error);
      });

    if (request) {
      setFieldValue('imgUrl', request.data.location);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      handleFileUpload(formData);
      setSelectedFile(null);
    } else {
      alert('Please select a file first.');
    }
  };

  const handleDelete = () => {
    setFieldValue('imgUrl', undefined);
    setSelectedFile(null);
  };

  useEffect(() => {
    if (selectedFile) {
      handleUpload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <Image
        src={values.imgUrl ? values.imgUrl : '/assets/contact-default.png'}
        alt="Profil photo"
        width={88}
        height={88}
        style={{
          borderRadius: '100%',
          marginRight: '14px',
          objectFit: 'cover',
        }}
        placeholder="blur"
        blurDataURL="/assets/contact-default.png"
      />
      <motion.div
        whileHover={{
          opacity: 0.8,
          transition: { duration: 0.1 },
        }}
      >
        <label
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 16px 8px 12px',
            paddingLeft: 16,
            borderRadius: 8,
            backgroundColor: '#2D2D2D',
            cursor: 'pointer',
            fontSize: 14,
            height: '40px',
            color: 'white',
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
          {values.imgUrl ? (
            <ChangeIcon mode="dark" />
          ) : (
            <PlusIcon mode={undefined} />
          )}
          <span style={{ marginLeft: 12 }}>
            {values.imgUrl ? 'Change picture' : 'Add picture'}
          </span>
        </label>
      </motion.div>
      {values.imgUrl && (
        <Button
          onClick={handleDelete}
          variant="contained"
          sx={{
            borderRadius: '8px',
            padding: '8px',
            marginLeft: '8px',
            minWidth: '40px',
            height: '40px',
          }}
        >
          <DeleteIcon mode="dark" />
        </Button>
      )}
    </Box>
  );
};

export default FileInput;
