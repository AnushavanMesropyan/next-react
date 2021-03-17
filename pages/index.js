import Link from 'next/link'
import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return (<MainLayout title={'Home Page'}>
        <h1>Hello Next</h1>
        <p><Link href={'/about'}><a>about</a></Link></p>
        <p><Link href={'/posts'}><a>posts</a></Link></p>
    </MainLayout>)

}