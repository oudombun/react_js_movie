import Navbar from './Navbar';
import Head from 'next/head';


const Layout = (props) => (
    <div>
        <Head>
            <title>Movie App</title>
        </Head>
        <Navbar/>
        {props.children}
    </div>
);

export default Layout;