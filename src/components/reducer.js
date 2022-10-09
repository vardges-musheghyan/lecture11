import {generateUUID} from "./utils/utils";

export const ACTIONS = {
    ADD_FILE: 'ADD_FILE',
    REMOVE_FILE: 'REMOVE_FILE',
    SELECT_FILE: 'SELECT_FILE',
    SELECT_ALL: 'SELECT_ALL',
}


export function imagesReducer(state, action){
    const { type, payload } = action;
    switch (type){
        case ACTIONS.ADD_FILE: {
            const generetedFiles = payload.map( f => {
                return { src: URL.createObjectURL(f), id: generateUUID(), checked: false }
            } );
            const allImges = [...state.images, ...generetedFiles];
            const allChecked = allImges.every(i => i.checked);
           return { ...state, allChecked, images:allImges }
        }
        case ACTIONS.REMOVE_FILE: {
            return { ...state, images: state.images.filter( image => !image.checked ) }
        }
        case ACTIONS.SELECT_FILE: {
            const { id } = payload;
            const checkedImages = state.images.map( image => {
                if (image.id === id){
                    return { ...image, checked: !image.checked }
                }
                return image;
            } );

            const allChecked = checkedImages.every(i => i.checked);

            return { allChecked, images: checkedImages }
        }
        case ACTIONS.SELECT_ALL: {

            return { images: state.images.map(i => {
                return {...i, checked:!state.allChecked }
                }), allChecked: !state.allChecked }
        }
    }
}
