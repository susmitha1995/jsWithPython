
let profitSum = 44000;
let lossSum = 0;

companyDropDown();

function myFunction() {
   

    let chartData = {
        labels: ["Profit", "Loss"],
        profit: [profitSum],
        loss: [lossSum]
    };

    const ctx = document.getElementById("profitLossChart");
    let barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: 'Profit',
                data: chartData.profit,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Loss',
                data: chartData.loss,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
           
        },
       
    });

}

document.addEventListener('DOMContentLoaded', myFunction());


// Added an event listener to the filter button
const filterButton = document.getElementById('filterButton');
filterButton.addEventListener('click', function () {        
    // Get the selected "from" and "to" dates
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;
    const name = document.getElementById("dropdown-content").value

    var s = "http://localhost:3000/employees?companyName="+name+"&date_gte=" + fromDate + "&date_lte=" + toDate

    fetch(s)
        .then(response => response.json()) // Convert the response body to a JavaScript object
        .then(data => {

            if (Array.isArray(data)) {

                profitSum = 0;
                lossSum = 0;


                for (let i = 0; i < data.length; i++) {
                    profitSum = profitSum + data[i].profit;
                    lossSum = lossSum + data[i].loss;
                }

                document.getElementById("result").style.display = "block";
                document.getElementById("profitResult").innerHTML = "<span>Profit</span><h2 style='color:green'>" + profitSum + "</h2>";
                document.getElementById("lossResult").innerHTML = "<span>Loss</span><h2 style='color:red'>" + lossSum + "</h2>";

               
                //calling chart function
                myFunction();
            } else {
                console.log("Response data is not an array.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });



});

async function fetchData() {
    let promisesOfCompany = []
    try {
        const response = await fetch("http://localhost:3000/employees");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
         await response.json().then((data)=>{ for (let i = 0; i < data.length; i++) {
            if(!data[i].companyName=='')
            promisesOfCompany.push(data[i].companyName)
         }});
       
        return promisesOfCompany
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function to fetch data




//fetching values from api and assigning it to dropdown
 async function companyDropDown(){

 
    CompanyNames = await fetchData();
    // Assuming the Promise result is stored in a variable, e.g., CompanyNames

    //console.log(CompanyNames)

   
    var options =`<option value="Select company name">Select Company Name</option>`
    CompanyNames.map((opt,i)=>{
      options+=`<option value="${opt}">${opt}</option>`
    })
    document.getElementById("dropdown-content").innerHTML = options

    
    
         
}



