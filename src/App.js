import { Route, Routes, Link, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import BlogLayout from "./Pages/BlogLayout";
import Blog from "./Pages/BlogLayout/Blog";
import Navbar from './Components/Navbar';
import Categories from './Pages/BlogLayout/Categories';
import Posts from './Pages/BlogLayout/Posts';
import PageNotFound from './Components/PageNotFound';
import Profile from './Pages/Profile';
import AuthLayout from "./Pages/AuthLayout";
import Login from "./Pages/AuthLayout/Login";
import HomeLayout from './Pages/HomeLayout';
import { useAuth } from "./Context/AuthContext";
// 1-<Navigate/> veya useNAvigate aynı işlemi yapar. Navigate component yönlendirmesi yaparkek, useNavigate button click tarzında bir yönlendirme yapıyor.
// 2-Navigate içinde state gönderebiliriz.  <Navigate to="/auth/login" state={{gonderilecekVeri: "12345"}} />} Bu veriyi almak icin ise ilgili sayfada useLocation Kullanırız. location.state ile bu veriyi alabiliriz.

function App() {

  const { user } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user ? <HomeLayout /> : <Navigate to="/auth/login" replace={true} />}>
          <Route index={true} element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<BlogLayout />}>
            {/* Blogda sadece /blog kısmında gösterilecek kısım render edilir. egerki /blog üst kısımda gösterilmesi gereken durumlar olursa blogLayout kısmına koyabiliriz*/}
            <Route index={true} element={<Blog />} />
            <Route path="categories" element={<Categories />} />
            <Route path="post/:id" element={<Posts />} />
          </Route>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/auth" element={user ? <Navigate to="/" /> : <AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
