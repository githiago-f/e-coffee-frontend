declare module '@dataTypes/router' {
  type MatchProps<T> = { match: import('react-router-dom').match<T> }
}
