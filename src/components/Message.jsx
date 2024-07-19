import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="max-w-md mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <span className="block sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M14.348 14.849a1 1 0 0 0 1.415-1.415l-3.182-3.182a1 1 0 0 0-1.415 0l-3.182 3.182a1 1 0 0 0 1.415 1.415l2.474-2.474 2.474 2.474z"/>
        </svg>
      </span>
    </div>
  );
};

export default Message;
