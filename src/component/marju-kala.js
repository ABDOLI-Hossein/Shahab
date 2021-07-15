import React,{Component,useState} from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import swal from 'sweetalert';
import $ from 'jquery';
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import Marjukalacamera from "./camera-marju-kala";


class Marjukala extends Component {

    state = {
        data : "Not Found",
        setData : "Not Found",
        result : "",
        messagebarcode : ""
    }

    // [ data, setData ] =  useState('Not Found');
    
    // Daryaftkalaa = () => {
        
    //     var Messagebarcode;
    //      $.ajax({
    //         url: 'https://shahabtousheh.co.ir/pr2/api/agentinbarcode',
    //         method: "POST",
    //         async: false,
    //         data:{
    //             barcodeSerial:this.state.setData,
    //             lat:31412,
    //             lon:41241,
    //             city:"-", // man injoori mifrestam city ro fkr konam baiad yechi befresti hatman
    //             agentId:17,
    //         },
    //         success: function (response) {
    //             var res = $.parseJSON( response );
    //             console.log(res);
    //             Messagebarcode = res.message.message;
                
    
    //         },
    //         error: function (jqXHR, exception) {
    //             var msg = 'Uncaught Error.\n' + jqXHR.responseText;
    //             console.log(msg);
    //         },
    //     });
    //     this.setState({
    //         messagebarcode : Messagebarcode
    //     })

        
        

    // }

    
    
   render(){
        console.log(this.props)
    return(
        <>
        <div className="sa-center sa-items-wrapper-home">
            <Marjukalacamera   agent_id={this.props.location.state.agent_id}/>
            <div className="sa-red-line"></div>
            <Link to={{pathname:"/write-barcode",state:{scanpart:"marju-kala",agent_id:this.props.location.state.agent_id}}}>
                <div className="sa-button-login" style={{width:"230px"}}><h6>نوشتن بارکد به صورت دستی</h6></div>
            </Link>
            </div>
            

            

        </>
    )

   }
        
    
}

export default Marjukala;