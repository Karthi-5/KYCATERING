# K.Y Catering Service - High-Level Project Summary

## Overview

K.Y Catering Service is a modern web application for a traditional South Indian catering business based in Chennai. The application serves as a digital presence for the catering company, showcasing their services (contract catering and labor supply), menu offerings, and providing an easy way for customers to inquire about catering services. The design emphasizes cultural authenticity with banana leaf motifs and South Indian visual aesthetics while maintaining a premium, appetizing presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18+** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot-module replacement
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management and data fetching

**UI Framework:**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component structure follows the "New York" variant of shadcn/ui

**Design System:**
- Custom color palette centered around primary green theme (HSL: 142 76% 28%) representing traditional South Indian aesthetics
- Typography hierarchy using Poppins (headings), Inter (body), and Noto Sans Tamil (cultural text)
- Responsive design with mobile-first approach using Tailwind breakpoints
- Consistent spacing system based on Tailwind's spacing scale (4, 8, 12, 16, 20, 24)

**Key Architectural Decisions:**
- Single-page application (SPA) architecture for smooth user experience
- Component-based architecture with reusable UI primitives from shadcn/ui
- Form handling using React Hook Form with Zod for validation
- Toast notifications for user feedback
- Sheet component for mobile-friendly contact forms

### Backend Architecture

**Server Framework:**
- **Express.js** running on Node.js with ESM module system
- Separate development and production entry points (`index-dev.ts` and `index-prod.ts`)
- Custom middleware for request logging and JSON body parsing with raw body preservation

**Development vs Production:**
- Development mode uses Vite's middleware mode for hot-module replacement
- Production mode serves pre-built static assets from `dist/public`
- Environment-specific logging with timestamp formatting

**API Design:**
- RESTful API structure with `/api` prefix for all backend routes
- Storage abstraction layer with interface-based design (`IStorage`)
- Initial implementation uses in-memory storage (`MemStorage`) for rapid prototyping
- Designed to be easily swapped with database-backed storage

### Data Storage Solutions

**Database Technology:**
- **PostgreSQL** via Neon serverless database for production-ready data persistence
- **Drizzle ORM** for type-safe database operations and migrations
- Schema-first design with TypeScript types generated from database schema

**Current Schema:**
- User table with UUID primary keys, username, and password fields
- Designed for extensibility with future tables for catering inquiries, menu items, and bookings

**ORM Benefits:**
- Type-safe queries preventing runtime errors
- Automatic migration generation via `drizzle-kit`
- Integration with Zod for runtime validation through `drizzle-zod`

**Storage Abstraction:**
- Interface-based storage layer allows switching between in-memory and database implementations
- Facilitates testing and development without requiring database connection

### Authentication and Authorization

**Current Implementation:**
- Basic user schema in place with username/password fields
- Session management prepared through `connect-pg-simple` for PostgreSQL-backed sessions
- Foundation laid for future authentication implementation

**Future Authentication Strategy:**
- Session-based authentication using Express sessions
- Password hashing will be required before production deployment
- Admin panel access for managing catering inquiries and content

### Form Handling and Validation

**Contact Form Architecture:**
- Zod schemas for runtime validation of user inputs
- React Hook Form for performant form state management
- Fields include: name, phone, event type, guest count, event date, and message
- Client-side validation with user-friendly error messages

**Form UX Decisions:**
- Inline validation to provide immediate feedback
- Accessible form controls using Radix UI primitives
- Mobile-optimized with Sheet component for better small-screen experience

## External Dependencies

### Third-Party UI Libraries
- **Radix UI** - Unstyled, accessible component primitives for building the UI
- **shadcn/ui** - Pre-styled component collection built on Radix UI
- **Lucide React** - Icon library for consistent iconography
- **React Icons** - Additional icons (specifically SiWhatsapp for WhatsApp integration)

### Database and ORM
- **@neondatabase/serverless** - Neon's serverless PostgreSQL driver
- **Drizzle ORM** - Type-safe ORM for database operations
- **drizzle-kit** - CLI tool for managing migrations and database schema
- **drizzle-zod** - Integration between Drizzle schemas and Zod validation

### Styling and CSS
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Utility for creating variant-based component APIs
- **clsx** & **tailwind-merge** - Utilities for conditional class name composition

### Form Management
- **React Hook Form** - Performant form state management
- **@hookform/resolvers** - Validation resolver integration
- **Zod** - TypeScript-first schema validation

### State Management and Data Fetching
- **TanStack Query** - Server state management, caching, and synchronization
- Custom `queryClient` configuration with infinite stale time and disabled refetching

### Development Tools
- **Vite** - Fast build tool and development server
- **esbuild** - JavaScript bundler for production server build
- **tsx** - TypeScript execution for development server
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling
- **@replit/vite-plugin-dev-banner** - Development mode banner

### UI Enhancement Libraries
- **embla-carousel-react** - Carousel/slider component
- **cmdk** - Command menu component
- **date-fns** - Date utility library
- **vaul** - Drawer component library
- **react-day-picker** - Date picker component
- **recharts** - Charting library (included but may not be actively used)

### Session Management
- **connect-pg-simple** - PostgreSQL session store for Express sessions (prepared for future use)

### Key Integration Points
- **WhatsApp Business Integration** - Direct contact via WhatsApp link for instant communication
- **Phone Call Integration** - Click-to-call functionality for immediate customer contact
- **Google Fonts** - Web fonts loaded from Google Fonts CDN (Poppins, Inter, Noto Sans Tamil)

### Build and Deployment
- Production build uses Vite for client assets and esbuild for server bundle
- Static assets served from `dist/public` in production
- Environment variable `DATABASE_URL` required for database connectivity
- Environment variable `NODE_ENV` determines development vs production mode