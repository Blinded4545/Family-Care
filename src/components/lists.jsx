export const productList = [
    {
        title: "Jabon manos c",
        category: "Para manos",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod.",
        url: "https://picsum.photos/seed/1/200/200"
    },
    {
        title: "Jabon liquido b",
        category: "Corporal liquido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod.",
        url: "https://picsum.photos/seed/2/200/200"
    },
    {
        title: "Jabon solido a",
        category: "Corporal solido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod.",
        url: "https://picsum.photos/seed/3/200/200"
    },
    {
        title: "Jabon manos cc",
        category: "Para manos",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod.",
        url: "https://picsum.photos/seed/4/200/200"
    },
    {
        title: "Jabon liquido bb",
        category: "Corporal liquido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod.",
        url: "https://picsum.photos/seed/5/200/200"
    },
    {
        title: "Jabon solido aa",
        category: "Corporal solido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod.",
        url: "https://picsum.photos/seed/6/200/200"
    },
    {
        title: "Jabon manos ccc",
        category: "Para manos",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod.",
        url: "https://picsum.photos/seed/7/200/200"
    },
    {
        title: "Jabon liquido bbb",
        category: "Corporal liquido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod.",
        url: "https://picsum.photos/seed/8/200/200"
    },
    {
        title: "Jabon solido aaa",
        category: "Corporal solido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod.",
        url: "https://picsum.photos/seed/9/200/200"
    }
]
export const categories = [
    "Corporal solido",
    "Corporal liquido",
    "Para manos"
]

const a = ()=>{
    if(currSearch===""){ 
        if(e2.category!==e){
            return
        }
        else{
            return (
                <CardComponent title={e2.title} price={e2.price} description={e2.description} group={e2.category}/>
            )
        }
    }
    else{
        if(e2.title.toLowerCase().includes(currSearch.toLowerCase()) && e2.category===e){
            return (
                <CardComponent title={e2.title} price={e2.price} description={e2.description} group={e2.category}/>
            )
        }
    }
}