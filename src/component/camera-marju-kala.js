import React from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { Link, withRouter } from "react-router-dom";
import swal from 'sweetalert';
import $ from 'jquery';

const Marjukalacamera = (props) => {

    const [ data, setData ] = React.useState('Not Found');
    console.log(props.agent_id)
    return (
    <>
      <BarcodeScannerComponent
        width={400}
        height={400}
        onUpdate={(err, result) => {
          if (result){
            setData(result.text)
              var Message;
              $.ajax({
                url: 'https://shahabtousheh.co.ir/pr2/api/agent_return',
                method: "POST",
                async: false,
                data:{
                    barcodeSerial:result.text,
                    lat:31412,
                    lon:41241,
                    reason:"",
                    city:"-", // man injoori mifrestam city ro fkr konam baiad yechi befresti hatman
                    agentId:props.agent_id,
                },
                success: function (response) {
                    var res = $.parseJSON( response );
                    console.log(res);
                    Message = res.message.message;
                    props.history.push({
                      pathname : "/reason",
                      state:{
                        barcode:result.text
                      }
                    })
                    
                    
        
                },
                error: function (jqXHR, exception) {
                    var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    console.log(msg);
                },
            });
            // swal({
            //     title: Message ,
            //     button: "باشه",
            //   })

          }
          else{
            setData('Not Found')
          }
        }}
      />
      
    </>
  )
}

export default withRouter(Marjukalacamera);