const https = require("https");
const url =
  "http://api.weatherstack.com/current?access_key=fe7525cb58077d1151f33f61b2576dc5&query=32.1,31.2&units=m";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();