import axios from 'axios';
import { IContactResponse } from '@ux-studio-challenge/shared';

export const fetchContactImages = async () => {
  try {
    const response = await axios.get<IContactResponse[]>(
      `${process.env.NEXT_PUBLIC_UXSTUDIO_API_URL}/api/contact`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
