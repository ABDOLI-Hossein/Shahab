import React,{Component} from "react";
import $ from 'jquery';
import Mojudianbar from "./mojudianbar";
import { Link } from "react-router-dom";


class mojudilevel2 extends Component {
  
        
        state = {
            mojudilevel2 : []
        }
  
        
    
    
    
 
 
componentWillMount(){
    var Mojudilevel2 = []; 
    $.ajax({
        url: 'https://shahabtousheh.co.ir/pr2/api/agentstockitems',
        method: "POST",
        async:false,
        data: {
            agentId: this.props.location.state.agent_id,
		    productId: this.props.location.state.product_id
        },
        success: function (response) {
            var res = $.parseJSON( response );
            Mojudilevel2 = res.message.data;
            console.log(res)
        },
        error: function (jqXHR, exception) {
            var msg = 'Uncaught Error.\n' + jqXHR.responseText;
            console.log(msg);
        },
        });

        this.setState({
            mojudilevel2 : Mojudilevel2
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
                    <h1> محصولات پکیج</h1>
                </div>
                <div className="sa-space"></div>
                {this.state.mojudilevel2.map((item)=>{
            return (
                    <Link className="w-100" to={{pathname:"/mojudilevel3",state:{package_id:item.package_id,product_id:item.product_id,agent_id:this.props.location.state.agent_id,packageCode:item.packageCode}}}>
                       <div className="sa-each-mojudi-packages-item ">
                        <h3>بارکد پکیج</h3>
                               <div className='sa-mojudi-text1'>
                                <h6>{item.packageCode}</h6>
                               </div>
                               <h3>محصول</h3>
                              <div className='sa-mojudi-text1'>
                                <h6>{item.product_name}</h6>
                              </div>
                                <h3>موجودی</h3>
                              <div className='sa-mojudi-text2'>
                                    <h6>{item.count} عدد</h6>
                        </div>
                       </div>    
                    </Link>       
            )
        })}
            </div>
        )
    
    }
}


export default mojudilevel2;