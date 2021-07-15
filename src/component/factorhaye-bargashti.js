import React from "react";
import { Link } from "react-router-dom";


const Factorhayebargashti = (props) =>{

    const showfactorhayebargashti = props.location.state.factorhayebargashtidata.map((item)=>{
        return(
            <Link className="w-100 d-flex-justify-center" to={{pathname:`/factorbargashtilevel2`,state: { order_id: item.id ,agent_id : props.location.state.agent_id }}}>
            <div className="sa-each-factor-foroush animate__animated animate__fadeInDown">
                    <div>
                        <h6>وضعیت</h6>
                        <div className="sa-mojudi-text2">
                         <h6>{item.status}</h6>
                        </div>
                    </div>
                    <div className="text-center">
                        <h6>شماره فاکتور</h6>
                        <h6>{item.order_number}</h6>
                    </div>
            </div>
            </Link>
        )
    })



    console.log(props)
    return(
        <div className="sa-center sa-items-wrapper-home">
        {showfactorhayebargashti}
        </div> 
    )
}

export default Factorhayebargashti;
