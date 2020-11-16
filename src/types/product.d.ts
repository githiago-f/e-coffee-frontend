declare module '@comp/product' {
  type Product = import('@dataTypes/coffee').Product;
  type Props = import('react').PropsWithChildren<{
    product: Product; 
    hidden?: boolean;
  }>;
}
