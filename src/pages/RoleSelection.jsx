import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const roles = [
  {
    title: "Lawyer",
    description: "Draft legal documents, contracts, and case summaries with AI precision.",
    avatar: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
    bgAccent: "bg-amber-500/10",
    borderAccent: "border-amber-500/30",
  },
  {
    title: "Doctor",
    description: "Generate medical reports, patient notes, and clinical documentation effortlessly.",
    avatar: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.3)",
    bgAccent: "bg-emerald-500/10",
    borderAccent: "border-emerald-500/30",
  },
  {
    title: "Engineer",
    description: "Write technical specs, code documentation, and project proposals with ease.",
    avatar: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.96-5.96a2.12 2.12 0 010-3L9.93 1.74a2.12 2.12 0 013 0l5.96 5.96a2.12 2.12 0 010 3l-4.47 4.47a2.12 2.12 0 01-3 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
      </svg>
    ),
    gradient: "from-sky-500 to-blue-500",
    glow: "rgba(14,165,233,0.3)",
    bgAccent: "bg-sky-500/10",
    borderAccent: "border-sky-500/30",
  },
  {
    title: "Faculty",
    description: "Create lesson plans, research papers, and academic content seamlessly.",
    avatar: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.3)",
    bgAccent: "bg-violet-500/10",
    borderAccent: "border-violet-500/30",
  },
  {
    title: "Writer",
    description: "Craft compelling stories, articles, and creative content with AI assistance.",
    avatar: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
    ),
    gradient: "from-rose-500 to-pink-500",
    glow: "rgba(244,63,94,0.3)",
    bgAccent: "bg-rose-500/10",
    borderAccent: "border-rose-500/30",
  },
  {
    title: "Student",
    description: "Summarize notes, generate essays, and prepare study materials in seconds.",
    avatar: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    gradient: "from-cyan-500 to-sky-500",
    glow: "rgba(6,182,212,0.3)",
    bgAccent: "bg-cyan-500/10",
    borderAccent: "border-cyan-500/30",
  },
];

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-deep">
      {/* Floating gradient orbs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[120px]"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[120px]"
        style={{ animation: "float 10s ease-in-out infinite reverse" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16">
        {/* Back button */}
        <motion.button
          onClick={() => navigate("/")}
          className="mb-8 self-start ml-4 sm:ml-12 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </motion.button>

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
            Choose Your Role
          </h1>
          <p className="mt-4 max-w-lg mx-auto text-lg text-slate-400">
            Select how you want to use TextifyAI. Each role is tailored to your workflow.
          </p>
        </motion.div>

        {/* Role cards grid */}
        <motion.div
          className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {roles.map((role) => (
            <motion.button
              key={role.title}
              variants={fadeUp}
              onClick={() => navigate(`/workspace/${role.title.toLowerCase()}`)}
              className={`group relative flex flex-col items-center gap-4 rounded-2xl border ${role.borderAccent} ${role.bgAccent} bg-bg-card p-8 text-center transition-all duration-300 hover:scale-[1.03] hover:border-opacity-60 cursor-pointer`}
              style={{
                boxShadow: `0 0 0px ${role.glow}`,
              }}
              whileHover={{
                boxShadow: `0 0 30px ${role.glow}`,
              }}
            >
              {/* Avatar circle */}
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${role.gradient} text-white shadow-lg`}
              >
                {role.avatar}
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-white">
                Work as {role.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {role.description}
              </p>

              {/* Arrow indicator */}
              <div
                className={`mt-2 flex items-center gap-1 text-sm font-semibold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              >
                Get Started
                <svg className="h-4 w-4 stroke-current" style={{ color: "inherit" }} fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
