import { create } from "zustand";


const useFoodBestSelling = create((get,set)=> ({
    foodBestSelling:[
        {
            id:1,
            title:'bell pepper red',
            description:'1kg, priceg',
            price:4.99,
            poster:require('@/assets/images/bellpeper.png')
        },
        {
            id:2,
            title:'ginger',
            description:'250gm, priceg',
            price:4.99,
            poster:require('@/assets/images/ginger.png')
        },
        {
            id:3,
            title:'bell pepper red',
            description:'1kg, priceg',
            price:4.99,
            poster:require('@/assets/images/bellpeper.png')
        },
        {
            id:4,
            title:'ginger',
            description:'250gm, priceg',
            price:4.99,
            poster:require('@/assets/images/ginger.png')
        },
    ]
}))

export default useFoodBestSelling