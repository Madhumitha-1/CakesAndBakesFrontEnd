function validate() {
      
    if( document.form.username.value == "" ) {
       alert( "Please provide your user name!" );
       document.myForm.username.focus() ;
       return false;
    }
}