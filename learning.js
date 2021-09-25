function nameRun() {
    var You = {
        Fname:document.getElementById("add_to").value
        ,
        Lname:document.getElementById("add_to").value
        , 
        FlName:function fullName(){
            return this.Fname + " " + this.Lname;
            //full name this is owner (user)
        }
    };
    function bgColor() {
        //document.querySelector()
        document.getElementById("mouseover").style.backgroundColor = 'green'
    }


    document.getElementById("FirstName").innerHTML = "Your name: " + You.Fname;
//document.write("sda" + run);  

  }