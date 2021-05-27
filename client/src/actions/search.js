import * as api from '../api';

export const searchPhrase = (phrase, setIsLoading, history, handleClick) => async (dispatch) => {
    try {
        console.log(phrase);
        const { data } = await api.search(phrase);

        dispatch({ type: "SEARCH", payload: data });
        setIsLoading(false);
        history.push('/details');
    } catch (error) {
        setIsLoading(false);
        handleClick("No details found with this string.")
        console.log(error);
    }
}