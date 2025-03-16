export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  label: string;
  heading: string;
  subtext: string;
  contactLinkText: string;
  contactLinkUrl: string;
  faqs: FAQ[];
}
