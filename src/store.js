import { writable } from 'svelte/store';

export const store = writable([{
    id: '1',
    name: 'Кухня Абис',
    image: 'https://twoya-kuhnya.ru/wp-content/uploads/2019/12/abis-1-308x308.jpg',
    select: 'fav'
}, {
    id: '2',
    name: 'Кухня Абель',
    image: 'https://twoya-kuhnya.ru/wp-content/uploads/2019/12/abel-1-308x308.jpg',
    select: 'fav'
}, {
    id: '3',
    name: 'Кухня Аврора',
    image: 'https://twoya-kuhnya.ru/wp-content/uploads/2019/12/avrora-1-308x308.jpeg',
    select: 'fav'
}, {
    id: '4',
    name: 'Кухня Айс',
    image: 'https://twoya-kuhnya.ru/wp-content/uploads/2019/12/ajs-1-1-308x308.jpeg',
    select: 'fav'
}, {
    id: '5',
    name: 'Кухня Альбер',
    image: 'https://twoya-kuhnya.ru/wp-content/uploads/2019/12/alber-1-308x308.jpg',
    select: 'new'
}, ]);