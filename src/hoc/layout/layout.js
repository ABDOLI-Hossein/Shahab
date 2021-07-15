import React,{Component} from "react";
import Footer from "../../component/Footer/footer";
import Header from "../../component/Header/header"


class Layout extends Component {
   

    render () {
        
        return(
            <>
            <Header/>
                {this.props.children}
            <Footer/>    
            </>
        )
    }
}

export default Layout;