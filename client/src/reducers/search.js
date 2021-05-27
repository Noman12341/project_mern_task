let initialState = {
    pageId: '',
    title: '',
    para: ''
}
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH":
            return { ...state, pageId: action.payload.pageId, title: action.payload.title, para: action.payload.para };
        default:
            return state;
    }
}
export default searchReducer;