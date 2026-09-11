# Your Project's Title...
Your project's description...

## Environments
- Preview: https://main--{repo}--{owner}.aem.page/
- Live: https://main--{repo}--{owner}.aem.live/

## Documentation

Before using the aem-boilerplate, we recommend you to go through the documentation on [www.aem.live](https://www.aem.live/docs/), more specifically:
1. [AEM Authoring](https://www.aem.live/docs/aem-authoring)
2. [Universal Editor Tutorial](https://www.aem.live/developer/ue-tutorial)
3. [Component Model Definitions](https://www.aem.live/developer/component-model-definitions)
4. [Authoring Path Mapping](https://www.aem.live/developer/authoring-path-mapping)

## Prerequisites

- nodejs 20 or newer
- AEM Cloud Service release 2026.4 or newer

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```


# WKND Adventures - Destinations Experience

## Overview

This capstone project demonstrates the implementation of a one-page travel destination experience using **Adobe Experience Manager (AEM) Universal Editor** and **Edge Delivery Services (EDS)**.

The project focuses on:

- Universal Editor authoring
- Content modeling
- Definitions, Models, and Filters
- Reusable EDS blocks
- Responsive design
- Accessibility
- Preview and Publish workflow

Page URL:

```text
/destinations
```

The page contains only static content authored through Universal Editor and follows the capstone requirements.

---

# Project Setup

Navigate to the GitHub page of the boilerplate appropriate for your project
For most projects: https://github.com/adobe-rnd/aem-boilerplate-xwalk

Click on Use this template and select Create a new repository.
You need to be signed in to GitHub to see this option.

By default, the repository will be assigned to you. Provide a repository name and description and click Create repository.

In your new GitHub project, click the fstab.yaml file to open it and then the Edit this file icon to edit it.

Edit the fstab.yaml file to update the mount point of your project. Replace the default Google Docs URL with the URL of your AEM as a Cloud Service authoring instance and then click Commit changes….

Add a commit message as desired and then click Commit changes, committing them directly to the main branch.

Add a commit message as desired and then click Commit changes, committing them directly to the main branch.

The AEM Code Sync bot listens for changes to your code and updates the code bus in Edge Delivery Services whenever changes occur. The bot also set up the org and site in the Edge Delivery Configuration Service.

In a new tab in the same browser, navigate to https://github.com/apps/aem-code-sync and click Configure.

Click Configure for the org where you created your new repository in the previous step.

On the AEM Code Sync GitHub page under Repository access, select Only select repositories, select the repository that you created in the previous step, and then click Save.

Follow the steps of the AEM Configuration Setup

Step 1: Code - Click Next
Step 2: Content - Content Source type is already preselected to Other (bring your own markup) and the value for Content Source URL is read from fstab.yaml. Click Next.
Step 3: Users - Add the user(s) that will have admin rights to manage this site config. Click Next.
Step 4: Finish - Review the summary and click Save.
Your code is now available at https://main--<site>--<org>.aem.page/ e.g. https://main--<site>--<org>.aem.page/scripts/aem.js


Back


Set Up AEM Sites as a Content Source
This tutorial will get you up-and-running with a new Adobe Experience Manager (AEM) project, authored in Universal Editor and published to Edge Delivery.

In about thirty minutes, you will have created your own site and be able to create, preview, and publish your own content, styling, and add new blocks. Alternatively, you can jump right in using our pre‑built tutorial environment - fully configured and ready to go. Fill out the form and get started in seconds.

If you are looking for other site creation possibilities, you may want to check out the following options.

If you are looking for a headless solution using the Universal Editor, check out the SecurBank sample app.
If you are looking for an Adobe Commerce Storefront and you don’t have access to AEM as a Cloud Service, use the Adobe Commerce Site Creator instead.
Prerequisites
To be successful using this tutorial, you must fulfil the prerequisites.

You have a GitHub account, and understand Git basics.
You have access to an AEM as a Cloud Service environment.
You understand the basics of HTML, CSS, and JavaScript.
You have Node/npm installed for local development.
You have installed the AEM Sidekick in your browser.
Use a project boilerplate to create your code repository
The fastest and easiest way to get started following AEM best practices is to create your repository using the boilerplate GitHub repository as a template.

Navigate to the GitHub page of the boilerplate appropriate for your project.
For most projects: https://github.com/adobe-rnd/aem-boilerplate-xwalk
For projects that integrate with Adobe Commerce: https://github.com/adobe-rnd/aem-boilerplate-xcom
Click on Use this template and select Create a new repository.
You need to be signed in to GitHub to see this option.

By default, the repository will be assigned to you. Provide a repository name and description and click Create repository.
Connect your code to your content
Now that you have your GitHub project, you need to link the repository to your AEM authoring instance.

In your new GitHub project, click the fstab.yaml file to open it and then the Edit this file icon to edit it.
Edit the fstab.yaml file to update the mount point of your project. Replace the default Google Docs URL with the URL of your AEM as a Cloud Service authoring instance and then click Commit changes….
https://<aem-author>/bin/franklin.delivery/<owner>/<repository>/main
Changing the mount point tells Edge Delivery Services where to find the content of the site.
Edge Delivery Services will always reference the fstab.yaml from your main branch.
Add a commit message as desired and then click Commit changes, committing them directly to the main branch.

IMPORTANT:

You must update the fstab.yaml before running the AEM Code Sync bot in the next step.
Once AEM Code Sync bot has created the configuration in the config service, the fstab.yaml is no longer needed and can be deleted.
If you need to update the Content Source URL at a later point in time you can use https://tools.aem.live/tools/site-admin/index.html
Connect AEM Code Sync bot
The AEM Code Sync bot listens for changes to your code and updates the code bus in Edge Delivery Services whenever changes occur. The bot also set up the org and site in the Edge Delivery Configuration Service.

In a new tab in the same browser, navigate to https://github.com/apps/aem-code-sync and click Configure.



Click Configure for the org where you created your new repository in the previous step.



On the AEM Code Sync GitHub page under Repository access, select Only select repositories, select the repository that you created in the previous step, and then click Save.

Follow the steps of the AEM Configuration Setu

Step 1: Code - Click Next
Step 2: Content - Content Source type is already preselected to Other (bring your own markup) and the value for Content Source URL is read from fstab.yaml. Click Next.
Step 3: Users - Add the user(s) that will have admin rights to manage this site config. Click Next.
Step 4: Finish - Review the summary and click Save.
Your code is now available at https://main--<site>--<org>.aem.page/ e.g. https://main--<site>--<org>.aem.page/scripts/aem.js

Create an AEM site

With your GitHub project set up and linked to your AEM instance, you are ready to create a new AEM site using Edge Delivery Services.

Download the latest AEM authoring with Edge Delivery Services site template from GitHub appropriate to your project.

For most projects: https://github.com/adobe-rnd/aem-boilerplate-xwalk/releases
For projects that integrate with Adobe Commerce: https://github.com/adobe-rnd/aem-boilerplate-xcom/releases

Sign in to your AEM as a Cloud Service authoring instance and navigate to the Sites console and click Create → Site from template.

On the Select a site template tab of the create site wizard, click the Import button to import a new template.

Upload the AEM authoring with Edge Delivery Services site template that you downloaded from GitHub.

The template must only be uploaded once. Once uploaded, it can be reused to create additional sites.

Once the template is imported, it appears in the wizard. Click to select it and then click Next.

Provide the following fields and tap or click Create.

Site title - Add a descriptive title for the site.
Site name - Set a name for the site.
Project URL - Provide a URL with the following structure https://main--<site>--<org>.aem.page

On the sites console, navigate to the index.html of the newly created site and click Edit in the toolbar.

## Prerequisites

Install the following:

- Node.js (LTS Version)
- npm
- Git
- Visual Studio Code
- AEM Cloud Service Access
- Universal Editor Access

---

## Clone Repository

```bash
npm install -g @adobe/aem-cli
git clone https://github.com/<owner>/<repo>
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Local Development

```bash
npm start
```

---

## Verify Local Environment

Open:

```text
http://localhost:3000
```

Confirm the site loads successfully.

---

# Environment URLs

## Author

```text
https://author-p99952-e1559416.adobeaemcloud.com/ui#/@ags1152/aem/universal-editor/canvas/author-p99952-e1559416.adobeaemcloud.com/content/inf24323-ue-capstone/destinations.html
```

## Preview

```text
https://main--inf24323-ue-capstone--sreelekha-24323.aem.page/destinations
```

## Publish

```text
https://main--inf24323-ue-capstone--sreelekha-24323.aem.live/destinations
```

---

# Repository Structure

```text
project-root
│
├── blocks
│   ├── hero
│   │   ├── hero.js
│   │   └── hero.css
│   │
│   ├── columns
│   │   ├── columns.js
│   │   └── columns.css
│   │
│   ├── cards
│   │   ├── cards.js
│   │   └── cards.css
│   │
│   └── footer
│       ├── footer.js
│       └── footer.css
│
├── scripts
│   ├── scripts.js
│   └── aem.js
│
├── styles
│   ├── styles.css
│   └── fonts.css
│
├── icons
│
├── component-models
│
├── component-definitions
│
└── README.md
```

---

# Page Information Architecture

## Route

```text
/destinations
```

## Page Flow

```text
Header

Navigation Menu

Hero Banner

Explore By Region

Featured Destination Story
(W Circuit, Torres del Paine)

Americas Destination Cards

Europe Destination Cards

Permits & Logistics

Regional Editors

Destination Briefing

Planning By Season

Footer
```

---

# Block Inventory

## Hero Banner

### Purpose

Provides the primary landing experience and introduces the destinations page.

### Authorable Fields

- Image
- Alt Text
- Eyebrow
- Title
- Description
- Primary CTA Label
- Primary CTA URL
- Secondary CTA Label
- Secondary CTA URL

### Features

- Full-width hero image
- Overlay content
- Responsive layout
- Accessible alt text
- Authorable CTAs

---

## Columns Block

### Purpose

Reusable content section used across multiple areas of the page.

### Authorable Components

- Image
- Title
- Text
- Button

### Variants Implemented

#### Intro

Used for:

```text
Explore By Region
```

#### Featured

Used for:

```text
W Circuit, Torres del Paine
```

#### Editorial

Used for:

```text
Permits & Logistics
```

#### Editors

Used for:

Regional Editors

#### CTA Banner

Used for:

Every Destination Starts With A Good Briefing

## Cards Block

### Purpose

Displays destination cards in responsive grids.

### Authorable Fields

- Image
- Eyebrow
- Title
- Description
- CTA Label
- CTA URL

### Variants

#### Default

Used for:

Americas
Europe

#### Seasonal

Used for:

Planning By Season

#### Featured

Optional highlighted presentation.


## Footer

### Purpose

Provides navigation and editorial information.

### Content Areas

#### Brand

WKND Adventures

Bold Stories. Real Life. Wild Places.
Published weekly from somewhere with no Wi‑Fi.


#### Explore

Adventures
Expeditions
Field Notes
Destinations
Basecamp

#### Recent Stories

W Circuit, Patagonia
Lofoten Islands
High Alps by Bike
Yosemite Climbing
Mountain Photography

#### Info

Gear
Sustainability
About
Community
FAQ

---

# Universal Editor Configuration

## Definitions

Created component definitions for:

Hero
Columns
Cards
Card
Footer

## Models

Created authoring models for:

hero
columns
cards
card
footer

---

## Filters

### Columns

columns
 └── column
      ├── image
      ├── title
      ├── text
      └── button

### Cards

cards
 └── card

Filters restrict authors to approved content structures and prevent invalid component insertion.

---

# Accessibility

The page follows accessibility best practices:

- One logical H1
- Semantic HTML
- Meaningful image alt text
- Keyboard navigation support
- Visible focus indicators
- Sufficient color contrast
- Mobile accessibility support

---

# Responsive Design

## Desktop

1200px+

Features:

- Multi-column layouts
- Three-column card grids
- Full-width hero

---

## Tablet

768px – 1199px

Features:

- Reduced spacing
- Two-column grids

---

## Mobile

Below 768px

Features:

- Single-column layouts
- Stacked content
- Full-width buttons
- Mobile-friendly navigation

---

# Performance Considerations

- Optimized images
- No external libraries
- Static content architecture
- Lightweight block implementations
- Minimal JavaScript

---

# Testing Checklist

| Requirement | Status |
|------------|---------|
| Local Development | ✅ |
| Preview Environment | ✅ |
| Publish Environment | ✅ |
| Hero Editable | ✅ |
| Columns Editable | ✅ |
| Cards Editable | ✅ |
| Footer Editable | ✅ |
| Responsive Design | ✅ |
| Accessibility Validation | ✅ |
| Image Optimization | ✅ |
| No Console Errors | ✅ |

---

# Known Limitations

No Search

No Personalization

No Dynamic Data

No API Integrations

No Commerce Functionality

No Forms


These limitations are intentional and align with the capstone requirements.

---

# Submission Checklist

## Source Code

- [GitHub Repository URL](https://github.com/sreelekha-24323/inf24323-ue-capstone)
- [Branch Name] destinations
- Commit Reference: b9e0efb3578c3a77c56876adb5dc4623c0c525d5

---

## Environment URLs

- [Author URL](https://author-p99952-e1559416.adobeaemcloud.com/ui#/@ags1152/aem/universal-editor/canvas/author-p99952-e1559416.adobeaemcloud.com/content/inf24323-ue-capstone/destinations.html)
- [Preview URL](https://main--inf24323-ue-capstone--sreelekha-24323.aem.page/destinations)
- [Publish URL](https://main--inf24323-ue-capstone--sreelekha-24323.aem.live/destinations)

---

## Universal Editor Configuration

- Definitions
- Models
- Filters

# Lessons Learned

During this capstone, the following Universal Editor concepts were implemented and validated:

- Component Definitions
- Authoring Models
- Filters
- Content Instrumentation
- Variants
- Reusable Block Architecture
- Responsive Design
- Preview/Publish Workflow

---

# Conclusion

The `/destinations` page demonstrates a complete Universal Editor authoring experience using Edge Delivery Services.

The implementation provides:

- Reusable EDS blocks
- Universal Editor content authoring
- Responsive layouts
- Accessible markup
- Preview and publish workflow
- Maintainable component architecture

This project satisfies all major capstone requirements for the Universal Editor Developer Training.