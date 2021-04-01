
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import FunctionClick from './FunctionClick';
import Navbar from './Navbar';
import Form from './Form';
import Routing from './Routing';
import Product from './Product';
import AxiosGet from './AxiosGet';
import AxiosPost from './AxiosPost';
import HookCounter from './HookCounter'
import Counter from './Counter'
import A from './A';

function App() {
  const numbers = [2, 5, 4, 10, 15];
  return (
    <div className="App">
      <A></A>
      {/* <Counter /> */}
      {/* <HookCounter /> */}
      {/* <AxiosPost></AxiosPost> */}
      {/* <Product></Product> */}
      {/* <Routing></Routing> */}
      
      {/* <Form></Form> */}
     {/* <header>


        <Navbar />
     </header>
      
      <Header name="Prabhat" last="Yadav">
        <p>How Are You?</p>
      </Header>

      <Content />
      <FunctionClick />
      <Footer name="Prabhat" last="Kumar" numbers={numbers}>
        <p>How Are You?</p>
      </Footer> */}

    </div>
  );
}

export default App;
