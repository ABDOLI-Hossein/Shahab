import React, { Component } from "react";


import { Link } from "react-router-dom";




class Mojudianbar extends Component {


    
    state = {

        mojudiFirst : this.props.location.state.mojudidata,
        

    }

        














    sortCountlowHight = (e) =>{
        e.preventDefault();
        var sorted = this.props.location.state.mojudidata;
        sorted.sort(function(a,b){return  parseFloat(a.count) -  parseFloat(b.count)})
        this.setState({
            mojudiFirst : sorted
        })
        
       
      
    }
    sortCountHightLow = () =>{
        
        var sorted = this.props.location.state.mojudidata;
        sorted.sort(function(a,b){return  parseFloat(b.count) -  parseFloat(a.count)})
        this.setState({
            mojudiFirst : sorted
        })

    }

    sortDateOldToNew = (e) => {
       
        e.preventDefault();
        var sorted = this.props.location.state.mojudidata;
        sorted.sort(function(a,b){return  Date(a.agent_delivery_date) -  Date(b.agent_delivery_date)})
        this.setState({
            mojudiFirst : sorted
        })
    }


    



    
    componentDidUpdate(){
    
        this.showmojudi = this.state.mojudiFirst.map((item,i)=>{
            return(
                
                <Link key={item.product_id} className="w-100" to={{pathname:`/mojudilevel2`,state: { product_id: item.product_id,agent_id : this.props.location.state.agent_id } }}>
                    <div key={item.product_id} id={item.product_id} className="sa-each-mojudi-anbar animate__animated animate__fadeInDown"  >
                        <h3>محصول</h3>
                        <div className="sa-mojudi-text1">
                            <h6>{item.product_name}</h6>
                        </div>
                        <h3>موجودی</h3>
                        <div className="sa-mojudi-text2">
                            <h6>{item.count}عدد</h6>
                            
                        </div>
            
                    </div>
                </Link>
               
            )
    
    
            
        })

    }

    
    
        showmojudi = this.state.mojudiFirst.map((item,i)=>{
            return(
                
                <Link key={item.product_id} className="w-100" to={{pathname:`/mojudilevel2`,state: { product_id: item.product_id,agent_id : this.props.location.state.agent_id } }}>
                    <div key={item.product_id} id={item.product_id} className="sa-each-mojudi-anbar animate__animated animate__fadeInDown"  >
                        <h3>محصول</h3>
                        <div className="sa-mojudi-text1">
                            <h6>{item.product_name}</h6>
                        </div>
                        <h3>موجودی</h3>
                        <div className="sa-mojudi-text2">
                            <h6>{item.count}عدد</h6>
                            
                        </div>
            
                    </div>
                </Link>
               
            )
    
    
            
        })
    
    

    
        


   
    

    
    
   
 






    
render(){
   

    
   
    
    return(

        
        <>
        
        <div className="sort">
            <button onClick={this.sortCountlowHight}>تعداد موجودی از کم به زیاد</button>
            <button onClick={this.sortCountHightLow}>تعداد موجودی از زیاد به کم</button>
            <button style={{width:"50px"}} onClick={this.sortDateOldToNew}>   تاریخ</button>
            
        </div>

        <div className="sa-center sa-items-wrapper-home">
            {this.showmojudi}
            
            
         </div>          





        </>
    )
}

}

export default Mojudianbar;