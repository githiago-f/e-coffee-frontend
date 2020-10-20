declare module '@comp/fallbacks' {
  type TLoader = import('react').PropsWithChildren<{
    loading: boolean;
  }>
}
