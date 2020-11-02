declare module '@comp/product' {
  type Product = import('@dataTypes/coffee').Product;
  type Props = import('react').PropsWithChildren<Product> & {
    hidden?: boolean;
  }
}
