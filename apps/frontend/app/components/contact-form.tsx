import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Typography } from '@mui/material';
import TextInput from './text-input';
import { createContact, updateContact } from '../contact-service';
import { IContact, IContactResponse } from '@ux-studio-challenge/shared';
import FileInput from './file-input';
import PhoneInput from './phone-input';

interface ContactFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contact?: IContactResponse;
  handleFetchContacts: () => void;
}

const ContactForm = (props: ContactFormProps) => {
  const { setOpen, contact, handleFetchContacts } = props;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Min 5 character!')
      .max(100)
      .required('This filed is required!'),
    email: Yup.string().email(),
    phone: Yup.string()
      .min(10, 'Min 10 character!')
      .required('This filed is required!'),
  });

  const initialValues = {
    name: contact ? contact.name : '',
    phone: contact ? contact.phone : '',
    email: contact ? contact.email : '',
    imgUrl: contact ? contact.imgUrl : '',
    favorite: contact ? contact.favorite : false,
  };

  const handleSubmit = async (values: IContact) => {
    if (contact) {
      try {
        await updateContact(contact._id, {
          name: values.name,
          phone: values.phone,
          email: values.email,
          favorite: false,
          imgUrl: values.imgUrl,
        });
        handleFetchContacts();
        setOpen(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await createContact({
          name: values.name,
          phone: values.phone,
          email: values.email,
          favorite: false,
          imgUrl: values.imgUrl,
        });
        handleFetchContacts();
        setOpen(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Box>
      <Typography variant="h5" pb={3}>
        {contact ? 'Edit contact' : 'Add contact'}
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          isSubmitting,
          setFieldValue,
          values,
          errors,
          handleChange,
          touched,
        }) => (
          <Form>
            <FileInput setFieldValue={setFieldValue} values={values} />
            <TextInput
              id="name"
              name="name"
              label="Name"
              type="text"
              placeholder="Joh Doe"
              value={values.name}
              handleChange={handleChange}
              form={{ errors: errors, touched: touched }}
            />
            <PhoneInput
              id="phone"
              name="phone"
              label="Phone number"
              type="text"
              placeholder="+36 30 567 8932"
              value={values.phone}
              handleChange={handleChange}
              form={{ errors: errors, touched: touched }}
            />
            <TextInput
              id="email"
              name="email"
              label="Email address"
              type="email"
              placeholder="joh.doe@gmail.com"
              value={values.email}
              handleChange={handleChange}
              form={{ errors: errors, touched: touched }}
            />

            <Box mt={6} ml="auto" width="max-content">
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button disabled={isSubmitting} type="submit" variant="contained">
                {isSubmitting ? 'In progress..' : 'Done'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
