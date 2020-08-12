import Navbar from './Navbar';
import Head from 'next/head';
const Layout = (props) => (
    <div>
        <Head>
            <title>Movie App</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <Navbar />
        <div className="container my-4">
             {props.children}
        </div>
    </div>
);
export default Layout;