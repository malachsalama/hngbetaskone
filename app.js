const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    slack_name: req.query.slack_name,
    current_day: dayOfWeek[new Date().getDay()],
    utc_time: new Date()
      .toISOString()
      .replace(/\d{2}.\d{3,}(?=Z$)/, (num) =>
        Number(num).toFixed(0).padStart(2, 0)
      ),
    track: req.query.track,
    github_file_url:
      "https://github.com/malachsalama/hngbetaskone/blob/main/app.js",
    github_repo_url: "https://github.com/malachsalama/hngbetaskone",
    status_code: req.statusCode,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
