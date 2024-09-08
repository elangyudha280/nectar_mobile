import { create } from "zustand";

const useListExclusiveFood = create((get,set)=>({
    exclusiveFood:[
        {
            id:1,
            title:'organic bananas',
            description:'7pcs priceg',
            price:4.99,
            poster:require('@/assets/images/banana.png')
        },
        {
            id:2,
            title:'red apple',
            description:'1kg priceg',
            price:4.99,
            poster:require('@/assets/images/apple.png')
        },
        {
            id:3,
            title:'organic bananas',
            description:'7pcs priceg',
            price:4.99,
            poster:require('@/assets/images/banana.png')
        },
        {
            id:4,
            title:'red apple',
            description:'1kg priceg',
            price:4.99,
            poster:require('@/assets/images/apple.png')
        },
    ]
}))

export default useListExclusiveFood;