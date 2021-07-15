import React, { Component } from "react";
import $ from 'jquery';


class Factorlevel2 extends Component {


    state = {
        factorlevel2 : []
    }



    componentWillMount(){
        var Factorlevel2 = []; 
        $.ajax({
            url: 'https://shahabtousheh.co.ir/pr2/api/return_on_sale_list_items',
            method: "POST",
            async:false,
            data: {
                agentId: this.props.location.state.agent_id,
                orderId: this.props.location.state.order_id
            },
            success: function (response) {
                var res = $.parseJSON( response );
                Factorlevel2 = res.data;
                console.log(res)
            },
            error: function (jqXHR, exception) {
                var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                console.log(msg);
            },
            });
            this.setState({
                factorlevel2 : Factorlevel2
            })
            
            
     }

     goBack = () => {
        this.props.history.goBack()
     }

    


render(){
    console.log(this.props);
    // if(this.state.mojudilevel2.length == 0){
    //     console.log("be sad")
    //    }else(
    //        console.log("be happy")
    //    )
    
    
    return (
        <div className="sa-center sa-items-wrapper-level2 animate__animated animate__zoomInUp">
            <div className="sa-header-fixed">
                <div className="sa-closebtn" onClick={this.goBack}><img src={process.env.PUBLIC_URL +"/images/cancel.svg"} width="20" /></div>
                <h1>محصولات:</h1>
            </div>
            <div className="sa-space"></div>



            {this.state.factorlevel2.map((item)=>{
        return (
            
            <div className="sa-each-factor-items">
            <h3>شاخه محصول:</h3>
                   
                    <h6>{item.cat_name}</h6>
                   
                   <h3> نام محصول:</h3>
                  
                    <h6>{item.product_name}</h6>
                  
                    <h3>وضعیت:</h3>
                  <div className='sa-mojudi-text2' style={{height: "45px"}}>
                    <h5>{item.status}</h5>
                  </div>
                  <h3>بارکد محصول:</h3>
                  <div className='sa-factor-text2'>
                    <h5>{item.code}</h5>
                  </div>
           </div>    
                      
        )
    })}
        </div>
    )

}

    
}

export default Factorlevel2;