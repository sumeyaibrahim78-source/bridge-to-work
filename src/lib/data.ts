export type OppType = "Internship" | "Fellowship" | "Returnship" | "Entry role";
export type Opportunity = {
  id: string; title: string; org: string; type: OppType; location: string;
  duration: string; paid: boolean; skills: string[]; summary: string;
};
export const opportunities: Opportunity[] = [
  { id: "1", title: "Data Analytics Fellow", org: "Nile Health Partners", type: "Fellowship", location: "Hybrid", duration: "6 months", paid: true, skills: ["Excel", "SQL", "Storytelling"], summary: "Structured fellowship with weekly mentorship and a capstone on clinic data." },
  { id: "2", title: "Junior Frontend Developer", org: "Souq Digital", type: "Entry role", location: "Remote", duration: "Full-time", paid: true, skills: ["React", "CSS", "Git"], summary: "Skills-first hiring: a take-home project replaces years-of-experience requirements." },
  { id: "3", title: "Return-to-Work Program: Finance", org: "Gulf Commercial Bank", type: "Returnship", location: "On-site", duration: "16 weeks", paid: true, skills: ["Accounting", "Reporting"], summary: "For professionals returning after a career break, with flexible hours and a coach." },
  { id: "4", title: "Community Programs Intern", org: "Green Cities Foundation", type: "Internship", location: "On-site", duration: "3 months", paid: true, skills: ["Communication", "Event planning"], summary: "Run youth workshops alongside municipal partners and local schools." },
  { id: "5", title: "Customer Success Associate", org: "Tamkeen Logistics", type: "Entry role", location: "Hybrid", duration: "Full-time", paid: true, skills: ["Communication", "CRM", "Arabic & English"], summary: "Paid onboarding academy for first-time job seekers." },
  { id: "6", title: "UX Research Fellowship", org: "Firststep Labs × State University", type: "Fellowship", location: "Remote", duration: "4 months", paid: true, skills: ["Interviewing", "Figma"], summary: "University–industry partnership with real client briefs." },
];
export const mentors = [
  { name: "Amira Haddad", role: "Senior Data Scientist", org: "Telecom sector", years: 12, topics: ["Data careers", "Interview prep"], initials: "AH" },
  { name: "Omar Khalil", role: "Engineering Manager", org: "Fintech", years: 15, topics: ["Software", "First job"], initials: "OK" },
  { name: "Leila Mansour", role: "HR Director", org: "Manufacturing", years: 18, topics: ["CV review", "Negotiation"], initials: "LM" },
  { name: "Yusuf Adeyemi", role: "Founder", org: "Social enterprise", years: 9, topics: ["Entrepreneurship", "Networking"], initials: "YA" },
  { name: "Sara Nasser", role: "Product Designer", org: "E-commerce", years: 7, topics: ["Portfolios", "UX"], initials: "SN" },
  { name: "Daniel Okoro", role: "Finance Lead", org: "Banking", years: 14, topics: ["Returning to work", "Finance"], initials: "DO" },
];
export const trainings = [
  { title: "Workplace Essentials", hours: 10, desc: "Communication, teamwork, and professional etiquette." },
  { title: "Digital Skills Bootcamp", hours: 40, desc: "Spreadsheets, data basics, and online collaboration tools." },
  { title: "CV & Interview Studio", hours: 6, desc: "Build a skills-based CV and practice live mock interviews." },
  { title: "Career Pathways Guide", hours: 4, desc: "Map your strengths to growing local sectors." },
];
