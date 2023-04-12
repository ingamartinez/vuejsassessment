import * as types from '../../mutation-types'
export const getData = async ({commit}) => {
    const data = await fetch('http://localhost:3000/posts');
    commit(types.LOAD_POSTS, await data.json());
}

export const getPost = async ({commit}, payload) => {
    const data = await fetch(`http://localhost:3000/posts/${payload}`);
    commit(types.LOAD_POST, await data.json());
}

export const editPost = async ({commit, dispatch}, payload) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: payload.title, body: payload.body })
    };
    const data = await fetch(`http://localhost:3000/posts/${payload.id}`, requestOptions);
    const json = await data.json()
    commit(types.EDIT_POST, json);
    // commit(types.LOAD_POSTS, await data.json());
}
