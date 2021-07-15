import React, { Component } from "react";
import $ from 'jquery';
import swal from 'sweetalert';

class listkalalevel2 extends Component{
    
    state = {
        listkalalevel2 : []
    }
    
    
    // componentDidMount(){
    //     var Listkalalevel2 = [];
    //     $.ajax({
    //         url: 'https://shahabtousheh.co.ir/pr2/api/return_on_sale_list_items',
    //         method: "POST",
    //         async:false,
    //         data: {
    //             agentId: this.props.location.state.agent_id,
    //             productId: this.props.location.state.product_id
    //         },
    //         success: function (response) {
    //             var res = $.parseJSON( response );
    //             Listkalalevel2 = res.data;
    //             console.log(res)
    //         },
    //         error: function (jqXHR, exception) {
    //             var    msg = 'Uncaught Error.\n' + jqXHR.responseText;
    //             console.log(msg);
    //         },
    //         });

    //         this.setState({
    //             listkalalevel2 : Listkalalevel2
    //         })

    // }

    // showreplacement = this.props.location.state.replacement.map((item)=>{
    //     return(
    //         <div className="sa-each-mojudi-packages-item">
    //         <h3> تاریخ فروش</h3>
    //                <div className='sa-mojudi-text1'>
    //                 <h6>{this.props.location.state.date}</h6>
    //                </div>
    //                <h3>بارکد پکیح</h3>
    //               <div className='sa-mojudi-text1'>
    //                 <h6>{item.packageCode}</h6>
    //               </div>
    //                 <h3>بارکد محصول</h3>
    //               <div className='sa-mojudi-text2'>
    //                     <h6>{item.fromCode}</h6>
    //         </div>
    //        </div>  
    //     )
    // })

    goBack = () => {
        this.props.history.goBack()
     }

     showButton = () => {
       
     }



     componentDidMount(){
        
        if(this.props.location.state.status === "ارسال توسط نماینده"){ 
            $(".sa-laghvmarjuyi-button").removeClass("d-none")
                }else{

            $(".sa-laghvmarjuyi-button").addClass("d-none")
             
              } 
     }


     saClick = () => {
        $.ajax({
            url: 'https://shahabtousheh.co.ir/pr2/api/return_cancel',
            method: "POST",
            async:false,
            data: {
                agentId: this.props.location.state.agent_id,
                productId: this.props.location.state.product_id
            },
            success: function (response) {
                var res = $.parseJSON( response );
                console.log(res)
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

     



    render(){

        

        console.log(this.props)

        return(
            <>
            <div className="sa-center sa-items-wrapper-level2    animate__animated animate__zoomInUp" style={{height:"100%"}}>
             <div className="sa-header-fixed">
                <div className="sa-closebtn" onClick={this.goBack}><img src={process.env.PUBLIC_URL +"/images/cancel.svg"} width="20" /></div>
                <h1>کالای جایگزین</h1>
            </div>
            <div className="sa-each-mojudi-packages-item p-relative" style={{top: "90px",height: "290px"}}>
                        <h3>نام کالا</h3>
                    <div className='sa-mojudi-text1'>
                     <h6>{this.props.location.state.replacement.name}</h6>
                    </div>
                    <h3> وضعیت</h3>
                    <div className='sa-mojudi-text1'>
                     <h6>{this.props.location.state.status}</h6>
                    </div>
                    <h3> بارکد</h3>
                    <div className='sa-mojudi-text1'>
                     <h6>{this.props.location.state.replacement.barcode}</h6>
                    </div>
                    
                    <button id="btnmarju" className="sa-laghvmarjuyi-button d-none" onClick={this.saClick}>لغو مرجوعی</button>
                    
    
            </div>
            </div>
            </>
        )
    }


}


export default listkalalevel2;