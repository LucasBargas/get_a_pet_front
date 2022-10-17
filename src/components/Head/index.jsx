import React, { useEffect } from 'react';

const Head = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <></>;
};

export default Head;
