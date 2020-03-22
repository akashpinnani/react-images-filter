import React from 'react';
// import uploadImage from '../components/uploadImage';
import * as Components from '../components/index';
import * as Containers from './index';


const UploadImageContainer = (props) => 
<div className="upload-image-container">
    <Components.UploadImage />
    <Containers.ImageFilterContainer/>
    </div>



export default UploadImageContainer;