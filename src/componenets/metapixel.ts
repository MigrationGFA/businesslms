declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const trackMetaLead = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      project_version: "production",
    });
  }
};
