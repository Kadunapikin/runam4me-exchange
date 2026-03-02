export default function Home() {
  const whatsappNumber = "+2347036071563";
  const whatsappLink = `https://wa.me/2347036071563?text=Hello%20RunAm4me%20Exchange%2C%20I%20want%20to%20make%20a%20transaction`;

  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(135deg, #0a0a14 0%, #0f0f1e 40%, #0a1628 100%)" }}>

      {/* ── TICKER BAR ── */}
      <div className="overflow-hidden py-2" style={{ background: "linear-gradient(90deg, #fbbf24, #f59e0b)" }}>
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 px-4 text-black font-bold text-sm">
              <span>🔥 ONLY 2% FLAT FEE</span>
              <span>⚡ INSTANT NAIRA TRANSFER</span>
              <span>💎 TRUSTED OTC SERVICE</span>
              <span>🇳🇬 SERVING ABUJA & KADUNA</span>
              <span>📲 WHATSAPP: {whatsappNumber}</span>
              <span>✅ ZERO HIDDEN FEES</span>
              <span>🔥 ONLY 2% FLAT FEE</span>
              <span>⚡ INSTANT NAIRA TRANSFER</span>
              <span>💎 TRUSTED OTC SERVICE</span>
              <span>🇳🇬 SERVING ABUJA & KADUNA</span>
              <span>📲 WHATSAPP: {whatsappNumber}</span>
              <span>✅ ZERO HIDDEN FEES</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative px-4 pt-16 pb-12 text-center overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #fbbf24, transparent)" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />

        {/* Logo / Brand */}
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full border border-yellow-500/30"
          style={{ background: "rgba(251,191,36,0.08)" }}>
          <span className="text-2xl">₿</span>
          <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">RunAm4me Exchange</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-4">
          Buy & Sell Crypto
          <br />
          <span className="animate-shimmer">Instantly in Nigeria</span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Nigeria&apos;s most transparent crypto OTC service.
          <br className="hidden sm:block" />
          No surprises. No delays. Just results.
        </p>

        {/* Big fee badge */}
        <div className="inline-block mb-10 animate-float">
          <div className="relative px-10 py-6 rounded-2xl animate-pulse-glow"
            style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)" }}>
            <div className="text-black font-black text-6xl sm:text-7xl leading-none">2%</div>
            <div className="text-black/80 font-bold text-lg tracking-widest uppercase">Flat Fee Only</div>
            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12">
              BEST RATE
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-white">Chat on WhatsApp</span>
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-yellow-400 border border-yellow-500/40 transition-all duration-300 hover:scale-105 hover:border-yellow-400"
            style={{ background: "rgba(251,191,36,0.08)" }}
          >
            How It Works ↓
          </a>
        </div>

        <p className="mt-4 text-gray-500 text-sm">{whatsappNumber}</p>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="px-4 py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "2%", label: "Flat Fee", icon: "💰" },
            { value: "⚡", label: "Instant Transfer", icon: "" },
            { value: "0", label: "Hidden Fees", icon: "🚫" },
            { value: "24/7", label: "Support", icon: "📲" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center">
              <div className="text-3xl mb-1">{stat.icon || stat.value}</div>
              <div className="text-yellow-400 font-black text-2xl">{stat.icon ? stat.value : ""}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              We Beat Every Competitor
            </h2>
          </div>

          {/* Comparison table */}
          <div className="glass-card rounded-2xl overflow-hidden mb-10">
            <div className="grid grid-cols-3 text-center">
              <div className="p-4 border-b border-white/10">
                <div className="text-gray-400 text-sm font-medium">Feature</div>
              </div>
              <div className="p-4 border-b border-white/10" style={{ background: "rgba(251,191,36,0.1)" }}>
                <div className="text-yellow-400 font-bold text-sm">RunAm4me ✅</div>
              </div>
              <div className="p-4 border-b border-white/10">
                <div className="text-gray-500 text-sm">Others ❌</div>
              </div>

              {[
                ["Transaction Fee", "2% Flat", "3–5%"],
                ["Hidden Charges", "None", "Common"],
                ["Payment Speed", "Instant", "Delayed"],
                ["Communication", "Dedicated", "Poor"],
                ["Large Volumes", "Supported", "Limited"],
              ].map(([feature, ours, theirs], i) => (
                <>
                  <div key={`f${i}`} className="p-4 border-b border-white/5 text-gray-300 text-sm font-medium">{feature}</div>
                  <div key={`o${i}`} className="p-4 border-b border-white/5 text-center font-bold text-green-400 text-sm"
                    style={{ background: "rgba(251,191,36,0.05)" }}>{ours}</div>
                  <div key={`t${i}`} className="p-4 border-b border-white/5 text-center text-red-400 text-sm">{theirs}</div>
                </>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "💸",
                title: "Flat 2% Fee",
                desc: "No surprises. You always know exactly what you pay. ₦1M transaction = ₦20,000 fee. Period.",
              },
              {
                icon: "⚡",
                title: "Instant Naira Transfer",
                desc: "Once your crypto is confirmed, Naira hits your account immediately. No waiting, no excuses.",
              },
              {
                icon: "🔍",
                title: "Full Transparency",
                desc: "Every transaction comes with a clear breakdown. You see exactly what you're getting.",
              },
              {
                icon: "📞",
                title: "Dedicated Support",
                desc: "Real human support via WhatsApp. We respond fast and keep you updated every step.",
              },
              {
                icon: "🏦",
                title: "Large Volume Ready",
                desc: "Whether it's ₦100K or ₦50M, we handle it. Built for serious traders and businesses.",
              },
              {
                icon: "🇳🇬",
                title: "Nigeria-First",
                desc: "Built for Nigerians. Serving Abuja, Kaduna, and beyond. We understand your market.",
              },
            ].map((card, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              Done in 5 Easy Steps
            </h2>
            <p className="text-gray-400 mt-2">From first message to Naira in your account</p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                icon: "💬",
                title: "Contact via WhatsApp",
                desc: "Send us a message on WhatsApp with the amount you want to buy or sell.",
                color: "#fbbf24",
              },
              {
                step: "02",
                icon: "📊",
                title: "Rate Confirmed",
                desc: "We confirm the current rate and show you the full transaction breakdown — no hidden fees.",
                color: "#f59e0b",
              },
              {
                step: "03",
                icon: "₿",
                title: "Send Your Crypto",
                desc: "Transfer your crypto to our provided wallet address. We support USDT, BTC, and more.",
                color: "#d97706",
              },
              {
                step: "04",
                icon: "✅",
                title: "Confirmation Received",
                desc: "We confirm receipt of your crypto on the blockchain. Usually takes just a few minutes.",
                color: "#b45309",
              },
              {
                step: "05",
                icon: "🏦",
                title: "Naira Transferred Instantly",
                desc: "Naira is sent directly to your bank account immediately after confirmation.",
                color: "#92400e",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 glass-card rounded-2xl p-5 hover:border-yellow-500/20 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black text-black"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}99)` }}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVENUE EXAMPLE ── */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Transparent Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">See Exactly What You Pay</h2>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="text-gray-400 text-sm mb-1">Example Transaction</div>
              <div className="text-5xl font-black text-white">₦1,000,000</div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Transaction Amount", value: "₦1,000,000", highlight: false },
                { label: "Our Fee (2%)", value: "₦20,000", highlight: false },
                { label: "You Receive", value: "₦980,000", highlight: true },
              ].map((row, i) => (
                <div key={i} className={`flex justify-between items-center p-4 rounded-xl ${row.highlight
                  ? "border border-yellow-500/40"
                  : "border border-white/5"
                  }`}
                  style={row.highlight ? { background: "rgba(251,191,36,0.1)" } : { background: "rgba(255,255,255,0.03)" }}>
                  <span className={`font-medium ${row.highlight ? "text-yellow-400" : "text-gray-400"}`}>{row.label}</span>
                  <span className={`font-black text-xl ${row.highlight ? "text-yellow-400" : "text-white"}`}>{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                Compare: Competitors charge 3–5% = ₦30,000–₦50,000 on the same transaction
              </p>
              <p className="text-green-400 font-bold mt-1">You save ₦10,000–₦30,000 with RunAm4me! 🎉</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARGET MARKET ── */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Who We Serve</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Built For You</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { icon: "📈", label: "Crypto Traders" },
              { icon: "💻", label: "Freelancers (USDT)" },
              { icon: "💱", label: "Forex Traders" },
              { icon: "🏢", label: "Business Owners" },
              { icon: "🧑‍💻", label: "Tech-Savvy Youth" },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 text-center hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-white text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30"
              style={{ background: "rgba(251,191,36,0.08)" }}>
              <span className="text-yellow-400 text-sm font-bold">📍 Currently serving: Abuja & Kaduna</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-10 border border-yellow-500/20"
            style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.08), rgba(251,191,36,0.02))" }}>

            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Ready to Trade?
            </h2>
            <p className="text-gray-400 mb-2">
              Join hundreds of traders who trust RunAm4me Exchange
            </p>
            <p className="text-yellow-400 font-bold text-lg mb-8">
              Only 2% fee. Instant transfer. Zero stress.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
            >
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start Trading Now
            </a>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <span>📲 {whatsappNumber}</span>
              <span className="hidden sm:block">•</span>
              <span>🕐 Available 24/7</span>
              <span className="hidden sm:block">•</span>
              <span>🔒 Secure & Trusted</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-4 py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-yellow-400 text-xl">₿</span>
            <span className="text-white font-black text-lg tracking-widest">RUNAM4ME EXCHANGE</span>
          </div>
          <p className="text-gray-600 text-sm">
            Nigeria&apos;s most transparent crypto OTC service · 2% flat fee · Instant Naira transfer
          </p>
          <p className="text-gray-700 text-xs mt-2">
            © 2025 RunAm4me Exchange · Abuja & Kaduna, Nigeria
          </p>
        </div>
      </footer>

    </main>
  );
}
