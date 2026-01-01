🚀 JobFlow AI – Analytics Dashboard

A job application tracking and analytics dashboard designed with a senior full-stack mindset, focusing on scalability, user preferences, and real product UX decisions.

✨ Overview

JobFlow AI helps users track job applications and gain insights through analytics.
The application goes beyond basic charts by introducing persisted user settings, zero-state onboarding, and exportable analytics data.

The goal of this project was not only to visualize data, but to design a realistic analytics product experience.

🧩 Key Features
📊 Analytics

Job status overview (Applied, Interview, Offer, Rejected)

Applications over time (trend analysis)

Conversion breakdown visualization

⏱ Date Filtering

Last 7 / Last 30 days filter

Filter logic abstracted into reusable hooks

Default range configurable via Settings

📁 CSV Export

Export analytics data with one click

Export stays in sync with selected date range

Reusable CSV utility

🧭 Zero-State Onboarding

First-time users see guidance instead of empty charts

Page-level UX decision (not component-level)

Clear call-to-action for adding first application

⚙️ Settings & Preferences

Default analytics date range

Toggle AI insights visibility

Auto-export CSV option

All preferences are persisted across sessions

☠️ Danger Zone

Clear all job applications

Reset all user settings

Explicit separation for destructive actions

🏗 Architecture

The project follows a feature-based architecture with clear separation of concerns.

src/
 ├─ components/
 │   └─ analytics/
 ├─ hooks/
 │   └─ analytics logic
 ├─ store/
 │   ├─ jobStore.ts
 │   └─ settingsStore.ts
 ├─ pages/
 │   ├─ AnalyticsPage.tsx
 │   └─ SettingsPage.tsx
 └─ utils/
     └─ exportToCSV.ts

🧠 Design Decisions
Why page-level zero-state?

Zero-state UX is a product decision, not a visualization concern.
Handling it at page level keeps components reusable and focused.

Why global settings store?

Analytics behavior depends on user preferences.
A global, persisted store ensures:

Consistency across pages

Preferences survive refresh

Easy future backend sync

Why reusable hooks?

All analytics calculations live in hooks, not UI components.
This keeps charts presentational and scalable.

🛠 Tech Stack

React + TypeScript

Zustand for global state management

Zustand Persist for localStorage sync

Recharts for data visualization

Tailwind CSS for UI styling

🔮 Future Improvements

Backend persistence & authentication

User-based analytics profiles

AI-powered job application insights

Multi-chart comparison views

PDF export for reports
