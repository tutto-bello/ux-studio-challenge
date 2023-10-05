import axios from 'axios';
import { IContact, IContactResponse } from '@ux-studio-challenge/shared';
import { toast } from 'react-toastify';

const baseUrl = process.env.NEXT_PUBLIC_UXSTUDIO_API_URL + '/api/contact';

export const fetchContact = async () => {
  try {
    const response = await axios.get<IContactResponse[]>(baseUrl);
    return response.data;
  } catch (error) {
    toast.error(`Error fetching data: ${error}`);
    console.error('Error fetching data:', error);
  }
};

export const createContact = async (data: IContact) => {
  try {
    const response = axios.post(baseUrl, data);
    toast.success(`Create succesfully!`);
    return response;
  } catch (error) {
    toast.error(`Error creating data: ${error}`);
    console.error('Error creating data:', error);
  }
};

export const updateContact = async (id: string, data: IContact) => {
  try {
    const response = axios.put(baseUrl + `/${id}`, data);
    toast.success(`Update succesfully!`);
    return response;
  } catch (error) {
    toast.error(`Error updating data: ${error}`);
    console.error('Error updating data:', error);
  }
};

export const deleteContact = async (id: string) => {
  try {
    const response = axios.delete(baseUrl + `/${id}`);
    toast.success(`Delete succesfully!`);
    return response;
  } catch (error) {
    toast.error(`Error deleting data: ${error}`);
    console.error('Error deleting data:', error);
  }
};

export const handleWarning = () => {
  toast.warning(
    'Sorry, but the design did not specify what should happen here.'
  );
};
