import Ruter from 'next/router';
import {MainLayout} from "../../components/MainLayout";
export default function About({title}) {
    return (<MainLayout title={'About Page'}>
        <h1>{title}</h1>
        <button onClick={()=> Ruter.push('/')}>go back to home</button>
        <button onClick={()=> Ruter.push('/posts')}>go back to posts</button>
    </MainLayout>)

}
About.getInitialProps = async ({req}) => {
    const response=await fetch('http://localhost:4200/about');
    const data=await response.json();
    return {title:data.title}
}