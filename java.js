
function send(){
    var name = document.getElementById("Name").value;
    var number = document.getElementById("Number").value;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("message").value;

    var body = "name :" + name + "<br/> number :" + number + "<br/> email :" + email +
"<br/> message :" + message ;    



    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rlavish022@gmail.com",
        Password : "BB1EAA2697DFD3C7F0B3FDE15D49310E288C",
        To : 'rlavish022@gmail.com',
        From : "rlavish022@gmail.com",
        Subject : "Reciver message",
        Body : body
    }).then(
      message =>{
        if(message=='OK'){
                        swal("Successfull", "Your Data Success fully", "success");
               }
               else{

                            swal("Something Wrong", "Your Data Not recived", "error");
                   }

      } 
    );
}