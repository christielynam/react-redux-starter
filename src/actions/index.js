export const isLoading = (bool) => {
  return {
    type: 'IS_LOADING',
    isLoading: bool
  }
}

export const hasErrorer = (bool) => {
  return {
    type: 'HAS_ERRORED',
    hasErrored: bool
  }
}
