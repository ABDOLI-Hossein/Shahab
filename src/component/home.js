import React,{Component} from "react";
import $ from 'jquery';
import {Link, Route, Redirect, useHistory  } from "react-router-dom";





//Components
import Daryaftkala from "./daryaftkala";

import Gozareshforoushitem from "./gozaresh-foroush-item";
import Header from "../component/Header/header";

import Footer from "./Footer/footer";



class Home extends Component {

    state = {
        responsecode : '',
        mojudidata : '',
        stategozareshfroushdata : '',
        gozareshforoushajax : false, 
        statelistkalamarjuyidata : '',
        listkalamarjuyiajax : false,
        statefactorhayebargashti : '',
        factorhayebargashtiajax : false
      }

      


mojudi = (event) => {
    event.preventDefault();
     
    var rescode;
    var Mojudidata = [];
    $.ajax({
        url: 'https://shahabtousheh.co.ir/pr2/api/agentstock',
        method: "POST",
        async:false,
        data: {
            agentId: this.props.location.state.agent_id
        },
        success: function (response) {

            var res = $.parseJSON( response );
            console.log(res)
            rescode = res.message.response_code;
            Mojudidata = res.message.data;





        },
        error: function (jqXHR, exception) {
            var msg = 'Uncaught Error.\n' + jqXHR.responseText;
            console.log(msg)
        },
    });

    
    
   this.setState({
        responsecode : rescode,
        mojudidata   : Mojudidata,
        

   })



   

}
gozareshforoush = (event) => {
    event.preventDefault();

    var gozareshfroushdata = [];

    $.ajax({
        url: 'https://shahabtousheh.co.ir/pr2/api/agentsale',
        method: "POST",
            async:false,
            data: {
                agentId: this.props.location.state.agent_id
            },
            success: function (response) {
                var res = $.parseJSON( response );
                
                gozareshfroushdata = res.message.data;
            },
            error: function (jqXHR, exception) {
                var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                console.log(msg);
            },
              
        });

        this.setState({
            stategozareshfroushdata : gozareshfroushdata,
            gozareshforoushajax : true

        })

    

}
listkalamarjuyi = (event) =>{
    event.preventDefault();
    var listkalamarjuyi = [];
    $.ajax({
        url: 'https://shahabtousheh.co.ir/pr2/api/returnlist',
        method: "POST",
        async: false,
        data: {
            agentId: this.props.location.state.agent_id,
        },
        success: function (response) {
            var res = $.parseJSON( response );
            console.log(res);
            listkalamarjuyi = res.message.data;

        },
        error: function (jqXHR, exception) {
            var    msg = 'Uncaught Error.\n' + jqXHR.responseText;
            console.log(msg);
        },
        });
        

        this.setState({
            statelistkalamarjuyidata : listkalamarjuyi,
            listkalamarjuyiajax : true
        })
        

}
factorhayebargashti = (event) =>{
    event.preventDefault();
    var Factorhayebargashti = [];
    $.ajax({
        url: 'https://shahabtousheh.co.ir/pr2/api/return_on_sale_list',
        method: "POST",
        async: false,
        data: {
            agentId: this.props.location.state.agent_id,
        },
        success: function (response) {
            var res = $.parseJSON( response );
            console.log(res);
            Factorhayebargashti = res.data;

        },
        error: function (jqXHR, exception) {
            var    msg = 'Uncaught Error.\n' + jqXHR.responseText;
            console.log(msg);
        },
        });

        this.setState({
            statefactorhayebargashti : Factorhayebargashti,
            factorhayebargashtiajax : true
        })

}












componentDidUpdate(){

    if(this.state.responsecode === 200){
       
        this.props.history.push({
            pathname: '/mojudi-anbar',
            
            state: { 
                
                ress: this.state.responsecode,
                mojudidata : this.state.mojudidata,
                agent_id : this.props.location.state.agent_id,
                name : "موجودی انبار",
                icon_name : "sa-mojudianbar-icon"
                
            }
        });

       
                       
    }else if(this.state.gozareshforoushajax == true){
        this.props.history.push({
            pathname: '/gozaresh-foroush',
            
            state: { 
                
                gozareshfroushdata: this.state.stategozareshfroushdata,
                agent_id : this.props.location.state.agent_id,
                name:"گزارش فروش",
                icon_name:"sa-report-small"
                
                
                
            }
        });

        
    }else if(this.state.listkalamarjuyiajax == true){
        this.props.history.push({
            pathname: '/list-kala-marjuyi',
            
            state: { 
                
                listkalamarjuyidata : this.state.statelistkalamarjuyidata,
                agent_id : this.props.location.state.agent_id,
                name:"لیست کالاهای مرجوعی",
                icon_name:"sa-returnlist-small"
                
            }
        });

    }else if(this.state.factorhayebargashtiajax == true){

        this.props.history.push({
            pathname: '/factorhaye-bargashti',
            
            state: { 
                
                factorhayebargashtidata : this.state.statefactorhayebargashti,
                agent_id : this.props.location.state.agent_id,
                name:"لیست برگشت از فروش",
                icon_name:"sa-bill-small"
                
                
            }
        });


    }else{

    }
}






render(){

    console.log(this.props)



    return(
        <>
        {/* <Header username={this.props.location.state.name}/> */}
        <div className="sa-center sa-items-wrapper-home">

        
        
        
                    
        
                    <Link to={{pathname : "/mojudi-anbar", state: { agent_id: "soroush" } }}    onClick={this.mojudi}>
                        <div className="sa-each-card-home animate__animated animate__fadeInRight">
                            <img src={process.env.PUBLIC_URL + "/images/sa-anbar.png"} alt="" />
                            <h3>موجودی انبار</h3>
                        </div>
                    </Link>
                    <Link to={{pathname:"/daryaft-kala",state:{name:"وصول محصولات",icon_name : "sa-mojudianbar-icon",agent_id:this.props.location.state.agent_id}}}>
                    <div className="sa-each-card-home  animate__animated animate__fadeInLeft">
                        <img src={process.env.PUBLIC_URL + "/images/sa-barcode-scanner.png"} alt="" />
                        <h3>دریافت کالا</h3>
                    </div>
                    </Link>  
                    <Link to="/gozaresh-foroush" onClick={this.gozareshforoush}>
                    <div className="sa-each-card-home animate__animated animate__fadeInRight"> 
                        <img src={process.env.PUBLIC_URL + "/images/sa-report.png"}  alt="" />
                        <h3>گزارش فروش</h3>               
                    </div>
                    </Link>
                    <Link to={{pathname:"/tahvil-moshtari",state:{name:"تحویل مشتری",icon_name : "sa-moshtari-tahvil",agent_id:this.props.location.state.agent_id}}}>
                    <div className="sa-each-card-home   animate__animated animate__fadeInLeft">
                        <img src={process.env.PUBLIC_URL + "/images/sa-moshtari-tahvil.png"} alt="" />
                        <h3>تحویل مشتری</h3>
                    </div>
                    </Link>
                    <Link to="/list-kala-marjuyi" onClick={this.listkalamarjuyi}>
                    <div className="sa-each-card-home animate__animated animate__fadeInRight">
                        <img src={process.env.PUBLIC_URL + "/images/sa-returnlist.png"} alt="" />
                        <h3>لیست کالای مرجوعی</h3>
                    </div>
                    </Link>
                    <Link to={{pathname:"/marju-kala",state:{name:"اسکن کالای مرجوعی ",icon_name : "sa-marjoo-small",agent_id:this.props.location.state.agent_id}}}>
                    <div className="sa-each-card-home   animate__animated animate__fadeInLeft">
                        <img src={process.env.PUBLIC_URL + "/images/sa-marjoo.png"} alt="" />
                        <h3>مرجوع کردن کالا</h3>
                    </div>
                    </Link>
                    <Link to="/factorhaye-bargashti" onClick={this.factorhayebargashti}>
                    <div className="sa-each-card-home animate__animated animate__fadeInRight">
                        <img src={process.env.PUBLIC_URL + "/images/sa-bill.png"} alt="" />
                        <h3>فاکتور های برگشتی</h3>
                    </div>
                    </Link>
                    <Link to={{pathname:"/bargasht-foroush",state:{name:"اسکن برگشت از فروش ",icon_name : "sa-returnfromsale-small",agent_id:this.props.location.state.agent_id}}}>
                    <div className="sa-each-card-home   animate__animated animate__fadeInLeft">
                        <img src={process.env.PUBLIC_URL + "/images/sa-returnfromsale.png"}  alt="" />
                        <h3>برگشت از فروش</h3>
                    </div>
                    </Link>
                    <Link to="/help">
                    <div className="sa-each-card-home animate__animated animate__fadeInRight">
                        <img  src={process.env.PUBLIC_URL + "/images/sa-help.png"}  alt="" />
                        <h3>راهنما</h3>
                    </div>
                    </Link>
                    <Link to={{pathname:"/moarefi-sherkat",state:{name:"درباره شرکت",icon_name : "sa-moarefi-sherkat"}}}>
                    <div className="sa-each-card-home   animate__animated animate__fadeInLeft">
                        <img  src={process.env.PUBLIC_URL + "/images/sa-moarefi-sherkat.png"} alt="" />
                        <h3>معرفی شرکت</h3>
                    </div>
                    </Link>
        
        </div>
        <Footer userid={this.props.location.state.userid} name={this.props.location.state.name}/>ّّ
        </>
        )
}








}



export default Home;