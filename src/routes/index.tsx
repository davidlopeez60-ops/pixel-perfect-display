import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import cover from "@/assets/cover.png.asset.json";
import author from "@/assets/author.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Courage Faith Purpose — Devotions by Amelia Scott" },
      {
        name: "description",
        content:
          "Courage Faith Purpose: Devotions for a Meaningful Life by Amelia Scott. Finding strength and direction through every season. Published by Alpaca Authors.",
      },
      { property: "og:title", content: "Courage Faith Purpose — Amelia Scott" },
      {
        property: "og:description",
        content: "Devotions for a Meaningful Life. Finding strength and direction through every season.",
      },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* PLACEHOLDER LINKS — replace "#" with real URLs */
const LINKS = {
  amazon: "#",
  bn: "#",
  publisher: "https://alpacaauthors.com",
  sample: "#",
};

const NAV = [
  ["About the Book", "#about"],
  ["Inside", "#inside"],
  ["About the Author", "#author"],
  ["Get Your Copy", "#buy"],
];

function Leaf({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden>
      <path d="M4 20c4-6 9-10 16-12" />
      <path d="M9 15c-2-3-1-6 2-7 1 3 0 6-2 7Z" />
      <path d="M13 12c0-3 2-5 5-5 0 3-2 5-5 5Z" />
      <path d="M7 18c-3-1-4-3-3-5 2 0 4 2 3 5Z" />
    </svg>
  );
}

function Divider() {
  return (
    <div className="mx-auto flex max-w-xs items-center gap-4 text-sage" aria-hidden>
      <span className="h-px flex-1 bg-gold" />
      <Leaf />
      <span className="h-px flex-1 bg-gold" />
    </div>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

const btnSolid =
  "inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-base text-primary-foreground shadow-soft transition hover:bg-sage";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border border-forest px-7 py-3 text-base text-forest transition hover:bg-forest hover:text-cream";

function Index() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/30 bg-cream/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="label-caps text-forest">Amelia Scott</a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-forest/80 transition hover:text-sage">{l}</a>
            ))}
            <a href="#buy" className={`${btnSolid} px-5 py-2 text-sm`}>Buy Now</a>
          </nav>
          <button
            className="text-forest md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-gold/30 bg-cream px-6 py-6 md:hidden">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-forest">{l}</a>
            ))}
            <a href="#buy" onClick={() => setOpen(false)} className={btnSolid}>Buy Now</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="bg-dawn pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <Reveal className="text-center md:text-left">
            <p className="label-caps text-sage">Amelia Scott</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] md:text-7xl">
              Courage.<br />Faith.<br />Purpose.
            </h1>
            <p className="mt-6 font-serif text-3xl italic text-forest/85">Devotions for a Meaningful Life</p>
            <p className="mt-4 text-foreground/80">Finding strength and direction through every season.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
              <a href="#buy" className={btnSolid}>Get Your Copy</a>
              <a href={LINKS.sample} className={btnOutline}>Read a Sample</a>
            </div>
          </Reveal>
          <Reveal className="flex justify-center">
            <img
              src={cover.url}
              alt="Courage Faith Purpose hardcover book by Amelia Scott, with a sandy coastal path at sunrise"
              className="animate-float w-72 rounded-md mix-blend-multiply md:w-96"
            />
          </Reveal>
        </div>
      </section>

      {/* ABOUT THE BOOK — placeholder copy */}
      <section id="about" className="py-24">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <p className="label-caps text-sage">About the Book</p>
          <h2 className="mt-4 text-4xl md:text-5xl">A quiet companion for every season</h2>
          <div className="my-8"><Divider /></div>
          <p className="text-foreground/85">
            Life rarely moves in a straight line. There are seasons of joy and seasons of waiting, mornings full of
            hope and evenings heavy with questions. <em>Courage Faith Purpose</em> offers a gentle place to pause each
            day — a short reading, a verse to hold onto, and a reflection to carry with you.
          </p>
          <p className="mt-5 text-foreground/85">
            Through honest stories and Scripture, Amelia Scott invites you to find strength when you feel weary,
            direction when the path is unclear, and a deep, abiding peace that holds steady through it all.
          </p>
        </Reveal>
      </section>

      {/* WHAT'S INSIDE — placeholder copy */}
      <section id="inside" className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="label-caps text-sage">What's Inside</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Three threads, woven daily</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ["Courage", "M12 3v18M5 10l7-7 7 7", "Devotions for the moments that ask more of you than you think you have. Learn to step forward, trusting you are never alone."],
              ["Faith", "M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z", "Gentle reminders of God's faithfulness in every chapter of life. Rest in a love that does not change with the seasons."],
              ["Purpose", "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5v4l3 2", "Reflections that help you discover meaning in ordinary days. See how each small step is part of a greater story."],
            ].map(([t, d, p]) => (
              <Reveal key={t} className="rounded-2xl border border-gold/30 bg-card p-9 text-center shadow-soft">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-peach text-forest">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4"><path d={d} /></svg>
                </span>
                <h3 className="mt-6 text-2xl">{t}</h3>
                <p className="mt-3 text-base text-foreground/80">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24">
        <Reveal className="mx-auto max-w-2xl px-6">
          <p className="label-caps text-center text-sage">Who This Book Is For</p>
          <h2 className="mt-4 text-center text-4xl md:text-5xl">Written with you in mind</h2>
          <div className="my-8"><Divider /></div>
          <ul className="space-y-5">
            {[
              "Anyone walking through a season of change, loss, or new beginnings.",
              "Women seeking a calm, meaningful start to their day with God.",
              "Readers who long to grow in faith without feeling overwhelmed.",
              "Small groups and friends looking for a shared devotional journey.",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <Leaf className="mt-1.5 h-5 w-5 shrink-0 text-sage" />
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* SAMPLE REFLECTION — EDITABLE placeholder quote */}
      <section className="bg-peach py-24">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <p className="label-caps text-sage">A Sample Reflection</p>
          <blockquote className="mt-8 font-serif text-3xl italic leading-snug text-forest md:text-4xl">
            “Courage is not the absence of fear — it is the quiet decision to take the next step, trusting that the One
            who calls you will walk beside you.”
          </blockquote>
          <div className="mt-8"><Divider /></div>
          <p className="mt-4 text-sm text-foreground/70">From <em>Courage Faith Purpose</em> · placeholder excerpt</p>
        </Reveal>
      </section>

      {/* ABOUT THE AUTHOR — placeholder bio */}
      <section id="author" className="py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 md:grid-cols-[2fr_3fr]">
          <Reveal className="flex justify-center">
            <div className="rounded-full bg-teal/40 p-3">
              <img
                src={author.url}
                alt="Amelia Scott, smiling, with auburn curly hair against a soft teal wall"
                className="h-72 w-72 rounded-full object-cover shadow-book"
                style={{ objectPosition: "50% 28%" }}
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="label-caps text-sage">About the Author</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Amelia Scott</h2>
            <p className="mt-6 text-foreground/85">
              Amelia Scott writes for women who are seeking God in the middle of real life. A mother, friend, and
              lifelong student of Scripture, she has spent years encouraging others through Bible studies, letters,
              and long conversations over coffee.
            </p>
            <p className="mt-4 text-foreground/85">
              She loves early morning walks, coastal sunrises, and the quiet moments where faith feels close.
              <em> Courage Faith Purpose</em> is her heartfelt invitation to slow down and listen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GET YOUR COPY */}
      <section id="buy" className="bg-dawn py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal className="flex justify-center">
            <img src={cover.url} alt="Courage Faith Purpose book cover" className="w-64 mix-blend-multiply md:w-80" />
          </Reveal>
          <Reveal className="text-center md:text-left">
            <p className="label-caps text-sage">Get Your Copy</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Begin your journey today</h2>
            <p className="mt-5 text-foreground/80">Available in hardcover wherever books are sold.</p>
            <div className="mt-8 flex flex-col gap-3 sm:max-w-xs">
              <a href={LINKS.amazon} className={btnSolid}>Buy on Amazon</a>
              <a href={LINKS.bn} className={btnOutline}>Barnes &amp; Noble</a>
              <a href={LINKS.publisher} className={btnOutline}>Publisher Website</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EMAIL SIGNUP — static UI only */}
      <section className="py-24">
        <Reveal className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl">Receive a free devotion</h2>
          <p className="mt-3 text-foreground/80">A gentle word of encouragement, delivered to your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded-full border border-gold/50 bg-card px-6 py-3 text-base outline-none focus:border-sage"
            />
            <button className={btnSolid}>Send it to me</button>
          </form>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest py-14 text-center text-cream">
        <p className="label-caps">Alpaca Authors</p>
        <a href="https://alpacaauthors.com" className="mt-3 inline-block font-serif text-xl italic text-sand hover:text-cream">
          alpacaauthors.com
        </a>
        <div className="mt-6 flex justify-center gap-5" aria-label="Social links (placeholders)">
          {["Facebook", "Instagram", "Email"].map((s) => (
            <a key={s} href="#" aria-label={s} className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 transition hover:border-sand hover:text-sand">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                {s === "Facebook" && <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z" />}
                {s === "Instagram" && <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></>}
                {s === "Email" && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>}
              </svg>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-cream/70">© {new Date().getFullYear()} Amelia Scott · Alpaca Authors. All rights reserved.</p>
      </footer>
    </div>
  );
}
