/* ═══════════════════════════════════════════════════════════════════════════
 *  ██╗  ██╗██╗   ██╗ ██████╗██╗  ██╗██╗   ██╗    ██████╗ ██╗   ██╗ ██████╗██╗  ██╗██╗   ██╗
 *  ██║ ██╔╝██║   ██║██╔════╝██║  ██║██║   ██║    ██╔══██╗██║   ██║██╔════╝██║  ██║██║   ██║
 *  █████╔╝ ██║   ██║██║     ███████║██║   ██║    ██████╔╝██║   ██║██║     ███████║██║   ██║
 *  ██╔═██╗ ██║   ██║██║     ██╔══██║██║   ██║    ██╔═══╝ ██║   ██║██║     ██╔══██║██║   ██║
 *  ██║  ██╗╚██████╔╝╚██████╗██║  ██║╚██████╔╝    ██║     ╚██████╔╝╚██████╗██║  ██║╚██████╔╝
 *  ╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝ ╚═════╝     ╚═╝      ╚═════╝  ╚═════╝╚═╝  ╚═╝ ╚═════╝
 *
 *  🎬  YOUR PERSONAL STREAMING APP  🎬
 *
 *  HOW TO USE THIS FILE:
 *  ─────────────────────
 *  All the stuff you need to customize is RIGHT HERE at the top.
 *  You do NOT need to scroll past the "DO NOT EDIT BELOW THIS LINE" marker.
 *
 *  1. Change the intro text, profile names, avatars  → Section A
 *  2. Change the hero banner                         → Section B
 *  3. Add your videos & thumbnails to the rows       → Section C
 *
 *  For videos:  Drop .mp4 files into the /videos/ folder
 *  For thumbs:  Drop images into the /thumbnails/ folder
 *
 * ═══════════════════════════════════════════════════════════════════════════ */


/* ┌─────────────────────────────────────────────────────────────────────────┐
 * │  SECTION A — INTRO TEXT & PROFILE SETTINGS                             │
 * │                                                                        │
 * │  introText   → The big text that appears in the opening animation.     │
 * │  AUDIO_SRC   → Set to null to use the built-in synthesized sound.      │
 * │               Set to a file path (e.g. "sounds/tudum.mp3") to use      │
 * │               your own audio file instead.                             │
 * │  profiles    → The two profile tiles on the "Who's watching?" screen.  │
 * │               Change the name and avatar for each.                     │
 * │               For avatar: drop an image in /thumbnails/ and set the    │
 * │               path here, e.g. "thumbnails/my_photo.jpg"                │
 * │               Leave avatar as null to show initials instead.           │
 * └─────────────────────────────────────────────────────────────────────────┘ */

const introText = "KUCHU PUCHU";

// OPTIONAL: replace the synthesized sound with your own audio file:
// Set this to a file path like "sounds/tudum.mp3" or leave as null
// to use the auto-generated Web Audio API sound.
const AUDIO_SRC = "Netflix New Logo Animation 2019.mp3";

const profiles = [
  {
    name: "You",
    avatar: "thumbnails/her.jpg",
    color: "#E87C03"
  },
  {
    name: "Me",
    avatar: "thumbnails/me.jpg",
    color: "#E50914"
  }
];


/* ┌─────────────────────────────────────────────────────────────────────────┐
 * │  SECTION B — HERO BANNER (the big featured banner at the top)          │
 * │                                                                        │
 * │  title       → The big title text on the banner.                       │
 * │  description → A short description/tagline underneath.                 │
 * │  bgImage     → Background image for the banner. Drop an image in      │
 * │                /thumbnails/ and set the path here.                     │
 * │                e.g. "thumbnails/hero_bg.jpg"                           │
 * │  bgVideo     → (Optional) Background VIDEO for the banner instead.    │
 * │                Set to a .mp4 path to play a looping clip behind the   │
 * │                title. Set to null to use the image instead.            │
 * │  videoSrc    → The video that plays when you click "Play" on the hero.│
 * │                e.g. "videos/our_best_moment.mp4"                       │
 * └─────────────────────────────────────────────────────────────────────────┘ */

const heroContent = {
  title: "HAPPIESTT BIRTHDAYY AADYAAA ❤️",
  meta: "Romance • 2026 • Forever • TV-LOVE",
  description: "Made this website for my special person's birthday cuz apna relationship mein aane ka process was not less than a movie 😙❤️",
  bgImage: "thumbnails/hero_bg.jpg",         // ← Main screen background image
  bgPosition: "center",                       // ← Centered positioning for 16:9 hero background
  bgVideo: null,         // ← e.g. "videos/hero_loop.mp4"  (or null for static image)
  videoSrc: null         // ← e.g. "videos/featured_video.mp4"
};


/* ┌─────────────────────────────────────────────────────────────────────────┐
 * │  SECTION C — CONTENT ROWS (the horizontally-scrolling carousels)       │
 * │                                                                        │
 * │  There are 7 rows below, each with a category name and a list of      │
 * │  video cards. Each card has:                                           │
 * │                                                                        │
 * │    title     → The title shown on hover                               │
 * │    thumbnail → Path to thumbnail image, e.g. "thumbnails/pic1.jpg"    │
 * │                Leave as null for a gray placeholder                   │
 * │    videoSrc  → Path to the video file, e.g. "videos/clip1.mp4"        │
 * │                Leave as null if you haven't added the video yet        │
 * │    description → (Optional) Short text shown in the info overlay       │
 * └─────────────────────────────────────────────────────────────────────────┘ */

const CONTENT_DATA = [

  // ── ROW 1 (Our Pictures) ────────────────────────────────────────────────
  {
    category: "Our Pictures",        // ← Main category
    isBeta: true,                     // ← Renders the pink/red BETA badge next to header
    isRoundedCards: true,             // ← Renders rounded rectangle cards (Games UI style)
    items: [
      {
        title: "Ice Cream",
        thumbnail: "Usssss/20260803_180830.jpg",
        videoSrc: null,
        description: "bbg enjoying ice-cream (Eating like a small child)"
      },
      {
        title: "Sportify",
        thumbnail: "Usssss/IMG-20250927-WA0078.jpg",
        videoSrc: null,
        description: "Damn u look soooo goood in ts. (And mein chomu on the other hand)"
      },
      {
        title: "Library ke baahar",
        thumbnail: "Usssss/IMG-20251029-WA0021.jpg",
        videoSrc: null,
        description: "U looking da best as usual and me trying to act tuff"
      },
      {
        title: "BCC",
        thumbnail: "Usssss/IMG-20260220-WA0006.jpg",
        videoSrc: null,
        description: "Bhai ts day i will never forget ofc uk why 😉"
      },
      {
        title: "My Gwen Stacy",
        thumbnail: "Usssss/IMG-20260806-WA0025.jpg",
        videoSrc: null,
        description: "Meri Gwen Stacy (ft. ur forehead 🤣)"
      },
      {
        title: "The Collage",
        thumbnail: "Usssss/IMG_20260806_191557_075.webp",
        videoSrc: null,
        description: "This collage looks soooooo goooodd !!!!"
      },
      {
        title: "You Moment",
        thumbnail: "Usssss/Screenshot 2026-08-10 01054600.png",
        videoSrc: null,
        description: "You wondering yeh kaaha fas gyi mein (teri phat rhi haain)"
      },
      {
        title: "Movie night virtual date",
        thumbnail: "Usssss/Screenshot 2026-08-10 020348.png",
        videoSrc: null,
        description: "You trying ur best to act like teri nhi phat rhi haain"
      },
      {
        title: "Movie night virtual date",
        thumbnail: "Usssss/her 2.png",
        videoSrc: null,
        description: "You no longer able to pretend teri nhi phat rhi haain. (me looking like a greek god 😙)"
      }
    ]
  },

  // ── ROW 2 (Song lyrics that remind me of you.) ────────────────────────────
  {
    category: "Song lyrics that remind me of you. (tried sab arjit ke rhkne ke liye)",
    isRoundedCards: true,
    items: [
      {
        title: "Humdard",
        thumbnail: "Lyrics that remind me of you/Thumbnails/Humdard.jpg",
        videoSrc: "Lyrics that remind me of you/Humdard Ek Villain.mp3",
        description: "Humdard",
        themeColors: {
          primary: "#A033FF",
          secondary: "#FF3399",
          glow: "rgba(160, 51, 255, 0.45)",
          bgGradient: "radial-gradient(circle at center, rgba(160, 51, 255, 0.4) 0%, rgba(255, 51, 153, 0.2) 50%, #0c0517 100%)"
        }
      },
      {
        title: "Tenu Sang Rakhna",
        thumbnail: "Lyrics that remind me of you/Thumbnails/Tenu Sang Rakhna (From _Jigra_).jpg",
        videoSrc: "Lyrics that remind me of you/Tenu Sang Rakhna.mp3",
        description: "Tenu Sang Rakhna",
        themeColors: {
          primary: "#FF7F50",
          secondary: "#FFD700",
          glow: "rgba(255, 127, 80, 0.5)",
          bgGradient: "radial-gradient(circle at center, rgba(255, 127, 80, 0.45) 0%, rgba(255, 215, 0, 0.15) 50%, #1a0a04 100%)"
        }
      },
      {
        title: "Ham Tere Pyar Mein",
        thumbnail: "Lyrics that remind me of you/Thumbnails/hum tere pyaar mein.jpg",
        videoSrc: "Lyrics that remind me of you/Ham Tere Pyar Mein.mp3",
        description: "Ham Tere Pyar Mein",
        themeColors: {
          primary: "#E50914",
          secondary: "#FF5533",
          glow: "rgba(229, 9, 20, 0.5)",
          bgGradient: "radial-gradient(circle at center, rgba(229, 9, 20, 0.45) 0%, rgba(180, 10, 30, 0.2) 50%, #140406 100%)"
        }
      },
      {
        title: "Kalank Title Track",
        thumbnail: "Lyrics that remind me of you/Thumbnails/kalank.jpg",
        videoSrc: "Lyrics that remind me of you/Kalank - Title track.mp3",
        description: "Kalank Title Track ",
        themeColors: {
          primary: "#FFD700",
          secondary: "#E60000",
          glow: "rgba(255, 215, 0, 0.5)",
          bgGradient: "radial-gradient(circle at center, rgba(255, 215, 0, 0.4) 0%, rgba(230, 0, 0, 0.2) 50%, #180e03 100%)"
        }
      },
      {
        title: "Khat",
        thumbnail: "Lyrics that remind me of you/Thumbnails/khat.jpg",
        videoSrc: "Lyrics that remind me of you/Khat.mp3",
        description: "Khat",
        themeColors: {
          primary: "#00F2FE",
          secondary: "#4FACFE",
          glow: "rgba(0, 242, 254, 0.5)",
          bgGradient: "radial-gradient(circle at center, rgba(0, 242, 254, 0.4) 0%, rgba(79, 172, 254, 0.2) 50%, #031218 100%)"
        }
      },
      {
        title: "Lag Jaa Gale",
        badge: "BONUS TRACK",
        thumbnail: "Lyrics that remind me of you/Thumbnails/Lag jaa gale se.jpg",
        videoSrc: "Lyrics that remind me of you/Lag jaa gale (Aadya).mp3",
        description: "bonus track (not my fav but as u sang it now it is my fav, but only in ur voice 🥰)",
        themeColors: {
          primary: "#FF1493",
          secondary: "#FFB6C1",
          glow: "rgba(255, 20, 147, 0.5)",
          bgGradient: "radial-gradient(circle at center, rgba(255, 20, 147, 0.45) 0%, rgba(255, 182, 193, 0.2) 50%, #170410 100%)"
        }
      }
    ]
  },

  // ── ROW 3 (Places i wanna visit with u) ──────────────────────────────────
  {
    category: "Places i wanna visit with u",
    isRoundedCards: true,
    items: [
      {
        title: "Stargazing",
        thumbnail: "Places to visit with her/starglazing.jpg",
        videoSrc: null,
        description: "I would def go stargazing with you but i would still end up staring at you the whole time."
      },
      {
        title: "Pancard Club",
        thumbnail: "Places to visit with her/pancard club.jpg",
        videoSrc: null,
        description: "Pancard club with you will be so fun especially cuz tu phattu haain 🤣"
      },
      {
        title: "Ayodhya Ram Mandir",
        thumbnail: "Places to visit with her/ayodhya ram mandir.jpg",
        videoSrc: null,
        description: "To show Prabhu Shree Ram that Sita ne Kaliyug mein avataar le liya haain"
      },
      {
        title: "Dagdusheth Halwai Ganpati",
        thumbnail: "Places to visit with her/dagdusheth.jpg",
        videoSrc: null,
        description: "The place i yearned for you the most...🥺"
      },
      {
        title: "Skydiving Adventure",
        thumbnail: "Places to visit with her/sky diving.jpg",
        videoSrc: null,
        description: "THISSS WILLL BE SOOOOOOOO FUNNNNNNNNNNNNN !!!"
      },
      {
        title: "Underwater Diving",
        thumbnail: "Places to visit with her/undewater diving.jpg",
        videoSrc: null,
        description: "This will also be insaneeeeeeeeee !!!!"
      },
      {
        title: "Dandiya Night",
        thumbnail: "Places to visit with her/Dandiya.jpg",
        videoSrc: null,
        description: "Me n my gujju girl in dandiya....sochkar hi mast lagta haain"
      },
      {
        title: "Stadium pe jaake match",
        thumbnail: "Places to visit with her/ICT FInals.jpg",
        videoSrc: null,
        description: "seeing cricket with you cuz ofc u love it"
      },
      {
        title: "Rio De Janeiro",
        thumbnail: "Places to visit with her/Rio De Jeniero.jpg",
        videoSrc: null,
        description: "Cuz yeh waala mera bahut jyada fav haain 😭"
      },
    ]
  },

  // ── ROW 4 (Reels i want to recreate with u.) ──────────────────────────────
  {
    category: "Reels i want to recreate with u.",
    isRoundedCards: true,
    items: [
      {
        title: "Reel Idea #1",
        thumbnail: "thumbnails/reels/reel1.jpg",
        videoSrc: "Reels to recreate with you/VID_20260812_102737_249.mp4",
        description: "Reel we're gonna recreate together 🎬"
      },
      {
        title: "Reel Idea #2",
        thumbnail: "thumbnails/reels/reel2.jpg",
        videoSrc: "Reels to recreate with you/VID_20260812_102922_096.mp4",
        description: "Reel we're gonna recreate together 🎬"
      },
      {
        title: "Reel Idea #3",
        thumbnail: "thumbnails/reels/reel3.jpg",
        videoSrc: "Reels to recreate with you/VID_20260812_103114_160.mp4",
        description: "Reel we're gonna recreate together 🎬"
      },
      {
        title: "Reel Idea #4",
        thumbnail: "thumbnails/reels/reel4.jpg",
        videoSrc: "Reels to recreate with you/VID_20260812_103315_902.mp4",
        description: "Reel we're gonna recreate together 🎬"
      },
      {
        title: "Reel Idea #5",
        thumbnail: "thumbnails/reels/reel5.jpg",
        videoSrc: "Reels to recreate with you/VID_20260812_103509_558.mp4",
        description: "Reel we're gonna recreate together 🎬"
      },
      {
        title: "Reel Idea #6",
        thumbnail: "thumbnails/reels/reel6.jpg",
        videoSrc: "Reels to recreate with you/VID_20260812_103525_115.mp4",
        description: "Reel we're gonna recreate together 🎬"
      }
    ]
  }
];


/* ═══════════════════════════════════════════════════════════════════════════
 *  ┌──────────────────────────────────────────────────────────────────────┐
 *  │            ⛔  DO NOT EDIT BELOW THIS LINE  ⛔                       │
 *  │                                                                      │
 *  │  Everything below is layout/animation/interaction code.              │
 *  │  You only need to edit the sections above (A, B, C) to customize.   │
 *  └──────────────────────────────────────────────────────────────────────┘
 * ═══════════════════════════════════════════════════════════════════════════ */


// ── State ────────────────────────────────────────────────────────────────
let currentScreen = "intro"; // intro | profiles | browse
let audioCtx = null;
let introAnimationDone = false;
let selectedProfile = null;

// ── DOM Ready ────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildIntroScreen();
  buildProfileScreen();
  buildBrowseScreen();
  buildVideoPlayer();
  buildLetterModal();

  // Start with intro
  showScreen("intro");
});


/* ═══════════════════════════════════════════════════════════════════════════
 *  SCREEN 1 — INTRO ANIMATION
 * ═══════════════════════════════════════════════════════════════════════════ */

let introAudio = null;
let soundPlayed = false;
let autoAdvanceTimer = null;
let webAudioCtx = null;
let introSequenceStarted = false;

// Web Audio API Procedural Synthesizer for Netflix Tudum sound
function playSynthesizedTudum() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!webAudioCtx) webAudioCtx = new AudioCtx();
    if (webAudioCtx.state === 'suspended') {
      webAudioCtx.resume().catch(() => { });
    }

    const ctx = webAudioCtx;
    const now = ctx.currentTime;

    // 1. "Tu" (First Thud at t=0s)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(130, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.22);
    gain1.gain.setValueAtTime(0.85, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.25);

    // 2. "Dum" (Second Deep Thud at t=0.22s)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(95, now + 0.22);
    osc2.frequency.exponentialRampToValueAtTime(30, now + 0.65);
    gain2.gain.setValueAtTime(1.0, now + 0.22);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.22);
    osc2.stop(now + 0.7);

    // 3. Metallic/Chime Swell (fading from t=0.3s to 2.8s)
    const freqs = [293.66, 370.00, 440.00, 554.37];
    freqs.forEach(freq => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + 0.3);
      gain.gain.setValueAtTime(0.001, now + 0.3);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + 0.3);
      osc.stop(now + 2.8);
    });

    soundPlayed = true;
  } catch (e) {
    console.error("Synthesized sound error:", e);
  }
}

let audioBuffer = null;

function loadAudioBuffer() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!webAudioCtx) webAudioCtx = new AudioCtx();
  const src = (typeof AUDIO_DATA_URI !== 'undefined' && AUDIO_DATA_URI) ? AUDIO_DATA_URI : AUDIO_SRC;

  fetch(src)
    .then(res => res.arrayBuffer())
    .then(data => webAudioCtx.decodeAudioData(data))
    .then(decoded => {
      audioBuffer = decoded;
    })
    .catch(() => { });
}

function getIntroAudio() {
  const src = (typeof AUDIO_DATA_URI !== 'undefined' && AUDIO_DATA_URI) ? AUDIO_DATA_URI : AUDIO_SRC;
  if (!introAudio) {
    introAudio = document.getElementById("intro-audio");
    if (!introAudio) {
      introAudio = new Audio(src);
      introAudio.id = "intro-audio";
    }
  }
  if (!introAudio.src || introAudio.src === "" || introAudio.src.endsWith("about:blank")) {
    introAudio.src = src;
  }
  introAudio.preload = "auto";
  introAudio.volume = 1.0;
  introAudio.muted = false;
  return introAudio;
}

function playIntroSound() {
  if (soundPlayed) return Promise.resolve();

  const audio = getIntroAudio();
  audio.currentTime = 0;
  audio.volume = 1.0;
  audio.muted = false;

  const promise = audio.play();
  if (promise !== undefined) {
    return promise.then(() => {
      soundPlayed = true;
    }).catch(err => {
      console.log("Autoplay deferred by browser policy. Awaiting user interaction:", err);
      return Promise.reject(err);
    });
  } else {
    soundPlayed = true;
    return Promise.resolve();
  }
}

function buildIntroScreen() {
  const screen = document.getElementById("intro-screen");
  if (!screen) return;
  const wordmark = screen.querySelector(".intro-wordmark");
  const hint = document.getElementById("intro-hint");

  if (wordmark) {
    wordmark.textContent = introText;
    wordmark.classList.remove("animate", "ready");
  }

  introSequenceStarted = false;
  introAnimationDone = false;
  soundPlayed = false;

  // Pre-load audio buffer in background for 0ms Web Audio playback
  loadAudioBuffer();

  function triggerSoundAndAnimation() {
    if (introSequenceStarted) return;
    introSequenceStarted = true;

    if (hint) hint.style.display = "none";

    // Play Audio (either Web Audio API decoded buffer, HTML5 Audio element, or synth)
    let played = false;
    if (webAudioCtx && audioBuffer) {
      try {
        if (webAudioCtx.state === 'suspended') {
          webAudioCtx.resume().catch(() => { });
        }
        const source = webAudioCtx.createBufferSource();
        source.buffer = audioBuffer;
        const gainNode = webAudioCtx.createGain();
        gainNode.gain.value = 1.0;
        source.connect(gainNode);
        gainNode.connect(webAudioCtx.destination);
        source.start(0);
        soundPlayed = true;
        played = true;
      } catch (e) {
        console.log("Buffer play error:", e);
      }
    }

    if (!played) {
      playIntroSound().catch(() => {
        playSynthesizedTudum();
      });
    }

    // Wordmark zoom animation
    if (wordmark) {
      wordmark.classList.remove("ready", "animate");
      void wordmark.offsetWidth; // force CSS reflow
      wordmark.classList.add("animate");
    }

    // Canvas spectrum animation
    startSpectrumCanvas();

    // Auto-advance to profiles after 3.6s
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = setTimeout(() => {
      if (currentScreen === "intro") {
        transitionFromIntro();
      }
    }, 3600);
  }

  // 1. Try immediate autoplay on page load/reload
  playIntroSound().then(() => {
    // Autoplay allowed by browser! Start sound + animation
    triggerSoundAndAnimation();
  }).catch(() => {
    // Autoplay blocked by browser policy -> Display glowing title & wait for click/tap
    if (wordmark) wordmark.classList.add("ready");
    if (hint) {
      hint.textContent = "tap anywhere to start";
      hint.style.display = "block";
    }
  });

  // 2. Click, tap, or keypress anywhere triggers sound & animation in sync
  const handleUserClick = (e) => {
    if (!introSequenceStarted) {
      if (e) e.stopPropagation();
      triggerSoundAndAnimation();
    } else {
      skipIntro();
    }
  };

  screen.addEventListener("click", handleUserClick);
  window.addEventListener("keydown", handleUserClick, { once: true });
  window.addEventListener("touchstart", handleUserClick, { once: true });
}

/* ── Canvas Spectrum Light Ribbon Animation (60FPS GPU Optimized) ──────── */
function startSpectrumCanvas() {
  const canvas = document.getElementById("intro-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: false });

  let animationFrameId;
  let startTime = null;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Netflix spectrum palette: rich vibrant light streams
  const palette = [
    "rgba(229, 9, 20, ",    // Crimson Red
    "rgba(255, 30, 39, ",   // Bright Red
    "rgba(232, 17, 127, ",  // Hot Pink / Magenta
    "rgba(155, 17, 232, ",  // Purple
    "rgba(65, 17, 232, ",   // Deep Blue
    "rgba(0, 200, 255, ",   // Cyan
    "rgba(255, 180, 0, ",   // Gold / Orange
    "rgba(255, 85, 0, ",    // Orange-Red
    "rgba(255, 45, 85, "    // Neon Rose
  ];

  // 90 vertical ribbon light lines
  const ribbons = [];
  const ribbonCount = 95;
  for (let i = 0; i < ribbonCount; i++) {
    const spread = (Math.random() - 0.5) * 1.6;
    ribbons.push({
      xRatio: spread,
      width: Math.random() * 5 + 2,
      colorPrefix: palette[Math.floor(Math.random() * palette.length)],
      speed: Math.random() * 1.4 + 1.1,
      delay: Math.random() * 0.6 + 0.8,
      baseAlpha: Math.random() * 0.6 + 0.35
    });
  }

  function render(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime) / 1000;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;

    // Pitch black background clear
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);

    // Phase 1 (0s - 1.2s): Central red stem vertical bar grow
    if (elapsed < 1.3) {
      const stemProgress = Math.min(elapsed / 0.7, 1);
      const stemH = h * 0.45 * stemProgress;
      const stemW = 6 * stemProgress;

      ctx.fillStyle = "rgba(229, 9, 20, 0.9)";
      ctx.fillRect(cx - stemW / 2, cy - stemH / 2, stemW, stemH);
    }

    // Phase 2 (0.9s - 3.4s): GPU "lighter" blending spectrum lines expansion
    if (elapsed > 0.8 && elapsed < 3.5) {
      const burstTime = elapsed - 0.8;
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < ribbons.length; i++) {
        const r = ribbons[i];
        if (burstTime > (r.delay - 0.8)) {
          const t = (burstTime - (r.delay - 0.8)) * r.speed;
          const scale = Math.pow(t, 2.1) + 0.1;
          const x = cx + r.xRatio * w * scale * 0.5;
          const ribbonW = r.width * Math.max(scale, 1);
          const ribbonH = h * (1 + scale * 0.9);
          const alpha = Math.max(0, Math.min(1, (3.4 - elapsed) * 1.3)) * r.baseAlpha;

          if (alpha > 0.01) {
            ctx.fillStyle = r.colorPrefix + alpha.toFixed(3) + ")";
            ctx.fillRect(x - ribbonW / 2, cy - ribbonH / 2, ribbonW, ribbonH);
          }
        }
      }

      ctx.globalCompositeOperation = "source-over";
    }

    if (elapsed < 3.7 && currentScreen === "intro") {
      animationFrameId = requestAnimationFrame(render);
    }
  }

  animationFrameId = requestAnimationFrame(render);
}



function skipIntro() {
  if (introAnimationDone) return;
  transitionFromIntro();
}

function transitionFromIntro() {
  if (introAnimationDone) return;
  introAnimationDone = true;
  if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);

  if (introAudio) {
    let fadeInterval = setInterval(() => {
      if (introAudio && introAudio.volume > 0.1) {
        introAudio.volume -= 0.1;
      } else {
        if (introAudio) introAudio.pause();
        clearInterval(fadeInterval);
      }
    }, 50);
  }

  const introScreen = document.getElementById("intro-screen");
  introScreen.classList.add("fade-out");
  setTimeout(() => {
    showScreen("profiles");
  }, 600);
}


/* ═══════════════════════════════════════════════════════════════════════════
 *  SCREEN 2 — PROFILE SELECT
 * ═══════════════════════════════════════════════════════════════════════════ */

function buildProfileScreen() {
  const grid = document.querySelector(".profile-grid");
  grid.innerHTML = "";

  profiles.forEach((profile, idx) => {
    const tile = document.createElement("div");
    tile.className = "profile-tile";
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("role", "button");
    tile.setAttribute("aria-label", `Select profile: ${profile.name}`);

    // Avatar
    const avatarWrap = document.createElement("div");
    avatarWrap.className = "profile-avatar";

    if (profile.avatar) {
      const img = document.createElement("img");
      img.src = profile.avatar;
      img.alt = profile.name;
      img.loading = "lazy";
      avatarWrap.appendChild(img);
    } else {
      // Colored initial fallback
      avatarWrap.style.backgroundColor = profile.color || "#333";
      const initial = document.createElement("span");
      initial.className = "profile-initial";
      initial.textContent = profile.name.charAt(0).toUpperCase();
      avatarWrap.appendChild(initial);
    }

    // Name
    const nameEl = document.createElement("span");
    nameEl.className = "profile-name";
    nameEl.textContent = profile.name;

    tile.appendChild(avatarWrap);
    tile.appendChild(nameEl);

    tile.addEventListener("click", () => {
      selectedProfile = profile;
      transitionToPlayer(profile);
    });

    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectedProfile = profile;
        transitionToPlayer(profile);
      }
    });

    grid.appendChild(tile);
  });
}

function transitionToPlayer(profile) {
  const profileScreen = document.getElementById("profile-screen");
  profileScreen.classList.add("fade-out");
  // Update profile icon in nav
  const navProfile = document.querySelector(".nav-profile");
  if (profile.avatar) {
    navProfile.innerHTML = `<img src="${profile.avatar}" alt="${profile.name}">`;
  } else {
    navProfile.style.backgroundColor = profile.color || "#333";
    navProfile.innerHTML = `<span>${profile.name.charAt(0).toUpperCase()}</span>`;
  }
  setTimeout(() => {
    showScreen("browse");
  }, 600);
}


/* ═══════════════════════════════════════════════════════════════════════════
 *  SCREEN 3 — MAIN BROWSE INTERFACE
 * ═══════════════════════════════════════════════════════════════════════════ */

function buildBrowseScreen() {
  // Set wordmark in nav
  document.querySelector(".nav-logo").textContent = introText;

  // Build hero
  buildHero();

  // Build content rows
  buildContentRows();

  // Nav scroll behavior: transparent → solid
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".main-nav");
    if (!nav) return;
    if (window.scrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
}

function buildHero() {
  const hero = document.getElementById("hero-banner");
  const heroTitle = hero.querySelector(".hero-title");
  const heroMeta = hero.querySelector("#hero-meta");
  const heroDesc = hero.querySelector(".hero-description");
  const heroBgImage = hero.querySelector(".hero-bg-image");
  const heroBgVideo = hero.querySelector(".hero-bg-video");

  heroTitle.textContent = heroContent.title;
  if (heroMeta) {
    const metaStr = heroContent.meta || "Drama • 2026 • 2 Seasons • TV-MA";
    heroMeta.innerHTML = metaStr.replace("TV-MA", '<span class="meta-badge">TV-MA</span>').replace("TV-LOVE", '<span class="meta-badge">TV-LOVE</span>');
  }
  heroDesc.textContent = heroContent.description;

  if (heroContent.bgVideo) {
    heroBgVideo.src = heroContent.bgVideo;
    heroBgVideo.style.display = "block";
    heroBgImage.style.display = "none";
  } else if (heroContent.bgImage) {
    heroBgImage.style.backgroundImage = `url('${heroContent.bgImage}')`;
    heroBgImage.style.backgroundPosition = heroContent.bgPosition || "center";
    heroBgImage.style.display = "block";
    heroBgVideo.style.display = "none";
  }

  // Play button opens love letter modal
  const playBtn = hero.querySelector(".hero-play-btn");
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      openLetterModal();
    });
  }

  // More Info button also opens love letter modal
  const infoBtn = hero.querySelector(".hero-info-btn") || hero.querySelector("#hero-info-btn");
  if (infoBtn) {
    infoBtn.addEventListener("click", () => {
      openLetterModal();
    });
  }
}

function buildContentRows() {
  const container = document.getElementById("content-rows");
  container.innerHTML = "";

  CONTENT_DATA.forEach((row, rowIdx) => {
    const section = document.createElement("section");
    section.className = "content-row";

    // Category header with optional BETA badge
    const header = document.createElement("div");
    header.className = "row-header";
    const titleWrap = document.createElement("div");
    titleWrap.className = "row-header-title-wrap";
    const title = document.createElement("h2");
    title.className = "row-title";
    title.textContent = row.category;
    titleWrap.appendChild(title);

    if (row.isBeta) {
      const betaBadge = document.createElement("span");
      betaBadge.className = "row-beta-badge";
      betaBadge.innerHTML = 'BETA <span class="beta-tooltip">These images are abhi tak ke, more are to be taken together 🥰🥰</span>';
      titleWrap.appendChild(betaBadge);
    }

    header.appendChild(titleWrap);

    // Carousel wrapper
    const carouselWrap = document.createElement("div");
    carouselWrap.className = "carousel-wrap";

    const arrowLeft = document.createElement("button");
    arrowLeft.className = "carousel-arrow carousel-arrow-left";
    arrowLeft.innerHTML = "&#8249;";
    arrowLeft.setAttribute("aria-label", "Scroll left");

    const arrowRight = document.createElement("button");
    arrowRight.className = "carousel-arrow carousel-arrow-right";
    arrowRight.innerHTML = "&#8250;";
    arrowRight.setAttribute("aria-label", "Scroll right");

    const slider = document.createElement("div");
    slider.className = "carousel-slider";

    // Build cards
    row.items.forEach((item, itemIdx) => {
      const card = document.createElement("div");
      card.className = row.isRoundedCards ? "title-card card-rounded" : "title-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", item.title);

      // Thumbnail area
      const thumbWrap = document.createElement("div");
      thumbWrap.className = "card-thumb";

      if (item.badge) {
        const badge = document.createElement("span");
        badge.className = "card-badge";
        badge.textContent = item.badge;
        thumbWrap.appendChild(badge);
      }

      if (item.thumbnail) {
        const img = document.createElement("img");
        img.src = encodeURI(item.thumbnail);
        img.alt = item.title;
        img.loading = "lazy";
        thumbWrap.appendChild(img);
      } else if (item.videoSrc && item.videoSrc.toLowerCase().endsWith(".mp4")) {
        const vid = document.createElement("video");
        vid.src = encodeURI(item.videoSrc) + "#t=0.5";
        vid.preload = "metadata";
        vid.muted = true;
        vid.playsInline = true;
        vid.style.position = "absolute";
        vid.style.inset = "0";
        vid.style.width = "100%";
        vid.style.height = "100%";
        vid.style.objectFit = "cover";
        thumbWrap.appendChild(vid);
      } else {
        // Gray placeholder
        const placeholder = document.createElement("div");
        placeholder.className = "card-placeholder";
        const phIcon = document.createElement("div");
        phIcon.className = "placeholder-icon";
        phIcon.innerHTML = "🎬";
        const phText = document.createElement("span");
        phText.textContent = `${rowIdx + 1}-${itemIdx + 1}`;
        placeholder.appendChild(phIcon);
        placeholder.appendChild(phText);
        thumbWrap.appendChild(placeholder);
      }

      // Hover info overlay
      const overlay = document.createElement("div");
      overlay.className = "card-overlay";

      const overlayTitle = document.createElement("div");
      overlayTitle.className = "card-overlay-title";
      overlayTitle.textContent = item.title;

      const overlayPlay = document.createElement("div");
      overlayPlay.className = "card-overlay-play";
      overlayPlay.innerHTML = `<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><polygon points="5,3 19,12 5,21"/></svg>`;

      overlay.appendChild(overlayPlay);
      overlay.appendChild(overlayTitle);

      if (item.description) {
        const overlayDesc = document.createElement("div");
        overlayDesc.className = "card-overlay-desc";
        overlayDesc.textContent = item.description;
        overlay.appendChild(overlayDesc);
      }

      card.appendChild(thumbWrap);
      card.appendChild(overlay);

      // Click handler for video or photo lightbox
      const openMedia = () => {
        if (item.videoSrc) {
          openVideoPlayer(item.videoSrc, item.title, item.thumbnail, item.description, item.themeColors);
        } else if (item.thumbnail) {
          openImageModal(item.thumbnail, item.title);
        }
      };

      card.addEventListener("click", openMedia);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openMedia();
        }
      });

      slider.appendChild(card);
    });

    // Arrow click handlers
    arrowLeft.addEventListener("click", () => {
      slider.scrollBy({ left: -slider.clientWidth * 0.75, behavior: "smooth" });
    });
    arrowRight.addEventListener("click", () => {
      slider.scrollBy({ left: slider.clientWidth * 0.75, behavior: "smooth" });
    });

    carouselWrap.appendChild(arrowLeft);
    carouselWrap.appendChild(slider);
    carouselWrap.appendChild(arrowRight);

    section.appendChild(header);
    section.appendChild(carouselWrap);
    container.appendChild(section);
  });
}


/* ═══════════════════════════════════════════════════════════════════════════
 *  SCREEN 4 — MEDIA PLAYER / LIGHTBOX
 * ═══════════════════════════════════════════════════════════════════════════ */

function buildVideoPlayer() {
  const modal = document.getElementById("video-player-modal");
  const closeBtn = modal.querySelector(".player-close-btn");

  closeBtn.addEventListener("click", () => {
    closeVideoPlayer();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeVideoPlayer();
    }
  });

  // Close when clicking the backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeVideoPlayer();
    }
  });
}

function openImageModal(src, title) {
  const modal = document.getElementById("video-player-modal");
  const videoView = modal.querySelector("#player-video-view");
  const audioView = modal.querySelector("#player-audio-view");
  const video = modal.querySelector("video");
  const img = modal.querySelector("#player-img");
  const videoTitle = modal.querySelector(".player-title");
  const audioEl = document.getElementById("player-audio-element");

  if (video) {
    video.pause();
    video.style.display = "none";
  }
  if (audioEl) {
    audioEl.pause();
  }

  if (audioView) audioView.style.display = "none";
  if (videoView) videoView.style.display = "block";

  videoTitle.textContent = title || "";

  if (img) {
    img.src = encodeURI(src);
    img.style.display = "block";
  }

  modal.classList.add("active");
  document.body.classList.add("no-scroll");
}

let playerAudioCtx = null;
let playerAnalyser = null;
let playerMediaSource = null;
let visualizerAnimId = null;

function formatPlayerTime(seconds) {
  if (isNaN(seconds) || seconds === Infinity) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function setupAudioVisualizer(mediaEl, themeColors) {
  const canvas = document.getElementById("player-visualizer-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const colors = themeColors || {
    primary: "#E50914",
    secondary: "#FF5533",
    glow: "rgba(229, 9, 20, 0.45)",
    bgGradient: "radial-gradient(circle at center, rgba(229, 9, 20, 0.4) 0%, rgba(138, 43, 226, 0.2) 50%, #08080c 100%)"
  };

  const glowEl = document.getElementById("audio-ambient-glow");
  if (glowEl) {
    glowEl.style.background = colors.bgGradient;
  }

  const fillEl = document.getElementById("audio-progress-fill");
  if (fillEl) {
    fillEl.style.background = `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`;
    fillEl.style.boxShadow = `0 0 12px ${colors.glow}`;
  }

  const playBtn = document.getElementById("audio-btn-play");
  if (playBtn) {
    playBtn.style.background = colors.primary;
    playBtn.style.boxShadow = `0 0 20px ${colors.glow}`;
  }

  function resizeCanvas() {
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
  }
  resizeCanvas();

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!playerAudioCtx) {
      playerAudioCtx = new AudioContext();
    }
    if (playerAudioCtx.state === 'suspended') {
      playerAudioCtx.resume().catch(() => { });
    }

    if (!playerMediaSource) {
      playerMediaSource = playerAudioCtx.createMediaElementSource(mediaEl);
      playerAnalyser = playerAudioCtx.createAnalyser();
      playerAnalyser.fftSize = 128;
      playerMediaSource.connect(playerAnalyser);
      playerAnalyser.connect(playerAudioCtx.destination);
    }
  } catch (e) {
    console.log("AudioContext connect note:", e);
  }

  const bufferLength = playerAnalyser ? playerAnalyser.frequencyBinCount : 32;
  const dataArray = new Uint8Array(bufferLength);

  const particles = [];
  for (let i = 0; i < 45; i++) {
    particles.push({
      x: Math.random() * (canvas.width || 800),
      y: Math.random() * (canvas.height || 600),
      radius: Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4
    });
  }

  function renderVisualizer() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    let avgFreq = 0;
    if (playerAnalyser && !mediaEl.paused) {
      playerAnalyser.getByteFrequencyData(dataArray);
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      avgFreq = sum / bufferLength;
    }

    if (glowEl && avgFreq > 0) {
      const pulseScale = 1 + (avgFreq / 255) * 0.15;
      glowEl.style.transform = `scale(${pulseScale})`;
    }

    // 1. Draw floating ambient particles
    for (let p of particles) {
      p.y -= p.speedY * (1 + (avgFreq / 255) * 0.8);
      p.x += p.speedX;
      if (p.y < -10) p.y = h + 10;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = colors.primary;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // 2. Draw real-time frequency spectrum bars along bottom
    const barWidth = (w / bufferLength) * 1.6;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const freqVal = dataArray[i] || (mediaEl.paused ? 0 : Math.sin(Date.now() * 0.005 + i * 0.2) * 20 + 25);
      const barHeight = (freqVal / 255) * (h * 0.42);

      const grad = ctx.createLinearGradient(0, h, 0, h - barHeight);
      grad.addColorStop(0, colors.primary);
      grad.addColorStop(1, colors.secondary);

      ctx.fillStyle = grad;
      ctx.shadowBlur = 12;
      ctx.shadowColor = colors.primary;
      ctx.fillRect(x, h - barHeight, barWidth - 3, barHeight);
      ctx.shadowBlur = 0;

      x += barWidth;
    }

    // 3. Smooth Bezier Waveform Line
    ctx.beginPath();
    ctx.moveTo(0, h * 0.82);
    for (let i = 0; i < bufferLength; i++) {
      const val = dataArray[i] || 0;
      const waveY = (h * 0.82) - (val / 255) * 50;
      const waveX = (w / bufferLength) * i;
      ctx.lineTo(waveX, waveY);
    }
    ctx.strokeStyle = colors.secondary;
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 15;
    ctx.shadowColor = colors.secondary;
    ctx.stroke();
    ctx.shadowBlur = 0;

    visualizerAnimId = requestAnimationFrame(renderVisualizer);
  }

  if (visualizerAnimId) cancelAnimationFrame(visualizerAnimId);
  visualizerAnimId = requestAnimationFrame(renderVisualizer);
}

function openVideoPlayer(src, title, posterImg, description, themeColors) {
  const modal = document.getElementById("video-player-modal");
  const videoView = modal.querySelector("#player-video-view");
  const audioView = modal.querySelector("#player-audio-view");
  const video = modal.querySelector("video");
  const img = modal.querySelector("#player-img");
  const videoTitle = modal.querySelector(".player-title");

  const isAudio = /\.(mp3|opus|wav|m4a|aac|ogg)$/i.test(src);

  // Resume Web Audio Context if initialized
  if (playerAudioCtx && playerAudioCtx.state === 'suspended') {
    playerAudioCtx.resume().catch(() => { });
  }

  // Stop any currently playing media
  if (video) { video.pause(); }

  if (isAudio) {
    if (videoView) videoView.style.display = "none";
    if (audioView) audioView.style.display = "flex";

    const targetAudio = document.getElementById("player-audio-element") || video;
    targetAudio.crossOrigin = "anonymous";
    targetAudio.src = encodeURI(src);
    targetAudio.load();

    const albumArt = document.getElementById("audio-album-art");
    const songTitle = document.getElementById("audio-song-title");
    const songDesc = document.getElementById("audio-song-desc");
    const timeCurrent = document.getElementById("audio-time-current");
    const timeDuration = document.getElementById("audio-time-duration");
    const progressFill = document.getElementById("audio-progress-fill");
    const progressBar = document.getElementById("audio-progress-bar");
    const btnPlay = document.getElementById("audio-btn-play");
    const mainPlayBtn = document.getElementById("audio-main-play-btn");
    const mainPlayLabel = document.getElementById("audio-play-btn-label");
    const mainPlayIcon = document.getElementById("audio-main-play-icon");
    const albumClickable = document.getElementById("audio-album-clickable");
    const btnRewind = document.getElementById("audio-btn-rewind");
    const btnForward = document.getElementById("audio-btn-forward");
    const playIcon = document.getElementById("audio-play-icon");

    if (albumArt) albumArt.src = posterImg || "";
    if (songTitle) songTitle.textContent = title || "";
    if (songDesc) songDesc.textContent = description || "";

    const updatePlayState = () => {
      if (targetAudio.paused) {
        audioView.classList.remove("playing");
        if (playIcon) playIcon.innerHTML = `<polygon points="5,3 19,12 5,21"/>`;
        if (mainPlayIcon) mainPlayIcon.textContent = "▶";
        if (mainPlayLabel) mainPlayLabel.textContent = "TAP TO PLAY SONG";
        if (mainPlayBtn) mainPlayBtn.classList.add("pulsating");
      } else {
        audioView.classList.add("playing");
        if (playIcon) playIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
        if (mainPlayIcon) mainPlayIcon.textContent = "⏸";
        if (mainPlayLabel) mainPlayLabel.textContent = "PAUSE SONG";
        if (mainPlayBtn) mainPlayBtn.classList.remove("pulsating");
      }
    };

    targetAudio.onplay = updatePlayState;
    targetAudio.onpause = updatePlayState;

    targetAudio.ontimeupdate = () => {
      if (timeCurrent) timeCurrent.textContent = formatPlayerTime(targetAudio.currentTime);
      if (timeDuration && !isNaN(targetAudio.duration)) timeDuration.textContent = formatPlayerTime(targetAudio.duration);
      if (progressFill && targetAudio.duration) {
        const pct = (targetAudio.currentTime / targetAudio.duration) * 100;
        progressFill.style.width = `${pct}%`;
      }
    };

    targetAudio.onloadedmetadata = () => {
      if (timeDuration) timeDuration.textContent = formatPlayerTime(targetAudio.duration);
    };

    const toggleAudioPlay = () => {
      if (playerAudioCtx && playerAudioCtx.state === 'suspended') {
        playerAudioCtx.resume().catch(() => { });
      }
      if (targetAudio.paused) {
        const p = targetAudio.play();
        if (p !== undefined) p.catch(e => console.log("Audio play error:", e));
      } else {
        targetAudio.pause();
      }
    };

    if (btnPlay) btnPlay.onclick = toggleAudioPlay;
    if (mainPlayBtn) mainPlayBtn.onclick = toggleAudioPlay;
    if (albumClickable) albumClickable.onclick = toggleAudioPlay;

    if (btnRewind) {
      btnRewind.onclick = () => {
        targetAudio.currentTime = Math.max(0, targetAudio.currentTime - 5);
      };
    }

    if (btnForward) {
      btnForward.onclick = () => {
        targetAudio.currentTime = Math.min(targetAudio.duration || 0, targetAudio.currentTime + 5);
      };
    }

    if (progressBar) {
      progressBar.onclick = (e) => {
        const rect = progressBar.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (targetAudio.duration) {
          targetAudio.currentTime = pct * targetAudio.duration;
        }
      };
    }

    setupAudioVisualizer(targetAudio, themeColors);

    // Initial play attempt on open
    const p = targetAudio.play();
    if (p !== undefined) {
      p.then(() => updatePlayState()).catch(() => {
        updatePlayState(); // Autoplay blocked -> displays pulsating "▶ TAP TO PLAY SONG" button!
      });
    }

  } else {
    // Video mode
    if (audioView) audioView.style.display = "none";
    if (videoView) {
      videoView.style.display = "block";
      videoView.style.position = "";
      videoView.style.opacity = "";
      videoView.style.pointerEvents = "";
      videoView.style.width = "";
      videoView.style.height = "";
    }

    video.style.display = "block";
    video.style.height = "100%";
    video.controls = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.src = encodeURI(src);

    videoTitle.textContent = title || "";
    if (img) {
      img.src = "";
      img.style.display = "none";
    }
  }

  video.load();
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.log("Auto play deferred:", err);
    });
  }

  modal.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeVideoPlayer() {
  const modal = document.getElementById("video-player-modal");
  const video = modal.querySelector("video");
  const img = modal.querySelector("#player-img");
  const audioView = modal.querySelector("#player-audio-view");
  const videoView = modal.querySelector("#player-video-view");

  if (visualizerAnimId) {
    cancelAnimationFrame(visualizerAnimId);
    visualizerAnimId = null;
  }

  video.pause();
  video.currentTime = 0;
  video.src = "";
  video.innerHTML = "";

  if (img) {
    img.src = "";
    img.style.display = "none";
  }

  if (audioView) {
    audioView.classList.remove("playing");
    audioView.style.display = "none";
  }
  if (videoView) {
    videoView.style.display = "block";
  }

  modal.classList.remove("active");
  document.body.classList.remove("no-scroll");
}


/* ═══════════════════════════════════════════════════════════════════════════
 *  SCREEN MANAGEMENT
 * ═══════════════════════════════════════════════════════════════════════════ */

function showScreen(screenName) {
  currentScreen = screenName;
  const screens = ["intro-screen", "profile-screen", "browse-screen"];
  screens.forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove("active", "fade-out");
  });

  const target = document.getElementById(screenName === "intro" ? "intro-screen" :
    screenName === "profiles" ? "profile-screen" :
      "browse-screen");
  // Small delay to allow CSS transition
  requestAnimationFrame(() => {
    target.classList.add("active");
  });

  // Reset scroll for browse screen
  if (screenName === "browse") {
    window.scrollTo(0, 0);
  }
}


/* ═══════════════════════════════════════════════════════════════════════════
 *  SCREEN 5 — ROMANTIC LOVE LETTER MODAL LOGIC
 * ═══════════════════════════════════════════════════════════════════════════ */

let letterStarsAnimId = null;

function buildLetterModal() {
  const modal = document.getElementById("letter-modal");
  if (!modal) return;

  const closeBtn = document.getElementById("letter-close-btn");
  const doneBtn = document.getElementById("letter-done-btn");
  const overlay = document.getElementById("letter-overlay");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLetterModal);
  }
  if (doneBtn) {
    doneBtn.addEventListener("click", closeLetterModal);
  }
  if (overlay) {
    overlay.addEventListener("click", closeLetterModal);
  }

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeLetterModal();
    }
  });
}

function openLetterModal() {
  const modal = document.getElementById("letter-modal");
  if (!modal) return;

  modal.classList.add("active");
  document.body.classList.add("no-scroll");

  // Reset scroll position to top
  const letterBody = modal.querySelector(".letter-body");
  if (letterBody) letterBody.scrollTop = 0;
}

function closeLetterModal() {
  const modal = document.getElementById("letter-modal");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("no-scroll");
}
