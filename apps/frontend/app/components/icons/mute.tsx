import React from 'react';

function MuteIcon({ mode }: { mode: 'dark' | 'light' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={mode === 'dark' ? '#fff' : '#000000'}
        d="M4.25 18.875v-1.5h2v-7.25c0-.25.017-.484.05-.7a8.93 8.93 0 01.125-.65l-4.4-4.4L3.1 3.325 20.925 21.15l-1.05 1.075-3.375-3.35H4.25zm13.5-3.725l-1.5-1.5v-3.525c0-1.184-.417-2.188-1.25-3.013-.833-.825-1.833-1.237-3-1.237-.467 0-.93.079-1.387.237A3.704 3.704 0 009.4 6.8L8.325 5.725A5.738 5.738 0 0110.75 4.5v-.7c0-.35.12-.646.363-.888.241-.242.537-.362.887-.362s.646.12.887.362c.242.242.363.538.363.888v.7c1.25.283 2.313.937 3.188 1.963.875 1.024 1.312 2.245 1.312 3.662v5.025zM12 21.8c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0110.2 20h3.6c0 .5-.175.925-.525 1.275-.35.35-.775.525-1.275.525zm-4.25-4.425h7.225l-7.175-7.2a1.869 1.869 0 00-.05.425v6.775z"
      ></path>
    </svg>
  );
}

export default MuteIcon;