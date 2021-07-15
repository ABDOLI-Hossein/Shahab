import React from "react";
import $ from 'jquery';
import swal from 'sweetalert';

const reason = (props) => {


    const ajax = (event) =>{
        event.preventDefault();
        var reasonText = $("#reason").find(":selected").text();
        console.log(reasonText)
        $.ajax({
            url: 'https://shahabtousheh.co.ir/pr2/api/agent_return',
            method: "POST",
            async: false,
            data:{
                barcodeSerial: props.location.state.barcode,
                lat:31412,
                lon:41241,
                city:"-",
                agentId: props.location.state.agent_id,
                reason: reasonText
            },
            success: function (response) {
                var res = $.parseJSON( response );
                console.log(res);
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

    





    const goBack = (event) => {
        event.preventDefault();
        props.history.goBack()
     }
    console.log(props)
    return(
        <>
        <div className="sa-center sa-items-wrapper-level2 reason p-relative  animate__animated animate__zoomInUp" style={{height:"100%"}}>
        <h1>شما در حال  مرجوع کردن بارکد زیر هستید:</h1>
        <h1>{props.location.state.barcode}</h1>
        <h1>لطفا دلیل مرجوع کردن این بارکد را بیان کنید:</h1>
            <form>
            <select name="reason" id="reason" className="sa-select-reason">
                <option value="volvo">انتخاب کنید</option>
                <option value="roshan">محصول روشن نمیشود</option>
                <option value="ab">بخار یا آب وارد محصول شده</option>
                <option value="cheshmak">چشمک میزند روشن خاموش میشود</option>
                <option value="other">سایر</option>
            </select>
            <br/><br/>
            <div className="sa-button-reason">
            <input className="sa-each-button" style={{backgroundColor:"#fff",color:"#000"}} type="submit" value="ارسال"  onClick={ajax}/>
            <input className="sa-each-button" type="submit" value="بستن" onClick={goBack} />
            
            </div>


            </form>
        </div>
        </>
    )
}


export default reason;