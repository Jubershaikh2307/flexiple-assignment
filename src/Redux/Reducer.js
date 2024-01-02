import {
  CHANGE_NOTE_TEXT,
  CHANGE_POSITION,
  DELETE_NOTE,
  NEW_NOTE,
  PIN_NOTE,
} from "./ActionType";

const initialState = {
  data: [
    { id: 1, text: "Juber", pin: false, pos: { a: "0px", b: "0px" } },
    { id: 2, text: "dfjgdkjjfkl", pin: true, pos: { a: "10px", b: "12px" } },
  ],
};

const Reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CHANGE_NOTE_TEXT:
      // const { id, newText } = action.payload;
      return {
        ...state,
        data: state.data.map((note) =>
          note.id === payload.id ? { ...note, text: payload.newText } : note
        ),
      };
    case PIN_NOTE:
      return {
        ...state,
        data: state.data.map((note) =>
          note.id === payload.id ? { ...note, pin: payload.value } : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        data: state.data.filter((note) => note.id != payload.id),
      };
    case NEW_NOTE:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case CHANGE_POSITION:
      return {
        ...state,
        data: state.data.map((note) =>
          note.id === payload.id ? { ...note, pos: payload.value } : note
        ),
      };
    // Handle different actions here
    default:
      return state;
  }
};

export default Reducer;
