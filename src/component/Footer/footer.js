import React from "react";
import { Link,withRouter } from "react-router-dom";


const Footer = (props) => {

   const goback = (event) => {
    event.preventDefault();
    console.log(props)
    props.history.goBack();

   }


    console.log(props.name)
    if (props.location.pathname === '/'  || props.location.pathname === "/factorbargashtilevel2" || props.location.pathname === "/listkalalevel2"  || props.location.pathname === "/gozareshlevel2"  || props.location.pathname === "/mojudilevel2" || props.location.pathname === "/mojudilevel3"  || props.location.pathname === "/write-barcode" || props.location.pathname === "/reason"){
        return null;
    }else{

    return(
        <>
        <div className="sa-footer-style  animate__animated animate__fadeInUp">
                   <Link to={{pathname: "/ramz-karbar",state:{userid:props.userid,name:"تغییر رمز",icon_name:"sa-footer-profile"}}}>
                        <div className="sa-footer-each-item">
                            <img src={process.env.PUBLIC_URL + "/images/sa-footer-profile.png"} alt="" />
                            <h6>رمز کاربر</h6>
                        </div>   
                    </Link>
                    <Link to={{pathname:"/footer-scan",state:{name:"اسکن",icon_name:"sa-barcode-scanner-small",agent_id:props.location.state.agent_id}}}>
                    <div className="sa-footer-each-item">
                        <img src={process.env.PUBLIC_URL + "/images/sa-footer-scan.png"} alt="" />
                        <h6>اسکن</h6>
                    </div>
                    </Link>
                    <Link onClick={goback}>
                   <div className="sa-footer-each-item">
                       <img src={process.env.PUBLIC_URL + "/images/sa-footer-home.png"} alt="" />
                       <h6>خانه</h6>
                   </div>
                   </Link>
               

            </div>
        </>
    )
    }
}


export default withRouter(Footer);