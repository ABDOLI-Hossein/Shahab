import React,{Component} from "react";
import $ from 'jquery';
import { Link, Redirect } from "react-router-dom";
import swal from 'sweetalert';









class Login extends Component{

    state = {
        response : '',
        agentId  : '',
        username : '',
        messagefaild : '',
        userid : '',
        welcomeDisplay : "flex"
      }
    
    
    
    
    onSubmit = (event) => {
        event.preventDefault();
        const values = {
            username:this.username.value,
            password:this.password.value,
        }
        var message;
        var Agentid;  
        var name;  
        var Messagefaild;
        var Userid;
    
        $.ajax({
            url: 'https://shahabtousheh.co.ir/pr2/api/userauth',
            method: "POST",
            async:false,
    
            data: {
                apiKey:'ef6325ff-e7ed-445e-ab8a-0ad382a11f65',
                username: values.username,
                pass: values.password
            },
            success: function (response) {
    
                var res = $.parseJSON( response );
                console.log(res)
                message = res.message.response_code;
                Agentid = res.message.agent_id;
                name = res.message.first_name+' '+res.message.last_name;
                Messagefaild = res.message.message;
                Userid = res.message.user_id;
    
            },
            error: function (jqXHR, exception) {
                var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                console.log(msg)
            },
        });
    
        
        
        this.setState({
            response : message,
            agentId  : Agentid,
            username : name,
            messagefaild : Messagefaild,
            userid : Userid
        })


       
    
    }
   

    componentDidUpdate(){
        if(this.state.response === 200){
           
            this.props.history.push({
                pathname: "/home",
                
                state: { 
                    
                    agent_id: this.state.agentId,
                    name : this.state.username,
                    userid : this.state.userid,
                    icon_name : "sa-profile-icon"
                }
            });
         
            


            
                         
        }else{
            
            if(this.state.messagefaild != ''){
                swal({
                    title: this.state.messagefaild,
                    button: "باشه",
                  })
            }


        }
    }
    
    componentWillMount(){
        

        setTimeout(() => { 
         this.setState({
             welcomeDisplay:"none"
         })
    
    }, 1000);

    }
    
   


    render(){
        
        

        return(
            <>

            <div className="welcome-logo" style={{display:this.state.welcomeDisplay}}>
                <img src={process.env.PUBLIC_URL + '/images/sa-logo.png'} alt=""/>
            </div>


             <form className="d-none sa-login-box">
                <div className="p-30 sa-loginbox-wrapper">
                    <img src={process.env.PUBLIC_URL + '/images/sa-logo.png'} alt="" className="sa-center" />
                    <div className="sa-Each-input-wrapper mt-60">
                        <label htmlFor="sa-username" className="sa-label-login-input">نام کاربری :</label>
                        <input ref={input => this.username = input}   type="text" id="sa-username" className="sa-input-login-style" />
                    </div>
                    <div className="sa-Each-input-wrapper">
                        <label htmlFor="sa-password" className="sa-label-login-input">رمز عبور :</label>
                        <input  ref={input => this.password = input} type="password" id="sa-password" className="sa-input-login-style" />
                    </div>
    
                    <Link to="/home"   onClick={this.onSubmit}>
                    <button type="submit" className="sa-button-login"><h6>ورود</h6></button>
                    </Link>
    
    
                </div>
            </form>            
            </>




           

            
        )
        
    }

   
}

export default Login;