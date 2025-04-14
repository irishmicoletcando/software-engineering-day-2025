import '@/styles/globals.css'
import { inter } from '@/styles/fonts';

export const metadata = {
  title: 'Software Engineering Day 2025',
  description: 'insert description',
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
      <body className={`${inter.className} antialiased bg-darkest-blue text-white`}>{children}</body>
    </html>
  )
}

export default RootLayout