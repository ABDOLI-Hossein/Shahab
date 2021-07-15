import React, { Component } from "react";
import $ from 'jquery';
import { Link } from "react-router-dom";
import swal from 'sweetalert';


class writebarcode extends Component {


    state = {
        scanpart: this.props.location.state.scanpart
    }


    onSubmit3 = (event) => {
        event.preventDefault();
        const values = {
            barcode: this.barcode.value,
        }
      if(this.state.scanpart === "daryaft-kala"){
        $.ajax({
            url: 'https://shahabtousheh.co.ir/pr2/api/agentinbarcode',
            method: "POST",
            async: false,
            data:{
                barcodeSerial:values.barcode,
                lat:31412,
                lon:41241,
                city:"-",
                agentId:this.props.location.state.agent_id,
            },
            success: function (response) {
                var res = $.parseJSON( response );
                console.log(res);
                swal({
                    title: res.message.message,
                    button: "باشه",
                  })
                
                
                
    
            },
            error: function (jqXHR, exception) {
                var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                console.log(msg);
            },
        });
        }else if(this.state.scanpart === "tahvil-moshtari"){
            $.ajax({
                url: 'https://shahabtousheh.co.ir/pr2/api/agentinbarcode',
                method: "POST",
                async: false,
                data:{
                    barcodeSerial:values.barcode,
                    lat:31412,
                    lon:41241,
                    city:"-", 
                    agentId:this.props.location.state.agent_id,
                },
                success: function (response) {
                    var res = $.parseJSON( response );
                    console.log(res);
                    swal({
                        title: res.message.message,
                        button: "باشه",
                      })
                    
                    
                    
        
                },
                error: function (jqXHR, exception) {
                    var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    console.log(msg);
                },
            });


        }else if(this.state.scanpart === "marju-kala"){
            console.log("marju-kala-ajax")
            this.props.history.push({
                pathname : "/reason",
                state : {
                    barcode : values.barcode,
                    agent_id : this.props.location.state.agent_id
                }
            })
        }else if(this.state.scanpart === "bargasht-foroush"){
            $.ajax({
                url: 'https://shahabtousheh.co.ir/pr2/api/return_on_sale',
                method: "POST",
                async: false,
                data:{
                    barcodeSerial:values.barcode,
                    agentId:this.props.location.state.agent_id,
                },
                success: function (response) {
                    var res = $.parseJSON( response );
                    console.log(res);
                    swal({
                        title: res.message.message,
                        button: "باشه",
                      })
                    
                    
                    
        
                },
                error: function (jqXHR, exception) {
                    var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    console.log(msg);
                },
            });
      }

    }


    goBack = () => {
        this.props.history.goBack()
     }
    render(){
        console.log(this.props)
        return(
           <>
           <div className="sa-center sa-items-wrapper-level2  animate__animated animate__zoomInUp">
           <div className="sa-header-fixed">   
                <div className="sa-closebtn" onClick={this.goBack}><img src={process.env.PUBLIC_URL + "/images/cancel.svg"} width="20" /></div>
                <h1 style={{fontSize:23}}>ارسال بارکد:</h1>
            </div>
            <div className="sa-space"></div>
           <form className="sa-loginbox-wrapper text-center w-80" style={{height: "100%"}}>
                <div className="sa-Each-input-wrapper">
                    
                    <input ref={input => this.barcode = input}    style={{height:"65px",fontFamily: 'BKoodakBold'}} type="text" id="sa-new-password" className="sa-input-login-style" placeholder="لطفا بارکد را اینجا بنویسید" />
                </div>
                
                <div>
    
    
                    
                        <div className="sa-button-login" style={{width:"100%",height:"45px",backgroundColor:"green"}} onClick={this.onSubmit3}>
                            <h6>ارسال بارکد</h6>
                        </div>
                    
                </div>
            </form>
            </div>
           </>
        )
    }
}

export default writebarcode;