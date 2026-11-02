# FALIZ – Multi-Branch Gym Management Platform

FALIZ is a gym management platform designed to connect gym members, personal trainers, and branch administrators within a unified ecosystem.

The platform aims to simplify gym operations, improve member engagement, and provide data-driven insights across multiple gym branches.

Rather than focusing solely on membership management, FALIZ brings together workout tracking, class scheduling, real-time communication, community engagement, and multi-branch business analytics.

> **Project Status:** Active Development  
> **Current Progress:** Member-facing UI prototype and mock data implemented. Backend integration and additional modules are part of the ongoing development roadmap.

---

## Overview

FALIZ is designed around three primary user roles:

| Role | Description |
|---|---|
| Member | Manages memberships, books classes, tracks workouts, and interacts with the gym community. |
| Personal Trainer (PT) | Manages classes, monitors enrolled members, and reviews workout summaries. |
| Branch Manager / Administrator | Oversees branch operations and monitors business performance across multiple locations. |

The platform follows a role-based approach to ensure that each user interacts with the features and information relevant to their responsibilities.

---

## Core Features

### 1. Member Experience

#### Account & Membership Management

- Register, log in, and manage personal profiles.
- Maintain personal information, contact details, and fitness goals.
- View membership status and expiration dates.
- Renew or temporarily suspend membership packages.
- Role-based access for members, trainers, and branch managers.

#### QR Code Check-in

- Generate a personal QR code for gym access.
- Support fast check-in at gym branches.
- Provide a convenient entry experience for members.

#### Class Booking

- Browse available group classes and schedules.
- Book available class slots online.
- Cancel bookings according to predefined cancellation policies.
- Receive notifications before scheduled classes.

#### Workout Tracking

Members can record their training activities, including:

- Exercises performed.
- Number of sets and repetitions.
- Weights used for each exercise.
- Workout history and training records.

#### Training Progress Analytics

Provide visual insights into personal training performance:

- Workout frequency and training volume.
- Weekly and monthly progress trends.
- Total training hours.
- Workout streaks.
- Personal achievements and milestones.

#### Gym Discovery & Location Map

An interactive map helps members discover and compare gym branches.

Planned capabilities include:

- Find nearby gyms based on home or workplace location.
- Compare branch locations.
- View real-time occupancy at each branch.
- Identify peak and off-peak hours.

#### Notifications

Keep members informed through relevant notifications:

- Membership packages approaching expiration.
- Upcoming group classes.
- Less crowded gym time slots.

#### Workout Recommendations

- Suggest similar exercises based on workout history.
- Provide personalized workout schedule recommendations based on fitness goals and previous training activities.

#### Community & Social Features

- Activity feed from trainers and followed users.
- Follow other members and trainers.
- Share workout stories.
- Interact with the gym community.

#### Group Chat

Support group communication between:

- Members and their followers.
- Members participating in the same class.
- Members and trainers.
- Members within a gym branch.

---

### 2. Personal Trainer Experience

#### Class Management

- Create and manage group classes.
- Update class information and schedules.
- Manage classes within assigned gym branches.

#### Member Management

- View members registered for assigned classes.
- Monitor attendance and participation status.
- Review individual member workout summaries.

---

### 3. Branch Management & Administration

#### Multi-Branch Dashboard

Provide a centralized view of gym chain performance.

Key analytics include:

- Occupancy comparison across branches.
- Revenue comparison between locations.
- Member retention analysis.

The dashboard is intended to help administrators monitor operational performance and make data-driven business decisions.

---

## Technology Stack

FALIZ is designed with a modern fullstack architecture, using a TypeScript-based ecosystem across frontend and backend development.

### Frontend

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework and application foundation |
| TypeScript | Static typing and maintainable development |
| Tailwind CSS v4 | Utility-first styling |
| Shadcn/UI | Reusable UI components |
| TanStack Query | Server-state management and data fetching |
| Zustand | Client-side state management |
| React Hook Form | Form management |
| Zod | Schema validation |
| Recharts | Data visualization |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Fastify | Backend API framework |
| PostgreSQL | Relational database |
| Redis | Caching and supporting real-time application workflows |
| Socket.IO | Real-time communication |
| JWT | Authentication |
| Refresh Token | Session renewal and authentication lifecycle |

### Infrastructure & Development

| Technology | Purpose |
|---|---|
| Docker | Containerization and development environment |

---

## High-Level Architecture

FALIZ is planned as a fullstack application with clear separation between frontend, backend services, and data infrastructure.

```text
                  FALIZ PLATFORM
                        |
          +-------------+-------------+
          |                           |
          v                           v
    MEMBER APPLICATION          ADMIN APPLICATION
          |                           |
          +-------------+-------------+
                        |
                        v
                 NEXT.JS FRONTEND
                        |
          +-------------+-------------+
          |             |             |
          v             v             v
       REST API      Socket.IO     MAP SERVICES
          |             |
          v             v
       FASTIFY      REAL-TIME EVENTS
          |
    +-----+----------------+
    |                      |
    v                      v
POSTGRESQL               REDIS
```

This diagram describes the intended architecture and integration direction, rather than a claim that all backend services are already implemented.

---

## Key Product Workflows

### Member Workflow

```text
Register / Login
       |
       v
Manage Personal Profile
       |
       v
View Membership
       |
       v
Discover Gym Branches
       |
       v
QR Check-in / Book Classes
       |
       v
Record Workouts
       |
       v
Track Training Progress
       |
       v
Engage with Gym Community
```

### Personal Trainer Workflow

```text
Manage Classes
      |
      v
View Registered Members
      |
      v
Monitor Class Participation
      |
      v
Review Member Workout Summaries
```

### Branch Management Workflow

```text
Centralized Dashboard
         |
    +----+----+
    |         |
    v         v
Occupancy  Revenue
Analysis   Analysis
    |         |
    +----+----+
         |
         v
 Member Retention
     Analysis
```

---

## Development Roadmap

The project is being developed incrementally, with the goal of building a complete gym management ecosystem.

### Phase 1 – Member Experience

- [x] Member-facing UI prototype
- [x] Mock data for member-facing interfaces
- [ ] Authentication and authorization
- [ ] Personal profile management
- [ ] Membership management
- [ ] QR code check-in
- [ ] Class booking and cancellation
- [ ] Workout logging
- [ ] Training progress analytics

### Phase 2 – Trainer & Branch Management

- [ ] Trainer class management
- [ ] Member management
- [ ] Workout summary for trainers
- [ ] Multi-branch dashboard
- [ ] Occupancy analytics
- [ ] Revenue analytics
- [ ] Member retention analytics

### Phase 3 – Real-time & Community

- [ ] Real-time branch occupancy
- [ ] Real-time notifications
- [ ] Group chat
- [ ] Social feed
- [ ] Workout stories
- [ ] Class-related communication

### Phase 4 – Advanced Features

- [ ] Exercise recommendations
- [ ] Personalized workout planning
- [ ] Gym discovery and location-based features
- [ ] Peak-hour analysis

### Phase 5 – Infrastructure & Deployment

- [ ] Backend API integration
- [ ] PostgreSQL data persistence
- [ ] Redis integration
- [ ] Socket.IO integration
- [ ] Docker-based environment
- [ ] Testing and deployment

---

## Product Goals

FALIZ aims to provide more than a traditional gym management system.

Its long-term direction focuses on three interconnected areas:

**Member Engagement**

A personalized experience that helps members stay consistent with their fitness goals through workout tracking, class booking, recommendations, and community interaction.

**Operational Efficiency**

A unified platform that simplifies membership management, class scheduling, trainer workflows, and branch operations.

**Data-Driven Management**

Centralized analytics that help gym administrators understand occupancy, revenue, and member retention across multiple branches.

---

## Project Status

FALIZ is currently under active development.

The member-facing UI and mock data are the current implementation focus. Backend services, real-time integrations, trainer workflows, administrative dashboards, and deployment remain part of the development
