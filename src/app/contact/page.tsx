"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const N8N_WEBHOOK_URL =
  "https://n8n.srv816930.hstgr.cloud/webhook/a1ps76hweb89site";

const FAQ_ITEMS = [
  {
    question: "What is APS?",
    answer:
      "APS is a comprehensive platform designed to streamline your design and development workflow, offering powerful automation and collaboration tools.",
  },
  {
    question: "Do I need to install anything to use APS?",
    answer:
      "No, APS is entirely web-based. You can access all features directly through your modern web browser without any downloads.",
  },
  {
    question: "Can I collaborate with others in real time?",
    answer:
      "Absolutely! We support real-time collaboration so you and your team can edit, comment, and build together instantly.",
  },
  {
    question: "What kind of export options does APS support?",
    answer:
      "We support a wide range of export formats including PDF, PNG, SVG, and direct code exports to React, HTML/CSS, and more.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, company, phone } = formData;

    if (!name || !email || !company || !phone) {
      alert("Please fill all required fields.");
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          page: "Contact Page",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Webhook failed");

      alert("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F0FF]/50 flex flex-col font-sans selection:bg-purple-100">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,_rgba(120,119,198,0.1),transparent_50%)]" />

      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-foreground">
              Get in touch with us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions, need help, or want to get started? We&apos;re here to support you every step of the way.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto bg-white rounded-3xl shadow-sm border border-border/5 p-8 md:p-10 mb-16"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Name*</label>
                <Input id="name" value={formData.name} onChange={handleChange} placeholder="Full name" className="bg-gray-50/50 border-gray-100 h-12 rounded-xl" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Email*</label>
                <Input id="email" value={formData.email} onChange={handleChange} placeholder="Email address" className="bg-gray-50/50 border-gray-100 h-12 rounded-xl" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input id="company" value={formData.company} onChange={handleChange} placeholder="Company" className="bg-gray-50/50 border-gray-100 h-12 rounded-xl" />
                <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="bg-gray-50/50 border-gray-100 h-12 rounded-xl" />
              </div>

              <Textarea id="message" value={formData.message} onChange={handleChange} className="min-h-[150px] bg-gray-50/50 border-gray-100 rounded-xl resize-none p-4" />

              <Button disabled={loading} className="w-full h-12 text-md font-semibold rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </motion.div>

          {/* Support Links */}
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 md:pl-8">
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Support</h3>
              <a
                href="mailto:contact@autopilot-studio.com"
                className="text-sm font-medium underline decoration-1 underline-offset-4 hover:text-primary transition-colors block mb-2"
              >
                contact@autopilot-studio.com
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Need help? Our team&apos;s here 24/7 to assist you.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-lg">Sales</h3>
              <a
                href="mailto:connect@autopilot-studio.com"
                className="text-sm font-medium underline decoration-1 underline-offset-4 hover:text-primary transition-colors block mb-2"
              >
                connect@autopilot-studio.com
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interested in APS for your team? Let&apos;s talk pricing and solutions.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none rounded-2xl bg-[#F3F5F8]/50 px-6 py-2">
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
