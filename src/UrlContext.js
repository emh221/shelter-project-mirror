import React from 'react';


export const UrlContext = React.createContext({
    urlPath: '/',
    setUrl: () => {},
});
