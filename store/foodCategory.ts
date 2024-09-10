import { create } from "zustand";


const useFoodCategory = create((get,set)=>({
    foodCategories:[
        {
            id:1,
            title:'frash fruits & vegetable',
            color:'rgba(83,117,117,0.1)',
            poster:require('@/assets/images/food2.png'),
            bordercolor:'#53B175'
        },
        {
            id:2,
            title:'Cooking oil & Ghee',
            color:'rgba(248,164,76,0.1)',
            poster:require('@/assets/images/zaitunFull.png'),
            bordercolor:'#F8A44C'
        },
        {
            id:3,
            title:'frash fruits & vegetable',
            color:'rgba(247,165,147,0.1)',
            poster:require('@/assets/images/food4.png'),
            bordercolor:'#F7A593'
        },
        {
            id:4,
            title:'bakery & snacks',
            color:'rgba(211,176,224,0.1)',
            poster:require('@/assets/images/bread.png'),
            bordercolor:'#D3B0E0'
        },
        {
            id:5,
            title:'dairy & eggs',
            color:'rgba(253,229,152,0.1)',
            poster:require('@/assets/images/eggs.png'),
            bordercolor:'#FDE598'
        },
        {
            id:6,
            title:'beverages',
            color:'rgba(183,223,245,0.1)',
            poster:require('@/assets/images/beverages.png'),
            bordercolor:'#B7DFF5'
        },
    ]
}))

export default useFoodCategory;