
import "../styles/globals.css";
import ReactGA from "react-ga4";

export default function RootLayout({ children }) {
  ReactGA.initialize("G-BE358TGQ7C");
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap"
          rel="stylesheet"
        />
 
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
         
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
