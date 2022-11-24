<?php

class PHP_Email_Form{
    public $to = "";
    public $ajax;
    public $from_name;
    public $from_email;
    public $subject;
    public $message = "";
    public $headers = "";

    function add_message($val, $key){
        $this->message .= "<p><b>".$key."</b> : ". $val . "</p>";
    }

    function send(){
        $msg = "
        <html>
        <head>
        <title>HTML email</title>
        </head>
        <body>
        <p>New Email From Adlytic Contact Form!</p>
        ==========================================
        <div>
        "
        . $this->message .
        "
        </div>
        </body>
        </html>
        ";

        // Always set content-type when sending HTML email
        $this->headers = "MIME-Version: 1.0" . "\r\n";
        $this->headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $this->headers .= 'From: <'. $this->from_email .'>' . "\r\n";
        $this->headers .= 'Cc: info@omno.ai' . "\r\n";

        if(mail($this->to,$this->subject,$msg,$this->headers)) {
            return "OK";
        } else {
            echo"<p class='Error'>Problem in Sending Mail.</p>";
        }
    }
}


?>
