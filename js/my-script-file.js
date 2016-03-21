
var   $contactList = $('#contact-list'),
      $contactInfo = $('.contact-info'),
      $address = $('#address'),
      $tel = $('#tel'),
      $email = $('#email');

      $contactInfo.hide();

$(document).ready(function() {

    $contactList.on('change', function() {

      $contactInfo.show('fast');

      $thisVal = $(this).val();

      if ( $thisVal === 'address' ) {
        $email.hide('slow');
        $tel.hide('slow');
        $address.show('fast');

      } else if ( $thisVal === 'tel') {
        $address.hide('slow');
        $email.hide('slow');
        $tel.show('fast');

      }  else if ( $thisVal === 'email') {
        $address.hide('slow');
        $tel.hide('slow');
        $email.show('fast');

      } else {
        $address.hide('slow');
        $tel.hide('slow');
        $email.hide('slow');
      }

    });

});
