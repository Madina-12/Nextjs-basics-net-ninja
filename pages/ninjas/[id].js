export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const paths = data.map(ninja=>{
        return{
            params:{id:ninja.id.toString()}
        }
    })
    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json()
    return {
        props: {ninja:data}
    }
}

const SinglePages = ({ninja}) => {
    return ( 
        <>
            <h1>Name : {ninja.name}</h1>
            <p>City : {ninja.address.city}</p>
            <p>Email : {ninja.email}</p>
            <p>UserName : {ninja.username}</p>
        </>
     );
}
 
export default SinglePages;