import {NavItem, ProductTypeFromConfig} from "./types";
import {navItemsArray} from "./constants";

export const getRoutes = (user: string): NavItem[] => {
    return navItemsArray.filter(item =>
        item.forAll || (item.noAuthenticated && !user) ||
        (item.authenticated && user) ||
        (item.admin && user.includes('admin')) ||
        (item.exceptAdmin && !user.includes('admin') && user)
    )
};

export const indexOfNavElement = (arr: NavItem[], navElement: string) => {
    return arr.findIndex(item => item.route === navElement)
}

export function getRandomNumber(min: number, max: number): number {
    return min + Math.trunc(Math.random() * (max - min))
}

export function getAllCategoriesFromConfig(arr: ProductTypeFromConfig[]): string[] {
    return Array.from(new Set(arr.map(item => item.name.split('-')[0])))
}

