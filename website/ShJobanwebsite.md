📘 Sheikh Mohamad Joban Website — Product Requirements Document (PRD)

Version: v1.0
Purpose: Initial launch of personal website & book announcement platform
Target Tech: HTML, CSS, JS (React), React Bits Components, Google Fonts

1. Project Overview

The purpose of this website is to introduce Sheikh Mohamad Joban, a respected Muslim scholar and preacher in Washington State, and to promote the launch of his newly translated English book, based on Kiprah Dakwah.

This website should serve three primary goals:

Highlight the new book with a prominent hero section + CTA button linking to a Google Form for purchase.

Present Sheikh Joban, including biography, community work, and achievements.

Provide easy access to:

His YouTube lectures

Contact page for inquiries, invitations, and book orders

The site must feel professional, spiritual, elegant, and follow a modern UI/UX standard with subtle animations and a warm, scholarly color scheme.

2. Color Palette (Inspired by AbiBook.jpg)

Extracted from the book cover theme:

Name	Hex Code	Usage
Deep Navy Blue	#0F1A2A	Primary background, header, footer
Gold Accent	#D4AF37	Buttons, highlights, borders
Cream White	#F3EDE1	Background for sections, cards
Soft Tan	#C2A382	Secondary text, accents
Charcoal Gray	#2D2D2D	Body text

This will create a warm scholarly aesthetic that reflects the theme of Islamic tradition and professionalism.

3. Typography (Google Fonts)

Use the following fonts:

Playfair Display — Headlines (serif, elegant)

Inter — Body text (clean, professional)

Scheherazade New — For Arabic quotes or calligraphic accents

Example CSS:

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&family=Scheherazade+New:wght@400;700&display=swap');

:root {
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --font-arabic: 'Scheherazade New', serif;
}

4. Website Structure
Pages

Home Page — Hero section featuring the book

About Page — Bio, education, roles, achievements

Book Page — Detailed book description + CTA to Google Form

Videos Page — Embedded YouTube lectures

Contact Page — Form to reach Sheikh Mohamad Joban

Footer — Social links, copyright, navigation

5. High-Level Page Requirements
5.1 Home Page

Sections:

Hero Section (Main Book Highlight)

Full-width background inspired by book color palette

Book cover on left (small tilt animation)

Title & brief description on right

CTA Button: “Order the Book” → Google Form

Subtle fade-in + scroll reveal animation

About Sheikh Joban (Preview)

Short bio

"Learn More" button → About page

Use a portrait photo with soft drop shadow & hover lift

Featured Videos

Showcase 3 YouTube videos

On hover → expand slightly with shadow

Button: “See All Videos” → Videos Page

Community Impact Stats (Optional)

Years of service

Thousands of lectures

Number of conversions guided

Simple count-up animation

5.2 About Page

Professional biography

Education (Jakarta & Al-Azhar University)

Current roles (Imam Fatwa Committee, DOC Chaplain, Ar-Rahman Tours guide)

Timeline layout (scroll reveal animation)

Use React Bits for card animations and interactive elements

5.3 Book Page

Goal: Focus entirely on promoting the English version of Kiprah Dakwah.

Sections:

Book Cover + Tilt effect

Description (English translation story, purpose, audience)

Testimonials (optional)

CTA Button (Large Gold Button):
→ “Order the Book” (Google Form)

5.4 Videos Page

Grid layout of embedded YouTube videos

Filters by category (Khutbahs, Islamic Guidance, Youth Talks, Marriage Talks, etc.)

Smooth hover animations

Infinite scroll or pagination

5.5 Contact Page

Form fields:

Full Name

Email

Phone (Optional)

Message

Contact Purpose dropdown:

Event invitation

Marriage Nikah

Shahadah request

Religious guidance

Book order

Other

Form should:

Include front-end validation

Animate on submit

Send data to email or backend endpoint later

6. UI/UX Specifications
Animations (React Bits Components)

Use React Bits components such as:

TiltCard for book cover

FadeInSection for scroll-based reveal

HoverScale for buttons & images

SmoothSlide for section transitions

Animation Guidelines

Keep animations subtle and tasteful

Avoid distracting or over-dramatic motions

Prioritize spiritual + elegant aesthetic

7. Component Breakdown
Global Components

Navbar

Footer

Button (gold variant & transparent variant)

SectionHeader component

ScrollReveal wrapper

TiltImage component

Home Page Components

HeroBookCard

StatsCounter

VideoShowcase

Other Components

ContactForm

VideoGrid

BookHighlight

AboutTimeline

8. Technical Requirements
8.1 Tech Stack

React + HTML + CSS + JS

React Bits components for animations

Google Fonts for typography

No backend required for Phase 1

Google Form for book orders

Mobile-first responsive design

8.2 CSS Architecture

Use a component-based styling approach. Options:

CSS Modules

Tailwind (optional if approved)

Dedicated styles/ folder with SCSS

Ensure:

Colors declared in :root

Breakpoints for mobile, tablet, desktop

Reusable spacing system

9. Deliverables

Cursor should generate:

Full folder structure for project

Homepage with animations and book CTA

About page

Book page

Videos page

Contact page

Responsive navigation bar

Footer with gold-accent hover effects

Smooth scrolling & section reveals

Global styles with palette & typography

React Bits integrated animations

10. Future Enhancements (Not for Phase 1)

Blog section

Events calendar

Donation integration

Audio library

Transcript libraries

Newsletter automation

API-based contact submission

11. Acceptance Criteria

Website loads cleanly on mobile + desktop

Hero section clearly promotes the book

CTA button links to Google Form

Color palette matches book theme

All pages animate smoothly

All pages pass accessibility basics

Contact form functional (front-end)

Cursor generates valid, clean, organized code