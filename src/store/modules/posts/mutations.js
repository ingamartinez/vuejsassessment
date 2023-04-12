import * as types from '../../mutation-types'

export default {
    [types.LOAD_POSTS]: (state, data) => state.data = data,
    [types.EDIT_POST]: (state, data) => {
        const index = state.data.findIndex(item => item.id === data.id);
        if (index !== -1) {
            return state.data.splice(index, 1, data);
        }
    },
    [types.LOAD_POST]: (state, data) => {

        return state.data.push(data);
    }
}
