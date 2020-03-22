import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions/actionType';

const UploadImage = () => {
    // const imgRef = useRef();
    const imageSrc = useSelector(state => state.fileUploadReducer.imageSrc);
    const selectedFilter = useSelector(state=> state.fileUploadReducer.selectedFilter)
    const dispatch = useDispatch();
    const uploadImage = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            dispatch({ type: actionTypes.UPLOAD_IMAGE, data: reader.result });
            // imgRef.current.src = reader.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    const removeImage = () => dispatch({type: actionTypes.REMOVE_IMAGE});

    return (
        <div className="upload-image-wrapper">
            <div className="upload-image-outer">
            <label htmlFor="upload-img" className={`upload-label ${imageSrc && 'hide-wrapper'}`}>
            <h2>Upload/Drop your image here</h2>
            <input type="file" id="upload-img" onChange={uploadImage} accept="image/gif, image/jpeg, image/png" />
            </label>
            {imageSrc && 
            <div className={`image-wrapper ${selectedFilter}`}>
                <div></div>
            <img src={imageSrc} alt="Uploaded Source" />
            </div>
            }
            </div>
        { imageSrc &&    <button className="cursor-pointer clear-btn" onClick={removeImage}>Clear</button> }
        </div>
    )
}
    ;

export default UploadImage;
