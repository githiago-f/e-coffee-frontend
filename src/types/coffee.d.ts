declare module '@dataTypes/coffee' {
    enum CoffeeType {
        BLACK         = 'black',
        LATTE         = 'latte',
        WITH_MILK     = 'with milk',
        CAPPUCCINO    = 'cappuccino',
        AMERICANO     = 'americano',
        ESPRESSO      = 'espresso',
        DOPPIO        = 'doppio',
        CORTADO       = 'cortado',
        RED_EYE       = 'red eye',
        GALAO         = 'galão',
        LUNGO         = 'lungo'
    }

    type Coffee = {
        id?: number;
        name: string;
        coffeeType: CoffeeType;
        price: number;
        cover_image_url?: string;
    }
}
