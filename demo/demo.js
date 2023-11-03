let companyName= []

fetch("http://localhost:3000/employees")
        .then(response => response.json()) // Convert the response body to a JavaScript object
        .then(data => {

            if (Array.isArray(data)) {

                 companyName=[]
                for (let i = 0; i < data.length; i++) {
                    if(!data[i].companyName=='')
                    companyName.push(data[i].companyName)
                }
                console.log(companyName)

              
            } else {
                console.log("Response data is not an array.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

       
        var options =""
        companyName.map((opt,i)=>{
          options+=`<option value=${opt}>${opt}</option>`
        })
        document.getElementById("dropdown-content").innerHTML = options

        function multiple(){
            document.getElementById("dropdown-content").multiple =true
        }

    
