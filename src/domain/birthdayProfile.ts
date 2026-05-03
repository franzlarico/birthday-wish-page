export type BirthdayWish = {
  label: string;
  text: string;
};

export type BirthdayProfile = {
  recipientName: string;
  headline: string;
  dedication: string;
  birthDateLabel: string;
  signature: string;
  heroImageUrl: string;
  accentColor: string;
  secondaryColor: string;
  qualities: string[];
  wishes: BirthdayWish[];
  finalMessage: string;
};
