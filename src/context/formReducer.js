export const initialState = {
  step: 1,
  name: '',
  email: '',
  phone: '',
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };

    case 'PREV_STEP':
      return { ...state, step: state.step - 1 };

    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };

    default:
      return state;
  }
}
