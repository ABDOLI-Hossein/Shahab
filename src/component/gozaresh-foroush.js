import React,{Component} from "react";
import $ from 'jquery';
import { Link } from "react-router-dom";
import Header from "./Header/header";


const Gozareshforoush = (props) => {

    const showgozareshforoush = props.location.state.gozareshfroushdata.map((item)=>{
        return(
            <Link key={item.product_id} className="w-100" to={{pathname:`/gozareshlevel2`,state:{date:item.agent_delivery_date,product_id:item.product_id,agent_id : props.location.state.agent_id,product_name:item.product_name}}}>
                    <div className="sa-each-mojudi-anbar animate__animated animate__fadeInDown">
                    <h3>محصول</h3>
                    <div className="sa-mojudi-text1">
                        <h6>{item.product_name}</h6>
                    </div>
                    <h3>موجودی</h3>
                    <div className="sa-mojudi-text2">
                        <h6>{item.count}عدد</h6>
                    </div>
                </div>
            </Link>
        )
    })
    



    console.log(props)
    return(
        <>
        
        
        
        <div className="sa-center sa-items-wrapper-home">
            {showgozareshforoush}
         </div> 
         </>

    )
    
    }










export default Gozareshforoush;