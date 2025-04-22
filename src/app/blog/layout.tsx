import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | JBPHS Plumbing & Heating Services",
  description:
    "Latest news, tips, and updates from the plumbing and heating experts.",
};

export default function BlogPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
