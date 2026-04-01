import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DamDigi — Digital Products",
  description: "Create and sell digital products",
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
