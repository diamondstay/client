const initState = []

const searchResult = (state = initState, action) => {
  switch (action.type) {
    case 'SEARCH_FULL_TEXT':
      state = action.keyword
      return [...state]

    default:
      return [...state]
  }
}
export default searchResult
