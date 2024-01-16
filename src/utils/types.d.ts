export interface NavItem {
    route: string
    title: string
    forAll?: boolean
    noAuthenticated?: boolean
    authenticated?: boolean
    admin?: boolean
    exceptAdmin?:boolean
}


export interface LoginData {
    email: string
    password: string
}

export interface ProductType {
    id?: string
    title: string
    category: string
    unit: string
    cost: number
    image: string
}


export interface ShoppingDataType extends ProductType {
    count: number
    totalPrice: number
}

export interface CategoryType {
    name: string
}

export interface ProductTypeFromConfig {
    "name": string
    "cost": number
    "unit": string
}

export interface ProductShoppingCardType {
    productId: string
    count: number
}