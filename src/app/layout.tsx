//import type { Metadata } from "next";
import "./globals.css";



export const metadata = {
  title: 'Panel de Equipos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
