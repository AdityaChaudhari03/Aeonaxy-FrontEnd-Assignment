import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
        <p className='mt-5'>Finding learning path recommendations for you based on <br /> your responses</p>
    </div>
  );
}

export default Loading;
