# UX/UI Designer Portfolio

## Overview

This is a React-based portfolio website for a UX/UI designer named Alex Chen. The project follows a minimal, clean design approach inspired by modern portfolio sites, with a focus on showcasing design work through project cards and personal introduction sections. The application is built using a full-stack TypeScript architecture with Vite for the frontend bundling and Express.js for the backend server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Component System**: Comprehensive shadcn/ui component library built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming and a sophisticated color system supporting both light and dark modes
- **Routing**: Client-side routing implemented using Wouter for lightweight navigation
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Design System**: Custom theme with Inter and Crimson Text fonts, following a minimal design philosophy with generous white space

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Development Setup**: Hot module replacement through Vite's development middleware integration
- **Database Layer**: Prepared for PostgreSQL integration using Drizzle ORM with schema definitions
- **Storage Interface**: Abstract storage layer with in-memory implementation for development and future database integration
- **API Structure**: RESTful API design with `/api` prefix routing

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Schema Management**: Database migrations handled through Drizzle Kit
- **Development Storage**: In-memory storage implementation for local development
- **Connection**: Neon Database serverless PostgreSQL for production

### Authentication and Authorization
- **User Schema**: Basic user model with username/password fields using UUIDs as primary keys
- **Session Management**: Configured for PostgreSQL-based session storage using connect-pg-simple
- **Security**: Prepared authentication infrastructure without current implementation

### Component Architecture
- **Design Pattern**: Component-based architecture with clear separation between UI components and page components
- **Component Library**: Extensive set of reusable UI components following consistent design patterns
- **Asset Management**: Organized asset structure with generated images stored in attached_assets directory
- **Form Handling**: React Hook Form integration with Zod schema validation

## External Dependencies

### UI and Design Libraries
- **Radix UI**: Complete set of accessible UI primitives for building the component system
- **Tailwind CSS**: Utility-first CSS framework with custom configuration and theming
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **Class Variance Authority**: Type-safe variant API for component styling

### Development and Build Tools
- **Vite**: Frontend build tool with React plugin and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

### Database and ORM
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle Kit**: Database migration and schema management tools

### State Management and API
- **TanStack Query**: Server state management and caching solution
- **Wouter**: Lightweight client-side routing library
- **React Hook Form**: Form handling with validation support

### Utility Libraries
- **clsx & tailwind-merge**: Conditional CSS class composition
- **date-fns**: Date manipulation and formatting utilities
- **nanoid**: Secure URL-friendly unique string generation
- **Zod**: Runtime type validation and schema definition