import { useState } from 'react';

export const useBannerHooks = () => {
  const [ banners ] = useState([]);

  return {
    banners
  };
};
