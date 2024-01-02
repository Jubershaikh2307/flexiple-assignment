import {
  CHANGE_NOTE_TEXT,
  CHANGE_POSITION,
  DELETE_NOTE,
  NEW_NOTE,
  PIN_NOTE,
} from "./ActionType";

export const changeNoteText = (id, newText) => {
  return {
    type: CHANGE_NOTE_TEXT,
    payload: {
      id,
      newText,
    },
  };
};

export const pinValue = (id, value) => {
  return {
    type: PIN_NOTE,
    payload: {
      id,
      value,
    },
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: {
      id,
    },
  };
};

export const AddNote = (payload) => {
  return {
    type: NEW_NOTE,
    payload,
  };
};

export const changePosition = (id, value) => {
  return {
    type: CHANGE_POSITION,
    payload: {
      id,
      value,
    },
  };
};
