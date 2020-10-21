declare module '@comp/rating' {
  type Rating = { 
    popularity: number;
  }

  type Props = import('react').PropsWithChildren<Rating>;
}
