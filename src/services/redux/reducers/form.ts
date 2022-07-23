export default function formReducer(state = {}, action: any) {
  switch (action.type) {
    case "SUBMIT_FORM":
      return action.value;
    default:
      return state;
  }
}
