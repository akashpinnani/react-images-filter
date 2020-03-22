import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions/actionType';

const ImageFilters = () => {
    const imageFilters = useSelector(state=> state.fileUploadReducer.imageFilters);
    const imageSrc = useSelector(state => state.fileUploadReducer.imageSrc);
    const selectedFilter = useSelector(state => state.fileUploadReducer.selectedFilter);
    const dispatch = useDispatch();
    const addFilter = (filter) => dispatch({type: actionTypes.ADD_FILTER, data: filter});
    return (
        <>
        <div className="image-filters-row">
        {(imageFilters || []).map((filter, index)=> <div key={index}>
        {imageSrc ? <div  className={`image-filter ${filter} ${filter === selectedFilter ? 'selected-filter' : ''}`} onClick={()=>addFilter(filter)}><div></div><img src={imageSrc} alt="filter"/> <span className="filter-name" >{filter} </span></div> : ''}
        
        </div>)}
        </div>
        </>
    )
};

export default ImageFilters;
