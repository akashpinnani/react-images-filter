import * as actionsType from '../actions/actionType';

const initialState = {
    imageFilters: ['normal', 'gray', 'blur', 'red-overlay', 'rainbow', 'vignette', 'sepia', 'x-ray', 'contrast'],
    imageSrc: null,
    selectedFilter: null,
    loading: false
}

const fileUploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.UPLOAD_IMAGE:
            return { ...state, imageSrc: action.data }
        case actionsType.REMOVE_IMAGE:
            return { ...state, imageSrc: null }
        case actionsType.LOADING:
            return { ...state, loading: true }
        case actionsType.ADD_FILTER:
            return { ...state, selectedFilter: action.data }
        default:
            return state;
    }
}

export default fileUploadReducer;