### ENABLE EDU - An LMS Platform : Next.js 13,  React, Stripe, Mux, Prisma, Tailwind, MongoDB 

This is a repository for my EPICS ( Engineering Project in Community Service ) Project titled "Enable Edu" (2023 - 2024)

In today's world, where speed and mobility are key factors, the education sector needs new approaches to learning, especially in the field of information technology (IT). Web-based applications fit perfectly into this concept, as they provide access to up-to-date educational materials from any device that has a web browser.

Key Features:

- Browse & Filter Courses
- Purchase Courses using Stripe
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MongoDB database for storing data

### Prerequisites

**Node version 18.x.x**

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_TEACHER_ID=
```

### Setup Prisma


```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

| command              | description                                            |
| :--------------------| :------------------------------------------------------|
| `npm run dev`        | Starts a development instance of the app               |
| `npx prisma studio`  | Starts a a visual editor for the data in your database |

