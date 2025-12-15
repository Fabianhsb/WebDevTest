export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  badges?: string[]; // z.B. ["V", "🌶️"]
};

export type MenuCategory = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    title: "Vorspeisen",
    items: [
      { name: "Bruschetta", description: "Tomaten, Basilikum, Knoblauch, Olivenöl", price: "6,50 €", badges: ["V"] },
      { name: "Caprese", description: "Mozzarella, Tomaten, Basilikum", price: "8,90 €", badges: ["V"] },
    ],
  },
  {
    title: "Pasta",
    note: "Alle Pastagerichte auch glutenfrei möglich (+2,00 €).",
    items: [
      { name: "Spaghetti Aglio e Olio", description: "Knoblauch, Olivenöl, Chili", price: "11,90 €", badges: ["V", "🌶️"] },
      { name: "Penne Arrabbiata", description: "Tomatensauce, Chili, Kräuter", price: "12,50 €", badges: ["V", "🌶️"] },
      { name: "Tagliatelle al Salmone", description: "Lachs, Sahnesauce, Zitrone", price: "15,90 €" },
    ],
  },
  {
    title: "Pizza (Steinofen)",
    items: [
      { name: "Margherita", description: "Tomate, Mozzarella, Basilikum", price: "10,90 €", badges: ["V"] },
      { name: "Salami", description: "Tomate, Mozzarella, Salami", price: "12,90 €" },
      { name: "Verdure", description: "Gemüse der Saison", price: "13,50 €", badges: ["V"] },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Tiramisu", description: "Hausgemacht", price: "6,90 €" },
      { name: "Panna Cotta", description: "Vanille, Beerenspiegel", price: "6,50 €", badges: ["V"] },
    ],
  },
];
