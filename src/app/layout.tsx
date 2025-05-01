import '@/styles/globals.css'
import { inter } from '@/styles/fonts';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Software Engineering Day 2025',
  description: 'Join the PUP Computer Engineering Department’s 7th Software Engineering Day, themed "Shaping Progress and Revolutionizing Knowledge." The event features insightful seminars that explore cutting-edge topics in software development, innovation, and technology trends.',
  keywords: 'SED 2025, Software Engineering Day, big data, machine learning, seminar, software engineering, data science',
  author: 'Irish Micole Cando'
}

const RootLayout = ({children} : {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased bg-darkest-blue text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout