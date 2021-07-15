import React,{Component} from "react";
import { Link, withRouter } from "react-router-dom";



class Header extends Component{
    constructor(props){
        super(props)
    }
   

    render(){
      
        console.log(this.props.location.pathname)
        
        if (this.props.location.pathname === "/" || this.props.location.pathname === "/factorbargashtilevel2" || this.props.location.pathname === "/listkalalevel2" || this.props.location.pathname === "/gozareshlevel2" || this.props.location.pathname === "/mojudilevel2" || this.props.location.pathname === "/mojudilevel3" || this.props.location.pathname === "/write-barcode" || this.props.location.pathname === "/reason" ){
        return null;
        }else{
            return(
        
                <div className="sa-header-wrapper">
                    <div className="sa-home-header p-relative">
                        <div className="sa-header-part1">
                            <img src={process.env.PUBLIC_URL + "/images/sa-header-logo.png"} alt="" />
                            <h1 className="sa-brand-part2">شرکت شهاب توشه</h1>
                            <Link to="/">
                            <img src={process.env.PUBLIC_URL + "/images/logout.png"} width="25" style={{marginRight:"20px",display:"flex"}} />
                            </Link>
                        </div>
                        <div className="sa-profile-home animate__animated animate__fadeInRight">
                            <img src={process.env.PUBLIC_URL + "/images/"+this.props.location.state.icon_name+".png"} alt="" />
                            <h3>{this.props.location.state.name}</h3>
    
    
                        </div>
                    </div>
    
                </div>
            
        )
        } 
   

    }



}

export default withRouter( Header);