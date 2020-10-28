declare module '@comp/product' {
  type Product = import('@dataTypes/coffee').Coffee;
  type Props = import('react').PropsWithChildren<Product> & {
    hidden?: boolean;
  }
}
