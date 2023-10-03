import React from 'react';

function MoreIcon({ mode }: { mode: 'dark' | 'light' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="4"
      fill="none"
      viewBox="0 0 16 4"
    >
      <path
        fill={mode === 'dark' ? '#fff' : '#000000'}
        d="M2.225 3.5c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 01.725 2c0-.417.146-.77.438-1.062A1.444 1.444 0 012.225.5c.417 0 .771.146 1.063.438.291.291.437.645.437 1.062 0 .417-.146.77-.437 1.062a1.447 1.447 0 01-1.063.438zM8 3.5c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 016.5 2c0-.417.146-.77.438-1.062A1.444 1.444 0 018 .5c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062 0 .417-.146.77-.438 1.062A1.444 1.444 0 018 3.5zm5.775 0c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 0112.275 2c0-.417.146-.77.438-1.062A1.444 1.444 0 0113.775.5c.417 0 .771.146 1.063.438.291.291.437.645.437 1.062 0 .417-.146.77-.437 1.062a1.447 1.447 0 01-1.063.438z"
      ></path>
    </svg>
  );
}

export default MoreIcon;
