declare module '@comp/card' {
  interface Card {
    title: string;
    subtitle?: string;
  }

  interface Props extends PropsWithChildren<Card> {
    card: Card;
  }
}
