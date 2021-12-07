import React from 'react';

export const GridItem = ({ title, url }) => {
  return (

      <div className="card">
        <div className="image">
          <img src={url} alt={title} />
        </div>
        <div className="content">
          <div className="description">
            {title}
          </div>
        </div>
      </div>
  );
};
