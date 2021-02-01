import * as types from './actionTyps';

export const addUser = user => ({
     type: types.ADD_USER,user     
});
export const deleteUser = id => ({
     type: types.DELETE_USER,
     id
});
export const updateUser = user => ({
     type: types.UPDATE_USER,
     payload:{
          id:user.id,
          user
     }
     
});

