<?php

  $receiving_email_address = 'contact@example.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->company = $_POST['company'];
  $contact->date = $_POST['date'];
  $contact->duration = $_POST['duration'];
  $contact->message = $_POST['message'];


  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['company'], 'Message', 10);
  $contact->add_message( $_POST['date'], 'Message', 10);
  $contact->add_message( $_POST['duration'], 'Message', 10);
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>
