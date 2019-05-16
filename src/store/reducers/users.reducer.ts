export default (state: any[] = [], action: any) => {
  switch (action.type) {
    case 'GET_USER':
      return [ ...state, action.payload ];
    default:
      return state;
  }
}
