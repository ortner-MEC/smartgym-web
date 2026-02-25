import { useState } from 'react'
import './index.css'

function App() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<null | 'sending' | 'success' | 'error'>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Dies wird später an das Kimi 2.5 Backend geleitet
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1500)
  }

  const facilities = [
    {
      title: 'Premium Geräte',
      description: 'Modernste Matrix- und Technogym-Maschinen für jedes Level.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Freihantelbereich',
      description: 'Viel Platz, Racks, Kurzhanteln bis 60kg. Alles was du brauchst.',
      icon: '🏋️‍♂️',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Cardio-Zone',
      description: 'Laufbänder, Stairmaster & Bikes mit Netflix & Co.',
      icon: '🏃‍♀️',
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=600&auto=format&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#a3e635] selection:text-black pb-20">
      
      {/* Navigation - Runder Look */}
      <nav className="fixed w-full z-50 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between px-6 py-3">
          <div className="text-xl font-black uppercase tracking-tighter">
            Smart<span className="text-[#a3e635]">Gym</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#facilities" className="hover:text-[#a3e635] transition-colors">Ausstattung</a>
            <a href="#about" className="hover:text-[#a3e635] transition-colors">Konzept</a>
            <a href="#contact" className="hover:text-[#a3e635] transition-colors">Franchise</a>
          </div>
          <button className="bg-[#a3e635] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-all hover:scale-105 active:scale-95">
            Mitglied werden
          </button>
        </div>
      </nav>

      {/* Hero Section - Sehr runde Elemente */}
      <header className="relative pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-12">
        <div className="bg-[#a3e635]/10 text-[#a3e635] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-8 border border-[#a3e635]/20">
          NEU IN SPANIEN
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
          No Limits.<br/> <span className="text-[#a3e635]">Just Fitness.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Dein 100% automatisiertes Smart Gym. 350m² feinste Ausstattung, geöffnet von 6:00 bis 1:00 Uhr. Keine Kompromisse.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-[#a3e635] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(163,230,53,0.3)]">
            Pre-Opening Angebot
          </button>
        </div>
      </header>

      {/* Facilities Section - Runde Karten im MyFitnessBox Style */}
      <section id="facilities" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Unsere <span className="text-zinc-500">Ausstattung</span>
            </h2>
            <p className="text-zinc-400 text-lg">Alles, was du für ein perfektes Workout brauchst. Auf 350 Quadratmetern kompromissloser Qualität.</p>
          </div>
          <button className="hidden md:block bg-zinc-900 text-white border border-zinc-800 px-6 py-3 rounded-full font-bold hover:bg-zinc-800 transition-colors">
            Komplette Liste ansehen
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => (
            <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90 z-10" />
                <img src={fac.image} alt={fac.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 z-20 bg-black/50 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full text-2xl border border-white/10">
                  {fac.icon}
                </div>
              </div>
              <div className="p-8 pt-4 relative z-20">
                <h3 className="text-2xl font-bold mb-3">{fac.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{fac.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Franchise/Contact (Kimi Backend Target) */}
      <section id="contact" className="mt-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#a3e635] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Werde Partner</h2>
            <p className="text-zinc-400 text-lg mb-10">
              Interesse an einem eigenen Smart Gym Franchise? Wir bauen ein automatisiertes Ökosystem.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Deine E-Mail Adresse" 
                className="flex-1 px-8 py-4 rounded-full bg-black/50 border border-zinc-700 focus:border-[#a3e635] outline-none text-white font-medium transition-colors"
              />
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#a3e635] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === 'sending' ? 'Wird gesendet...' : 'Anfrage senden'}
              </button>
            </form>
            
            {status === 'success' && (
              <div className="mt-4 inline-block bg-[#a3e635]/20 text-[#a3e635] px-6 py-2 rounded-full font-bold text-sm">
                ✓ Anfrage erfolgreich an Kimi-Backend weitergeleitet!
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}

export default App