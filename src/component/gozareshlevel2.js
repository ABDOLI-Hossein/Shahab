import React, { Component } from "react";
import $ from 'jquery';

class gozareshlevel2 extends Component {


    state = {
        gozareshlevel2 : []
    }
    
    
    componentWillMount(){
        var Gozareshlevel2 = [];
        $.ajax({
            url: 'https://shahabtousheh.co.ir/pr2/api/agentsaleitems2',
            method: "POST",
            async:false,
            data: {
                agentId: this.props.location.state.agent_id,
                productId: this.props.location.state.product_id
            },
            success: function (response) {
                var res = $.parseJSON( response );
                Gozareshlevel2 = res.message.data;
                console.log(res)
            },
            error: function (jqXHR, exception) {
                var   msg = 'Uncaught Error.\n' + jqXHR.responseText;
                console.log(msg);
            },
            });

            this.setState({
                gozareshlevel2 : Gozareshlevel2
            })



    }
    
    goBack = () => {
        this.props.history.goBack()
     }
    
    
    
    
    
    
    render(){
        console.log(this.props)


        return(
            <div className="sa-center sa-items-wrapper-level2 animate__animated animate__zoomInUp" style={{height:"auto"}}>
            <div className="sa-header-fixed">   
                <div className="sa-closebtn" onClick={this.goBack}><img src={process.env.PUBLIC_URL +"/images/cancel.svg"} width="20" /></div>
                <h1 style={{fontSize:23}}>{this.props.location.state.product_name}</h1>
            </div>
            <div className="sa-space"></div>


            {this.state.gozareshlevel2.map((item)=>{
        return (
            
                   <div className="sa-each-mojudi-packages-item">
                    <h3> تاریخ فروش</h3>
                           <div className='sa-mojudi-text1'>
                            <h6>{this.props.location.state.date}</h6>
                           </div>
                           <h3>بارکد پکیح</h3>
                          <div className='sa-mojudi-text1'>
                            <h6>{item.packageCode}</h6>
                          </div>
                            <h3>بارکد محصول</h3>
                          <div className='sa-mojudi-text2'>
                                <h6>{item.fromCode}</h6>
                    </div>
                   </div>    
                       
        )
    })}
        </div>
        )
    }
   
}


export default gozareshlevel2;