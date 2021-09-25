function nameRun() {
    var You = {
        Fname:document.querySelector("#add_to").value
        ,
        Lname:document.querySelector("#add_to").value
        , 
        FlName:function fullName(){
            return this.Fname + " " + this.Lname;
            //full name this is owner (user)
        }
    const borderVhn = document.querySelector("#border")
    };
    function bgColor() {
        //document.querySelector()
        document.querySelector("#mouseover").style.backgroundColor = 'green'
    }


    document.querySelector("#FirstName").innerHTML = "Your name: " + You.Fname;
//document.write("sda" + run);  

  }