declare module '@comp/card' {
  type Card = {
    title: string;
    subtitle?: string;
  }

  interface Props extends PropsWithChildren<Card> {
    card: Card;
  }
}
