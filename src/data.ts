import { FAQItem, Deal } from './types';

export const DEFAULT_FAQS: FAQItem[] = [
  {
    question: 'How long do the deals take?',
    answer: 'Most deals can be completed in just a few minutes! We offer a wide variety of promotional offers, such as short market research surveys, newsletter subscription signups, trying free applications, and rating shopping categories. You can pick the ones that are quickest and easiest for you!'
  },
  {
    question: 'What are promotional deals?',
    answer: 'Promotional deals are sponsored micro-activities from our partner brands and advertisers. By participating in these select activities, our advertising sponsors cover the cost of your £500 Coach Reward certificate. It’s a win-win: advertisers find new engaged audiences and you receive a high-value shopping voucher!'
  },
  {
    question: 'How many deals do I have to do?',
    answer: 'To claim your £500 Coach Reward, you need to complete a minimum of 3-5 quick sponsored deals from your portal. Once the deals are verified (which takes just seconds), your final printable and online redeemable UK Rewards Code is immediately generated.'
  },
  {
    question: 'When will I receive my reward?',
    answer: 'Instantly on your screen! The second your last sponsored deal is verified, the site automatically generates your unique £500 digital Coach Rewards Voucher. You can copy the code immediately and use it at checkout!'
  }
];

export const DEFAULT_DEALS: Deal[] = [
  {
    id: 1,
    title: 'Short Style Survey',
    description: 'Answer 3 quick multiple-choice questions about your favorite leather styles and colors.',
    type: 'survey',
    duration: '30s',
    completed: false,
    rewardValue: '1 Verified Deal Credit',
    difficulty: 'Easy'
  },
  {
    id: 2,
    title: 'Coach VIP Newsletter',
    description: 'Sign up to receive free handbag care tips, seasonal luxury updates, and priority member sales.',
    type: 'newsletter',
    duration: '20s',
    completed: false,
    rewardValue: '1 Verified Deal Credit',
    difficulty: 'Easy'
  },
  {
    id: 3,
    title: 'Spin the Coach Accessory Wheel',
    description: 'Try your luck! Spin our interactive holiday accessory wheel and find your lucky match.',
    type: 'wheel',
    duration: '15s',
    completed: false,
    rewardValue: '1 Verified Deal Credit',
    difficulty: 'Easy'
  },
  {
    id: 4,
    title: 'Watch Sponsored Premium Promo',
    description: 'View a beautiful 10-second cinematic video showcasing the new Coach New York Handbag Collection.',
    type: 'video',
    duration: '10s',
    completed: false,
    rewardValue: '1 Verified Deal Credit',
    difficulty: 'Easy'
  },
  {
    id: 5,
    title: 'Shopping Preference Poll',
    description: 'Share which designer gift bundles you find most attractive to complete your poll.',
    type: 'poll',
    duration: '30s',
    completed: false,
    rewardValue: '1 Verified Deal Credit',
    difficulty: 'Easy'
  }
];
