/**
 * FAQ page data
 * Restructured with localized content pattern
 */

import type { SupportedLanguage, LocalizedContent } from '@/types/i18n';

// =============================================================================
// TYPES
// =============================================================================

export interface FaqPageItem {
  question: string;
  answer: string;
}

// =============================================================================
// FAQ DATA
// =============================================================================

const faqPageItems: LocalizedContent<FaqPageItem[]> = {
  ru: [
    {
      question: 'Что такое APB Credits и как происходит оплата этапов?',
      answer:
        'Все расчеты внутри сервиса производятся во внутренних единицах — APB Credits. 1 Credit всегда равен $1. Для активации любого этапа вам необходимо пополнить баланс в Личном Кабинете. Списание происходит мгновенно в момент активации этапа. Это позволяет вам оплачивать только те шаги, которые вы проходите сейчас, не покупая весь курс целиком.',
    },
    {
      question: 'Могу ли я вернуть неиспользованные деньги (Credits) с баланса?',
      answer:
        'Согласно п. 8.1. Договора Публичной Оферты, возврат неиспользованных APB Credits не предусмотрен. Пополнение баланса является приобретением прав доступа (лицензии) к функционалу Сервиса. Мы рекомендуем пополнять баланс ровно на ту сумму, которую вы планируете использовать для активации выбранных этапов.',
    },
    {
      question:
        'Что произойдет, если я оплатил этап, но не успел его закончить или случайно закрыл вкладку?',
      answer:
        'Не переживайте. Активация этапа закрепляется за вашим аккаунтом навсегда. Вы можете прерваться на любом вопросе анкеты и вернуться к заполнению даже через месяц — все ваши промежуточные ответы сохраняются в Личном Кабинете. Повторная оплата за этот же этап не потребуется.',
    },
    {
      question:
        'Как мне стать партнером (амбассадором) AI-сервиса «Архитектор Личных Брендов»?',
      answer:
        'Возможность стать партнером открывается автоматически при регистрации. В разделе «Профиль» вашего Личного Кабинета находится уникальный Реферальный код. Просто делитесь им с коллегами или друзьями. Каждый, кто зарегистрируется по вашему коду, становится вашим рефералом, а вы начнете получать вознаграждение (APB Rewards) с каждой их оплаты.',
    },
    {
      question: 'Как мне вывести мою комиссию (партнерское вознаграждение)?',
      answer:
        'Вознаграждение накапливается на вашем Affiliate Account в единицах APB Rewards. Вывод средств осуществляется по запросу в Личном Кабинете на ваши платежные реквизиты. Обратите внимание, что согласно «Условиям партнерской программы», существует период проверки транзакций (Holding Period до 14 дней) и минимальный порог для вывода, указанный в вашем профиле.',
    },
    {
      question:
        'Сколько времени у меня будет доступ к моим отчетам и стратегиям? Могу ли я их скачать?',
      answer:
        'Все созданные вами отчеты, ТЗ и стратегии бессрочно хранятся в вашем «Архиве» в Личном Кабинете, пока существует ваш аккаунт. Вы можете в любой момент просмотреть их или скопировать текст для работы. Сервис предоставляет вам право использовать результаты генерации для развития собственного бренда, но хранение данных на стороне пользователя (скачивание в PDF/Docx) является вашей ответственностью.',
    },
    {
      question: 'К какому юридическому статусу относится пользователь сервиса?',
      answer:
        'Наш сервис предназначен для профессиональной деятельности. Согласно документу «Отказ от гарантий», каждый пользователь признается Business-User (Prosumer). Это означает, что вы используете инструменты для построения бизнеса. В связи с этим к нашим отношениям не применяются нормы законодательства о защите прав потребителей (например, право на немотивированный возврат), так как услуга носит коммерческий характер.',
    },
    {
      question: 'Гарантирует ли сервис окупаемость моих вложений и доход?',
      answer:
        'Сервис предоставляет расчетные модели и стратегии, основанные на бизнес-логике и анализе данных. Однако, согласно «Отказу от гарантий», конечный успех проекта зависит от ваших действий, рыночной конъюнктуры и качества внедрения рекомендаций. Мы даем вам высококлассный инструмент и «карту», но идти по ней и принимать бизнес-решения должны вы сами.',
    },
  ],
  en: [
    {
      question: 'What are APB Credits and how is stage payment processed?',
      answer:
        'All payments within the service are made in internal units — APB Credits. 1 Credit always equals $1. To activate any stage, you need to top up your balance in your Personal Account. The charge is instant at the moment of stage activation. This allows you to pay only for the steps you are taking now, without purchasing the entire course at once.',
    },
    {
      question: 'Can I get a refund for unused Credits from my balance?',
      answer:
        'According to clause 8.1 of the Public Offer Agreement, refunds of unused APB Credits are not provided. Topping up your balance constitutes the acquisition of access rights (license) to the Service\'s functionality. We recommend topping up your balance for exactly the amount you plan to use for activating selected stages.',
    },
    {
      question:
        'What happens if I paid for a stage but didn\'t finish it or accidentally closed the tab?',
      answer:
        'Don\'t worry. Stage activation is permanently linked to your account. You can pause at any question in the questionnaire and return to it even a month later — all your intermediate answers are saved in your Personal Account. No repeat payment for the same stage is required.',
    },
    {
      question:
        'How can I become a partner (ambassador) of the AI service "Architect of Personal Brands"?',
      answer:
        'The option to become a partner is enabled automatically upon registration. In the "Profile" section of your Personal Account, you will find a unique Referral Code. Simply share it with colleagues or friends. Anyone who registers using your code becomes your referral, and you will start receiving rewards (APB Rewards) from each of their payments.',
    },
    {
      question: 'How do I withdraw my commission (partner rewards)?',
      answer:
        'Rewards accumulate in your Affiliate Account in APB Rewards units. Withdrawal is processed upon request in your Personal Account to your payment details. Please note that according to the "Affiliate Program Terms", there is a transaction verification period (Holding Period of up to 14 days) and a minimum withdrawal threshold specified in your profile.',
    },
    {
      question:
        'How long will I have access to my reports and strategies? Can I download them?',
      answer:
        'All reports, briefs, and strategies you create are stored indefinitely in your "Archive" in your Personal Account as long as your account exists. You can view them or copy text for work at any time. The Service grants you the right to use the generated results for developing your own brand, but storing data on the user\'s side (downloading as PDF/Docx) is your responsibility.',
    },
    {
      question: 'What legal status does a service user have?',
      answer:
        'Our service is designed for professional activities. According to the "Disclaimer of Warranties" document, each user is recognized as a Business-User (Prosumer). This means you use the tools for building a business. Therefore, consumer protection laws (e.g., the right to an unmotivated refund) do not apply to our relationship, as the service is of a commercial nature.',
    },
    {
      question: 'Does the service guarantee a return on my investment and income?',
      answer:
        'The service provides calculation models and strategies based on business logic and data analysis. However, according to the "Disclaimer of Warranties", the ultimate success of the project depends on your actions, market conditions, and the quality of implementation of the recommendations. We give you a top-class tool and a "map", but you must walk it yourself and make your own business decisions.',
    },
  ],
};

const faqDisclaimer: LocalizedContent<string> = {
  ru: 'Дисклеймер: Маркетинговые формулировки носят ознакомительный характер. Сервис предоставляет методологический инструмент (SaaS), а не готовую бизнес-модель. Результаты генерации ИИ носят вероятностный характер и требуют проверки экспертом.',
  en: 'Disclaimer: Marketing statements are for informational purposes only. The service provides a methodological tool (SaaS), not a ready-made business model. AI-generated results are probabilistic in nature and require expert review.',
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get FAQ items for a specific language
 */
export function getFaqItems(lang: SupportedLanguage): FaqPageItem[] {
  return faqPageItems[lang];
}

/**
 * Get FAQ disclaimer for a specific language
 */
export function getFaqDisclaimer(lang: SupportedLanguage): string {
  return faqDisclaimer[lang];
}

// Legacy exports for backward compatibility
export const faqPageItemsRu = faqPageItems.ru;
export const faqPageItemsEn = faqPageItems.en;
