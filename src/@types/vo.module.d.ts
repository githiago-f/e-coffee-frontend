declare module 'value-object' {
  type LanguageOption = {
    value: string;
    label: string;
  }

  type CartItem = {
    code?: string;
    quantity: number;
    product: Product;
  }
}
