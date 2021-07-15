import React from "react";
import { Link } from "react-router-dom";
import Layout from "../hoc/layout/layout";


const Listkalamarjuyi = (props) => {

    const showlistkalamarjuyi = props.location.state.listkalamarjuyidata.map((item)=>{
        return(
            <Link className="w-100" to={{pathname:`/listkalalevel2`,state:{product_id: item.product_id,agent_id : props.location.state.agent_id,replacement:item.replacement_product,status:item.status} }}>
                <div className="sa-each-list-kala animate__animated animate__fadeInDown">
                <h6>نام</h6>
                <div className="sa-mojudi-text2">
                <h6>{item.product_name}</h6>
                </div>
                <h6>بارکد</h6>
                <div className="sa-mojudi-text1">
                <h6>{item.product_barcode}</h6>
                </div>
                <h6>تاریخ مرجوعی</h6>
                <div className="sa-mojudi-text1">
                <h6>{item.returnDate}</h6>
                </div>
                <h6>وضعیت</h6>
                <div className="sa-mojudi-text1">
                <h6>{item.status}</h6>
                </div>
                </div>
            </Link>
        )
    })



    console.log(props)
    return(
        <div className="sa-center sa-items-wrapper-home">
            {showlistkalamarjuyi}
         </div> 
    )

}

export default Listkalamarjuyi;