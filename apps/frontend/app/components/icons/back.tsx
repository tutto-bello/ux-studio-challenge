import React from 'react';

function BackIcon({ mode }: { mode: 'dark' | 'light' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={mode === 'dark' ? '#fff' : '#000000'}
        d="M8 15.625L.375 8 8 .375 9.075 1.45 3.25 7.25h12.375v1.5H3.25l5.825 5.8L8 15.625z"
      ></path>
    </svg>
  );
}

export default BackIcon;
