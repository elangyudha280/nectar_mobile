import { create } from "zustand";

const useFoodMeat = create((get,set)=>({
    foodMeat:[
        {
            id:1,
            title:'Beef Bone',
            description:'1kg priceg',
            price:4.99,
            poster:require('@/assets/images/beef.png')
        },
        {
            id:2,
            title:'broiler chicken',
            description:'1kg priceg',
            price:4.99,
            poster:require('@/assets/images/chicken.png')
        },
        {
            id:3,
            title:'Beef Bone',
            description:'1kg priceg',
            price:4.99,
            poster:require('@/assets/images/beef.png')
        },
        {
            id:4,
            title:'broiler chicken',
            description:'1kg priceg',
            price:4.99,
            poster:require('@/assets/images/chicken.png')
        },
    ]
}))

export default useFoodMeat;