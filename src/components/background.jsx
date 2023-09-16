import React from 'react';

const Background = ({ backgroundImage, backgroundColor, children }) => {
  const backgroundStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundColor: backgroundColor || 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return (
    <div style={backgroundStyle}>
      {children}
    </div>
  );
};

export default Background;
