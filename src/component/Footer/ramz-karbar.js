import React,{Component} from "react";
import $ from 'jquery';
import Header from "../Header/header";
import swal from 'sweetalert';







class Ramzkarbar extends Component {
   



    onSubmit2 = (event) => {
        event.preventDefault();
        const values = {
                newpass: this.newpassword.value,
                repnewpass : this.repnewpassword.value,
        }
        
        $.ajax({
            url: 'https://shahabtousheh.co.ir/pr2/api/changepassword',
            method: "POST",
            async:false,
            data: {
            userId: this.props.location.state.userid,
            password1:values.newpass,
            password2:values.repnewpass
            },
            success: function (response) {
                var res = $.parseJSON( response );
                swal({
                    title: res,
                    button: "باشه",
                  })
                // console.log(response)
            },
            error: function (jqXHR, exception) {
                var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                swal({
                    title: msg,
                    button: "باشه",
                  })
                console.log(msg);
            },
            });
            
        

    }



    

    render(){

        
        console.log(this.props)

        return(
            
             <div className="sa-center sa-items-wrapper-home">


            <form className="sa-loginbox-wrapper text-center w-80">
                <div className="sa-Each-input-wrapper mt-60">
                    <label htmlFor="sa-new-password" className="sa-label-login-input ">رمز جدید :</label>
                    <input ref={input => this.newpassword = input}    style={{height:"65px"}} type="text" id="sa-new-password" className="sa-input-login-style" />
                </div>
                <div className="sa-Each-input-wrapper">
                    <label htmlFor="sa-repnew-password" className="sa-label-login-input"> تکرار رمز جدید :</label>
                    <input ref={input => this.repnewpassword = input }  style={{height:"65px"}} type="text" id="sa-repnew-password" className="sa-input-login-style" />
                </div>
                <div>
    
    
                    
                        <div className="sa-button-login" style={{width:"100%",height:"65px"}} onClick={this.onSubmit2}>
                            <h6>تایید</h6>
                        </div>
                    
                </div>
            </form>
            </div>
            
        )
    }
}

export default Ramzkarbar;