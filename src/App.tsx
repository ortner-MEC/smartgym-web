import { useState } from 'react'
import './index.css'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<null | 'sending' | 'success'>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => { setStatus('success'); setEmail('') }, 1500)
  }

  const features = [
    { icon: '📐', title: '350 m² Trainingsfläche', desc: 'Genug Platz für dein Workout – auch bei Stoßzeiten.' },
    { icon: '⚡', title: 'Premium Geräte', desc: 'Hochwertige Kraft- und Cardiogeräte neuester Generation – für effektives Training auf jedem Level.' },
    { icon: '💪', title: 'Kraft, Cardio & Funktional', desc: 'Ein Trainingsbereich für jede Trainingsrichtung.' },
    { icon: '📱', title: 'Deine SmartGym App', desc: 'Tür öffnen, individuelle Trainingspläne und Fortschrittstracking – alles in einer App.' },
    { icon: '📊', title: 'Body-Check-Station', desc: 'Verfolge deinen Fortschritt – damit du immer weißt, wo du stehst.' },
    { icon: '👥', title: 'Kursbereich', desc: 'Gruppentrainingsbereich, um gemeinsam zu trainieren und gemeinsam zu wachsen.' },
  ]

  const galleryTabs = [
    { label: 'Cardiobereich', image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=1200&auto=format&fit=crop', overlay: 'Modernste Cardiogeräte mit Entertainment-System – Laufbänder, Bikes & Stairmaster.' },
    { label: 'Funktionalbereich', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop', overlay: 'Freie Fläche für funktionelles Training, Mobility und Stretching.' },
    { label: 'Krafttraining', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop', overlay: 'Maschinen und Freihanteln für gezielten Muskelaufbau.' },
  ]

  const memberships = [
    { name: 'Flex', price: '29,90', interval: '/ Monat', features: ['Zugang 24/7', 'SmartGym App', 'Monatlich kündbar'], highlight: false },
    { name: 'Smart', price: '24,90', interval: '/ Monat', features: ['Zugang 24/7', 'SmartGym App', 'Trainingspläne', 'Body-Check'], highlight: true },
    { name: 'Premium', price: '39,90', interval: '/ Monat', features: ['Zugang 24/7', 'SmartGym App', 'Trainingspläne', 'Body-Check', 'Kurse', 'Getränke-Flat'], highlight: false },
  ]

  const testimonials = [
    { name: 'Laura M.', text: 'Endlich ein Studio, das wirklich 24/7 offen hat. Die App ist super intuitiv!', stars: 5 },
    { name: 'Max K.', text: 'Top Geräte und immer sauber. Das automatisierte Konzept funktioniert einwandfrei.', stars: 5 },
    { name: 'Sophie R.', text: 'Der Body-Check motiviert mich extrem. Man sieht den Fortschritt schwarz auf weiß.', stars: 5 },
  ]

  const faqs = [
    { q: 'Wie komme ich ins Studio?', a: 'Über die SmartGym App. Du öffnest die Tür direkt mit deinem Smartphone – kein Schlüssel, keine Karte nötig.' },
    { q: 'Ist das Studio wirklich 24/7 geöffnet?', a: 'Ja! Du kannst rund um die Uhr trainieren – 365 Tage im Jahr, auch an Feiertagen.' },
    { q: 'Gibt es Personal vor Ort?', a: 'SmartGym ist ein vollautomatisiertes Studio. Bei Fragen erreichst du unser Team jederzeit über die App oder per Chat.' },
    { q: 'Kann ich ein Probetraining machen?', a: 'Klar! Buche einfach über den Button oben dein kostenloses Probetraining.' },
    { q: 'Welche Zahlungsmethoden werden akzeptiert?', a: 'SEPA-Lastschrift, Kreditkarte und PayPal.' },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#86C1B7] selection:text-black">

      {/* ─── Navigation ─── */}
      <nav className="fixed w-full z-50 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3 text-xl font-black uppercase tracking-tight">
          <img src="/logo.jpg" alt="SmartGym Logo" className="h-8 w-8 rounded-lg object-contain bg-white" />
          <span>Smart<span className="text-[#86C1B7]">Gym</span></span>
        </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-zinc-300">
            <a href="#features" className="hover:text-white transition-colors">Studio</a>
            <a href="#gallery" className="hover:text-white transition-colors">Tour</a>
            <a href="#membership" className="hover:text-white transition-colors">Mitgliedschaft</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <button className="bg-[#86C1B7] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-all hover:scale-105 active:scale-95">
            Mitglied werden
          </button>
        </div>
      </nav>

      {/* ─── Hero Section ─── 100vh, darkened BG image */}
      <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="SmartGym Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex justify-center gap-3 mb-8">
            {['Smart', 'Digital', '24/7'].map(tag => (
              <span key={tag} className="bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            Smart Gym<br /><span className="text-[#86C1B7]">Baiersbronn</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 font-light mb-10 max-w-2xl mx-auto">
            Dein 24/7 Fitnessstudio in Baiersbronn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#86C1B7] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(163,230,53,0.25)]">
              Mitglied werden
            </button>
            <button className="border border-white/30 backdrop-blur px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Buche dein Probetraining
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-500 text-xs">
          <span>Scroll</span>
          <div className="w-5 h-8 border-2 border-zinc-500 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-zinc-400 rounded-full animate-bounce" />
          </div>
        </div>
      </header>

      {/* ─── Feature Section ─── */}
      <section id="features" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#86C1B7] text-sm font-bold uppercase tracking-widest">Dein Studio</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-3 mb-4">
            Alles was du zu deinem<br />Studio wissen musst
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            350 m² Trainingsfläche mit Premium-Ausstattung – alles was du brauchst, rund um die Uhr für dich zugänglich.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group bg-zinc-900/80 border border-zinc-800 rounded-[2rem] p-8 hover:border-[#86C1B7]/30 hover:bg-zinc-900 transition-all duration-300">
              <div className="w-14 h-14 bg-[#86C1B7]/10 border border-[#86C1B7]/20 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Bilder / Gallery Section (Tabs) ─── */}
      <section id="gallery" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-[#86C1B7] text-sm font-bold uppercase tracking-widest">Virtuelle Tour</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-3">
            Dein SmartGym von innen
          </h2>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {galleryTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeTab === i
                  ? 'bg-[#86C1B7] text-black'
                  : 'bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-zinc-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="relative rounded-[2.5rem] overflow-hidden h-[28rem] md:h-[36rem]">
          <img
            src={galleryTabs[activeTab].image}
            alt={galleryTabs[activeTab].label}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{galleryTabs[activeTab].label}</h3>
            <p className="text-zinc-300 text-lg max-w-xl">{galleryTabs[activeTab].overlay}</p>
          </div>
        </div>
      </section>

      {/* ─── Mitgliedschaft ─── */}
      <section id="membership" className="relative py-24 px-4 md:px-8 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
            alt="Membership Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#86C1B7] text-sm font-bold uppercase tracking-widest">Mitgliedschaft</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-3">
              Finde den richtigen<br />Tarif für dich
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {memberships.map((m, i) => (
              <div
                key={i}
                className={`rounded-[2rem] p-8 border transition-all ${
                  m.highlight
                    ? 'bg-[#86C1B7] text-black border-[#86C1B7] scale-105'
                    : 'bg-zinc-900/80 border-zinc-800 backdrop-blur'
                }`}
              >
                {m.highlight && (
                  <span className="inline-block bg-black text-[#86C1B7] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    Beliebteste Wahl
                  </span>
                )}
                <h3 className="text-2xl font-black uppercase mb-2">{m.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black">€{m.price}</span>
                  <span className={`text-sm font-medium ${m.highlight ? 'text-black/60' : 'text-zinc-500'}`}>{m.interval}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {m.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${m.highlight ? 'bg-black text-[#86C1B7]' : 'bg-[#86C1B7]/20 text-[#86C1B7]'}`}>✓</span>
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 ${
                  m.highlight
                    ? 'bg-black text-white hover:bg-zinc-900'
                    : 'bg-white/10 border border-white/20 hover:bg-white/20'
                }`}>
                  Jetzt starten
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#86C1B7] text-sm font-bold uppercase tracking-widest">Stimmen</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-3">
            Was unsere Mitglieder sagen
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-900/80 border border-zinc-800 rounded-[2rem] p-8">
              <div className="text-[#86C1B7] text-lg mb-4">{'★'.repeat(t.stars)}</div>
              <p className="text-zinc-300 leading-relaxed mb-6 text-lg italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#86C1B7]/20 rounded-full flex items-center justify-center text-[#86C1B7] font-bold">
                  {t.name[0]}
                </div>
                <span className="font-bold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 px-4 md:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#86C1B7] text-sm font-bold uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-3">
            Häufige Fragen
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-zinc-900/80 border border-zinc-800 rounded-[1.5rem] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left font-bold text-lg hover:text-[#86C1B7] transition-colors"
              >
                {faq.q}
                <span className={`text-2xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-8 pb-6 text-zinc-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#86C1B7] rounded-[3rem] p-10 md:p-16 text-black text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full mix-blend-overlay opacity-20" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-black rounded-full mix-blend-overlay opacity-10" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              Bereit loszulegen?
            </h2>
            <p className="text-lg font-medium mb-10 max-w-xl mx-auto opacity-80">
              Werde jetzt Mitglied und trainiere ab sofort 24/7 in deinem SmartGym.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Deine E-Mail Adresse"
                className="flex-1 px-8 py-4 rounded-full bg-white/90 border-0 focus:ring-4 focus:ring-black/20 outline-none text-black font-medium"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                {status === 'sending' ? '...' : 'Los geht\'s'}
              </button>
            </form>
            {status === 'success' && (
              <p className="mt-4 font-bold">✓ Anfrage gesendet!</p>
            )}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-8 border-t border-white/10 text-center text-zinc-500 text-sm">
        <p>© 2026 SmartGym · Part of <span className="text-white font-medium">Fitness Nation</span></p>
      </footer>

    </div>
  )
}

export default App