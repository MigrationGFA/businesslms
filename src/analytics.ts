import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
} else {
  console.warn("GA Measurement ID not found in environment variables.");
}

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  ReactGA.event(eventName, params);
};

export const trackFieldFocus = (source: "modal" | "footer" | "brochure", fieldName: string) => {
  // Using a simpler event name approach so it appears cleanly in GA4 without custom dimensions
  ReactGA.event(`field_focused_${fieldName}`, { source });
};

export const trackFieldFilled = (source: "modal" | "footer" | "brochure", fieldName: string, value: string) => {
  if (value.trim() !== "") {
    ReactGA.event(`field_filled_${fieldName}`, { source });
  }
};