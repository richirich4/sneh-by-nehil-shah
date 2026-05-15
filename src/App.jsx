import logo from './assets/brand-logo.svg';

export default function App() {
  const whatsappNumber = '8600126927';

  const categories = [
    {
      title: 'Gold Jewellery',
      image:
        'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
      desc: 'Luxury handcrafted gold collections for weddings and premium occasions.',
    },
    {
      title: 'Silver Jewellery',
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      desc: 'Modern silver jewellery for everyday elegance and gifting.',
    },
    {
      title: 'Lab Grown Diamonds',
      image:
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1200&auto=format&fit=crop',
      desc: 'Sustainable diamond designs made for contemporary luxury.',
    },
  ];

  const trendingProducts = [
    {
      name: 'Infinity Diamond Bracelet',
      price: '₹1,25,000',
      image:
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Emerald Gold Necklace',
      price: '₹2,40,000',
      image:
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Silver Luxury Ring',
      price: '₹12,999',
      image:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const liveRates = [
    {
      metal: '24K Gold',
      price: '₹9,450 / gram',
      change: '+1.8%',
    },
    {
      metal: '22K Gold',
      price: '₹8,660 / gram',
      change: '+1.3%',
    },
    {
      metal: 'Silver',
      price: '₹112 / gram',
      change: '+0.9%',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="SNEH By Nehil Shah Logo" className="h-14 w-14 rounded-3xl bg-white/10 p-2" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase text-yellow-300">SNEH</h1>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">By Nehil Shah</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-white/90">
            <a href="#home" className="hover:text-yellow-300 transition">Home</a>
            <a href="#categories" className="hover:text-yellow-300 transition">Collections</a>
            <a href="#trending" className="hover:text-yellow-300 transition">Trending</a>
            <a href="#astro" className="hover:text-yellow-300 transition">Astro Gems</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </nav>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-green-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-green-400"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative h-[90vh] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),transparent_40%),linear-gradient(180deg,rgba(10,10,10,0.95),rgba(10,10,10,0.98))]" />
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury jewellery background"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <div className="max-w-4xl text-center">
              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-yellow-300">Luxury jewellery studio</p>
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
                Jewellery for<span className="text-yellow-400"> every milestone.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-base md:text-xl text-gray-300 leading-relaxed">
                Experience premium gold, silver, and lab-grown diamond collections designed for bridal, gifting, and everyday glamour.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="#categories"
                  className="rounded-full bg-yellow-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:bg-yellow-300"
                >
                  Explore Collection
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white/20"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-300 mb-4">Collections</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Trending Categories</h3>
            <p className="max-w-2xl mx-auto text-gray-400">
              Premium jewellery collections crafted with luxury finishing and modern styling.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl shadow-black/20 transition hover:-translate-y-2">
                <div className="h-80 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-semibold mb-3 text-white">{item.title}</h4>
                  <p className="text-gray-300 mb-6">{item.desc}</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold uppercase text-black transition hover:bg-yellow-300"
                  >
                    Shop on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.1),transparent_35%)] border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-300 mb-4">Live rates</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Gold & Silver Prices</h3>
              <p className="max-w-2xl mx-auto text-gray-400">
                Daily updated precious metal market prices to help you shop with confidence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {liveRates.map((rate) => (
                <div key={rate.metal} className="rounded-[2rem] border border-yellow-400/10 bg-black/70 p-8 shadow-2xl shadow-black/40 transition hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-semibold text-white">{rate.metal}</h4>
                    <span className="rounded-full bg-green-500/20 px-4 py-1 text-sm font-semibold text-green-300">{rate.change}</span>
                  </div>
                  <p className="text-4xl font-extrabold text-yellow-300 mb-5">{rate.price}</p>
                  <p className="text-gray-400 mb-8">Market-linked rate updated daily for your convenience.</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold uppercase text-black transition hover:bg-yellow-300"
                  >
                    Enquire Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trending" className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <h3 className="text-4xl font-bold mb-3">Trending Jewellery</h3>
                <p className="text-gray-400">Luxury collections loved by modern customers.</p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition"
              >
                Custom Design Inquiry
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {trendingProducts.map((product) => (
                <div key={product.name} className="bg-black border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                    <p className="text-yellow-400 text-xl mb-5">{product.price}</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-full bg-yellow-400 px-5 py-3 text-center text-sm font-bold uppercase text-black transition hover:bg-yellow-300"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900 border-y border-white/10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="bg-yellow-400/20 text-yellow-300 px-5 py-2 rounded-full text-sm font-semibold">
                AI Powered Luxury Experience
              </span>

              <h3 className="text-5xl font-extrabold mt-6 mb-6 leading-tight">
                Smart AI Jewellery Recommendation
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Customers can discover perfect jewellery based on style, occasion,
                gemstone preference, budget and fashion trends. The AI system helps
                users instantly find matching necklaces, rings, bracelets and diamond
                collections.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  'AI Style Matching',
                  'Budget Based Suggestions',
                  'Gemstone Recommendation',
                  'Wedding Collection Finder',
                  'Trending Fashion Analysis',
                  'Custom Jewellery AI Assistant',
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="font-medium text-white">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold transition"
              >
                Get AI Jewellery Suggestions
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full"></div>

              <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-gray-400 text-sm">AI Recommendation Engine</p>
                    <h4 className="text-3xl font-bold mt-2">Luxury Match Score</h4>
                  </div>

                  <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-black font-extrabold text-2xl">
                    98%
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: 'Ruby Diamond Bracelet',
                      match: 'Perfect for Premium Occasions',
                    },
                    {
                      title: 'Lab Grown Diamond Ring',
                      match: 'Trending for Modern Luxury',
                    },
                    {
                      title: 'Emerald Gold Necklace',
                      match: 'Recommended for Wedding Collection',
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/60 border border-white/10 rounded-2xl p-5 flex items-center justify-between">
                      <div>
                        <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                        <p className="text-gray-400 text-sm">{item.match}</p>
                      </div>

                      <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              '925 Silver Certified',
              'Hallmarked Gold Jewellery',
              'Lab Grown Diamond Collection',
              'Custom Jewellery Manufacturing',
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">0{i + 1}</h4>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="bg-yellow-400/20 text-yellow-300 px-5 py-2 rounded-full text-sm font-semibold">
                Next Generation Jewellery Technology
              </span>

              <h3 className="text-5xl font-extrabold mt-6 mb-5">
                AI Face Matching & Virtual Jewellery Experience
              </h3>

              <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                Customers can upload selfies or use live camera access to instantly try
                rings, necklaces, earrings and bracelets in real time before purchasing.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:scale-[1.02] transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
                  alt="AI Face Matching"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h4 className="text-3xl font-bold mb-4">AI Face Jewellery Matching</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Smart AI scans face shape, skin tone and styling preferences to recommend ideal luxury jewellery combinations.
                  </p>

                  <ul className="space-y-3 text-gray-300">
                    <li>• Face Shape Detection</li>
                    <li>• Skin Tone Matching</li>
                    <li>• Luxury Fashion Styling</li>
                    <li>• Premium Jewellery Pairing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:scale-[1.02] transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
                  alt="Virtual Try On"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h4 className="text-3xl font-bold mb-4">Live Virtual Try-On</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Customers can open mobile camera and try necklaces, earrings, rings and bracelets in real time before purchasing.
                  </p>

                  <ul className="space-y-3 text-gray-300">
                    <li>• Live Camera Detection</li>
                    <li>• Real-Time Jewellery Overlay</li>
                    <li>• HD Luxury Preview</li>
                    <li>• Share on WhatsApp & Instagram</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:scale-[1.02] transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
                  alt="Astrology Gemstone"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h4 className="text-3xl font-bold mb-4">Astrology Gemstone AI</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Customers can enter birth date, time and place to receive AI-powered gemstone recommendations according to astrology.
                  </p>

                  <ul className="space-y-3 text-gray-300">
                    <li>• Birth Chart Analysis</li>
                    <li>• Gemstone Recommendation</li>
                    <li>• Zodiac Jewellery Collection</li>
                    <li>• Lucky Bracelet Suggestions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-yellow-400/10 to-white/5 border border-yellow-400/20 rounded-[40px] p-10 text-center">
              <h4 className="text-4xl font-bold mb-5">Personal Luxury Jewellery Consultant</h4>
              <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
                AI combines fashion trends, face analysis and astrology to create a personalized jewellery shopping experience for every customer.
              </p>

              <div className="flex flex-wrap justify-center gap-5">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold transition"
                >
                  Start AI Consultation
                </a>

                <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition">
                  Launch Virtual Try-On
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-4">SNEH BY NEHIL SHAH</h4>
            <p className="text-gray-400 leading-relaxed">
              Premium silver, gold and lab grown diamond jewellery brand focused on luxury, craftsmanship and modern fashion.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#home">Home</a>
              <a href="#categories">Collections</a>
              <a href="#trending">Trending Products</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Direct Contact</h5>
            <p className="text-gray-400 mb-4">WhatsApp your jewellery requirement directly.</p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-12 text-sm">
          © 2026 SNEH BY NEHIL SHAH. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
