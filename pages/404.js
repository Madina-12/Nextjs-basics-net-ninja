import Link from 'next/link'
import { useEffect } from 'react';
import {useRouter} from 'next/router'
const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(() => {
            router.push("/")
        }, 3000);
    },[])
    return ( 
        <>
            <h1>Oooops....</h1>
            <h2>This page cannot be found</h2>
            <p>Go back to <Link href='/'>Home Page</Link></p>
        </>
     );
}
 
export default NotFound;