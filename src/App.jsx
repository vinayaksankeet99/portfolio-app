import { useState, useEffect } from 'react'
import './App.css'

// Helper function to get asset path with base URL
const getAssetPath = (path) => {
  if (path.startsWith('http')) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}

// Project data extracted from the portfolio
const projects = [
  {
    id: 1,
    name: "TWINDO.AI",
    description: "Digital smart tool suite that gives wind energy organizations and workers a data-driven edge in planning, delivering, and tracking projects.",
    tags: ["Team Lead", "Flutter","Full-Stack", "Native", "AI/ML"],
    website: "twindo.ai",
    playStore: "https://play.google.com/store/apps/details?id=com.twindo.mobile&hl=en_IN",
    appStore: "https://apps.apple.com/us/app/twindo/id6449618251",
    banner: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1280&h=720&fit=crop"
  },
  {
    id: 2,
    name: "BEING.APP",
    description: "A unique self-therapy app that cares. Uses AI & ML to identify your pain points and delivers automated mental health care.",
    tags: ["Native", "Team Lead", "Flutter"],
    playStore: "https://play.google.com/store/apps/details?id=to.being.now",
    appStore: "https://apps.apple.com/in/app/being-my-mental-health-friend/id1551320884",
    banner: "being_dash.png"
  },
  {
    id: 3,
    name: "DIVIDE.MONEY",
    description: "Split Bills with Friends - Advanced expense management and bill splitting made simple.",
    tags: ["Flutter", "Full-Stack"],
    website: "https://projectxco.org/divide",
    playStore: "https://play.google.com/store/apps/details?id=com.projectx.divide",
    appStore: "https://apps.apple.com/us/app/divide-bill-splitting-app/id6739696854",
    banner: "divide.png"
  },
  {
    id: 4,
    name: "GENIOPAY.BANK",
    description: "The Swiss Army Knife of borderless payments - mobile banking redefined.",
    tags: ["Flutter", "Team Lead", "Native"],
    website: "",
    playStore: "https://play.google.com/store/apps/details?id=com.geniopay.borderless",
    appStore: "https://testflight.apple.com/join/LQ9jECOl",
    banner: "geniopay.png"
  },
  {
    id: 5,
    name: "KUDDLE.PETCARE",
    description: "An app that delivers pet care services on-demand - professional care at your doorstep.",
    tags: ["Native", "Flutter", "Kotlin/Ktor","Full-Stack"],
    website: "",
    playStore: "https://play.google.com/store/apps/details?id=com.kuddle.app&hl=en_IN&gl=US",
    appStore: "https://apps.apple.com/in/app/kuddle-pet/id1602279487",
    banner: "kuddle.png"
  },
  {
    id: 6,
    name: "LIFELINE.ASTER",
    description: "India's first emergency medical dispatch application by Aster DM Healthcare.",
    tags: ["Flutter","Firebase"],
    website: "",
    playStore: "https://play.google.com/store/apps/details?id=com.astermims.lifeline",
    appStore: "",
    banner: "lifeline_bg.png"
  },
  {
    id: 7,
    name: "XDROP.TRANSFER",
    description: "Cross-platform file transfer tool built to break the Apple ecosystem barriers.",
    tags: ["Co-Founder", "Desktop (Mac/Win)", "Flutter","Full-Stack"],
    website: "",
    playStore: "https://play.google.com/store/apps/details?id=com.xdrop.release&hl=en_IN&gl=US",
    appStore: "https://apps.apple.com/us/app/xdrop-fastest-file-transfer/id1546033106",
    banner: "xdrop.png"
  },
  {
    id: 8,
    name: "PUMP.FITNESS_ML",
    description: "ML-based fitness app that detects body movements and gives insights on form with automated rep counting.",
    tags: ["Native", "Flutter"],
    website: "",
    playStore: "https://play.google.com/store/apps/details?id=com.pump.application",
    appStore: "",
    banner: "pump.png"
  },
  {
    id: 9,
    name: "WIDGETS.CREATORS",
    description: "Home-screen widget app for content creators to connect accounts and view channel analytics across platforms.",
    tags: ["Flutter","Native"],
    website: "",
    playStore: "https://play.google.com/store/apps/details?id=com.appsbyt.widgetscreator",
    appStore: "https://apps.apple.com/in/app/widgets-for-creators/id6499074364",
    banner: "widgets_for_creator.png"
  },
  {
    id: 10,
    name: "MATCHA.RESUME",
    description: "An AI Resume Builder - Create professional resumes powered by artificial intelligence.",
    tags: ["Flutter", "React", "Full-Stack"],
    website: "https://matcharesume.com",
    playStore: "",
    appStore: "",
    banner: "matcha.png"
  }
];

function App() {
  const [selectedFilter, setSelectedFilter] = useState('All_Files')

  // Animation states for hero section
  const [systemInitText, setSystemInitText] = useState('')
  const [showSystemInitCursor, setShowSystemInitCursor] = useState(true)
  const [helloText, setHelloText] = useState('')
  const [showHelloCursor, setShowHelloCursor] = useState(false)
  const [descText, setDescText] = useState('')
  const [showDescCursor, setShowDescCursor] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [imageReveal, setImageReveal] = useState(0)
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false)

  const systemInitFull = 'System.initialize()'
  const helloFull = 'HELLO.'
  const descFull = "I'm Vinayak Sankeet, a Lead Mobile Developer crafting high-performance, minimalist mobile experiences with mathematical precision and clean system architecture."

  // Terminal typing animation effect
  useEffect(() => {
    let currentTimeout
    let imageInterval

    // Total animation time: 2000ms (2 seconds)
    // Image will complete in 2000ms
    // Text animations will also complete in 2000ms

    // Start image reveal animation immediately - completes in 2000ms
    imageInterval = setInterval(() => {
      setImageReveal(prev => {
        if (prev >= 100) {
          clearInterval(imageInterval)
          return 100
        }
        return prev + 2 // 50 steps * 40ms = 2000ms
      })
    }, 40)

    // Type System.initialize() - 19 chars * 20ms = 380ms
    let systemInitIndex = 0
    const typeSystemInit = () => {
      if (systemInitIndex < systemInitFull.length) {
        setSystemInitText(systemInitFull.slice(0, systemInitIndex + 1))
        systemInitIndex++
        currentTimeout = setTimeout(typeSystemInit, 20)
      } else {
        // Finished typing system init, wait 100ms
        currentTimeout = setTimeout(() => {
          setShowSystemInitCursor(false)
          setShowHelloCursor(true)
          typeHello()
        }, 100)
      }
    }

    // Type HELLO. - 6 chars * 80ms = 480ms
    let helloIndex = 0
    const typeHello = () => {
      if (helloIndex < helloFull.length) {
        setHelloText(helloFull.slice(0, helloIndex + 1))
        helloIndex++
        currentTimeout = setTimeout(typeHello, 80)
      } else {
        // Finished typing hello, wait 100ms
        currentTimeout = setTimeout(() => {
          setShowHelloCursor(false)
          setShowDescCursor(true)
          typeDesc()
        }, 100)
      }
    }

    // Type description - 156 chars * 6ms = 936ms
    let descIndex = 0
    const typeDesc = () => {
      if (descIndex < descFull.length) {
        setDescText(descFull.slice(0, descIndex + 1))
        descIndex++
        currentTimeout = setTimeout(typeDesc, 6)
      } else {
        // Finished typing description, hide cursor and show buttons
        // Total so far: 380 + 100 + 480 + 100 + 936 = 1996ms
        currentTimeout = setTimeout(() => {
          setShowDescCursor(false)
          setShowButtons(true)
          // Mark hero animation as complete after buttons appear
          currentTimeout = setTimeout(() => {
            setHeroAnimationComplete(true)
          }, 200)
        }, 4) // Small delay to reach exactly 2000ms
      }
    }

    // Start the animation sequence
    typeSystemInit()

    // Cleanup function
    return () => {
      if (currentTimeout) {
        clearTimeout(currentTimeout)
      }
      if (imageInterval) {
        clearInterval(imageInterval)
      }
    }
  }, [])

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'All_Files'
    ? projects
    : projects.filter(project => project.tags.includes(selectedFilter))

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100">
      {/* Navigation */}
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-20 lg:px-40 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 terminal-text">
          <span className="text-white font-bold text-xl tracking-tighter">VS_ROOT</span>
          <span className="animate-pulse w-2 h-5 bg-white"></span>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center terminal-text">
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-slate-400 hover:text-white text-sm transition-colors" href="#experience">[Experience]</a>
            <a className="text-slate-400 hover:text-white text-sm transition-colors" href="#projects">[My Work]</a>
            <a className="text-slate-400 hover:text-white text-sm transition-colors" href="#skills">[Skills]</a>
            <a className="text-slate-400 hover:text-white text-sm transition-colors" href="#contact">[Contact]</a>
          </nav>
          <a href={getAssetPath("Vinayak Sankeet Lead Mobile Developer Resume.pdf")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-white px-4 py-1.5 bg-white text-[#0a0a0a] text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all">
            Resume.sh
          </a>
        </div>
      </header>

      <main className="px-6 md:px-20 lg:px-40 py-12 md:py-24">
        {/* Hero Section */}
        <div className="mb-32">
          <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center">
            <div className="w-full aspect-square md:aspect-video lg:aspect-square lg:w-1/2 bg-slate-900 border border-white/10 overflow-hidden relative">
              <img
                src={getAssetPath("hero_image.png")}
                alt="Developer Terminal"
                className="w-full h-full object-cover"
              />
              {/* Scanline reveal effect */}
              <div
                className="absolute inset-0 bg-slate-900 transition-all duration-100"
                style={{
                  clipPath: `inset(${imageReveal}% 0 0 0)`
                }}
              />
              {/* Active scanline */}
              {imageReveal < 100 && (
                <div
                  className="absolute left-0 right-0 h-1 bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  style={{
                    top: `${imageReveal}%`
                  }}
                />
              )}
            </div>
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-4">
                <span className="terminal-text text-white/60 text-sm uppercase tracking-[0.2em] min-h-[20px]">
                  {systemInitText}
                  {showSystemInitCursor && <span className="inline-block w-2 h-3 bg-white/60 ml-1 animate-pulse"></span>}
                </span>
                <h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter min-h-[80px] md:min-h-[96px] lg:min-h-[112px]">
                  {helloText}
                  {showHelloCursor && <span className="inline-block w-4 h-20 md:w-6 md:h-24 lg:w-8 lg:h-28 bg-white ml-2 animate-pulse"></span>}
                </h1>
                <div className="terminal-text text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl min-h-[120px]">
                  {descText.split('Vinayak Sankeet').map((part, index) => (
                    <span key={index}>
                      {part}
                      {index === 0 && descText.includes('Vinayak Sankeet') && (
                        <span className="text-white font-bold">Vinayak Sankeet</span>
                      )}
                    </span>
                  ))}
                  {showDescCursor && <span className="inline-block w-2 h-5 bg-slate-400 ml-1 animate-pulse"></span>}
                </div>
              </div>
              <div className={`flex flex-wrap gap-4 transition-all duration-500 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <button className="flex items-center justify-center border-2 border-white bg-white text-[#0a0a0a] px-8 py-3 text-sm font-black uppercase tracking-widest hover:bg-transparent hover:text-white transition-all">
                  View_Projects
                </button>
                <a href="#contact" className="flex items-center justify-center border border-white/20 text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                  Get_In_Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className={`mb-32 scroll-mt-24 transition-all duration-1000 ${heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="terminal-text text-white text-xl font-bold uppercase tracking-widest">./Experience</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="group border border-white/10 bg-white/5 p-8 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
              <span className="material-symbols-outlined mb-6 scale-150 block">developer_board</span>
              <h3 className="terminal-text text-lg font-bold mb-3 uppercase">Architecture</h3>
              <p className="terminal-text text-sm opacity-70 leading-relaxed">Designing modular, scalable frameworks for iOS and Android that stand the test of time and scale.</p>
            </div>
            <div className="group border border-white/10 bg-white/5 p-8 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
              <span className="material-symbols-outlined mb-6 scale-150 block">groups</span>
              <h3 className="terminal-text text-lg font-bold mb-3 uppercase">Leadership</h3>
              <p className="terminal-text text-sm opacity-70 leading-relaxed">Guiding cross-functional engineering teams through complex sprints with a focus on code quality.</p>
            </div>
            <div className="group border border-white/10 bg-white/5 p-8 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
              <span className="material-symbols-outlined mb-6 scale-150 block">speed</span>
              <h3 className="terminal-text text-lg font-bold mb-3 uppercase">Performance</h3>
              <p className="terminal-text text-sm opacity-70 leading-relaxed">Hardcore optimization for fluid 120Hz interfaces and zero-latency data synchronization.</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className={`mb-32 scroll-mt-24 transition-all duration-1000 delay-200 ${heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Breadcrumbs / Status Bar */}
          <div className="mb-12 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white/40 text-xs terminal-text">
              <span>HOST: vinayak-portfolio</span>
              <span>|</span>
              <span>PATH: /dev/mobile</span>
              <span>|</span>
              <span className="text-green-500 animate-pulse">● ONLINE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase terminal-text">
              <span className="text-white/20">$</span> ls ./my_work
            </h1>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['All_Files', 'Flutter', 'Native', 'Full-Stack'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`border px-4 py-1 text-xs font-bold uppercase terminal-text transition-colors ${
                  selectedFilter === filter
                    ? 'border-white bg-white text-[#0a0a0a]'
                    : 'border-white/20 hover:border-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group border-r border-b border-white/10 p-6 flex flex-col gap-6 hover:bg-white/[0.02] transition-colors relative"
              >
                <div className="absolute top-2 right-4 text-[10px] text-white/20 terminal-text">
                  {String(index + 1).padStart(2, '0')}_INIT
                </div>
                <div className="aspect-video w-full bg-white/5 border border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#0a0a0a]/80 z-10">
                    <span className="text-xs font-bold border border-white px-3 py-1 terminal-text">VIEW_SOURCE</span>
                  </div>
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={project.name}
                    src={getAssetPath(project.banner)}
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold tracking-tight terminal-text">{project.name}</h3>
                  <p className="terminal-text text-sm text-white/60 leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold px-2 py-0.5 border border-white/20 text-white/40 uppercase terminal-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="mt-auto pt-4 flex gap-2">
                    {project.website && (
                      <a
                        href={project.website.startsWith('http') ? project.website : `https://${project.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold px-3 py-1.5 border border-white/20 hover:border-white hover:bg-white/10 transition-all uppercase terminal-text"
                      >
                        WEB
                      </a>
                    )}
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold px-3 py-1.5 border border-white/20 hover:border-white hover:bg-white/10 transition-all uppercase terminal-text"
                      >
                        ANDROID
                      </a>
                    )}
                    {project.appStore && (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold px-3 py-1.5 border border-white/20 hover:border-white hover:bg-white/10 transition-all uppercase terminal-text"
                      >
                        iOS
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Empty Project / New Entry */}
            <div className="group border-r border-b border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/[0.05] transition-colors border-dashed bg-white/[0.01]">
              <span className="material-symbols-outlined text-4xl text-white/20 group-hover:text-white/60 transition-colors">add_box</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors terminal-text">mkdir new_project</p>
            </div>
          </div>

          {/* Terminal Footer Output */}
          <div className="mt-12 p-6 border border-white/10 bg-white/[0.02] terminal-text">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500/50"></div>
              <div className="w-2 h-2 bg-yellow-500/50"></div>
              <div className="w-2 h-2 bg-green-500/50"></div>
              <span className="text-[10px] text-white/40 ml-2 uppercase tracking-widest">system_logs</span>
            </div>
            <div className="terminal-text text-xs space-y-1">
              <p className="terminal-text text-white/40"><span className="text-green-500/60">[OK]</span> UI_RENDER_COMPLETED: {filteredProjects.length} projects loaded</p>
              <p className="terminal-text text-white/40"><span className="text-green-500/60">[OK]</span> ASSETS_FETCHED: Grayscale filters applied</p>
              <p className="terminal-text text-white/40"><span className="text-blue-500/60">[INFO]</span> SYSTEM_READY: Waiting for user input...</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="terminal-text text-white">$</span>
                <span className="w-2 h-4 bg-white animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Kernel / Skills */}
        <div id="skills" className={`mb-32 scroll-mt-24 transition-all duration-1000 delay-[400ms] ${heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-white text-5xl font-black leading-tight tracking-tighter">
                TECHNICAL<br />KERNEL
              </h2>
              <p className="terminal-text text-slate-400 text-base leading-relaxed max-w-2xl">
                Full-stack engineer specializing in mobile-first development, scalable backend systems, and AI-powered automations. I bridge the gap between low-level optimization and high-level user experience.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 border-t border-l border-white/10">
              {/* Mobile Development */}
              <div className="flex flex-col gap-3 p-6 border-r border-b border-white/10 bg-white/[0.02]">
                <span className="material-symbols-outlined text-white text-2xl">smartphone</span>
                <h3 className="terminal-text text-xs font-bold text-white/60 uppercase tracking-widest">Mobile Apps</h3>
                <div className="flex flex-col gap-1">
                  <span className="terminal-text text-sm text-white">Native: Swift / Kotlin</span>
                  <span className="terminal-text text-sm text-white">Cross Platform: Flutter</span>
                </div>
              </div>

              {/* Web Development */}
              <div className="flex flex-col gap-3 p-6 border-r border-b border-white/10 bg-white/[0.02]">
                <span className="material-symbols-outlined text-white text-2xl">language</span>
                <h3 className="terminal-text text-xs font-bold text-white/60 uppercase tracking-widest">Web Development</h3>
                <div className="flex flex-col gap-1">
                  <span className="terminal-text text-sm text-white">React</span>
                  <span className="terminal-text text-sm text-white">Flutter Web</span>
                </div>
              </div>

              {/* Backend & Infrastructure */}
              <div className="flex flex-col gap-3 p-6 border-r border-b border-white/10 bg-white/[0.02]">
                <span className="material-symbols-outlined text-white text-2xl">dns</span>
                <h3 className="terminal-text text-xs font-bold text-white/60 uppercase tracking-widest">Backend & Infra</h3>
                <div className="flex flex-col gap-1">
                  <span className="terminal-text text-sm text-white">PHP / Symfony</span>
                  <span className="terminal-text text-sm text-white">Scalable Systems</span>
                </div>
              </div>

              {/* AI & Automation */}
              <div className="flex flex-col gap-3 p-6 border-r border-b border-white/10 bg-white/[0.02]">
                <span className="material-symbols-outlined text-white text-2xl">smart_toy</span>
                <h3 className="terminal-text text-xs font-bold text-white/60 uppercase tracking-widest">AI & Automation</h3>
                <div className="flex flex-col gap-1">
                  <span className="terminal-text text-sm text-white">Python</span>
                  <span className="terminal-text text-sm text-white">AI Agents</span>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="flex flex-col gap-3 p-6 border-r border-b border-white/10 bg-white/[0.02]">
                <span className="material-symbols-outlined text-white text-2xl">cloud</span>
                <h3 className="terminal-text text-xs font-bold text-white/60 uppercase tracking-widest">Cloud & DevOps</h3>
                <div className="flex flex-col gap-1">
                  <span className="terminal-text text-sm text-white">AWS / GCP</span>
                  <span className="terminal-text text-sm text-white">Docker / CI/CD</span>
                </div>
              </div>

              {/* Database */}
              <div className="flex flex-col gap-3 p-6 border-r border-b border-white/10 bg-white/[0.02]">
                <span className="material-symbols-outlined text-white text-2xl">storage</span>
                <h3 className="terminal-text text-xs font-bold text-white/60 uppercase tracking-widest">Database</h3>
                <div className="flex flex-col gap-1">
                  <span className="terminal-text text-sm text-white">PostgreSQL</span>
                  <span className="terminal-text text-sm text-white">Supabase / Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className={`mb-16 scroll-mt-24 transition-all duration-1000 delay-[600ms] ${heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="border border-white/10 bg-white/[0.02] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] -mr-48 -mt-48"></div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 flex items-center justify-center text-white mb-8">
                <span className="material-symbols-outlined text-4xl">mail</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight terminal-text">
                Let's build something <br />
                <span className="text-white underline decoration-white/30 underline-offset-8">extraordinary.</span>
              </h2>
              <p className="terminal-text text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                Currently open for new opportunities and collaborations. Let's create something remarkable together.
              </p>
              <a
                href="mailto:vinayaksankeet@gmail.com"
                className="border-2 border-white bg-white text-[#0a0a0a] px-10 py-5 font-bold text-lg hover:bg-transparent hover:text-white transition-all uppercase tracking-widest terminal-text"
              >
                Get_In_Touch
              </a>

              <div className="flex gap-8 mt-16 terminal-text text-xs uppercase tracking-widest">
                <a href="https://github.com/vinayaksankeet99/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/vinayaksankeet/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://x.com/appsbyt" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`mt-auto border-t border-white/10 px-6 py-10 md:px-20 lg:px-40 bg-white/[0.02] transition-all duration-1000 delay-[800ms] ${heroAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="terminal-text">
            <p className="terminal-text text-white font-bold text-sm">VINAYAK_SANKEET_v2.0.4</p>
            <p className="terminal-text text-slate-500 text-xs mt-1">© {new Date().getFullYear()} ALL RIGHTS RESERVED. KEEP_MOVING.</p>
          </div>
          <div className="flex gap-8 terminal-text text-xs uppercase tracking-widest">
            <a className="text-slate-400 hover:text-white transition-colors" href="https://github.com/vinayaksankeet99/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-slate-400 hover:text-white transition-colors" href="https://www.linkedin.com/in/vinayaksankeet/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-slate-400 hover:text-white transition-colors" href="https://x.com/appsbyt" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
