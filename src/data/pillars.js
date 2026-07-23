import { Globe2, HeartHandshake, GraduationCap, Star, Palette } from 'lucide-react'

export const pillars = [
  {
    id: 'diplomacy',
    icon: Globe2,
    title: 'LEAD',
    tagline: 'Diplomacy & Leadership — Public Speaking, Debate, Negotiation, Global Affairs',
    description:
      'From DOTMUN conferences across Sindh at school, college, and university level, to Youth Parliament sessions, delegate/committee/chair training, and hands-on policy writing, resolution drafting, and crisis simulations — LEAD is where young people become confident speakers, critical thinkers, and future diplomats.',
    gradient: 'from-forest-900 via-forest-800 to-gold/20',
  },
  {
    id: 'leadership',
    icon: HeartHandshake,
    title: 'SERVE',
    tagline: 'Community Service & Humanity — Social Impact, Volunteerism, Humanitarian Work',
    description:
      'Blood donation camps, ration and winter clothes drives, flood relief, cleanliness drives, tree plantation, and awareness campaigns on health, hygiene, and mental health — SERVE brings our "Serving Humanity" mission down to the ground, teaching empathy and responsibility through action.',
    gradient: 'from-forest-950 via-forest-800 to-champagne/20',
  },
  {
    id: 'excellence',
    icon: GraduationCap,
    title: 'LEARN',
    tagline: 'Education & Skill Development — Career Growth, Workshops, Training',
    description:
      'DOT Talks brings professionals in for guest sessions, alongside career counseling, CV and interview prep, workshops in digital marketing, content creation, leadership, and public speaking, plus guidance on scholarships and studying abroad. LEARN equips our members with the practical skills to grow.',
    gradient: 'from-forest-900 via-gold/10 to-forest-950',
  },
  {
    id: 'dialogue',
    icon: Star,
    title: 'BELIEVE',
    tagline: 'Youth Empowerment & Islamic Values — Confidence, Character Building, Faith-Based Competitions',
    description:
      'Speech, Milad, Qirat, and Naat competitions, alongside motivational sessions and character development workshops, strengthen self-belief, confidence, and moral character while connecting our youth with their values and identity.',
    gradient: 'from-forest-800 via-forest-950 to-gold/15',
  },
  {
    id: 'empowerment',
    icon: Palette,
    title: 'CREATE',
    tagline: 'Media, Arts & Innovation — Creativity, Storytelling, Digital Presence',
    description:
      'Our DOT Media Team covers photography, videography, and graphics, driving social media content, our podcast, blog, and "The DOT Journal" magazine, plus creative competitions in poetry, art, and short films on social issues. CREATE amplifies youth voices to the world.',
    gradient: 'from-forest-950 via-champagne/10 to-forest-900',
  },
]

export const getPillarById = (id) => pillars.find((p) => p.id === id)