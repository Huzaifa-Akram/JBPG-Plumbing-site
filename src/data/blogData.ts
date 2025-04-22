// src/app/blog/blogData.ts
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Common Plumbing Issues Every Homeowner Should Know",
    summary:
      "Learn how to identify and address common plumbing problems before they become major headaches.",
    content:
      "Plumbing issues can range from minor annoyances to major emergencies. Being able to identify the warning signs early can save you time and money. Here are the top 5 plumbing issues every homeowner should know about...",
    imageUrl: "/images/blog1.jpg",
    author: "Mike Johnson",
    date: "April 15, 2025",
    tags: ["homeowner tips", "plumbing basics", "preventive maintenance"],
    slug: "common-plumbing-issues",
  },
  {
    id: "2",
    title: "How to Prevent Frozen Pipes During Winter",
    summary:
      "Follow these essential steps to protect your plumbing system when temperatures drop below freezing.",
    content:
      "Frozen pipes can cause significant damage to your home. When water freezes, it expands and puts pressure on pipes, which can lead to cracks or bursts...",
    imageUrl: "/images/blog2.jpg",
    author: "Sarah Miller",
    date: "April 10, 2025",
    tags: ["winter maintenance", "emergency prevention", "seasonal tips"],
    slug: "prevent-frozen-pipes",
  },
  {
    id: "3",
    title: "Water Heater Maintenance: Extending the Life of Your System",
    summary:
      "Simple maintenance steps to keep your water heater running efficiently for years to come.",
    content:
      "A properly maintained water heater can last 10-15 years. Regular maintenance not only extends the life of your system but also ensures it runs efficiently...",
    imageUrl: "/images/blog3.jpg",
    author: "James Wilson",
    date: "April 5, 2025",
    tags: ["water heater", "maintenance", "energy efficiency"],
    slug: "water-heater-maintenance",
  },
  {
    id: "4",
    title:
      "How to Choose the Right Plumbing Fixtures for Your Bathroom Remodel",
    summary:
      "A guide to selecting fixtures that balance style, functionality, and water efficiency.",
    content:
      "When remodeling your bathroom, selecting the right fixtures is crucial. The choices you make will impact both the aesthetics and functionality of your space...",
    imageUrl: "/images/blog4.jpg",
    author: "Emily Davis",
    date: "March 28, 2025",
    tags: ["bathroom remodel", "fixtures", "design tips"],
    slug: "bathroom-fixture-selection",
  },
  {
    id: "5",
    title: "The Ultimate Guide to Unclogging Drains Without Harsh Chemicals",
    summary:
      "Eco-friendly and effective methods to deal with stubborn clogs in your home.",
    content:
      "When faced with a clogged drain, many homeowners reach for chemical drain cleaners. However, these products can damage pipes and are harmful to the environment...",
    imageUrl: "/images/blog5.jpg",
    author: "David Thompson",
    date: "March 22, 2025",
    tags: ["eco-friendly", "drain maintenance", "DIY solutions"],
    slug: "unclogging-drains-naturally",
  },
];
