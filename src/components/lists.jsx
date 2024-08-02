export const productList = [
    {
        title: "Jabon manos 1",
        category: "Para manos",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod."
    },
    {
        title: "Jabon liquido 2",
        category: "Corporal liquido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod."
    },
    {
        title: "Jabon solido 3",
        category: "Corporal solido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod."
    },
    {
        title: "Jabon manos 1",
        category: "Para manos",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod."
    },
    {
        title: "Jabon liquido 2",
        category: "Corporal liquido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod."
    },
    {
        title: "Jabon solido 3",
        category: "Corporal solido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod."
    },
    {
        title: "Jabon manos 1",
        category: "Para manos",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod."
    },
    {
        title: "Jabon liquido 2",
        category: "Corporal liquido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod."
    },
    {
        title: "Jabon solido 3",
        category: "Corporal solido",
        price: 75,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minima. Veritatis, ad. A, recusandae similique provident natus totam animi expedita dicta veritatis voluptatem? Culpa quibusdam alias esse, magni veniam quod."
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