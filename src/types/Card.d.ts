declare module '@comp/product' {
  type Product = {
    title: string;
    subtitle?: string;
  }

  type Props = import('react').PropsWithChildren<Product>
}
