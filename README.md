# CampusOrbit

CampusOrbit is a web-based event management and campus engagement platform designed to streamline how students and organizers create, publish, and discover campus activities.

---

## Overview

Built with a focus on clean architecture and responsive design, CampusOrbit provides an intuitive client-side interface for organizing campus events. The codebase separates structure, styling, and interactivity into modular directories for maintainability and scalability.

---

## Key Features

* **Event Creation Workflow:** Enables organizers to configure and publish new campus events dynamically.
* **Responsive Layout:** Structured HTML5 and modular CSS3 ensure consistent rendering across desktop and mobile viewports.
* **Client-Side Interactivity:** Powered by vanilla JavaScript for lightweight, dependency-free DOM manipulation.

---
## Features Overview
* Role-Based Access: Super Admin, College Admin, Club Moderator, Student.
* Event Lifecycle: Create, publish, and manage events (Hackathons, Fests, Workshops).
* Smart Registration: Auto-waitlist system with automatic promotion on cancellation.
* QR Check-in: Unique QR code generation per student and scanner for organizers.
* Auto-Certificates: PDF certificate generation upon attendance.
* Team Registration: Hackathon team formation with invite codes.

## Repository Structure

```text
CampusOrbit/
├── index.html         # Primary application entry point
├── style/             # Modular stylesheets (layout, components, footer)
├── script/            # Client-side logic and event creation modules
└── process/           # Project documentation and workflow assets
