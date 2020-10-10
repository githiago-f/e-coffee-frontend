declare module '@comp/card' {
    interface Card {
        title: string;
    }

    interface Props extends PropsWithChildren<Card> {
        card: Card;
    }
}
