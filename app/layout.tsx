import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Hyunse Lee | AI & Robotics Research',
  description: 'Hyunse Lee — M.S. student at Dongguk University. Research in vision-language-action, embodied agents, vision-language models, and computer vision.',
  alternates: { canonical: 'https://98hyunse.github.io/' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
