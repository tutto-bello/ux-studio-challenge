import React from 'react';

function DeleteIcon({ mode }: { mode: 'dark' | 'light' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="15"
      fill="none"
      viewBox="0 0 12 15"
    >
      <path
        fill={mode === 'dark' ? '#fff' : '#000000'}
        fillOpacity="0.56"
        d="M2.917 12.833h6.166c.056 0 .111-.028.167-.083.056-.056.083-.111.083-.167V4.5H2.667v8.083c0 .056.027.111.083.167.056.055.111.083.167.083zM.687 2.25V1h2.48L4 .167h4L8.833 1h2.48v1.25H.687zm2.23 11.833c-.417 0-.771-.146-1.063-.437a1.447 1.447 0 01-.437-1.063V3.25h9.166v9.333c0 .417-.146.771-.437 1.063a1.447 1.447 0 01-1.063.437H2.917zm-.25-1.25H9.25 2.667z"
      ></path>
    </svg>
  );
}

export default DeleteIcon;
