import Link from "next/link";
import {MainLayout} from "../components/MainLayout";
import classes from '../styles/error.module.scss'
export default function ErrorPage(){
    return(<MainLayout>
          <h1 className={classes.error}>Errorr 404</h1>
        <p>Please <Link href="/"><a>go back to safety</a></Link></p>
    </MainLayout>)
}