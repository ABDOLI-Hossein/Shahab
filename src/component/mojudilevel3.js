import React, { Component } from "react";
import $ from 'jquery';



class mojudilevel3 extends Component{

    state = {
        mojudilevel3 : []
    }



    componentWillMount(){
        var Mojudilevel3 = [];

        $.ajax({
            url: 'https://shahabtousheh.co.ir/pr2/api/agentstockitemsdetail',
            method: "POST",
            async:false,
            data: {
                agentId: this.props.location.state.agent_id,
                productId: this.props.location.state.product_id,
                packageId: this.props.location.state.package_id,
    
    
            },
            success: function (response) {
                var res = $.parseJSON( response );
                console.log(res)
                Mojudilevel3 = res.message.data;
            },
            error: function (jqXHR, exception) {
                var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                console.log(msg);
            },
        });  
        this.setState({
            mojudilevel3 : Mojudilevel3
        })

    }
    goBack = () => {
        this.props.history.goBack()
     }



    
   render(){
    console.log(this.props)
    return(
        <div className="sa-center sa-items-wrapper-level2  animate__animated animate__zoomInUp">
            <div className="sa-header-fixed">
                    <div className="sa-closebtn" onClick={this.goBack}><img src={process.env.PUBLIC_URL +"/images/cancel.svg"} width="20" /></div>
                    <h1>{this.props.location.state.packageCode}</h1>
                </div>
            <div className="sa-space"></div>
        {this.state.mojudilevel3.map((item)=>{
            return(
                <div className="sa-each-mojudi-packages-item  animate__animated  animate__fadeInRight">
                    <h3> تاریخ ورود به انبار نماینده</h3>
                           <div className='sa-mojudi-text1'>
                            <h6>{item.agent_delivery_date}</h6>
                           </div>
                           <h3> محصول</h3>
                          <div className='sa-mojudi-text1'>
                            <h6>{item.product_name}</h6>
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

export default mojudilevel3;