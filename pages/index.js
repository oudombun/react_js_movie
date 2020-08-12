import Layout from '../components/Layout'
import Fetch from 'isomorphic-unfetch'
import Movie from '../components/Movie';
const Index = (props) => (
    <Layout>
        <div className="row">
            {props.result.map((m)=>{
                return <Movie movie={m}/>
            })
            }
        </div>
    </Layout>
);

Index.getInitialProps = async ()=>{
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=53a62b5cbdff27ac8ad1dcf83dfaaf21&language=en-US&page=1')
    const data = await res.json()
    return {
        result: data.results
    };
};

export default Index