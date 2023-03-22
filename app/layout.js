import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100&display=swap"
          rel="stylesheet"
        />

<script src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"></script>

<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
