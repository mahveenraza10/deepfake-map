export const incidents = [
  {
    id: "001", date: "2024-02", country: "Hong Kong", subregion: "East Asia",
    lat: 22.3193, lng: 114.1694,
    categories: ["Financial Fraud"],
    description: "Employee tricked into authorizing ~$25M after deepfake video call where all other participants impersonated company executives including the CFO.",
    channel: "Video call",
    contentSignals: [], contextSignals: ["Behavioural-Contextual", "Situational-Pragmatic"],
    outcome: "Not detected during call",
    source: "CNN (Feb 2024); FinCEN FIN-2024-Alert004", tier: "Tier 1 / Tier 4"
  },
  {
    id: "002", date: "2019", country: "United Kingdom", subregion: "Europe",
    lat: 51.5074, lng: -0.1278,
    categories: ["Financial Fraud"],
    description: "CEO of UK energy firm deceived by AI-cloned voice of parent company executive into wiring $243,000 to fraudsters. One of the earliest documented corporate deepfake fraud cases.",
    channel: "Phone call",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Not detected during call",
    source: "Wall Street Journal (2019)", tier: "Tier 4"
  },
  {
    id: "003", date: "2025", country: "Malaysia", subregion: "Southeast Asia",
    lat: 3.139, lng: 101.6869,
    categories: ["Financial Fraud", "Misinformation/Media Manipulation"],
    description: "Police dismantled network using AI-generated videos of politicians (Teresa Kok, PM Anwar Ibrahim) and Elon Musk to promote fake investment schemes.",
    channel: "Social media",
    contentSignals: [], contextSignals: ["Situational-Pragmatic", "Narrative-Semantic"],
    outcome: "Detected by law enforcement",
    source: "Royal Malaysia Police (2025); Facia.ai", tier: "Tier 1 / Tier 4"
  },
  {
    id: "004", date: "2023", country: "UAE", subregion: "Middle East",
    lat: 25.2048, lng: 55.2708,
    categories: ["Financial Fraud"],
    description: "International gang of 43 people targeted two major Asian companies, hacked corporate emails to monitor deals, then used AI voice calls to call branch managers and confirm fraudulent wire instructions, stealing approximately $36M.",
    channel: "Phone call / Email",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected post-incident by law enforcement",
    source: "The National News (2023)", tier: "Tier 4"
  },
  {
    id: "005", date: "2025", country: "Singapore", subregion: "Southeast Asia",
    lat: 1.3521, lng: 103.8198,
    categories: ["Financial Fraud"],
    description: "Financial director pressured into signing a fake NDA and authorizing $499,000 during a video call with deepfakes of the company's CEO and lawyer. Funds were frozen days later after detection and reporting.",
    channel: "Video call",
    contentSignals: [], contextSignals: ["Behavioural-Contextual", "Situational-Pragmatic"],
    outcome: "Detected post-incident; funds frozen",
    source: "Channel News Asia (2025)", tier: "Tier 4"
  },
  {
    id: "006", date: "2022-03", country: "Ukraine", subregion: "Europe",
    lat: 50.4501, lng: 30.5234,
    categories: ["Political Manipulation"],
    description: "Fabricated one-minute video of President Zelenskyy telling Ukrainian soldiers to surrender, broadcast briefly on hacked news ticker and news website before rapid debunking. First major wartime political deepfake.",
    channel: "Broadcast / Social media",
    contentSignals: ["Spatial/Geometric", "Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected rapidly by public and officials",
    source: "NPR (Mar 2022)", tier: "Tier 4"
  },
  {
    id: "007", date: "2023-10", country: "India", subregion: "South Asia",
    lat: 20.5937, lng: 78.9629,
    categories: ["Political Manipulation"],
    description: "AI-generated audio of politician Kamal Nath making statements favorable to opposing BJP party circulated during Madhya Pradesh state elections. BOOM Live forensic analysis confirmed deepfake.",
    channel: "Social media / WhatsApp",
    contentSignals: ["Temporal", "Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected by fact-checkers (BOOM Live)",
    source: "BOOM Live; Al Jazeera (Feb 2024); Nieman Lab (May 2024)", tier: "Tier 3 / Tier 4"
  },
  {
    id: "008", date: "2024-02", country: "India", subregion: "South Asia",
    lat: 21.5937, lng: 77.9629,
    categories: ["Political Manipulation", "Misinformation/Media Manipulation"],
    description: "DMK party used AI-generated video of deceased leader M. Karunanidhi delivering campaign speech at events during Tamil Nadu elections. Party posted openly on official accounts.",
    channel: "Social media",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Identified but not treated as deceptive by party",
    source: "Al Jazeera (Feb 2024); Nieman Lab (May 2024)", tier: "Tier 4"
  },
  {
    id: "009", date: "2024-04", country: "India", subregion: "South Asia",
    lat: 19.5937, lng: 79.9629,
    categories: ["Political Manipulation"],
    description: "Deepfake videos of Bollywood celebrities Ranveer Singh and Aamir Khan endorsing political parties circulated on social media during Lok Sabha election. Both celebrities publicly denied involvement.",
    channel: "Social media",
    contentSignals: ["Spatial/Geometric", "Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected post-circulation; celebrities issued denials",
    source: "Resolver; BOOM Live (Apr 2024)", tier: "Tier 3 / Tier 4"
  },
  {
    id: "010", date: "2023", country: "Nigeria", subregion: "Sub-Saharan Africa",
    lat: 9.082, lng: 8.6753,
    categories: ["Political Manipulation"],
    description: "Deepfake audio of presidential candidate Atiku Abubakar discussing election rigging plans went viral hours before voting, influencing voter perceptions.",
    channel: "Social media / WhatsApp",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Not detected before voting",
    source: "IST/Stanford Q&A; TechCabal", tier: "Tier 2 / Tier 4"
  },
  {
    id: "011", date: "2025", country: "Kenya", subregion: "Sub-Saharan Africa",
    lat: -1.2921, lng: 36.8219,
    categories: ["Political Manipulation", "Misinformation/Media Manipulation"],
    description: "Fabricated video falsely showing President William Ruto announcing his resignation gained over 1.4 million views, triggering public confusion and protest calls.",
    channel: "Social media",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected post-circulation",
    source: "The Youth Café (2025); Surfshark", tier: "Tier 4 / Tier 5"
  },
  {
    id: "012", date: "2024", country: "Indonesia", subregion: "Southeast Asia",
    lat: -6.2088, lng: 106.8456,
    categories: ["Political Manipulation"],
    description: "Deepfake video of presidential candidate Prabowo Subianto speaking Arabic created to appeal to Muslim voters during the 2024 presidential election.",
    channel: "Social media",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected by fact-checkers",
    source: "Surfshark; Fulcrum", tier: "Tier 2 / Tier 4"
  },
  {
    id: "013", date: "2023", country: "Turkey", subregion: "Europe",
    lat: 39.9334, lng: 32.8597,
    categories: ["Non-Consensual Intimate Imagery", "Political Manipulation"],
    description: "Presidential candidate Muharrem İnce withdrew from the electoral race after the release of a deepfake sex tape, effectively ending his campaign regardless of authenticity.",
    channel: "Social media",
    contentSignals: ["Spatial/Geometric"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Candidate withdrew; authenticity disputed",
    source: "Recorded Future; The Guardian", tier: "Tier 2 / Tier 4"
  },
  {
    id: "014", date: "2023", country: "Slovakia", subregion: "Europe",
    lat: 48.1486, lng: 17.1077,
    categories: ["Political Manipulation"],
    description: "Deepfake audio of a political candidate discussing election fraud emerged days before the national election, spreading at a critical moment when fact-checking could not keep pace.",
    channel: "Social media",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected by fact-checkers but too late to counter spread",
    source: "Recorded Future", tier: "Tier 2"
  },
  {
    id: "015", date: "2024-08", country: "South Korea", subregion: "East Asia",
    lat: 37.5665, lng: 126.978,
    categories: ["Non-Consensual Intimate Imagery"],
    description: "Widespread NCII crisis across 500+ schools. Telegram chatrooms with 220,000+ subscribers used bots to generate explicit deepfake images of female classmates and teachers. 793 crimes reported, 920 school-based victims.",
    channel: "Telegram",
    contentSignals: ["Spatial/Geometric"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected via journalism and student activism",
    source: "BBC (Sep 2024); Korea Times (Dec 2024); Korean DSCVSC", tier: "Tier 4 / Tier 5"
  },
  {
    id: "016", date: "2024-01", country: "United States", subregion: "North America",
    lat: 38.9072, lng: -77.0369,
    categories: ["Non-Consensual Intimate Imagery"],
    description: "AI-generated explicit images of Taylor Swift reached 47 million views on X/Twitter before removal. Prompted widespread calls for federal NCII legislation.",
    channel: "Social media (X/Twitter)",
    contentSignals: ["Spatial/Geometric"], contextSignals: [],
    outcome: "Detected by public; removed by platform after viral spread",
    source: "Multiple outlets (Jan 2024)", tier: "Tier 4"
  },
  {
    id: "017", date: "2023-11", country: "India", subregion: "South Asia",
    lat: 22.5937, lng: 76.9629,
    categories: ["Non-Consensual Intimate Imagery"],
    description: "Deepfake video of actress Rashmika Mandanna went viral, prompting Indian government (MeitY) to issue formal deepfake advisories and platform takedown requirements within 24 hours.",
    channel: "Social media",
    contentSignals: ["Spatial/Geometric"], contextSignals: [],
    outcome: "Detected by public; triggered government response",
    source: "Indian media; MeitY advisory (Nov 2023)", tier: "Tier 1 / Tier 4"
  },
  {
    id: "018", date: "2023", country: "United States", subregion: "North America",
    lat: 40.6501, lng: -74.3495,
    categories: ["Non-Consensual Intimate Imagery"],
    description: "Teenage boys at Westfield High School, New Jersey, created sexually explicit deepfake images of female classmates and distributed them.",
    channel: "Peer-to-peer / messaging",
    contentSignals: ["Spatial/Geometric"], contextSignals: [],
    outcome: "Detected by school administration",
    source: "Security.org; local news (2023)", tier: "Tier 4"
  },
  {
    id: "019", date: "2023-2024", country: "India", subregion: "South Asia",
    lat: 23.5937, lng: 80.9629,
    categories: ["Non-Consensual Intimate Imagery", "Political Manipulation"],
    description: "Female investigative journalist targeted with fabricated explicit deepfake video as retaliation for her reporting. Video went viral, temporarily silencing her work.",
    channel: "Social media",
    contentSignals: ["Spatial/Geometric"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected as deepfake but harm already done",
    source: "HyperVerge; Indian press freedom reports", tier: "Tier 4 / Tier 5"
  },
  {
    id: "020", date: "2023-2024", country: "Mexico", subregion: "Latin America",
    lat: 19.4326, lng: -99.1332,
    categories: ["Non-Consensual Intimate Imagery"],
    description: "Instituto Politecnico Nacional student used AI to alter 20,000+ images of female classmates for distribution on Telegram. First prosecution in Latin America linking generative AI to sexual exploitation.",
    channel: "Telegram",
    contentSignals: ["Spatial/Geometric"], contextSignals: [],
    outcome: "Detected; perpetrator prosecuted",
    source: "Mexico Business News; Facia.ai", tier: "Tier 4"
  },
  {
    id: "021", date: "2023-2024", country: "Brazil", subregion: "Latin America",
    lat: -22.9068, lng: -43.1729,
    categories: ["Non-Consensual Intimate Imagery"],
    description: "Multiple school incidents: Rio de Janeiro teens created AI-generated NCII of classmates (Nov 2023), Bahia teens did the same (Sep 2024), Mato Grosso students expelled for sharing AI-generated explicit images of a teacher.",
    channel: "Social media / messaging",
    contentSignals: ["Spatial/Geometric"], contextSignals: [],
    outcome: "Detected by school administrations",
    source: "Global Voices; Internetlab (Apr 2026)", tier: "Tier 4 / Tier 5"
  },
  {
    id: "022", date: "2025-05", country: "United States", subregion: "North America",
    lat: 37.7749, lng: -122.4194,
    categories: ["Social Engineering/Scams"],
    description: "FBI issued public warning that criminals are impersonating senior U.S. government officials via AI-generated voice messages and text messages targeting current and former officials and their contacts.",
    channel: "Phone call / SMS",
    contentSignals: ["Cross-Modal"], contextSignals: ["Behavioural-Contextual", "Situational-Pragmatic"],
    outcome: "Detected by FBI; public warning issued",
    source: "FBI PSA (May 2025); CNBC (May 2025)", tier: "Tier 1"
  },
  {
    id: "023", date: "2025-01", country: "United States", subregion: "North America",
    lat: 30.2241, lng: -92.0198,
    categories: ["Social Engineering/Scams"],
    description: "Woman in Lafayette, Louisiana lost $60,000+ life savings after deepfake video call with AI-generated Elon Musk impersonator. Scam escalated from social media chat to video call. Funds unrecoverable.",
    channel: "Social media / Video call",
    contentSignals: [], contextSignals: ["Behavioural-Contextual", "Situational-Pragmatic", "Narrative-Semantic"],
    outcome: "Not detected until funds were lost",
    source: "Facia.ai; local news (Jan 2025)", tier: "Tier 4"
  },
  {
    id: "024", date: "2024-2025", country: "India", subregion: "South Asia",
    lat: 17.385, lng: 78.4867,
    categories: ["Social Engineering/Scams"],
    description: "Wave of 'digital arrest' scams using voice-cloned callers posing as police demanding immediate payment. Bangalore, Hyderabad, and Delhi-NCR accounted for 65% of incidents.",
    channel: "Phone call / WhatsApp video",
    contentSignals: ["Cross-Modal"], contextSignals: ["Behavioural-Contextual", "Situational-Pragmatic", "Narrative-Semantic"],
    outcome: "Detected post-incident by victims",
    source: "Indian cyber cells; AI Certs (2025)", tier: "Tier 1 / Tier 4"
  },
  {
    id: "025", date: "2023-2024", country: "United Kingdom", subregion: "Europe",
    lat: 52.5074, lng: -1.1278,
    categories: ["Social Engineering/Scams"],
    description: "£580M lost to fraud in H1 2023 in UK, with £6.9M specifically attributed to CEO and family member voice impersonation using deepfake technology.",
    channel: "Phone call",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Mostly not detected until funds were lost",
    source: "UK Finance; Keepnet Labs", tier: "Tier 1 / Tier 4"
  },
  {
    id: "026", date: "2024-2025", country: "South Africa", subregion: "Sub-Saharan Africa",
    lat: -33.9249, lng: 18.4241,
    categories: ["Social Engineering/Scams", "Financial Fraud"],
    description: "Deepfake videos impersonating President Ramaphosa and billionaire Patrice Motsepe used to promote fake cryptocurrency investment schemes. South Africa has the highest deepfake fraud rate in Africa (269% rise).",
    channel: "Social media / WhatsApp",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Partially detected; schemes ongoing",
    source: "Smile ID Report (2025); FSCA warnings; WeeTracker", tier: "Tier 2 / Tier 4"
  },
  {
    id: "027", date: "2025-06", country: "United Kingdom", subregion: "Europe",
    lat: 53.4808, lng: -2.2426,
    categories: ["Misinformation/Media Manipulation"],
    description: "Deepfake TikTok video of influencer Molly-Mae Hague endorsing perfume brand Arabiyat Prestige Nyla. Thousands of fans deceived into purchasing from unlicensed resellers.",
    channel: "TikTok",
    contentSignals: ["Cross-Modal"], contextSignals: ["Situational-Pragmatic"],
    outcome: "Detected by influencer; public denial issued",
    source: "Facia.ai; UK media (Jun 2025)", tier: "Tier 4"
  },
  {
    id: "028", date: "2024", country: "United States", subregion: "North America",
    lat: 39.2904, lng: -76.6122,
    categories: ["Misinformation/Media Manipulation"],
    description: "Athletic director at Pikesville High School, Maryland created deepfake audio of the school principal making racist remarks to get him fired. Audio circulated among staff and community.",
    channel: "Audio recording",
    contentSignals: ["Cross-Modal"], contextSignals: ["Narrative-Semantic"],
    outcome: "Detected by forensic analysis; perpetrator arrested",
    source: "Security.org; Baltimore media (2024)", tier: "Tier 4"
  },
  {
    id: "029", date: "2021", country: "United States", subregion: "North America",
    lat: 40.1851, lng: -74.9228,
    categories: ["Misinformation/Media Manipulation", "Non-Consensual Intimate Imagery"],
    description: "A woman in Bucks County, Pennsylvania sent manipulated videos to young girls through anonymous numbers, depicting them in fabricated explicit scenarios to harass them and remove them from a cheerleading squad.",
    channel: "Personal messaging",
    contentSignals: ["Spatial/Geometric"], contextSignals: [],
    outcome: "Detected by victims; perpetrator arrested",
    source: "Phillyburbs (2021)", tier: "Tier 4"
  },
  {
    id: "030", date: "2024", country: "India", subregion: "South Asia",
    lat: 18.5937, lng: 73.9629,
    categories: ["Misinformation/Media Manipulation"],
    description: "AI voice tools were used to recreate famous singer Arijit Singh's voice to produce unauthorised songs and endorsements distributed on streaming platforms and social media.",
    channel: "Social media / streaming",
    contentSignals: ["Cross-Modal"], contextSignals: [],
    outcome: "Detected by public",
    source: "Indian media (2024)", tier: "Tier 4"
  }
];

export const categoryColors = {
  "Financial Fraud": "#2563eb",
  "Political Manipulation": "#dc2626",
  "Non-Consensual Intimate Imagery": "#9333ea",
  "Social Engineering/Scams": "#16a34a",
  "Misinformation/Media Manipulation": "#f97316"
};

export const categoryIcons = {
  "Financial Fraud": "💰",
  "Political Manipulation": "🏛️",
  "Non-Consensual Intimate Imagery": "⚠️",
  "Social Engineering/Scams": "🎭",
  "Misinformation/Media Manipulation": "📢"
};
