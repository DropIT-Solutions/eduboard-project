# 📚 EduBoard Project Guide

Welcome to the EduBoard project! This guide will help you understand our project structure and get started quickly.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/DropIT-Solutions/eduboard-project.git
cd eduboard-project

# Install dependencies
npm install

# Start development servers
npm run dev
```

**Access Points:**

- 🌐 Frontend: http://localhost:3000
- 🔧 Backend API: http://localhost:3001/api
- 📖 API Docs: http://localhost:3001/api/docs

## 📁 Project Structure

```
eduboard/
├── apps/                      # Application packages
│   ├── web/                   # Next.js Frontend Application
│   │   ├── public/           # Static files (images, fonts)
│   │   ├── src/
│   │   │   ├── app/          # Next.js 14 App Router pages
│   │   │   ├── components/   # React components
│   │   │   │   ├── ui/       # Basic UI components
│   │   │   │   ├── features/ # Feature-specific components
│   │   │   │   └── layouts/  # Layout components
│   │   │   ├── lib/          # Utility functions
│   │   │   ├── hooks/        # Custom React hooks
│   │   │   ├── services/     # API service functions
│   │   │   ├── providers/    # Context providers
│   │   │   └── types/        # TypeScript type definitions
│   │   └── .env.local        # Frontend environment variables
│   │
│   └── api/                   # NestJS Backend Application
│       ├── src/
│       │   ├── auth/         # Authentication module
│       │   ├── users/        # User management
│       │   ├── schools/      # School management
│       │   ├── tenants/      # Multi-tenancy logic
│       │   ├── common/       # Shared utilities
│       │   └── prisma/       # Database service
│       ├── prisma/
│       │   └── schema.prisma # Database schema
│       └── .env              # Backend environment variables
│
├── packages/                  # Shared packages
│   ├── ui/                   # Shared UI components
│   ├── eslint-config/        # Shared ESLint configuration
│   └── typescript-config/    # Shared TypeScript configuration
│
├── .github/workflows/        # GitHub Actions CI/CD
├── .husky/                   # Git hooks
└── turbo.json               # Turborepo configuration
```

## 🎨 Design System & Colors

### Primary Colors

- **Primary Blue**: `#102640` - Main brand color (headers, buttons)
- **Secondary Gold**: `#9A927A` - Accent color (highlights, secondary buttons)

### UI Colors

```css
/* Background Colors */
--background: #ffffff --foreground: #0a0a0a /* Neutral Colors */ --gray-50: #f9fafb
  --gray-100: #f3f4f6 --gray-500: #6b7280 --gray-900: #111827 /* Status Colors */ --success: #10b981
  --warning: #f59e0b --error: #ef4444 --info: #3b82f6;
```

## 💻 Frontend (Next.js)

### Key Technologies

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **UI Components**: Radix UI + Custom components
- **Forms**: React Hook Form + Zod validation
- **Authentication**: Azure AD B2C integration

### Important Files

- `apps/web/src/app/page.tsx` - Landing page
- `apps/web/src/app/layout.tsx` - Root layout
- `apps/web/src/lib/utils.ts` - Utility functions
- `apps/web/tailwind.config.js` - Tailwind configuration

### Creating a New Page

```tsx
// apps/web/src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
      {/* Your content here */}
    </div>
  );
}
```

## 🔧 Backend (NestJS)

### Key Technologies

- **Framework**: NestJS
- **Database**: SQL Server with Prisma ORM
- **Authentication**: JWT + Azure AD
- **API Documentation**: Swagger/OpenAPI

### Important Files

- `apps/api/src/main.ts` - Application entry point
- `apps/api/src/app.module.ts` - Root module
- `apps/api/prisma/schema.prisma` - Database schema

### Creating a New API Module

```bash
# Generate a new module
cd apps/api
nest g module courses
nest g controller courses
nest g service courses
```

## 🗄️ Database Schema

### Key Models

- **Tenant**: Multi-tenant schools/organizations
- **School**: Individual school information
- **User**: System users (teachers, students, parents)
- **UserSchool**: User-School relationships with roles

### User Roles

```typescript
enum Role {
  SUPER_ADMIN    // System administrator
  SCHOOL_ADMIN   // School administrator
  TEACHER        // Teaching staff
  STUDENT        // Students
  TUTOR          // Tutors/Teaching assistants
}
```

## 🌱 Git Workflow

### Branches

- `main` - Production code
- `staging` - Pre-production testing
- `development` - Active development

### Creating a Feature

```bash
# Create a new feature branch from development
git checkout development
git pull origin development
git checkout -b feature/your-feature-name

# Make your changes
git add .
git commit -m "feat: add new feature"

# Push to GitHub
git push origin feature/your-feature-name
```

### Commit Convention

We use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## 🛠️ Common Tasks

### Running the Project

```bash
# Development mode (both frontend and backend)
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

### Database Operations

```bash
cd apps/api

# Generate Prisma client
npx prisma generate

# Create migration
npx prisma migrate dev --name migration-name

# Open Prisma Studio (database GUI)
npx prisma studio
```

### Adding Dependencies

```bash
# Add to frontend
cd apps/web
npm install package-name

# Add to backend
cd apps/api
npm install package-name

# Add to root (shared)
npm install package-name -w
```

## 📝 Environment Variables

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_AZURE_AD_B2C_TENANT_NAME=your-tenant
NEXT_PUBLIC_AZURE_AD_B2C_CLIENT_ID=your-client-id
```

### Backend (.env)

```env
DATABASE_URL="sqlserver://localhost:1433;database=eduboard;user=sa;password=YourPassword"
JWT_SECRET=your-secret-key
PORT=3001
```

## 🤝 Getting Help

1. **Documentation**: Check this guide first
2. **Team Lead**: Contact @geniustaku
3. **GitHub Issues**: Report bugs or request features
4. **Team Chat**: Use our communication channel

## 🚦 Before You Push Code

1. ✅ Run `npm run lint` - Fix any linting errors
2. ✅ Run `npm run build` - Ensure build succeeds
3. ✅ Test your changes locally
4. ✅ Write descriptive commit messages
5. ✅ Create a pull request for review

## 📱 Key Features to Implement

1. **Authentication System**
   - Login pages for staff, students, parents
   - Role-based access control
   - Password reset functionality

2. **Dashboard Module**
   - Role-specific dashboards
   - Quick stats and metrics
   - Recent activities

3. **User Management**
   - User CRUD operations
   - Role assignment
   - Profile management

4. **School Management**
   - School settings
   - Academic year configuration
   - Class/grade management

---

**Happy Coding! 🎉**

If you have any questions, don't hesitate to ask the team!

---

_Documentation created by Genius_
