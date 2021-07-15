import React,{Component,useState} from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import swal from 'sweetalert';
import $ from 'jquery';
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import Daryaftkalacamera from "./camera-daryaft-kala";



class DaryaftKala extends Component {


  render(){

    console.log(this.props)
    return(
        <>
        <div className="sa-center sa-items-wrapper-home">

            <Daryaftkalacamera agent_id={this.props.location.state.agent_id}/>
            
            <div className="sa-red-line"></div>
            
            <Link to={{pathname:"/write-barcode",state:{agen_id:this.props.location.state.agent_id,scanpart:"daryaft-kala"}}}>
                <div className="sa-button-login" style={{width:"230px"}}><h6>نوشتن بارکد به صورت دستی</h6></div>
            </Link>
            </div>
            

            

        </>
    )
  }

   
        
    
}

export default DaryaftKala;