import "./globals.css";

export const metadata = {
  title: "ShelterPro Overhead Doors | Garage Door Services",
  description:
    "Professional overhead garage door installation, repair, and maintenance for residential and commercial properties.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}