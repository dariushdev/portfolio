import { Analytics } from "@vercel/analytics/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Welcome to my portfolio! As a developer, I'm passionate about creating beautiful and functional web applications, software tools, and APIs. Explore my projects and get to know my experience in various programming languages, frameworks, and technologies. Let's collaborate on your next project and build something awesome!."
        />
        <meta
          name="keywords"
          content="web development, programming, technology, IT security"
        />
        <meta name="author" content="Dariush" />
        <meta property="og:title" content="DariushDev" />
        <meta
          property="og:description"
          content="Welcome to my portfolio! As a developer, I'm passionate about creating beautiful and functional web applications, software tools, and APIs. Explore my projects and get to know my experience in various programming languages, frameworks, and technologies. Let's collaborate on your next project and build something awesome!"
        />
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:url" content="https://www.mywebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="DariushDev" />
        <meta
          name="twitter:description"
          content="Welcome to my portfolio! As a developer, I'm passionate about creating beautiful and functional web applications, software tools, and APIs. Explore my projects and get to know my experience in various programming languages, frameworks, and technologies. Let's collaborate on your next project and build something awesome!"
        />
        <meta name="twitter:image" content="/favicon-32x32.png" />
        <meta name="twitter:card" content="/android-chrome-192x192" />
        <link rel="canonical" href="https://www.dariush.dev" />
        <link rel="icon" href="/favicon-16x16.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Flex&display=swap"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
