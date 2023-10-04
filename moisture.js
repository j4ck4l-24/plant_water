
        // Function to fetch the current target moisture level and update the display
        function fetchCurrentTargetMoisture() {
            $.get("https://api.apispreadsheets.com/data/ZyaZm8AMFF59ektW/", function (data) {
                const currentTargetMoisture = data.data[0]['Target moisture'];
                $("#currentTargetMoisture").text(currentTargetMoisture);
                $("#newTargetMoisture").attr("placeholder", currentTargetMoisture); // Set placeholder with current value
            });
        }

        // Function to set the target moisture level
        function setTargetMoisture() {
            const newTargetMoisture = parseInt($("#newTargetMoisture").val());

            if (newTargetMoisture > 0) {
                // Get the current target moisture value from the display
                const currentTargetMoisture = parseInt($("#currentTargetMoisture").text());

                const jsonData = {
                    "data": {
                        "Target moisture": newTargetMoisture
                    },
                    "query": `select * from ZyaZm8AMFF59ektW where "Target moisture"='${currentTargetMoisture}'`
                };

                $.ajax({
                    type: "POST",
                    url: "https://api.apispreadsheets.com/data/ZyaZm8AMFF59ektW/",
                    data: JSON.stringify(jsonData),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function () {
                        alert("Target moisture set successfully!");
                        fetchCurrentTargetMoisture(); // Refresh current target moisture
                        $("#newTargetMoisture").val(""); // Clear the input field
                    },
                    error: function () {
                        fetchCurrentTargetMoisture();
                        $("#newTargetMoisture").val("");
                        //alert("Error setting target moisture.");
                    }
                });
            } else {
                alert("Target moisture must be greater than 0.");
            }
        }

        // Fetch and display the current target moisture on page load
        fetchCurrentTargetMoisture();
    