
        // Function to fetch data from the API
        async function fetchData() {
            try {
                const response = await fetch("https://api.apispreadsheets.com/data/rF6K2wi7RT2S2Yql/");
                const data = await response.json();
                return data.data; // Assuming the JSON data is in data.data
            } catch (error) {
                console.error("Error fetching data:", error);
                return [];
            }
        }

        // Function to update the temperature gauge with the latest temperature
        async function updateTemperature() {
            const data = await fetchData();
            const latestEntry = data[data.length - 1];

            // Extract temperature from the latest entry
            const temperature = latestEntry.Temperature;

            // Display the temperature in the gauge
            const temperatureGauge = document.getElementById('temperatureGauge');
            temperatureGauge.textContent = temperature + "°C"; // Modify this to display in desired format
        }

        // Call the updateTemperature function initially and every 10 seconds
        updateTemperature();
        setInterval(updateTemperature, 60000); // Update every 10 seconds
    