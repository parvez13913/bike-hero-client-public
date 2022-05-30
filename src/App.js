import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Register from './Pages/LogIn/Register/Register';
import { ToastContainer } from 'react-toastify';
import Purchase from './Pages/Home/Products/Purchase/Purchase';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/RequireAdmin/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import RequireUser from './Pages/RequireUser/RequireUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useAdmin from './hooks/useAdmin';
import useUser from './hooks/useUser';
import Payment from './Pages/Dashboard/Payment ';



function App() {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);
  const [users] = useUser(user)
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/products/:productsId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }>

          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<RequireUser>
            <AddReview></AddReview>
          </RequireUser>}></Route>
          <Route path='myOrder' element={<RequireUser>
            <MyOrder></MyOrder>
          </RequireUser>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='makeadmin' element={<RequireAdmin>
            <MakeAdmin></MakeAdmin>
          </RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin>
            <AddProduct></AddProduct>
          </RequireAdmin>}></Route>
          <Route path='manageproduct'
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>}>
          </Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
