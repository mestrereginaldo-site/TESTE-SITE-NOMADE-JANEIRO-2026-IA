import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advogado Nômade | Inteligência de Ativos",
  description: "Auditoria e Saneamento de Carteiras Judiciais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
