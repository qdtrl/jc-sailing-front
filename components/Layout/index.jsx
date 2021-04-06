import Footer from "./Footer";
import Header from "./Header";

const Layout = ( { children, show = true } ) => {
  return (
    <>
      <Header show={show}/>
        {children}
      <Footer/>
    </>
  )
}

export default Layout;