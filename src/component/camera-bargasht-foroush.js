import React from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import swal from 'sweetalert';
import $ from 'jquery';

const Bargashtforoushcamera = (props) => {

    const [ data, setData ] = React.useState('Not Found');
    
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
                url: 'https://shahabtousheh.co.ir/pr2/api/return_on_sale',
                method: "POST",
                async: false,
                data:{
                    barcodeSerial:result.text,
                    agentId:props.agent_id,
                },
                success: function (response) {
                    var res = $.parseJSON( response );
                    console.log(res);
                    Message = res.message.message;
                    
                    
        
                },
                error: function (jqXHR, exception) {
                    var msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    console.log(msg);
                },
            });
            swal({
                title: Message+"\nبارکد قرائت شده:"+ result.text ,
                button: "باشه",
              })

          }
          else{
            setData('Not Found')
          }
        }}
      />
      
    </>
  )
}

export default Bargashtforoushcamera;