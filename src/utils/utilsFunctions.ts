import {NavItem} from "./types";
import {navItemsArray} from "./constants";

export const getRoutes = (user:string) : NavItem[] =>
{
    return navItemsArray.filter(item =>
        item.forAll || (item.authenticated && user) || (item.admin && user.includes('admin'))  ||
        (item.noAuthenticated && !user))
};

export const indexOfNavElement = (arr:NavItem[], navElement:string)=>
{
    return arr.findIndex(item=>item.route === navElement)
}