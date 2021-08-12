import React from 'react';
import './Upload.css';
import { Publish } from '@material-ui/icons';

const Upload = () => (
  <div className="userUpdateUpload">
    <img
      className="userUpdateImg"
      src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
      alt=""
    />
    <Publish className="userUpdateIcon" />
    <input type="file" id="file" style={{ display: 'none' }} />
  </div>
);

export default Upload;
