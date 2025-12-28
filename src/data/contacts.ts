export interface ContactInfo {
  telegram: string;
  telegramUrl: string;
  phone: string;
  phoneUrl: string;
  whatsapp: string;
  whatsappUrl: string;
  email: string;
  emailUrl: string;
}

export const contacts: ContactInfo = {
  telegram: '@Sledopit',
  telegramUrl: 'https://t.me/Sledopit',
  phone: '+7 991 123 12 12',
  phoneUrl: 'tel:+79911231212',
  whatsapp: '+7 991 123 12 12',
  whatsappUrl: 'https://wa.me/79911231212',
  email: 'Sledopit@gmail.com',
  emailUrl: 'mailto:Sledopit@gmail.com',
};
