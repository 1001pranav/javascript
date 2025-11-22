# Next.js Cheatsheet

A comprehensive guide to Next.js 13+ with App Router and essential features.

## Table of Contents
1. [Installation & Setup](#installation--setup)
2. [Project Structure](#project-structure)
3. [Routing](#routing)
4. [Server & Client Components](#server--client-components)
5. [Data Fetching](#data-fetching)
6. [API Routes](#api-routes)
7. [Styling](#styling)
8. [Images & Fonts](#images--fonts)
9. [Metadata & SEO](#metadata--seo)
10. [Navigation](#navigation)
11. [Deployment](#deployment)

---

## Installation & Setup

### Create New Next.js App

```bash
# Create new app with App Router (recommended)
npx create-next-app@latest my-app

# Interactive prompts:
# ✔ Would you like to use TypeScript? Yes
# ✔ Would you like to use ESLint? Yes
# ✔ Would you like to use Tailwind CSS? Yes
# ✔ Would you like to use `src/` directory? No
# ✔ Would you like to use App Router? Yes (recommended)
# ✔ Would you like to customize the default import alias? No

cd my-app
npm run dev
```

### Manual Installation

```bash
npm install next@latest react@latest react-dom@latest
```

```json
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Project Structure

### App Router Structure (Next.js 13+)

```
my-app/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page (/)
│   ├── loading.js         # Loading UI
│   ├── error.js           # Error UI
│   ├── not-found.js       # 404 page
│   ├── about/
│   │   └── page.js        # /about
│   ├── blog/
│   │   ├── page.js        # /blog
│   │   └── [slug]/
│   │       └── page.js    # /blog/[slug]
│   └── api/
│       └── hello/
│           └── route.js   # API route
├── public/                # Static files
├── components/            # Reusable components
├── lib/                   # Utility functions
├── styles/                # CSS files
├── next.config.js         # Next.js config
└── package.json
```

---

## Routing

### File-based Routing

```
app/
├── page.js                → /
├── about/page.js          → /about
├── blog/page.js           → /blog
└── blog/[slug]/page.js    → /blog/:slug
```

### Basic Page

```jsx
// app/page.js
export default function Home() {
  return <h1>Home Page</h1>
}
```

### Layout (Shared UI)

```jsx
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>Navigation</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
```

### Nested Layouts

```jsx
// app/blog/layout.js
export default function BlogLayout({ children }) {
  return (
    <div>
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  )
}
```

### Dynamic Routes

```jsx
// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>
}

// Access: /blog/hello-world
// params.slug = "hello-world"
```

### Catch-all Routes

```jsx
// app/shop/[...slug]/page.js
export default function Shop({ params }) {
  return <div>{params.slug.join('/')}</div>
}

// /shop/clothes/shirts → params.slug = ["clothes", "shirts"]
// /shop/electronics → params.slug = ["electronics"]
```

### Optional Catch-all

```jsx
// app/docs/[[...slug]]/page.js
// Matches /docs and /docs/a/b/c
```

### Route Groups (Organization)

```
app/
├── (marketing)/
│   ├── about/page.js
│   └── contact/page.js
└── (shop)/
    └── products/page.js

// Groups don't affect URL structure
// /about, /contact, /products
```

### Parallel Routes

```
app/
├── @team/
│   └── page.js
├── @analytics/
│   └── page.js
└── layout.js

// layout.js
export default function Layout({ children, team, analytics }) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}
```

### Intercepting Routes

```
app/
├── photo/[id]/page.js
└── @modal/
    └── (.)photo/[id]/page.js

// Click link: Shows modal
// Direct visit: Shows full page
```

---

## Server & Client Components

### Server Components (Default)

```jsx
// app/page.js - Server Component by default
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const posts = await data.json()

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
```

**Benefits:**
- ✅ No JavaScript sent to client
- ✅ Direct database/API access
- ✅ Better performance
- ✅ Automatic code splitting

**Limitations:**
- ❌ No useState, useEffect
- ❌ No browser APIs
- ❌ No event handlers

### Client Components

```jsx
'use client' // Mark as Client Component

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

**Use Client Components for:**
- ✅ State management (useState)
- ✅ Effects (useEffect)
- ✅ Event handlers
- ✅ Browser APIs
- ✅ Custom hooks

### Composition Pattern

```jsx
// app/page.js (Server Component)
import ClientComponent from './ClientComponent'

export default async function Page() {
  const data = await fetchData()

  return (
    <div>
      <h1>Server Component</h1>
      <ClientComponent data={data} />
    </div>
  )
}

// components/ClientComponent.js
'use client'

export default function ClientComponent({ data }) {
  const [state, setState] = useState(data)
  return <div>{/* Interactive UI */}</div>
}
```

---

## Data Fetching

### Server Components (Recommended)

```jsx
// app/page.js
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache' // Default: cache
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
```

### Cache Options

```jsx
// No caching
fetch(url, { cache: 'no-store' })

// Cache (default)
fetch(url, { cache: 'force-cache' })

// Revalidate every 60 seconds
fetch(url, { next: { revalidate: 60 } })

// Revalidate with tag
fetch(url, { next: { tags: ['posts'] } })
```

### Parallel Data Fetching

```jsx
async function Page() {
  // Fetch in parallel
  const [users, posts] = await Promise.all([
    fetch('https://api.example.com/users').then(r => r.json()),
    fetch('https://api.example.com/posts').then(r => r.json())
  ])

  return <div>{/* Use users and posts */}</div>
}
```

### Sequential Data Fetching

```jsx
async function Page() {
  const user = await fetch(`/api/user`).then(r => r.json())
  const posts = await fetch(`/api/posts/${user.id}`).then(r => r.json())

  return <div>{/* Use posts */}</div>
}
```

### Client-side Fetching

```jsx
'use client'

import { useState, useEffect } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(setPosts)
  }, [])

  return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>
}
```

### SWR (Recommended for client-side)

```bash
npm install swr
```

```jsx
'use client'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(r => r.json())

export default function Posts() {
  const { data, error, isLoading } = useSWR('/api/posts', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return <div>{data.map(post => <div key={post.id}>{post.title}</div>)}</div>
}
```

### generateStaticParams (SSG)

```jsx
// app/blog/[slug]/page.js

// Generate static pages at build time
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json())

  return posts.map(post => ({
    slug: post.slug
  }))
}

export default async function Page({ params }) {
  const post = await fetch(`https://api.example.com/posts/${params.slug}`)
    .then(r => r.json())

  return <article>{post.content}</article>
}
```

### Revalidation

```jsx
// app/page.js

// Revalidate every 60 seconds
export const revalidate = 60

export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  return <div>{data.title}</div>
}
```

### On-Demand Revalidation

```jsx
// app/api/revalidate/route.js
import { revalidatePath, revalidateTag } from 'next/cache'

export async function GET(request) {
  // Revalidate specific path
  revalidatePath('/blog')

  // Revalidate by cache tag
  revalidateTag('posts')

  return Response.json({ revalidated: true })
}
```

---

## API Routes

### Basic API Route

```jsx
// app/api/hello/route.js
export async function GET(request) {
  return Response.json({ message: 'Hello World' })
}
```

### HTTP Methods

```jsx
// app/api/posts/route.js
export async function GET(request) {
  const posts = await db.posts.findMany()
  return Response.json(posts)
}

export async function POST(request) {
  const body = await request.json()
  const post = await db.posts.create({ data: body })
  return Response.json(post, { status: 201 })
}
```

### Dynamic API Routes

```jsx
// app/api/posts/[id]/route.js
export async function GET(request, { params }) {
  const post = await db.posts.findUnique({
    where: { id: params.id }
  })

  if (!post) {
    return Response.json({ error: 'Not found' }, { status: 404 })
  }

  return Response.json(post)
}

export async function PUT(request, { params }) {
  const body = await request.json()
  const post = await db.posts.update({
    where: { id: params.id },
    data: body
  })
  return Response.json(post)
}

export async function DELETE(request, { params }) {
  await db.posts.delete({ where: { id: params.id } })
  return Response.json({ success: true })
}
```

### Request & Response

```jsx
// app/api/example/route.js
export async function POST(request) {
  // Get search params
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  // Get headers
  const token = request.headers.get('authorization')

  // Get cookies
  const cookies = request.cookies.get('token')

  // Get JSON body
  const body = await request.json()

  // Get form data
  const formData = await request.formData()
  const name = formData.get('name')

  // Return response with headers
  return Response.json(
    { success: true },
    {
      status: 200,
      headers: {
        'Set-Cookie': 'token=abc123',
        'Content-Type': 'application/json'
      }
    }
  )
}
```

### Middleware

```jsx
// middleware.js (root level)
import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check authentication
  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Add custom header
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'value')

  return response
}

// Specify paths
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*']
}
```

---

## Styling

### Tailwind CSS (Recommended)

```jsx
// Already configured with create-next-app

export default function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click me
    </button>
  )
}
```

### CSS Modules

```css
/* app/page.module.css */
.container {
  padding: 2rem;
}

.title {
  color: blue;
  font-size: 2rem;
}
```

```jsx
// app/page.js
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello</h1>
    </div>
  )
}
```

### Global CSS

```css
/* app/globals.css */
body {
  margin: 0;
  padding: 0;
}
```

```jsx
// app/layout.js
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

### CSS-in-JS (Styled Components)

```bash
npm install styled-components
```

```jsx
// app/registry.js
'use client'

import { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}
```

---

## Images & Fonts

### Next.js Image Component

```jsx
import Image from 'next/image'

export default function Page() {
  return (
    <>
      {/* Local image */}
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Profile"
      />

      {/* Remote image */}
      <Image
        src="https://example.com/image.png"
        width={500}
        height={500}
        alt="Remote"
      />

      {/* Fill container */}
      <div style={{ position: 'relative', width: '100%', height: '400px' }}>
        <Image
          src="/background.jpg"
          fill
          style={{ objectFit: 'cover' }}
          alt="Background"
        />
      </div>

      {/* Priority (LCP) */}
      <Image
        src="/hero.png"
        width={1200}
        height={600}
        alt="Hero"
        priority
      />
    </>
  )
}
```

### Configure Remote Images

```js
// next.config.js
module.exports = {
  images: {
    domains: ['example.com', 'cdn.example.com'],
    // Or use remotePatterns (recommended)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
}
```

### Google Fonts

```jsx
// app/layout.js
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

### Local Fonts

```jsx
import localFont from 'next/font/local'

const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
```

---

## Metadata & SEO

### Static Metadata

```jsx
// app/page.js
export const metadata = {
  title: 'Home Page',
  description: 'Welcome to our website',
}

export default function Page() {
  return <h1>Home</h1>
}
```

### Dynamic Metadata

```jsx
// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const post = await fetch(`https://api.example.com/posts/${params.slug}`)
    .then(r => r.json())

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function Page({ params }) {
  return <article>{/* ... */}</article>
}
```

### Complete Metadata

```jsx
export const metadata = {
  title: 'My Site',
  description: 'My awesome website',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'John Doe' }],
  creator: 'John Doe',
  publisher: 'John Doe',
  openGraph: {
    title: 'My Site',
    description: 'My awesome website',
    url: 'https://example.com',
    siteName: 'My Site',
    images: [
      {
        url: 'https://example.com/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Site',
    description: 'My awesome website',
    creator: '@handle',
    images: ['https://example.com/twitter.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}
```

---

## Navigation

### Link Component

```jsx
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/hello-world">Blog Post</Link>

      {/* With custom child */}
      <Link href="/dashboard">
        <button>Go to Dashboard</button>
      </Link>

      {/* Replace instead of push */}
      <Link href="/login" replace>Login</Link>

      {/* Scroll to top */}
      <Link href="/blog" scroll={false}>Blog</Link>

      {/* Prefetch disabled */}
      <Link href="/heavy-page" prefetch={false}>Heavy Page</Link>
    </nav>
  )
}
```

### useRouter Hook

```jsx
'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <>
      <button onClick={() => router.push('/dashboard')}>
        Go to Dashboard
      </button>

      <button onClick={() => router.back()}>
        Go Back
      </button>

      <button onClick={() => router.refresh()}>
        Refresh
      </button>

      <button onClick={() => router.replace('/login')}>
        Login
      </button>
    </>
  )
}
```

### usePathname, useSearchParams

```jsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'

export default function Component() {
  const pathname = usePathname() // /blog/hello-world
  const searchParams = useSearchParams() // ?search=value

  const search = searchParams.get('search')

  return <div>Current path: {pathname}</div>
}
```

### Redirects

```jsx
// Server Component
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  return <div>Dashboard</div>
}
```

---

## Loading & Error States

### Loading UI

```jsx
// app/loading.js
export default function Loading() {
  return <div>Loading...</div>
}

// Or with Suspense
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading posts...</div>}>
      <Posts />
    </Suspense>
  )
}
```

### Error Handling

```jsx
// app/error.js
'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

### Not Found

```jsx
// app/not-found.js
export default function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  )
}

// Trigger programmatically
import { notFound } from 'next/navigation'

export default async function Page({ params }) {
  const post = await getPost(params.id)

  if (!post) {
    notFound()
  }

  return <div>{post.title}</div>
}
```

---

## Environment Variables

```
# .env.local
DATABASE_URL=postgresql://...
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key
```

```jsx
// Server Component - access all env vars
const dbUrl = process.env.DATABASE_URL
const secret = process.env.SECRET_KEY

// Client Component - only NEXT_PUBLIC_*
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Static Export

```js
// next.config.js
module.exports = {
  output: 'export',
}
```

```bash
npm run build
# Output in 'out' directory
```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD ["npm", "start"]
```

---

## Common Patterns

### Authentication

```jsx
// app/dashboard/page.js
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'

export default async function Dashboard() {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  return <div>Welcome, {session.user.name}</div>
}
```

### Forms with Server Actions

```jsx
// app/actions.js
'use server'

export async function createPost(formData) {
  const title = formData.get('title')
  const content = formData.get('content')

  await db.post.create({
    data: { title, content }
  })

  redirect('/posts')
}

// app/new-post/page.js
import { createPost } from './actions'

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <textarea name="content" required />
      <button type="submit">Create Post</button>
    </form>
  )
}
```

### Pagination

```jsx
export default async function Page({ searchParams }) {
  const page = Number(searchParams.page) || 1
  const limit = 10

  const posts = await db.post.findMany({
    skip: (page - 1) * limit,
    take: limit,
  })

  return (
    <div>
      {posts.map(post => <div key={post.id}>{post.title}</div>)}

      <Link href={`?page=${page + 1}`}>Next</Link>
    </div>
  )
}
```

---

## Performance Tips

1. **Use Server Components** - Default, better performance
2. **Optimize Images** - Use Next.js Image component
3. **Enable caching** - Use appropriate cache strategies
4. **Code splitting** - Automatic with App Router
5. **Lazy load components** - Use dynamic imports
6. **Prefetch links** - Automatic with Link component
7. **Use Suspense** - Stream content progressively
8. **Optimize fonts** - Use next/font

---

## Quick Reference

### Project Commands

```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Key Imports

```jsx
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { redirect, notFound } from 'next/navigation'
import { headers, cookies } from 'next/headers'
import { revalidatePath, revalidateTag } from 'next/cache'
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [Learn Next.js](https://nextjs.org/learn)

---

**Happy coding with Next.js! 🚀**
