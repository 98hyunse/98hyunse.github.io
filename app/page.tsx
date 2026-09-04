import type { ReactNode } from 'react';

const research = [
  { name: 'Safer robot manipulation', area: 'Vision–Language–Action', status: 'On-going', detail: 'Studying post-training methods that compare safe and unsafe actions to help robot arms avoid collisions in simulation.' },
  { name: 'SafeBranch', area: 'Embodied agent safety', status: 'EMNLP 2026 Findings · Accepted', detail: 'Developed a learning approach that compares safe and unsafe actions in the same situation, helping embodied agents avoid hazardous behavior in simulated everyday environments.', role: 'Co-first author', link: 'https://github.com/98hyunse/SafeBranch' },
  { name: 'SeMoBridge', area: 'Learning from a few example images', status: 'Under revision', detail: 'Co-developed a method that adapts CLIP, an image–text model, to recognize new categories using only a few labeled examples.', role: 'Co-first author · Pattern Recognition' },
  { name: 'EEG signal analysis', area: 'AI for ADHD assessment research', status: 'Jun–Nov 2024', detail: 'Analyzed multichannel brainwave signals and developed a model using patterns across electrodes and frequency bands. Worked on signal preprocessing, feature extraction, and model evaluation.', role: 'Industry–academia project lead · Sunjae Brain Science' },
  { name: 'CoCoder', area: 'Feature selection for data analysis', status: '2024', detail: 'Developed an algorithm that automatically selects informative variables from data, reduces the number of input variables, and evaluates the resulting classification performance.', role: 'First author · Journal of Broadcast Engineering' },
];

function Me({ mark = '' }: { mark?: string }) { return <strong>Hyunse Lee{mark && <sup>{mark}</sup>}</strong>; }
const papers: { title: string; authors: ReactNode; venue: string; url?: string; note?: string }[] = [
  { title: 'SafeBranch: Branch-Pair Safety Alignment for Embodied Agents', authors: <><Me mark="*" />, Jiwoo Jeong<sup>*</sup>, Haneul Lee, Kyochul Jang, Youngjae Yu<sup>†</sup>, Woojin Lee<sup>†</sup></>, venue: 'Findings of EMNLP 2026 · Accepted', url: 'https://arxiv.org/abs/2608.19729' },
  { title: 'SeMoBridge: Semantic Modality Bridge for Efficient Few-Shot Adaptation of CLIP', authors: <>Christoph Timmermann<sup>*</sup>, <Me mark="*" />, Woojin Lee<sup>†</sup></>, venue: 'Pattern Recognition · Under revision', url: 'https://arxiv.org/abs/2509.26036' },
  { title: 'DUET: Dual-Perspective Pseudo Labeling and Uncertainty-aware Exploration & Exploitation Training for Source-Free Domain Adaptation', authors: <>JaeYun Lee, Jae Hyeon Park, Gyoomin Lee, Bogyeong Kim, Min Hee Cha, Hyeok Nam, Joo Jeon, <Me />, Sung In Cho<sup>†</sup></>, venue: 'NeurIPS 2025', url: 'https://proceedings.neurips.cc/paper_files/paper/2025/hash/6c8dfbbd1ba3e22339e58a336cbed52b-Abstract-Conference.html' },
  { title: 'Doodle to Detect: A Goofy but Powerful Approach to Skeleton-based Hand Gesture Recognition', authors: <>Sang Hoon Han<sup>*</sup>, Seonho Lee<sup>*</sup>, Hyeok Nam<sup>*</sup>, Jae Hyeon Park, Min Hee Cha, Min Geol Kim, <Me />, Sangyeon Ahn, Moonju Chae, Sung In Cho<sup>†</sup></>, venue: 'NeurIPS 2025', url: 'https://proceedings.neurips.cc/paper_files/paper/2025/hash/ccf308ecd36579d82532851419c283cd-Abstract-Conference.html' },
  { title: 'A Study on an ADHD Diagnostic Model Using Artificial Intelligence and EEG', authors: <><Me />, Sang Hoon Han, Min Geol Kim, Min-Chul Shin, Sung In Cho, Seung-Hyun Yoon</>, venue: 'Magazine of the IEIE, 52(7), 63–73 · 2025', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12317768', note: 'Published in Korean; title translated into English.' },
  { title: 'CoCoder: Concrete Autoencoder using Covariance for Unsupervised Feature Selection', authors: <><Me />, Min Geol Kim, Sung In Cho<sup>†</sup></>, venue: 'Journal of Broadcast Engineering, 29(3), 242–251 · 2024', url: 'https://doi.org/10.5909/JBE.2024.29.3.242', note: 'Published in Korean.' },
];
const awards = [
  ['Jul 2026', 'Best Paper Award · ITC-CSCC 2025', 'MANet: EEG-based Attention Deficit Hyperactivity Disorder Diagnosis Using Masking Attention Network'],
  ['Jan 2026', 'RISE Program · Excellence Award', 'SeMoBridge research'],
  ['Aug 2025', 'Korea Data Mining Society · Best Paper Award', 'SeMoBridge research'],
  ['Feb 2025', 'Graduation with Honors', 'Dongguk University'],
  ['May 2019', 'Technical Report Writing & Presentation Competition · Encouragement Award', 'Dongguk University'],
];
function Section({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="section"><div className="section-heading"><span className="section-number">{number}</span><h2>{title}</h2></div><div className="section-content">{children}</div></section>;
}
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#about">Hyunse Lee<span aria-hidden="true"> / </span><span className="wordmark-sub">Research</span></a><nav aria-label="Main navigation"><a href="#research">Research</a><a href="#publications">Publications</a><a href="#education">Education</a><a href="#awards">Awards</a></nav></header>
    <main id="main">
      <section className="intro" id="about" aria-labelledby="name">
        <div className="identity"><div className="portrait-frame"><img src="/assets/hyunse-lee.png" width="1108" height="1419" alt="Hyunse Lee" fetchPriority="high" /></div><div><p className="eyebrow">AI RESEARCH · DONGGUK UNIVERSITY</p><h1 id="name">Hyunse Lee</h1><p className="role">AI Researcher &amp; M.S. Student</p><div className="profile-links"><a href="https://github.com/98hyunse">GitHub <span aria-hidden="true">↗</span></a><a href="/assets/Hyunse-Lee-CV-KO.pdf" download>Download CV <span className="link-note">(Korean PDF)</span> <span aria-hidden="true">↓</span></a></div></div></div>
        <div className="bio"><p>I am an M.S. student interested in <strong>Vision–Language–Action (VLA), Embodied Agents, Vision–Language Models (VLMs), and Computer Vision.</strong></p><p>I aim to understand how technology works and turn that understanding into practical AI and robotics solutions. I am especially motivated by real-world problems—working close to where technology is used and building tools that help people in their work and everyday lives.</p></div>
      </section>
      <Section id="research" number="01" title="Research"><div className="research-list">{research.map(item => <article className="research-item" key={item.name}><div className="research-topic"><p className="eyebrow">{item.area}</p><h3>{item.name}</h3><p className="status">{item.status}</p></div><div><p>{item.detail}</p>{item.role && <p className="meta">{item.role}</p>}{item.link && <a className="text-link" href={item.link}>Code on GitHub <span aria-hidden="true">↗</span></a>}</div></article>)}</div></Section>
      <Section id="publications" number="02" title="Publications"><p className="legend">* Equal contribution (co-first authors) · † Corresponding author</p><ol className="papers">{papers.map((paper, i) => <li key={paper.title}><span className="paper-number">{String(i + 1).padStart(2, '0')}</span><article><p className="venue">{paper.venue}</p><h3>{paper.url ? <a href={paper.url}>{paper.title}<span className="paper-arrow" aria-hidden="true"> ↗</span></a> : paper.title}</h3><p className="authors">{paper.authors}</p>{paper.note && <p className="translation-note">{paper.note}</p>}</article></li>)}</ol></Section>
      <Section id="education" number="03" title="Education"><div className="education-entry"><div><h3>M.S. in Multimedia Software</h3><p>Dongguk University · Graduate School</p><p className="meta">GPA 4.13 / 4.5</p></div><p className="date">Mar 2025 – Feb 2027<br /><span>Expected graduation</span></p></div><div className="education-entry"><div><h3>Bachelor’s in Multimedia Engineering</h3><p>Dongguk University</p><p className="meta">GPA 4.07 / 4.5 · Graduated with honors</p></div><p className="date">Mar 2019 – Feb 2025</p></div><div className="appointment"><p className="eyebrow">RESEARCH APPOINTMENT</p><div className="education-entry"><div><h3>Undergraduate Researcher</h3><p>Smart Vision Media Lab · Dongguk University</p></div><p className="date">Dec 2022 – Dec 2024</p></div></div></Section>
      <Section id="awards" number="04" title="Awards"><ul className="awards-list">{awards.map(([date,title,detail]) => <li key={title}><span className="date">{date}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ul></Section>
    </main>
    <footer className="site-footer"><span>Hyunse Lee</span><span>Last updated · September 2026</span><a href="#about">Back to top ↑</a></footer>
  </>;
}
