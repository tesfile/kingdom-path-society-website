import type { Metadata } from "next";
import {
  ClipboardList,
  Gift,
  Inbox,
  Newspaper,
  Settings,
  UserPlus
} from "lucide-react";
import { AdminCard } from "@/components/AdminCard";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Admin dashboard placeholder for Kingdom Path Society management tools and future integrations."
};

const adminCards = [
  {
    title: "View support requests",
    description: "Placeholder area for future intake review and case coordination.",
    icon: <ClipboardList className="size-6" />
  },
  {
    title: "View volunteer applications",
    description: "Placeholder area for volunteer interest forms and team follow-up.",
    icon: <UserPlus className="size-6" />
  },
  {
    title: "Add stories and updates",
    description: "Placeholder area for publishing organization news and community stories.",
    icon: <Newspaper className="size-6" />
  },
  {
    title: "Manage services",
    description: "Placeholder area for service descriptions, program pages, and resources.",
    icon: <Settings className="size-6" />
  },
  {
    title: "Manage contact messages",
    description: "Placeholder area for contact form messages and response tracking.",
    icon: <Inbox className="size-6" />
  },
  {
    title: "Donation integration coming soon",
    description: "Placeholder area for future secure donation tools and reporting.",
    icon: <Gift className="size-6" />
  }
];

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin Dashboard"
        title="Admin dashboard placeholder."
        description="This page is prepared for future staff tools, content management, messages, and secure integrations."
      />

      <section className="section-y bg-mist-50">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adminCards.map((card) => (
              <AdminCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
