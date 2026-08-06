export const SOCIAL = {
  youtube: "https://www.youtube.com/@ForTomorrow26",
  linkedin: "https://www.linkedin.com/company/fortomorrow-today/",
} as const;

/** Personal profiles for named team members. */
export const PEOPLE = {
  faridaLinkedin: "https://www.linkedin.com/in/drfaridajalal/",
} as const;

export const CONTACT = {
  email: "hello@fortomorrow.co",
  emailHref: "mailto:hello@fortomorrow.co",
  phone: "+971 58 172 9545",
  phoneHref: "tel:+971581729545",
  offices: "Dubai · Bengaluru",
} as const;

/** Props to open an external link safely in a new tab. */
export const externalLink = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
