import React from 'react';

function PlusIcon({ mode }: { mode: 'dark' | 'light' | undefined }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill={mode === 'dark' || mode === undefined ? '#fff' : '#000000'}
        d="M6.25 13.75v-6h-6v-1.5h6v-6h1.5v6h6v1.5h-6v6h-1.5z"
      ></path>
    </svg>
  );
}

export default PlusIcon;
