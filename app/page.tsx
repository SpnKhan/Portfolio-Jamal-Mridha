'use client'

import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Phone,
  Quote,
  Share2,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

const navItems = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['expertise', 'Expertise'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

const expertise = [
  { number: '01', title: 'Social compliance', text: 'Supporting workplace standards, documentation, and continuous improvement across responsible supply chains.' },
  { number: '02', title: 'Ethical sourcing', text: 'Connecting business goals with transparent, people-first sourcing practices and strong stakeholder relationships.' },
  { number: '03', title: 'CSR coordination', text: 'Organizing initiatives that keep teams, suppliers, and partners aligned around meaningful shared outcomes.' },
  { number: '04', title: 'Sustainability', text: 'Helping translate responsible business values into practical programs, follow-up, and everyday action.' },
]

export default function Page() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme')
    setDark(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  const sharePage = async () => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title: 'CSR Professional Portfolio', url }).catch(() => {})
      return
    }
    await navigator.clipboard?.writeText(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Go to top">
          <span className="brand-mark">M</span>
          <span className="brand-copy"><strong>CSR Portfolio</strong><small>Professional profile</small></span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <button className="nav-share" onClick={sharePage} aria-label="Share this portfolio"><Share2 size={16} /> {copied ? 'Copied' : 'Share'}</button>
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <a className="header-resume" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> Assistant Manager · CSR</p>
            <h1>Building better<br /><em>business,</em> responsibly.</h1>
            <p className="hero-description">A thoughtful approach to social compliance, ethical sourcing, and sustainable progress in the apparel industry.</p>
            <div className="hero-actions"><a className="button button-primary" href="#experience">Explore my profile <ArrowDown size={16} /></a><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div>
            <div className="hero-note"><span className="note-dot" /> <span>Currently at <strong>Impression Design Ltd.</strong></span></div>
          </div>
          <div className="hero-art reveal reveal-delay">
            <div className="portrait-card">
              <div className="portrait-placeholder"><img src="/profile-photo.png" alt="Professional portrait of the CSR professional" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} /></div>
              <div className="portrait-caption"><span>Dhaka, Bangladesh</span><span>01 / 24</span></div>
            </div>
            <div className="art-stamp"><Sparkles size={14} /><span>People<br />Planet<br />Progress</span></div>
            <span className="art-label">Responsible<br />by design.</span>
          </div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><div className="scroll-line" /></div>
      </section>

      <section className="intro section-shell" id="about">
        <div className="section-kicker">01 <span /> About me</div>
        <div className="intro-grid">
          <h2>Purpose is not just a value.<br /><span>It&apos;s a way of working.</span></h2>
          <div className="intro-text"><p>I am a CSR professional working at the intersection of people, process, and responsible business. My work is grounded in the belief that strong workplaces and strong supply chains are built through consistency, listening, and action.</p><p>As Assistant Manager – CSR at Impression Design Ltd., I contribute to the practices that help organizations move forward with greater care and clarity.</p><a className="text-link" href="#contact">More about my approach <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="experience section-shell dark-section" id="experience">
        <div className="section-kicker light-kicker">02 <span /> Experience</div>
        <div className="section-heading-row"><h2>A career built<br /><em>around impact.</em></h2><p>Every role is an opportunity to make responsible practices more practical, consistent, and human.</p></div>
        <div className="timeline"><article className="timeline-item current"><div className="timeline-meta"><span className="timeline-dot" /><span>Present</span></div><div className="timeline-content"><p className="role-label">Current role · Bangladesh</p><h3>Assistant Manager – CSR</h3><p className="company">Impression Design Ltd.</p><p className="timeline-description">Supporting corporate social responsibility, social compliance, ethical sourcing, and sustainability activities across the buying-house environment.</p><div className="tag-row"><span>CSR</span><span>Social compliance</span><span>Responsible sourcing</span></div></div></article><article className="timeline-item"><div className="timeline-meta"><span className="timeline-dot" /><span>Previous</span></div><div className="timeline-content empty-role"><p className="role-label">Add verified experience</p><h3>Your previous role</h3><p className="company">Company name · Employment period</p><p className="timeline-description">Replace this placeholder with a verified position, responsibilities, and outcomes.</p></div></article></div>
      </section>

      <section className="expertise section-shell" id="expertise">
        <div className="section-kicker">03 <span /> Core expertise</div><div className="section-heading-row"><h2>What I bring<br /><em>to the table.</em></h2><p>Focused capabilities for organizations committed to doing business with integrity.</p></div>
        <div className="expertise-grid">{expertise.map((item) => <article className="expertise-card" key={item.number}><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="card-arrow" size={18} /></article>)}</div>
      </section>

      <section className="credentials section-shell" id="education">
        <div className="section-kicker">04 <span /> Credentials</div><div className="credentials-grid"><div><h2>The details<br /><em>matter.</em></h2><p className="credentials-intro">Use this space to present the qualifications and training that support your professional journey.</p></div><div className="credential-list"><div className="credential-row"><GraduationCap size={22} /><div><span>Education</span><h3>Your degree or qualification</h3><p>Institution name · Study period</p></div><ChevronDown size={18} /></div><div className="credential-row"><FileText size={22} /><div><span>Certification</span><h3>Your verified certification</h3><p>Issuing organization · Issue date</p></div><ChevronDown size={18} /></div><div className="credential-row"><BriefcaseBusiness size={22} /><div><span>Professional values</span><h3>Ethical practice · Human dignity · Progress</h3><p>Areas that guide your work</p></div><ChevronDown size={18} /></div></div></div>
      </section>

      <section className="quote-section"><div className="quote-mark"><Quote size={28} /></div><blockquote>Responsible business is built in the everyday decisions we make — and the people we choose to listen to.</blockquote><p>— Professional philosophy</p></section>

      <section className="contact section-shell" id="contact"><div className="contact-card"><div><div className="section-kicker light-kicker">05 <span /> Contact</div><h2>Let&apos;s make<br /><em>an impact.</em></h2><p>For professional conversations, collaborations, or opportunities, I&apos;d be glad to connect.</p></div><div className="contact-links"><a href="mailto:your.email@example.com"><Mail size={17} /> your.email@example.com <ArrowUpRight size={16} /></a><a href="tel:+880000000000"><Phone size={17} /> +880 0000 000000 <ArrowUpRight size={16} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><span className="linkedin-badge">in</span> LinkedIn profile <ExternalLink size={15} /></a></div></div></section>

      <footer className="site-footer"><span>© 2024 Your Name</span><span>Assistant Manager · CSR</span><div className="footer-actions"><button onClick={sharePage}><Share2 size={15} /> {copied ? 'Link copied' : 'Share profile'}</button><a href="#top">Back to top <ArrowUpRight size={15} /></a></div></footer>
    </main>
  )
}
