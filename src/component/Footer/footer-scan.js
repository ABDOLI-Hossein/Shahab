import React from "react";
import { Link } from "react-router-dom";


const Footerscan = (props) => {
    console.log(props)
    return(
      

    <div className="sa-center sa-items-wrapper-home" style={{height:"auto"}}>
            <Link to={{pathname:"/tahvil-moshtari",state:{name:"تحویل مشتری",icon_name : "sa-moshtari-tahvil",agent_id:props.location.state.agent_id}}}>
            <div className="sa-each-card-home  animate__animated animate__fadeInRight">
                <img src={process.env.PUBLIC_URL + "/images/sa-moshtari-tahvil.png"} alt="" />
                <h3>تحویل مشتری</h3>
            </div>
            </Link>
            <Link to={{pathname:"/daryaft-kala",state:{name:"وصول محصولات",icon_name : "sa-mojudianbar-icon",agent_id:props.location.state.agent_id}}}>
            <div className="sa-each-card-home  animate__animated animate__fadeInLeft">
                <img src={process.env.PUBLIC_URL + "/images/sa-barcode-scanner.png"} alt="" />
                <h3> وصول محصولات</h3>
            </div>
            </Link>
            <Link to={{pathname:"/bargasht-foroush",state:{name:"اسکن برگشت از فروش ",icon_name : "sa-returnfromsale-small",agent_id:props.location.state.agent_id}}}>
            <div className="sa-each-card-home  animate__animated animate__fadeInRight">
                <img src={process.env.PUBLIC_URL + "/images/sa-returnfromsale.png"}  alt="" />
                <h3>برگشت از فروش</h3>
            </div>
            </Link>
            <Link to={{pathname:"/marju-kala",state:{name:"اسکن کالای مرجوعی ",icon_name : "sa-marjoo-small",agent_id:props.location.state.agent_id}}}>
            <div className="sa-each-card-home  animate__animated animate__fadeInLeft">
                <img src={process.env.PUBLIC_URL + "/images/sa-marjoo.png"} alt="" />
                <h3>مرجوع کردن کالا</h3>
            </div>
            </Link>
            
            

            
            
    </div>

       
    )
}

export default Footerscan;