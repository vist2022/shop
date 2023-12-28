export interface NavItem
{
    route: string
    title: string
    forAll?: boolean
    noAuthenticated?: boolean
    authenticated?: boolean
    admin?: boolean
}