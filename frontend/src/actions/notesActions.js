
import { NOTES_CREATE_FAIL, NOTES_CREATE_REQUEST, NOTES_CREATE_SUCCESS,
         NOTES_DELETE_FAIL,NOTES_DELETE_REQUEST,NOTES_DELETE_SUCCESS,
         NOTES_LIST_FAIL,NOTES_LIST_REQUEST,NOTES_LIST_SUCCESS,
         NOTES_UPDATE_FAIL,NOTES_UPDATE_REQUEST,NOTES_UPDATE_SUCCESS,
} from "../constants/notesConstants";
import axios from "axios";
  
export const listNotes = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTES_LIST_REQUEST,
      });
  
      const { data } = await axios.get(`/notes/`);
  
      dispatch({
        type: NOTES_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_LIST_FAIL,
        payload: message,
      });
    }
};

export const getNoteById = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: NOTE_GET_BY_ID_REQUEST,
    });
    const noteId = req.params.id;
    const { data } = await axios.get(`/notes/${noteId}`);

    dispatch({
      type: NOTE_GET_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NOTE_GET_BY_ID_FAIL,
      payload: message,
    });
  }
};
  
export const createNoteAction = (title, content, userId) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: NOTES_CREATE_REQUEST,
      });
  
      const { data } = await axios.post(
        `/notes/`,
        { title, content, userId }
      );
  
      dispatch({
        type: NOTES_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_CREATE_FAIL,
        payload: message,
      });
    }
};
  
export const deleteNoteAction = (UserId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTES_DELETE_REQUEST,
      });
  
      const id = req.params.id;
      const { data } = await axios.delete(`/notes/${id}`, config);
  
      dispatch({
        type: NOTES_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_DELETE_FAIL,
        payload: message,
      });
    }
};
  
export const updateNoteAction = (title, content, userId) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: NOTES_UPDATE_REQUEST,
      });
  
      const id = req.params.id;
      const { data } = await axios.put(
        `/notes/${id}`,
        { title, content, userId },
        config
      );
  
      dispatch({
        type: NOTES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NOTES_UPDATE_FAIL,
        payload: message,
      });
    }
};
