
const Home = ()=>{
    const list = [0,1,2,3,4,5,6,7,8,9]
    return (

        <>
            <div className="h-100">
                <ul>
                    {
                        list.map((e,idx)=>{
                            return (<li>{e}</li>)
                        })
                    }
                </ul>
            </div>
        </>

    )
}

export default Home;