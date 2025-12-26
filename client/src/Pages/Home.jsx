import Nav from '../Components/Nav.jsx';
import Home_Underhead from '../Components/Home_Underhead.jsx';
import Menu from '../Components/Menu.jsx';
import Customers from '../Components/Customers.jsx';
import Footer from '../Components/Footer.jsx';
import Form from '../Components/Form.jsx';
import BelowItems from '../Components/BelowItems.jsx';

function Home(){
    return(
       <>
     <Nav/>
    <Home_Underhead />
    <Menu />
    <BelowItems />
    <Form />
    <Customers /> 
    <Footer />
        </> 
    );
}
export default Home;