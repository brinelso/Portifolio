import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Gabriel Vaz — Desenvolvedor Full Stack & Dados",
  description:
    "Portfólio de João Gabriel Vaz, estudante de Ciência da Computação na UNIFESP e desenvolvedor Full Stack com foco em back-end, Java e dados.",
  openGraph: {
    title: "João Gabriel Vaz — Desenvolvedor Full Stack & Dados",
    description: "Projetos, experiências e caminhos em tecnologia.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
