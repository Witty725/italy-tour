export interface ChecklistItem {
  id: string;
  category: string;
  text: string;
}

export const packingList: ChecklistItem[] = [
  // Documents & Finance
  { id: 'doc-1', category: 'Documents & Finance', text: 'Passports (both) + Global Entry cards' },
  { id: 'doc-2', category: 'Documents & Finance', text: 'Printed + digital copies of passports (keep separate)' },
  { id: 'doc-3', category: 'Documents & Finance', text: 'Delta Airlines boarding passes / e-tickets' },
  { id: 'doc-4', category: 'Documents & Finance', text: 'MSC Splendida boarding passes & cabin info' },
  { id: 'doc-5', category: 'Documents & Finance', text: 'The Tour Guy Rome/Vatican confirmation & tickets' },
  { id: 'doc-6', category: 'Documents & Finance', text: 'Travel insurance policy (printed + phone app)' },
  { id: 'doc-7', category: 'Documents & Finance', text: 'Hotel confirmations (Pontremoli + Rome)' },
  { id: 'doc-8', category: 'Documents & Finance', text: 'Car rental/Tesla rental confirmation (if applicable)' },
  { id: 'doc-9', category: 'Documents & Finance', text: 'Prescription bottles (Adderall, Lisinopril) + copies' },
  { id: 'doc-10', category: 'Documents & Finance', text: 'Doctor notes/medical summaries (if needed for travel)' },
  { id: 'doc-11', category: 'Documents & Finance', text: 'List of medications & allergies (both)' },
  { id: 'doc-12', category: 'Documents & Finance', text: 'Emergency contacts list (printed)' },
  { id: 'doc-13', category: 'Documents & Finance', text: 'Credit cards (2+, notify banks of travel)' },
  { id: 'doc-14', category: 'Documents & Finance', text: 'Debit card + backup' },
  { id: 'doc-15', category: 'Documents & Finance', text: 'Cash (Euros) - small bills for tips/gelato' },
  { id: 'doc-16', category: 'Documents & Finance', text: 'Printed copies of all confirmations (in case of no signal)' },
  { id: 'doc-17', category: 'Documents & Finance', text: "Copy of driver's license (both)" },
  { id: 'doc-18', category: 'Documents & Finance', text: 'Pet sitter/dog care instructions & vet info (Boston Terrier CHF plan)' },

  // Packing Essentials
  { id: 'pe-1', category: 'Packing Essentials', text: '5-6 Casual dresses / Lightweight pants (khaki/gray chino)' },
  { id: 'pe-2', category: 'Packing Essentials', text: '4-5 Skorts or shorts (athletic + casual for ports)' },
  { id: 'pe-3', category: 'Packing Essentials', text: '6-8 Tops / T-shirts (mix of light blouses, athletic, and casual)' },
  { id: 'pe-4', category: 'Packing Essentials', text: '4-5 Polos (dinners, Mass, cruise)' },
  { id: 'pe-5', category: 'Packing Essentials', text: '1-2 Light cardigans, shawls, or long-sleeve button-ups (AC, sun, and Vatican layers)' },
  { id: 'pe-6', category: 'Packing Essentials', text: '1 Modest, long dress/skirt or pants covering knees for July 1 Vatican tour' },
  { id: 'pe-7', category: 'Packing Essentials', text: '10 Quick-dry underwear' },
  { id: 'pe-8', category: 'Packing Essentials', text: '6-8 Pairs of socks/stockings (athletic + dress)' },
  { id: 'pe-9', category: 'Packing Essentials', text: '2 Swimwear sets / Swim trunks + cover-up' },
  { id: 'pe-10', category: 'Packing Essentials', text: '2-3 Athletic clothing sets (e-bikes, gorge floating, gym)' },
  { id: 'pe-11', category: 'Packing Essentials', text: 'Athletic sneakers (daily walking, broken in, good for e-bikes)' },
  { id: 'pe-12', category: 'Packing Essentials', text: 'Stylish sandals, flats, or comfortable casual shoes (dinners, Vatican)' },
  { id: 'pe-13', category: 'Packing Essentials', text: 'Flip-flops (cruise cabin, pool, beach)' },
  { id: 'pe-14', category: 'Packing Essentials', text: 'High-SPF reef-safe sunscreen' },
  { id: 'pe-15', category: 'Packing Essentials', text: 'Bug spray (small DEET/Picaridin + plan to buy Autan in Italy)' },
  { id: 'pe-16', category: 'Packing Essentials', text: 'Blister plasters (Compeed) + mini first-aid kit' },
  { id: 'pe-17', category: 'Packing Essentials', text: 'Travel detergent sheets + portable sink stopper' },
  { id: 'pe-18', category: 'Packing Essentials', text: 'Small umbrella' },
  { id: 'pe-19', category: 'Packing Essentials', text: 'All usual toiletries (travel size, 3-1-1 compliant)' },
  { id: 'pe-20', category: 'Packing Essentials', text: 'Microfiber travel towel (quick-dry)' },

  // Electronics & Gear
  { id: 'elec-1', category: 'Electronics & Gear', text: 'Anti-theft gear (neck wallet, RFID blocking)' },
  { id: 'elec-2', category: 'Electronics & Gear', text: 'Reusable collapsible water bottle' },
  { id: 'elec-3', category: 'Electronics & Gear', text: 'Phone + charger' },
  { id: 'elec-4', category: 'Electronics & Gear', text: 'Personal laptop + charger' },
  { id: 'elec-5', category: 'Electronics & Gear', text: 'Work laptop + charger (backpack)' },
  { id: 'elec-6', category: 'Electronics & Gear', text: 'Power banks' },
  { id: 'elec-7', category: 'Electronics & Gear', text: '2-3 US-to-EU plug adapters (Type C/F)' },
];

export interface ItineraryDay {
  date: string;
  location: string;
  highF: number;
  lowF: number;
  weather: string;
  warning?: string;
}

export const itinerary: ItineraryDay[] = [
  { date: 'June 18, 2026', location: 'PONTREMOLI COUNTRYSIDE', highF: 77, lowF: 58, weather: 'Mostly sunny, possible light evening rain' },
  { date: 'June 19, 2026', location: 'TUSCANY COUNTRYSIDE', highF: 78, lowF: 57, weather: 'Pleasant, light clouds possible' },
  { date: 'June 20, 2026', location: 'TUSCANY COUNTRYSIDE', highF: 76, lowF: 59, weather: 'Mild, chance of brief shower' },
  { date: 'June 21, 2026', location: 'TUSCANY COUNTRYSIDE', highF: 79, lowF: 58, weather: 'Sunny & warm - perfect for e-bikes' },
  { date: 'June 22, 2026', location: 'TUSCANY COUNTRYSIDE', highF: 77, lowF: 56, weather: 'Cooler evening', warning: 'Cooler evening - light layers' },
  { date: 'June 23, 2026', location: 'LIVORNO (EMBARK MSC SPLENDIDA)', highF: 82, lowF: 65, weather: 'Sunny, warm - embarkation day' },
  { date: 'June 24, 2026', location: 'CAGLIARI, SARDINIA', highF: 84, lowF: 68, weather: 'Hot & sunny - port day' },
  { date: 'June 25, 2026', location: 'PALERMO, SICILY', highF: 86, lowF: 70, weather: 'Very warm - explore & relax' },
  { date: 'June 26, 2026', location: 'VALLETTA, MALTA', highF: 83, lowF: 69, weather: 'Sunny, beautiful port' },
  { date: 'June 27, 2026', location: 'AT SEA', highF: 82, lowF: 68, weather: 'Sea day - pool & rest' },
  { date: 'June 28, 2026', location: 'BARCELONA, SPAIN', highF: 85, lowF: 67, weather: 'Warm & vibrant - Gaudí day!' },
  { date: 'June 29, 2026', location: 'MARSEILLE, FRANCE', highF: 81, lowF: 66, weather: 'Mild & pleasant - French Riviera' },
  { date: 'June 30, 2026', location: 'LIVORNO (DISEMBARK)', highF: 83, lowF: 66, weather: 'Disembark & transfer to Rome' },
  { date: 'July 1, 2026', location: 'ROME (VATICAN TOUR DAY)', highF: 86, lowF: 65, weather: 'Hot', warning: 'STRICT VATICAN DRESS CODE - shoulders + knees covered!' },
  { date: 'July 2, 2026', location: 'ROME', highF: 87, lowF: 66, weather: 'Hot & sunny - more sightseeing' },
  { date: 'July 3, 2026', location: 'ROME (DEPARTURE DAY)', highF: 88, lowF: 67, weather: 'Hot - light packing for flight' }
];

export const laundryStrategy = [
  { id: 'ls-1', dates: 'June 18-22', location: 'Pontremoli Countryside (Small Hotel)', rules: 'NO washer/dryer in hotel. Self-service laundromat: "Lavanderia Il Giglio" (Via Sismondo 13/15) ~5 min walk. Bring detergent sheets + portable sink stopper.' },
  { id: 'ls-2', dates: 'June 23-30', location: 'MSC Splendida Cruise (Balcony Cabin)', rules: 'NO self-service laundry on MSC ships. Paid valet service only (Pre-purchase "Back Home Clean" 40-item package online for ~$50-55). Drop bag before noon, returned in 48 hours.' },
  { id: 'ls-3', dates: 'July 1-3', location: 'Rome (Short Stay)', rules: 'Use any leftover clean cruise laundry or quick hand-wash in hotel sink. Pack a small quick-dry towel & travel detergent sheets.' }
];

export const emergencyContacts = {
  euEmergency: '112',
  usEmbassy: '+39 06 46741'
};
