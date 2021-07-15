import React,{Component} from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./component/home";
import Layout from "./hoc/layout/layout";
import Login from "./component/login";
import Mojudianbar from "./component/mojudianbar";
import Gozareshforoush from "./component/gozaresh-foroush";
import Gozareshforoushitem from "./component/gozaresh-foroush-item";
import Listkalamarjuyi from "./component/list-kala-marjuyi";
import Factorhayebargashti from "./component/factorhaye-bargashti";
import Ramzkarbar from "./component/Footer/ramz-karbar";
import Footerscan from "./component/Footer/footer-scan";
import DaryaftKala from "./component/daryaftkala";
import mojudilevel2 from "./component/mojudilevel2";
import gozareshlevel2 from "./component/gozareshlevel2";
import listkalalevel2 from "./component/listkalalevel2";
import Marjukala from "./component/marju-kala";
import Bargashtforoush from "./component/bargash-foroush";
import Tahvilmoshtari from "./component/tahvil-moshtari";
import Factorlevel2 from "./component/factor-bargashti-level2";
import mojudilevel3 from "./component/mojudilevel3";
import moarefisherkat from "./component/moarefi-sherkat";
import writebarcode from "./component/write-barcode";
import reason from "./component/reason-marju-after-ajax";



class Routes extends Component{
    render(){
        console.log(this.props)

        return(
            <Layout>
                <Switch>
                    <Route path="/home" component={Home}/> 
                    <Route path="/" exact  component={Login}/> 
                    <Route path="/mojudi-anbar" component={Mojudianbar} />
                    <Route path="/gozaresh-foroush" component={Gozareshforoush} />
                    <Route path="/gozaresh-foroush-item" component={Gozareshforoushitem}/>
                    <Route path="/list-kala-marjuyi" component={Listkalamarjuyi}/>
                    <Route path="/factorhaye-bargashti" component={Factorhayebargashti}/>
                    <Route path="/ramz-karbar" component={Ramzkarbar}/>
                    <Route path='/help' component={() => { window.location.href = 'http://shahabtousheh.co.ir/Help.pdf'; return null;}}/>
                    <Route path="/footer-scan" component={Footerscan}/>
                    <Route path="/daryaft-kala" exact component={DaryaftKala}/>
                    <Route path="/mojudilevel2" component={mojudilevel2} />
                    <Route path="/gozareshlevel2" component={gozareshlevel2} />
                    <Route path="/listkalalevel2" component={listkalalevel2}/>
                    <Route path="/marju-kala" component={Marjukala}/>
                    <Route path="/bargasht-foroush" component={Bargashtforoush}/>
                    <Route path="/tahvil-moshtari" component={Tahvilmoshtari}/>
                    <Route path="/factorbargashtilevel2" component={Factorlevel2}/>
                    <Route path="/mojudilevel3" component={mojudilevel3} />
                    <Route path="/moarefi-sherkat" component={moarefisherkat} />
                    <Route path="/write-barcode" component={writebarcode}  />
                    <Route path="/reason" component={reason}  />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;
