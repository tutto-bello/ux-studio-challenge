import axios from 'axios';
import { IContact, IContactResponse } from '@ux-studio-challenge/shared';

const baseUrl = process.env.NEXT_PUBLIC_UXSTUDIO_API_URL + '/api/contact';

export const fetchContact = async () => {
  try {
    const response = await axios.get<IContactResponse[]>(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const createContact = (data: IContact) => {
  return axios.post(baseUrl, data);
};

export const updateContact = (id: string, data: IContact) => {
  return axios.put(baseUrl + `/${id}`, data);
};

export const deleteContact = (id: string) => {
  return axios.delete(baseUrl + `/${id}`);
};
