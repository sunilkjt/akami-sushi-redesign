//! MIT licensed. Business data for Akami Sushi, Lisbon.
//! All values verified from the existing website (akamisushi.pt) on 2026-10-26.
export const RESTAURANT = {
  name: "Akami Sushi",
  address: {
    street: "Rua Conselheiro José Silvestre Ribeiro 8A",
    postalCode: "1600-431",
    city: "Lisboa",
    country: "Portugal",
  },
  phoneDisplay: "+351 217 160 316",
  phoneHref: "tel:+351217160316",
  whatsappHref: "https://wa.me/351920309613",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Akami+Sushi,+Rua+Conselheiro+Jos%C3%A9+Silvestre+Ribeiro+8A,+1600-431+Lisboa",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.168479055289!2d-9.180463799999998!3d38.75983959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193350a62db15f%3A0x5bda4d8dfce15f51!2sAkami%20Sushi!5e0!3m2!1sen!2spt!4v1751978046351!5m2!1sen!2spt",
  hours: [
    { label: "11:30 – 15:30", key: "hours.lunch" },
    { label: "18:30 – 22:30", key: "hours.dinner" },
  ],
  ordering: [
    {
      name: "Uber Eats",
      href: "https://www.ubereats.com/pt-en/store/akami-sushi/D6UAYSRHQaOGAFFG3-90eA",
      color: "#06C167",
    },
    { name: "Bolt Food", href: "https://food.bolt.eu/pt-PT/386-lisbon/p/144578-akami-sushi", color: "#32BB78" },
    { name: "Glovo", href: "https://glovoapp.com/pt/pt/lisboa/akami-sushi-poke-lis/", color: "#F5B300" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/akamisushilisboa" },
    { name: "Facebook", href: "https://www.facebook.com/Akamisushipt" },
    { name: "WhatsApp", href: "https://wa.me/351920309613" },
  ],
} as const;
