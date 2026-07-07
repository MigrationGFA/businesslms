# GA4 Tracking Implemented

I have successfully rolled out the GA4 funnel tracking across the application!

### What Was Done
1. **Global Configuration & Pageviews**: 
   - Moved the Measurement ID to `.env` as `VITE_GA_MEASUREMENT_ID`.
   - Updated `src/App.tsx` to automatically track pageviews whenever the user navigates (since it's a Single Page Application).
2. **Form Interaction Tracking**: 
   - The **Application Modal**, **Footer Form**, and **Brochure Modal** now track exactly when a user clicks into a field (`application_form_field_focused`) and when they finish filling it out (`application_form_field_filled`).
   - We track form submission attempts, successful submissions, and errors.
3. **Source Parameter**: 
   - I added a `source` parameter so you know *where* the user clicked from (e.g., `"hero"`, `"navbar"`, `"tuition"`, or `"about"`), and whether they filled out the `"modal"` or `"footer"` form.

---

### How to Distinguish Between Project 1 and Project 2 (Beta) in GA4

> [!IMPORTANT]
> Because you are using the exact same Tracking ID (`G-0HQSHW8SP9`) for both projects, I added a line of code that sets a global parameter for this version: **`project_version: "beta"`**. 
> This is sent automatically with every single GA4 event.

To use this data in your Google Analytics dashboard, you need to tell GA4 to look for it:

1. Open your **Google Analytics** dashboard.
2. Go to **Admin** (the gear icon at the bottom left).
3. Under the *Data display* column, click on **Custom definitions**.
4. Click **Create custom dimension**.
5. Fill it out exactly like this:
   - **Dimension name:** `Project Version`
   - **Scope:** `Event`
   - **Event parameter:** `project_version`
6. Click **Save**.

Once this is created, you can go into any of your GA4 Reports or Funnel Explorations and add a **Filter**: `Project Version` exactly matches `beta`. This will isolate all the data coming specifically from this new project!
