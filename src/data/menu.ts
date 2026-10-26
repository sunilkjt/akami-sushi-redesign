//! MIT licensed. Menu data transcribed from the restaurant's own menu
//! (as published on akamisushi.pt on 2026-10-26). Prices verified.
//! Item names are the restaurant's own naming; check the original menu
//! photos in /public/menu/ for the printed version.
export type Locale = "pt" | "en" | "ja";

export type MenuItem = {
  /** Price in euros */
  price: number;
  /** Formatted pcs / portion note in each language, if any */
  pcs?: { pt: string; en: string; ja: string };
  /** Flags marked on the printed menu */
  vegan?: boolean;
  spicy?: boolean;
  names: { pt: string; en: string; ja: string };
};

export type MenuCategory = {
  id: string;
  names: { pt: string; en: string; ja: string };
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "entradas",
    names: { pt: "Entradas", en: "Starters", ja: "前菜" },
    items: [
      { names: { pt: "Sopa de Miso", en: "Miso Soup", ja: "お味噌汁" }, price: 2.99, vegan: true },
      { names: { pt: "Salada Wakame", en: "Wakame Salad", ja: "わかめサラダ" }, price: 4.99, vegan: true },
      { names: { pt: "Carpaccio de Salmão", en: "Salmon Carpaccio", ja: "鮭のカルパッチョ" }, price: 6.99, pcs: { pt: "7 pcs", en: "7 pcs", ja: "7問" } },
      { names: { pt: "Tataki de Atum", en: "Tuna Tataki", ja: "マグロのたたき" }, price: 6.99, pcs: { pt: "7 pcs", en: "7 pcs", ja: "7問" } },
      { names: { pt: "Tataki de Salmão", en: "Salmon Tataki", ja: "鮭のたたき" }, price: 6.99, pcs: { pt: "7 pcs", en: "7 pcs", ja: "7問" } },
      { names: { pt: "Gyoza de Porco", en: "Pork Gyoza", ja: "豚ギョーザ" }, price: 5.5, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5問" } },
      { names: { pt: "Salada de Salmão e Abacate", en: "Salmon Avocado Salad", ja: "鮭とアボカドのサラダ" }, price: 6.5 },
      { names: { pt: "Salada de Atum picante", en: "Spicy Tuna Salad", ja: "スパイシーマグロサラダ" }, price: 6.5 },
      { names: { pt: "Kimuchi Salmão", en: "Kimuchi Salmon", ja: "鮭のキムチ" }, price: 6.0 },
      { names: { pt: "Kimuchi Mistu", en: "Kimuchi Mistu (mixed kimuchi)", ja: "キムチ盛り合わせ" }, price: 6.9 },
      { names: { pt: "Ceviche de Atum", en: "Tuna Ceviche", ja: "マグロのセビーチェ" }, price: 7.99 },
      { names: { pt: "Ceviche de Salmão", en: "Salmon Ceviche", ja: "鮭のセビーチェ" }, price: 7.99 },
    ],
  },
  {
    id: "sashimi",
    names: { pt: "Sashimi", en: "Sashimi", ja: "刺身" },
    items: [
      { names: { pt: "Sashimi de Salmão", en: "Salmon Sashimi", ja: "鮭の刺身" }, price: 5.99, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5問" } },
      { names: { pt: "Sashimi de Atum", en: "Tuna Sashimi", ja: "マグロの刺身" }, price: 5.99, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5問" } },
      { names: { pt: "Sashimi de Peixe Branco", en: "White Fish Sashimi", ja: "白身魚の刺身" }, price: 5.99, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5問" } },
      { names: { pt: "Sashimi de Polvo", en: "Octopus Sashimi", ja: "タコの刺身" }, price: 5.99, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5問" } },
    ],
  },
  {
    id: "sushi",
    names: { pt: "Sushi & Rolls", en: "Sushi Rolls", ja: "ロール寿司" },
    items: [
      { names: { pt: "Akami Volcano Roll", en: "Akami Volcano Roll", ja: "赤ボルケーノロール" }, price: 8.5 },
      { names: { pt: "Tempura Roll", en: "Tempura Roll", ja: "天ぷらロール" }, price: 7.9 },
      { names: { pt: "Spicy Tuna Roll", en: "Spicy Tuna Roll", ja: "スパイシーマグロロール" }, price: 8.5 },
      { names: { pt: "California Roll", en: "California Roll", ja: "カリフォルニアロール" }, price: 6.9 },
      { names: { pt: "Chicken Teriyaki Roll", en: "Chicken Teriyaki Roll", ja: "チキン照り焼きロール" }, price: 7.9 },
      { names: { pt: "Salmon Avocado Roll", en: "Salmon Avocado Roll", ja: "鮭とアボカドロール" }, price: 6.9 },
      { names: { pt: "Philadelphia Top Salmon Roll", en: "Philadelphia Top Salmon Roll", ja: "フィラデルフィア鮭ロール" }, price: 8.5 },
      { names: { pt: "Vegetable California Roll", en: "Vegetable California Roll", ja: "ベジタブルカリフォルニアロール" }, price: 6.5, vegan: true },
      { names: { pt: "Flamengo Salmão com Queijo Roll", en: "Salmon & Cheese Flamengo Roll", ja: "鮭とチーズのフラメンゴロール" }, price: 8.5 },
    ],
  },
  {
    id: "hot-rolls",
    names: { pt: "Hot Rolls", en: "Hot Rolls", ja: "揚げロール" },
    items: [
      { names: { pt: "Golden California Frito", en: "Golden Fried California", ja: "ゴールデンカリフォルニア" }, price: 7.9, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" } },
      { names: { pt: "Maki com Queijo Frito", en: "Fried Cheese Maki", ja: "チーズ揚げマキ" }, price: 7.5, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" } },
      { names: { pt: "California Frito", en: "Fried California", ja: "カリフォルニア揚げ" }, price: 6.5, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" } },
      { names: { pt: "Maki de Salmão Frito", en: "Fried Salmon Maki", ja: "鮭揚げマキ" }, price: 5.9, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" } },
    ],
  },
  {
    id: "futo-maki",
    names: { pt: "Futo Maki", en: "Futomaki", ja: "太巻き" },
    items: [
      { names: { pt: "Futo Maki de Salmão", en: "Salmon Futomaki", ja: "鮭の太巻き" }, price: 8.5 },
      { names: { pt: "Futo Maki de Atum", en: "Tuna Futomaki", ja: "マグロの太巻き" }, price: 8.5 },
      { names: { pt: "Futo Maki Akami Special", en: "Akami Special Futomaki", ja: "赤スペシャル太巻き" }, price: 8.9 },
    ],
  },
  {
    id: "maki",
    names: { pt: "Maki (Hosomaki)", en: "Maki (Hosomaki)", ja: "巻き寿司（細巻き）" },
    items: [
      { names: { pt: "Maki de Salmão", en: "Salmon Maki", ja: "鮭巻き" }, price: 5.5, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" } },
      { names: { pt: "Maki de Atum", en: "Tuna Maki", ja: "マグロ巻き" }, price: 5.5, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" } },
      { names: { pt: "Maki de Atum Picante", en: "Spicy Tuna Maki", ja: "スパイシーマグロ巻き" }, price: 5.99, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" } },
      { names: { pt: "Maki de Manga", en: "Mango Maki", ja: "マンゴー巻き" }, price: 4.9, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" } },
      { names: { pt: "Maki de Salmão e Abacate", en: "Salmon Avocado Maki", ja: "鮭とアボカド巻き" }, price: 5.9, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" } },
      { names: { pt: "Maki de Pepino", en: "Cucumber Maki", ja: "きゅうり巻き" }, price: 4.9, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" }, vegan: true },
      { names: { pt: "Maki de Abacate", en: "Avocado Maki", ja: "アボカド巻き" }, price: 4.9, pcs: { pt: "8 pcs", en: "8 pcs", ja: "8問" }, vegan: true },
    ],
  },
  {
    id: "gunkan",
    names: { pt: "Gunkan e Rolos", en: "Gunkan", ja: "軍艦" },
    items: [
      { names: { pt: "Gunkan de Salmão", en: "Salmon Gunkan", ja: "鮭の軍艦" }, price: 3.99, pcs: { pt: "3 pcs", en: "3 pcs", ja: "3問" } },
      { names: { pt: "Gunkan de Atum", en: "Tuna Gunkan", ja: "マグロの軍艦" }, price: 3.99, pcs: { pt: "3 pcs", en: "3 pcs", ja: "3問" } },
      { names: { pt: "Gunkan de Wakame", en: "Wakame Gunkan", ja: "わかめの軍艦" }, price: 3.5, pcs: { pt: "3 pcs", en: "3 pcs", ja: "3問" }, vegan: true },
      { names: { pt: "Gunkan de Pepino", en: "Cucumber Gunkan", ja: "きゅうりの軍艦" }, price: 3.5, pcs: { pt: "3 pcs", en: "3 pcs", ja: "3問" }, vegan: true },
      { names: { pt: "Rolos de Salmão", en: "Salmon Roll-ups", ja: "鮭のロール" }, price: 4.5, pcs: { pt: "3 pcs", en: "3 pcs", ja: "3問" } },
      { names: { pt: "Rolos de Atum", en: "Tuna Roll-ups", ja: "マグロのロール" }, price: 4.5, pcs: { pt: "3 pcs", en: "3 pcs", ja: "3問" } },
    ],
  },
  {
    id: "nigiri",
    names: { pt: "Nigiri", en: "Nigiri", ja: "握り" },
    items: [
      { names: { pt: "Nigiri de Atum", en: "Tuna Nigiri", ja: "マグロの握り" }, price: 5.5, pcs: { pt: "4 pcs", en: "4 pcs", ja: "4問" } },
      { names: { pt: "Nigiri de Salmão", en: "Salmon Nigiri", ja: "鮭の握り" }, price: 5.5, pcs: { pt: "4 pcs", en: "4 pcs", ja: "4問" } },
      { names: { pt: "Nigiri Salmão Flamengo", en: "Flamengo Salmon Nigiri", ja: "フラメンゴ鮭の握り" }, price: 5.99, pcs: { pt: "4 pcs", en: "4 pcs", ja: "4問" } },
      { names: { pt: "Nigiri de Camarão", en: "Prawn Nigiri", ja: "エビの握り" }, price: 5.5, pcs: { pt: "4 pcs", en: "4 pcs", ja: "4問" } },
      { names: { pt: "Nigiri de Polvo", en: "Octopus Nigiri", ja: "タコの握り" }, price: 5.5, pcs: { pt: "4 pcs", en: "4 pcs", ja: "4問" } },
      { names: { pt: "Nigiri de Abacate", en: "Avocado Nigiri", ja: "アボカドの握り" }, price: 4.5, pcs: { pt: "4 pcs", en: "4 pcs", ja: "4問" }, vegan: true },
      { names: { pt: "Nigiri de Manga", en: "Mango Nigiri", ja: "マンゴーの握り" }, price: 4.5, pcs: { pt: "4 pcs", en: "4 pcs", ja: "4問" }, vegan: true },
    ],
  },
  {
    id: "temaki",
    names: { pt: "Temaki", en: "Temaki", ja: "手巻き" },
    items: [
      { names: { pt: "Temaki de Salmão", en: "Salmon Temaki", ja: "鮭の手巻き" }, price: 5.99, pcs: { pt: "2 pcs", en: "2 pcs", ja: "2本" } },
      { names: { pt: "Temaki de Atum", en: "Tuna Temaki", ja: "マグロの手巻き" }, price: 5.99, pcs: { pt: "2 pcs", en: "2 pcs", ja: "2本" } },
      { names: { pt: "Temaki de Camarão", en: "Prawn Temaki", ja: "エビの手巻き" }, price: 5.99, pcs: { pt: "2 pcs", en: "2 pcs", ja: "2本" } },
      { names: { pt: "Temaki Salmão com Queijo", en: "Salmon & Cheese Temaki", ja: "鮭とチーズの手巻き" }, price: 6.5, pcs: { pt: "2 pcs", en: "2 pcs", ja: "2本" } },
      { names: { pt: "Temaki de Atum Picante", en: "Spicy Tuna Temaki", ja: "スパイシーマグロの手巻き" }, price: 6.5, pcs: { pt: "2 pcs", en: "2 pcs", ja: "2本" }, spicy: true },
      { names: { pt: "Temaki Vegetal", en: "Vegetable Temaki", ja: "野菜の手巻き" }, price: 5.5, pcs: { pt: "2 pcs", en: "2 pcs", ja: "2本" }, vegan: true },
    ],
  },
  {
    id: "tempuraki",
    names: { pt: "Tempurak i", en: "Tempura & Panko", ja: "天ぷら・パン粉揚げ" },
    items: [
      { names: { pt: "Tempura de Lagostim", en: "Prawn Tempura", ja: "エビの天ぷら" }, price: 5.9, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5本" } },
      { names: { pt: "Tempura de Legumes", en: "Vegetable Tempura", ja: "野菜の天ぷら" }, price: 5.5, pcs: { pt: "6 pcs", en: "6 pcs", ja: "6本" }, vegan: true },
      { names: { pt: "Panko de Lagostim", en: "Panko Prawn", ja: "エビのパン粉揚げ" }, price: 5.9, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5本" } },
      { names: { pt: "Primavera de Legumes", en: "Vegetable Spring Rolls", ja: "野菜の春巻き" }, price: 5.9, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5本" }, vegan: true },
      { names: { pt: "Primavera de Lagostim", en: "Prawn Spring Rolls", ja: "エビの春巻き" }, price: 5.9, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5本" } },
      { names: { pt: "Panko de Frango", en: "Chicken Panko", ja: "チキンのパン粉揚げ" }, price: 6.0, pcs: { pt: "5 pcs", en: "5 pcs", ja: "5本" } },
    ],
  },
  {
    id: "poke",
    names: { pt: "Poke Bowl", en: "Poke Bowls", ja: "ポケボウル" },
    items: [
      { names: { pt: "Poke de Salmão", en: "Salmon Poke", ja: "鮭のポケボウル" }, price: 10.9 },
      { names: { pt: "Poke de Atum", en: "Tuna Poke", ja: "マグロのポケボウル" }, price: 10.9 },
      { names: { pt: "Poke de Legumes", en: "Vegetable Poke", ja: "野菜のポケボウル" }, price: 10.5, vegan: true },
      { names: { pt: "Poke de Lagostim Crocante", en: "Crispy Prawn Poke", ja: "クリスピー・エビのポケボウル" }, price: 11.5 },
      { names: { pt: "Poke de Frango Crocante", en: "Crispy Chicken Poke", ja: "クリスピー・チキンのポケボウル" }, price: 11.5 },
    ],
  },
  {
    id: "combinados",
    names: { pt: "Combinados", en: "Combination Platters", ja: "盛り合わせ" },
    items: [
      { names: { pt: "Combinado 1", en: "Combination 1", ja: "盛り合わせ1" }, price: 15.5, pcs: { pt: "20 pcs", en: "20 pcs", ja: "20問" } },
      { names: { pt: "Combinado 2", en: "Combination 2", ja: "盛り合わせ2" }, price: 23.5, pcs: { pt: "32 pcs", en: "32 pcs", ja: "32問" } },
      { names: { pt: "Combinado 3", en: "Combination 3", ja: "盛り合わせ3" }, price: 34.5, pcs: { pt: "48 pcs", en: "48 pcs", ja: "48問" } },
      { names: { pt: "Combinado Braseado", en: "Seared Combination", ja: "炙り盛り合わせ" }, price: 18.0, pcs: { pt: "25 pcs", en: "25 pcs", ja: "25問" } },
      { names: { pt: "Hot Lovers", en: "Hot Lovers", ja: "ホットラバーズ" }, price: 18.0, pcs: { pt: "24 pcs", en: "24 pcs", ja: "24問" } },
      { names: { pt: "Sashimi Lovers", en: "Sashimi Lovers", ja: "刺身ラバーズ" }, price: 21.9, pcs: { pt: "20 pcs", en: "20 pcs", ja: "20問" } },
    ],
  },
  {
    id: "quentes",
    names: { pt: "Pratos Quentes", en: "Hot Dishes", ja: "温かい料理" },
    items: [
      { names: { pt: "Teppanyaki de Frango", en: "Chicken Teppanyaki", ja: "チキン鉄板焼き" }, price: 9.9 },
      { names: { pt: "Teppanyaki de Lagostim", en: "Prawn Teppanyaki", ja: "エビの鉄板焼き" }, price: 9.9 },
      { names: { pt: "Arroz Frito de Frango", en: "Chicken Fried Rice", ja: "チキンチャーハン" }, price: 10.5 },
      { names: { pt: "Arroz Frito de Lagostim", en: "Prawn Fried Rice", ja: "エビチャーハン" }, price: 11.5 },
      { names: { pt: "Arroz Frito Vegetariano", en: "Vegetarian Fried Rice", ja: "野菜チャーハン" }, price: 9.9, vegan: true },
      { names: { pt: "Noodles de Frango", en: "Chicken Noodles", ja: "チキン焼きそば" }, price: 10.5 },
      { names: { pt: "Noodles de Lagostim", en: "Prawn Noodles", ja: "エビ焼きそば" }, price: 11.5 },
      { names: { pt: "Noodles Vegetarianos", en: "Vegetarian Noodles", ja: "野菜焼きそば" }, price: 9.9, vegan: true },
    ],
  },
  {
    id: "extras",
    names: { pt: "Acompanhamentos", en: "Side Dishes", ja: "おつまみ・サイド" },
    items: [
      { names: { pt: "Arroz Jasmine simples", en: "Plain Jasmine Rice", ja: "ジャスミンライス" }, price: 3.0 },
      { names: { pt: "Batatas fritas", en: "French Fries", ja: "ポテトフライ" }, price: 3.0 },
    ],
  },
];

export const ALL_MENU_IMAGES = [
  { src: "menu/menu-1.jpg", key: "menu.img1" },
  { src: "menu/menu-2.jpg", key: "menu.img2" },
  { src: "menu/menu-3.jpg", key: "menu.img3" },
  { src: "menu/menu-4.jpg", key: "menu.img4" },
  { src: "menu/menu-5.jpg", key: "menu.img5" },
  { src: "menu/menu-6.jpg", key: "menu.img6" },
];
