
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

        // Function to create and render the chart
        async function createChart() {
            const data = await fetchData();

            // Extract time and moisture level data from the JSON
            const timeData = data.map(item => item.time);
            const moistureData = data.map(item => item['moisture level']);

            const ctx = document.getElementById('moistureChart').getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: timeData,
                    datasets: [{
                        label: 'Moisture Level vs Time',
                        data: moistureData,
                        borderColor: 'blue',
                        borderWidth: 2,
                        fill: false,
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time'
                            },
                            ticks: {
                                display: false 
                            }
                        },

                        y: {
                            title: {
                                display: true,
                                text: 'Moisture Level'
                            }
                        }
                    }
                }
            });
        }

        // Call the createChart function to render the graph
        createChart();
    