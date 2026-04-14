import FAQClient from "../../_components/faq-toggle/page.jsx";

const faqFallbackData = [
  {
    id: "1",
    question: "What days of the week are you open?",
    answer:
      'We are open every day of the week 12:00 PM - 6:00 PM! Check our Google Calendar on the <a href="/shop">Shops</a> page to see our holiday schedules.',
  },
  {
    id: "2",
    question: "Where are you located?",
    answer:
      "We are located at 218 E St, right across the street from Chipotle!",
  },
  {
    id: "3",
    question: "Do you buy clothes from the public?",
    answer:
      "Yes! All clothes must be 20 years or older and be in good condition. 15 items or less can be conducted virtually through Instagram DM's and 15 or more items can be conducted virtually or by scheduling a time in person.",
  },
];

async function getFAQs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/faq?_published=true`,
      { cache: "no-store" },
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    return data.body.map((item) => ({
      id: item._id,
      question: item.question,
      answer: item.answer,
    }));
  } catch (e) {
    console.error(`Failed to fetch faqs: ${e.message}`);
    return faqFallbackData;
  }
}

export default async function Page() {
  const faqs = await getFAQs();
  return <FAQClient faqs={faqs} />;
}
