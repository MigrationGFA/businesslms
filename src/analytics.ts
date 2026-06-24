import ReactGA from "react-ga4";

ReactGA.initialize("G-0HQSHW8SP9");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});