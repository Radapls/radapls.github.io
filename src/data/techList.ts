export interface Stack
{
    id: string;
    title: string;
    icon: string;
}

export interface Stack
{
    id: string;
    title: string;
    icon: string;
}


export const TechStack: Stack[] = [
    {
        id: 'angular',
        title: 'Angular',
        icon: 'Angular'
    },
    {
        id: 'scss',
        title: 'SCSS',
        icon: 'SCSS'
    },
    {
        id: 'html',
        title: 'HTML',
        icon: 'HTML'
    },
    {
        id: 'typescript',
        title: 'TypeScript',
        icon: 'TypeScript'
    },
    {
        id: 'ngrx',
        title: 'NGRX',
        icon: 'NGRX'
    },
    {
        id: 'nativescript',
        title: 'NativeScript',
        icon: 'NativeScript'
    },
    {
        id: 'react',
        title: 'React',
        icon: 'react'
    },
    {
        id: 'gatsby',
        title: 'Gatsby',
        icon: 'gatsby'
    },
    {
        id: 'Drupal',
        title: 'Drupal',
        icon: 'Drupal'
    },
];

type WibxStack = 'angular' | 'typescript' | 'scss' | 'ngrx' | 'html' | 'nativescript';


export type CompanyStack = WibxStack;

export const companyStacks: { [ key: string ]: CompanyStack[] } = {
    wibx: [ 'angular', 'typescript', 'scss', 'ngrx', 'html', 'nativescript' ],
};