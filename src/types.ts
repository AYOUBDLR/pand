export interface Deal {
  id: number;
  title: string;
  description: string;
  type: 'survey' | 'newsletter' | 'wheel' | 'video' | 'poll';
  duration: string;
  completed: boolean;
  rewardValue: string;
  difficulty: 'Easy' | 'Medium';
}

export interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
