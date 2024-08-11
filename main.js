const fs = require("fs");
const path = require("path");

// Paths to the JSON files
const lunarJsonFilePath = path.join(__dirname, "lunarCountdown.json");
const solarJsonFilePath = path.join(__dirname, "solarCountdown.json");
const mercuryJsonFilePath = path.join(__dirname, "mercuryCountdown.json");
const venusJsonFilePath = path.join(__dirname, "venusCountdown.json");
const marsJsonFilePath = path.join(__dirname, "marsCountdown.json");
const jupiterJsonFilePath = path.join(__dirname, "jupiterCountdown.json");
const saturnJsonFilePath = path.join(__dirname, "saturnCountdown.json");
const uranusJsonFilePath = path.join(__dirname, "uranusCountdown.json");
const neptuneJsonFilePath = path.join(__dirname, "neptuneCountdown.json");
const plutoJsonFilePath = path.join(__dirname, "plutoCountdown.json");
const nodeJsonFilePath = path.join(__dirname, "nodeCountdown.json");

// Helper function to convert milliseconds to time format
function msToTime(duration) {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

// Get a reference to the output element
const outputElement = document.getElementById("output");

// Function to update the countdown
function updateCountdown() {
  // Read the Lunar JSON file
  fs.readFile(lunarJsonFilePath, "utf8", (err, lunarData) => {
    if (err) {
      console.error("Error reading Lunar file:", err);
      return;
    }
    fs.readFile(solarJsonFilePath, "utf8", (err, solarData) => {
      if (err) {
        console.error("Error reading Solar file:", err);
        return;
      }
      fs.readFile(mercuryJsonFilePath, "utf8", (err, mercuryData) => {
        if (err) {
          console.error("Error reading Mercury file:", err);
          return;
        }
        fs.readFile(venusJsonFilePath, "utf8", (err, venusData) => {
          if (err) {
            console.error("Error reading Venus file:", err);
            return;
          }
          fs.readFile(marsJsonFilePath, "utf8", (err, marsData) => {
            if (err) {
              console.error("Error reading Mars file:", err);
              return;
            }
            fs.readFile(jupiterJsonFilePath, "utf8", (err, jupiterData) => {
              if (err) {
                console.error("Error reading Jupiter file:", err);
                return;
              }
              fs.readFile(saturnJsonFilePath, "utf8", (err, saturnData) => {
                if (err) {
                  console.error("Error reading Saturn file:", err);
                  return;
                }
                fs.readFile(uranusJsonFilePath, "utf8", (err, uranusData) => {
                  if (err) {
                    console.error("Error reading Uranus file:", err);
                    return;
                  }
                  fs.readFile(
                    neptuneJsonFilePath,
                    "utf8",
                    (err, neptuneData) => {
                      if (err) {
                        console.error("Error reading Neptune file:", err);
                        return;
                      }
                      fs.readFile(
                        plutoJsonFilePath,
                        "utf8",
                        (err, plutoData) => {
                          if (err) {
                            console.error("Error reading Pluto file:", err);
                            return;
                          }
                          fs.readFile(
                            nodeJsonFilePath,
                            "utf8",
                            (err, nodeData) => {
                              if (err) {
                                console.error("Error reading Node file:", err);
                                return;
                              }
                          try {
                            // Parse the JSON data
                            const lunarJsonData = JSON.parse(lunarData);
                            const solarJsonData = JSON.parse(solarData);
                            const mercuryJsonData = JSON.parse(mercuryData);
                            const venusJsonData = JSON.parse(venusData);
                            const marsJsonData = JSON.parse(marsData);
                            const jupiterJsonData = JSON.parse(jupiterData);
                            const saturnJsonData = JSON.parse(saturnData);
                            const uranusJsonData = JSON.parse(uranusData);
                            const neptuneJsonData = JSON.parse(neptuneData);
                            const plutoJsonData = JSON.parse(plutoData);
                            const nodeJsonData = JSON.parse(nodeData);

                            //Get current UTC time
                            let now = new Date();

                            //initialize variables to get  current and next activation
                            let currentLunarActivation = null;
                            let nextLunarActivation = null;
                            let currentSolarActivation = null;
                            let nextSolarActivation = null;
                            let currentMercuryActivation = null;
                            let nextMercuryActivation = null;
                            let currentVenusActivation = null;
                            let nextVenusActivation = null;
                            let currentMarsActivation = null;
                            let nextMarsActivation = null;
                            let currentJupiterActivation = null;
                            let nextJupiterActivation = null;
                            let currentSaturnActivation = null;
                            let nextSaturnActivation = null;
                            let currentUranusActivation = null;
                            let nextUranusActivation = null;
                            let currentNeptuneActivation = null;
                            let nextNeptuneActivation = null;
                            let currentPlutoActivation = null;
                            let nextPlutoActivation = null;
                            let currentNodeActivation = null;
                            let nextNodeActivation = null;

                            //function to update current activation
                            function updateActivations(
                              jsonData,
                              currentActivation,
                              nextActivation
                            ) {
                              // Iterate over the gates and lines
                              for (let gate in jsonData) {
                                let lines = jsonData[gate];
                                for (let line in lines) {
                                  let lineTime = new Date(lines[line]);

                                  // If the activation time is in the past compared to the current time
                                  if (lineTime <= now) {
                                    // Update current activation if this line's time is later than the current one
                                    if (
                                      !currentActivation ||
                                      lineTime > currentActivation.time
                                    ) {
                                      currentActivation = {
                                        gate,
                                        line,
                                        time: lineTime,
                                      };
                                    }
                                  } else {
                                    // Update next activation if it's not yet set or this line's time is earlier than the next one
                                    if (
                                      !nextActivation ||
                                      lineTime < nextActivation.time
                                    ) {
                                      nextActivation = {
                                        gate,
                                        line,
                                        time: lineTime,
                                      };
                                    }
                                  }
                                }
                              }

                              return { currentActivation, nextActivation };
                            }

                            //update lunar, solar, mercury, venus, mars, jupiter, saturn, uranus, neptune, and pluto activations
                            let lunarActivations = updateActivations(
                              lunarJsonData,
                              currentLunarActivation,
                              nextLunarActivation
                            );
                            let solarActivations = updateActivations(
                              solarJsonData,
                              currentSolarActivation,
                              nextSolarActivation
                            );
                            let mercuryActivations = updateActivations(
                              mercuryJsonData,
                              currentMercuryActivation,
                              nextMercuryActivation
                            );
                            let venusActivations = updateActivations(
                              venusJsonData,
                              currentVenusActivation,
                              nextVenusActivation
                            );
                            let marsActivations = updateActivations(
                              marsJsonData,
                              currentMarsActivation,
                              nextMarsActivation
                            );
                            let jupiterActivations = updateActivations(
                              jupiterJsonData,
                              currentJupiterActivation,
                              nextJupiterActivation
                            );
                            let saturnActivations = updateActivations(
                              saturnJsonData,
                              currentSaturnActivation,
                              nextSaturnActivation
                            );
                            let uranusActivations = updateActivations(
                              uranusJsonData,
                              currentUranusActivation,
                              nextUranusActivation
                            );
                            let neptuneActivations = updateActivations(
                              neptuneJsonData,
                              currentNeptuneActivation,
                              nextNeptuneActivation
                            );
                            let plutoActivations = updateActivations(
                              plutoJsonData,
                              currentPlutoActivation,
                              nextPlutoActivation
                            );
                            let nodeActivations = updateActivations(
                              nodeJsonData,
                              currentNodeActivation,
                              nextNodeActivation
                            );

                            //clear the output element
                            outputElement.innerHTML = "";

                            //display current date and time
                            let date = new Date();
                            let options = {
                              timeZone: "Pacific/Honolulu",
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            };
                            let formatter = new Intl.DateTimeFormat(
                              [],
                              options
                            );
                            outputElement.innerHTML += `Current Time: ${formatter.format(
                              date
                            )}<br><br>`;
                            //print current lunarActivation
                            if (lunarActivations.currentActivation) {
                              outputElement.innerHTML += `Current MOON activation: ${
                                lunarActivations.currentActivation.gate
                              } ${
                                lunarActivations.currentActivation.line
                              } at ${lunarActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // Print next Lunar activation
                            if (lunarActivations.nextActivation) {
                              let timeRemaining =
                                lunarActivations.nextActivation.time - now;
                              outputElement.innerHTML += `Time until next activation: ${msToTime(
                                timeRemaining
                              )}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                lunarActivations.nextActivation.gate
                              } ${
                                lunarActivations.nextActivation.line
                              } at ${lunarActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // After printing the Lunar information and before printing the Solar information
                            outputElement.innerHTML += "<br>";
                            // Print current Solar activation
                            if (solarActivations.currentActivation) {
                              outputElement.innerHTML += `Current SUN activation: ${
                                solarActivations.currentActivation.gate
                              } ${
                                solarActivations.currentActivation.line
                              } at ${solarActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // Print next Solar activation
                            if (solarActivations.nextActivation) {
                              let timeRemaining =
                                solarActivations.nextActivation.time - now;
                              outputElement.innerHTML += `Time until next activation: ${msToTime(
                                timeRemaining
                              )}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                solarActivations.nextActivation.gate
                              } ${
                                solarActivations.nextActivation.line
                              } at ${solarActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // After printing the Solar information and before printing the Venus information
                            outputElement.innerHTML += "<br>";
                            //print current Mercury activation
                            if (mercuryActivations.currentActivation) {
                              outputElement.innerHTML += `Current MERCURY activation: ${
                                mercuryActivations.currentActivation.gate
                              } ${
                                mercuryActivations.currentActivation.line
                              } at ${mercuryActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            // Print next Mercury activation
                            if (mercuryActivations.nextActivation) {
                              let timeRemaining =
                                mercuryActivations.nextActivation.time - now;
                              outputElement.innerHTML += `Time until next activation: ${msToTime(
                                timeRemaining
                              )}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                mercuryActivations.nextActivation.gate
                              } ${
                                mercuryActivations.nextActivation.line
                              } at ${mercuryActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            outputElement.innerHTML += "<br>";
                            //print current Venus activation
                            if (venusActivations.currentActivation) {
                              outputElement.innerHTML += `Current VENUS activation: ${
                                venusActivations.currentActivation.gate
                              } ${
                                venusActivations.currentActivation.line
                              } at ${venusActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // Print next Venus activation
                            if (venusActivations.nextActivation) {
                              let timeRemaining =
                                venusActivations.nextActivation.time - now;
                              outputElement.innerHTML += `Time until next activation: ${msToTime(
                                timeRemaining
                              )}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                venusActivations.nextActivation.gate
                              } ${
                                venusActivations.nextActivation.line
                              } at ${venusActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // After printing the Venus information and before printing the Mars information
                            outputElement.innerHTML += "<br>";
                            /// Print current Mars activation
                            if (marsActivations.currentActivation) {
                              outputElement.innerHTML += `Current MARS activation: ${
                                marsActivations.currentActivation.gate
                              } ${
                                marsActivations.currentActivation.line
                              } at ${marsActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // Function to calculate the time remaining until the next Mars activation
                            function calculateMarsCountdown(
                              nextActivationTime
                            ) {
                              // Get the current time
                              let now = new Date();

                              // Calculate the time difference between now and the next activation time
                              let timeDifference = nextActivationTime - now;

                              // Convert milliseconds to days, hours, minutes, and seconds
                              let days = Math.floor(
                                timeDifference / (1000 * 60 * 60 * 24)
                              );
                              let hours = Math.floor(
                                (timeDifference % (1000 * 60 * 60 * 24)) /
                                  (1000 * 60 * 60)
                              );
                              let minutes = Math.floor(
                                (timeDifference % (1000 * 60 * 60)) /
                                  (1000 * 60)
                              );
                              let seconds = Math.floor(
                                (timeDifference % (1000 * 60)) / 1000
                              );

                              // Format hours, minutes, and seconds as H:M:S
                              let formattedTime = `${hours
                                .toString()
                                .padStart(2, "0")}:${minutes
                                .toString()
                                .padStart(2, "0")}:${seconds
                                .toString()
                                .padStart(2, "0")}`;

                              // Return the formatted countdown
                              return `${days} days ${formattedTime}`;
                            }

                            // Print next Mars activation
                            if (marsActivations.nextActivation) {
                              let timeRemaining =
                                marsActivations.nextActivation.time;
                              outputElement.innerHTML += `Time until next activation: ${calculateMarsCountdown(
                                timeRemaining
                              )}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                marsActivations.nextActivation.gate
                              } ${
                                marsActivations.nextActivation.line
                              } at ${marsActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // After printing the Saturn information and before printing the Jupiter information
                            outputElement.innerHTML += "<br>";
                            //print current Jupiter activation
                            if (jupiterActivations.currentActivation) {
                              outputElement.innerHTML += `Current JUPITER activation: ${
                                jupiterActivations.currentActivation.gate
                              } ${
                                jupiterActivations.currentActivation.line
                              } at ${jupiterActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            // Function to calculate the time remaining until the next Saturn activation
                            function calculateJupiterCountdown(
                              nextActivationTime
                            ) {
                              // Get the current time
                              let now = new Date();

                              // Calculate the time difference between now and the next activation time
                              let timeDifference = nextActivationTime - now;

                              // Convert milliseconds to days, hours, minutes, and seconds
                              let days = Math.floor(
                                timeDifference / (1000 * 60 * 60 * 24)
                              );
                              let hours = Math.floor(
                                (timeDifference % (1000 * 60 * 60 * 24)) /
                                  (1000 * 60 * 60)
                              );
                              let minutes = Math.floor(
                                (timeDifference % (1000 * 60 * 60)) /
                                  (1000 * 60)
                              );
                              let seconds = Math.floor(
                                (timeDifference % (1000 * 60)) / 1000
                              );

                              // Format hours, minutes, and seconds as H:M:S
                              let formattedTime = `${hours
                                .toString()
                                .padStart(2, "0")}:${minutes
                                .toString()
                                .padStart(2, "0")}:${seconds
                                .toString()
                                .padStart(2, "0")}`;

                              // Return the formatted countdown
                              return `${days} days ${formattedTime}`;
                            }

                            // Print next Jupiter activation
                            if (jupiterActivations.nextActivation) {
                              let timeRemaining =
                                jupiterActivations.nextActivation.time - now;
                              let daysRemaining = Math.floor(
                                timeRemaining / (1000 * 60 * 60 * 24)
                              ); // Calculate days remaining
                              let formattedTime = msToTime(timeRemaining); // Convert remaining time to HH:MM:SS format
                              outputElement.innerHTML += `Time until next activation: ${daysRemaining} days ${formattedTime}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                jupiterActivations.nextActivation.gate
                              } ${
                                jupiterActivations.nextActivation.line
                              } at ${jupiterActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            outputElement.innerHTML += "<br>";
                            // Print current Saturn activation
                            if (saturnActivations.currentActivation) {
                              outputElement.innerHTML += `Current SATURN activation: ${
                                saturnActivations.currentActivation.gate
                              } ${
                                saturnActivations.currentActivation.line
                              } at ${saturnActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // Function to calculate the time remaining until the next Saturn activation
                            function calculateSaturnCountdown(
                              nextActivationTime
                            ) {
                              // Get the current time
                              let now = new Date();

                              // Calculate the time difference between now and the next activation time
                              let timeDifference = nextActivationTime - now;

                              // Convert milliseconds to days, hours, minutes, and seconds
                              let days = Math.floor(
                                timeDifference / (1000 * 60 * 60 * 24)
                              );
                              let hours = Math.floor(
                                (timeDifference % (1000 * 60 * 60 * 24)) /
                                  (1000 * 60 * 60)
                              );
                              let minutes = Math.floor(
                                (timeDifference % (1000 * 60 * 60)) /
                                  (1000 * 60)
                              );
                              let seconds = Math.floor(
                                (timeDifference % (1000 * 60)) / 1000
                              );

                              // Format hours, minutes, and seconds as H:M:S
                              let formattedTime = `${hours
                                .toString()
                                .padStart(2, "0")}:${minutes
                                .toString()
                                .padStart(2, "0")}:${seconds
                                .toString()
                                .padStart(2, "0")}`;

                              // Return the formatted countdown
                              return `${days} days ${formattedTime}`;
                            }

                            // Print next Saturn activation
                            if (saturnActivations.nextActivation) {
                              let timeRemaining =
                                saturnActivations.nextActivation.time;
                              outputElement.innerHTML += `Time until next activation: ${calculateSaturnCountdown(
                                timeRemaining
                              )}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                saturnActivations.nextActivation.gate
                              } ${
                                saturnActivations.nextActivation.line
                              } at ${saturnActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            outputElement.innerHTML += "<br>";
                            //print Uranus current activation
                            if (uranusActivations.currentActivation) {
                              outputElement.innerHTML += `Current URANUS activation: ${
                                uranusActivations.currentActivation.gate
                              } ${
                                uranusActivations.currentActivation.line
                              } at ${uranusActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            // Function to calculate the time remaining until the next Uranus activation
                            function calculateUranusCountdown(
                              nextActivationTime
                            ) {
                              // Get the current time
                              let now = new Date();

                              // Calculate the time difference between now and the next activation time
                              let timeDifference = nextActivationTime - now;

                              // Convert milliseconds to days, hours, minutes, and seconds
                              let days = Math.floor(
                                timeDifference / (1000 * 60 * 60 * 24)
                              );
                              let hours = Math.floor(
                                (timeDifference % (1000 * 60 * 60 * 24)) /
                                  (1000 * 60 * 60)
                              );
                              let minutes = Math.floor(
                                (timeDifference % (1000 * 60 * 60)) /
                                  (1000 * 60)
                              );
                              let seconds = Math.floor(
                                (timeDifference % (1000 * 60)) / 1000
                              );

                              // Format hours, minutes, and seconds as H:M:S
                              let formattedTime = `${hours
                                .toString()
                                .padStart(2, "0")}:${minutes
                                .toString()
                                .padStart(2, "0")}:${seconds
                                .toString()
                                .padStart(2, "0")}`;

                              // Return the formatted countdown
                              return `${days} days ${formattedTime}`;
                            }

                            // Print next Uranus activation
                            if (uranusActivations.nextActivation) {
                              let timeRemaining =
                                uranusActivations.nextActivation.time - now;
                              let daysRemaining = Math.floor(
                                timeRemaining / (1000 * 60 * 60 * 24)
                              ); // Calculate days remaining
                              let formattedTime = msToTime(timeRemaining); // Convert remaining time to HH:MM:SS format
                              outputElement.innerHTML += `Time until next activation: ${daysRemaining} days ${formattedTime}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                uranusActivations.nextActivation.gate
                              } ${
                                uranusActivations.nextActivation.line
                              } at ${uranusActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            outputElement.innerHTML += "<br>";
                            // Print current Neptune activation
                            if (neptuneActivations.currentActivation) {
                              outputElement.innerHTML += `Current NEPTUNE activation: ${
                                neptuneActivations.currentActivation.gate
                              } ${
                                neptuneActivations.currentActivation.line
                              } at ${neptuneActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            // Print next Neptune activation
                            if (neptuneActivations.nextActivation) {
                              let timeRemaining =
                                neptuneActivations.nextActivation.time - now;
                              let daysRemaining = Math.floor(
                                timeRemaining / (1000 * 60 * 60 * 24)
                              ); // Calculate days remaining
                              let formattedTime = msToTime(timeRemaining); // Convert remaining time to HH:MM:SS format
                              outputElement.innerHTML += `Time until next activation: ${daysRemaining} days ${formattedTime}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                neptuneActivations.nextActivation.gate
                              } ${
                                neptuneActivations.nextActivation.line
                              } at ${neptuneActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            outputElement.innerHTML += "<br>";

                            // Function to calculate the time remaining until the next Neptune activation
                            function calculateNeptuneCountdown(
                              nextActivationTime
                            ) {
                              // Get the current time
                              let now = new Date();

                              // Calculate the time difference between now and the next activation time
                              let timeDifference = nextActivationTime - now;

                              // Convert milliseconds to days, hours, minutes, and seconds
                              let days = Math.floor(
                                timeDifference / (1000 * 60 * 60 * 24)
                              );
                              let hours = Math.floor(
                                (timeDifference % (1000 * 60 * 60 * 24)) /
                                  (1000 * 60 * 60)
                              );
                              let minutes = Math.floor(
                                (timeDifference % (1000 * 60 * 60)) /
                                  (1000 * 60)
                              );
                              let seconds = Math.floor(
                                (timeDifference % (1000 * 60)) / 1000
                              );

                              // Format hours, minutes, and seconds as H:M:S
                              let formattedTime = `${hours
                                .toString()
                                .padStart(2, "0")}:${minutes
                                .toString()
                                .padStart(2, "0")}:${seconds
                                .toString()
                                .padStart(2, "0")}`;

                              // Return the formatted countdown
                              return `${days} days ${formattedTime}`;
                            }
                            outputElement.innerHTML += "<br>";
                            // Print current Pluto activation
                            if (plutoActivations.currentActivation) {
                              outputElement.innerHTML += `Current PLUTO activation: ${
                                plutoActivations.currentActivation.gate
                              } ${
                                plutoActivations.currentActivation.line
                              } at ${plutoActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // Function to calculate the time remaining until the next Pluto activation
                            function calculatePlutoCountdown(
                              nextActivationTime
                            ) {
                              // Get the current time
                              let now = new Date();

                              // Calculate the time difference between now and the next activation time
                              let timeDifference = nextActivationTime - now;

                              // Convert milliseconds to days, hours, minutes, and seconds
                              let days = Math.floor(
                                timeDifference / (1000 * 60 * 60 * 24)
                              );
                              let hours = Math.floor(
                                (timeDifference % (1000 * 60 * 60 * 24)) /
                                  (1000 * 60 * 60)
                              );
                              let minutes = Math.floor(
                                (timeDifference % (1000 * 60 * 60)) /
                                  (1000 * 60)
                              );
                              let seconds = Math.floor(
                                (timeDifference % (1000 * 60)) / 1000
                              );

                              // Format hours, minutes, and seconds as H:M:S
                              let formattedTime = `${hours
                                .toString()
                                .padStart(2, "0")}:${minutes
                                .toString()
                                .padStart(2, "0")}:${seconds
                                .toString()
                                .padStart(2, "0")}`;

                              // Return the formatted countdown
                              return `${days} days ${formattedTime}`;
                            }

                            // Print next Pluto activation
                            if (plutoActivations.nextActivation) {
                              let timeRemaining =
                                plutoActivations.nextActivation.time;
                              outputElement.innerHTML += `Time until next activation: ${calculatePlutoCountdown(
                                timeRemaining
                              )}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                plutoActivations.nextActivation.gate
                              } ${
                                plutoActivations.nextActivation.line
                              } at ${plutoActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            outputElement.innerHTML += "<br>";
                            // Print current Node activation
                            if (nodeActivations.currentActivation) {
                              outputElement.innerHTML += `Current NORTH NODE activation: ${
                                nodeActivations.currentActivation.gate
                              } ${
                                nodeActivations.currentActivation.line
                              } at ${nodeActivations.currentActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }

                            // Function to calculate the time remaining until the next Node activation
                            function calculateNodeCountdown(
                              nextActivationTime
                            ) {
                              // Get the current time
                              let now = new Date();

                              // Calculate the time difference between now and the next activation time
                              let timeDifference = nextActivationTime - now;

                              // Convert milliseconds to days, hours, minutes, and seconds
                              let days = Math.floor(
                                timeDifference / (1000 * 60 * 60 * 24)
                              );
                              let hours = Math.floor(
                                (timeDifference % (1000 * 60 * 60 * 24)) /
                                  (1000 * 60 * 60)
                              );
                              let minutes = Math.floor(
                                (timeDifference % (1000 * 60 * 60)) /
                                  (1000 * 60)
                              );
                              let seconds = Math.floor(
                                (timeDifference % (1000 * 60)) / 1000
                              );

                              // Format hours, minutes, and seconds as H:M:S
                              let formattedTime = `${hours
                                .toString()
                                .padStart(2, "0")}:${minutes
                                .toString()
                                .padStart(2, "0")}:${seconds
                                .toString()
                                .padStart(2, "0")}`;

                              // Return the formatted countdown
                              return `${days} days ${formattedTime}`;
                            }

                            // Print next Node activation
                            if (nodeActivations.nextActivation) {
                              let timeRemaining =
                                nodeActivations.nextActivation.time;
                              outputElement.innerHTML += `Time until next activation: ${calculateNodeCountdown(
                                timeRemaining
                              )}<br>`;
                              outputElement.innerHTML += `Next activation: ${
                                nodeActivations.nextActivation.gate
                              } ${
                                nodeActivations.nextActivation.line
                              } at ${nodeActivations.nextActivation.time.toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                }
                              )}<br>`;
                            }
                            outputElement.innerHTML += "<br>";
                          }catch (error) {
                            console.error("Error parsing JSON:", error);
                          }

                            }
                          );
                        }
                
                      );
                    }
                  );
                });
              });
            });
          });
        });
      });
    });
  });
}
setInterval(updateCountdown, 1000);
