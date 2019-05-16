export default (state: any[] = [], action: any) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return [ ...action.payload ];
    default:
      return state;
  }
}
