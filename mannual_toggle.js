
const toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener("change", function() {
    if (toggleSwitch.checked) {
        const formData = {
                "data": {
                    "PUMP STATUS": "ON"
                },
                "query": "select * from ZyaZm8AMFF59ektW where PUMP STATUS='OFF'"
            };

            fetch("https://api.apispreadsheets.com/data/ZyaZm8AMFF59ektW/", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if (res.status === 201) {
                    // SUCCESS: Handle the success case here
                    
                } else {
                    // ERROR: Handle the error case here
                    alert("There was an error :(");
                }
            })
            .catch(error => {
                // Handle any network or other errors here
                console.error("Error:", error);
                alert("There was an error :(");
            });
            
    } else {
        const formData = {
                "data": {
                    "PUMP STATUS": "OFF"
                },
                "query": "select * from ZyaZm8AMFF59ektW where PUMP STATUS='ON'"
            };

            fetch("https://api.apispreadsheets.com/data/ZyaZm8AMFF59ektW/", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if (res.status === 201) {
                    // SUCCESS: Handle the success case here
                } else {
                    // ERROR: Handle the error case here
                    alert("There was an error :(");
                }
            })
            .catch(error => {
                // Handle any network or other errors here
                console.error("Error:", error);
                alert("There was an error :(");
            });
            
    }
});