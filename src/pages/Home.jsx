import Title from '../components/Title/Title';
import '../assets/css/style.css'
import Tabs from '../components/Tabs/Tabs';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div className="container">
            <header className="fixed-header">
                <Title/>
                <Tabs/>
            </header>
            <Footer/>
        </div>
    )
}

export default Home;
