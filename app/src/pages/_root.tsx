import { Providers } from "../components/providers"

import "../globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>JStack App</title>
        <meta name="description" content="Created using JStack" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
