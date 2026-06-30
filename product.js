// ─────────────────────────────────────────────
// PRODUCT DATA
// ─────────────────────────────────────────────
const PRODUCTS = [
    {
    id: 'p1', category: 'green-nature', name: 'Rebootat FS 750ml',
    price: 15000, bulkPrice: 14000, bulkQty: 2,
    media: [
      { type: 'image', src: 'media/green-nature-RebootatFS-1.jpg', caption: 'SUPPORTS HEALTHY DIGESTION Helps your body break down food easily' },
      { type: 'image', src: 'media/green-nature-RebootatFS-2.jpg', caption: 'PROMOTES GUT BALANCE Supports natural intestinal balance' },
    ],
    description: `Greenature Rebootar FS (Fever Shield) – Natural Herbal. Experience the benefits of nature, it destroys malaria parasites and typhoid fever in 5 days.

 INGREDIENTS
 Zingiber Offcinale
Aloe Barbadensis Miller
Curcuma Longa
Treated water.

 FUNCTIONS
✅ Fight malaria
✅ Diarrhoea solution
✅ Regulate Cholesterol
✅ Reduces body pain
✅ Provides relief for typhoid fever
✅ Antibacterial properties
✅ Relieves cold, cough, catarrh symptoms`,
    shortDesc: 'Greenature Rebootar FS (Fever Shield) – Natural Herbal. Experience the benefits of nature, it destroys malaria parasites and typhoid fever in 5 days.',
  },
  {
    id: 'p2', category: 'green-nature', name: 'Rebootat DD 750ml',
    price: 15000, bulkPrice: 14000, bulkQty: 2,
    media: [
      { type: 'image', src: 'media/green-nature-RebootatDD-1.jpg', caption: 'It Supports liver, kidney and heart health' },
			{ type: 'image', src: 'media/green-nature-RebootatDD-2.jpg', caption: 'Fights infections and Bacteria (including STDs)' },
      { type: 'image', src: 'media/green-nature-RebootatDD-3.jpg', caption: 'Fights infections and Bacteria (including STDs)' },
      { type: 'image', src: 'media/green-nature-RebootatDD-4.jpg', caption: 'lowers blood sugar level and diabetes' },
    ],
    description: `Rebootar Bitters -
		It Reboots your body systems, Renew body organs and Revitalize dead cells. A potent herbal formula for daily detox and total wellness.

 Ingredients

Citrus Aurantifolia
Medicago Sativa
Arctium Lappa
Citrus Lanatus
Gingko
Orthosiphon.
Bacopa Monnieri
Withania Somnifera
Treated water.

 Functions
 it detoxifies, renews and rejuvenates your body organs and also defends your body from sickness and diseases.
 Benefits
✅ Natural Detoxifier
✅ Boost Immune System
✅ Rich in Antioxidants
✅ Promotes Kidney and Liver Health
✅ Fights; bacteria,fungi,viral , parasite disease & stds
✅ Regulates Cholesterol
✅ Normalizes Blood Pressure
✅ Stabilize Blood Sugar Level
✅ Fights Cancer
✅ Helps with Weight Loss
✅ Aids Digestion
✅ Fights Inflamation
✅ Boost Male and Female Fertility
✅ Arthrites Relief
✅ Helps Cough
✅ Eases Asthma and Allergies
✅ Improves Vision
✅ deals with ulcer
✅ Hepatoprotective
✅ Good for the treatment of Pile
✅ Helps in the treatment of Stroke.
✅ Help in the treatment of Fibroids
✅ Help in Cleaning our system from Toxins-`,
    shortDesc: 'It Reboots your body systems, Renew body organs and Revitalize dead cells. A potent herbal formula for daily detox and total wellness.',
  },
  {
    id: 'p3', category: 'green-nature', name: 'Rebootat CD 750ml',
    price: 25000, 
    media: [
      { type: 'image', src: 'media/green-nature-RebootatCD-1.jpg', caption: 'Rebootat CD 750ml – Natural Herbal Wellness Supplement' },
			{ type: 'image', src: 'media/green-nature-RebootatCD-2.jpg', caption: 'Rebootat CD 750ml – Natural Herbal Wellness Supplement' },
      { type: 'image', src: 'media/green-nature-RebootatCD-3.jpg', caption: 'Supports immune function and overall vitality' },
    ],
    description: `💓  REBOOTAR CARDIO — Greenature’s breakthrough formula for Cardiovascular & Blood Health.

 INGREDIENTS
 Justicia Xamea
Salvia Miltiorrhiza
Amomum Testaceum
Treated water.

 FUNCTIONS
It’s not just another supplement…
✅ It fights hypertension & high cholesterol
✅ Revives blood circulation & arteries
✅ Supports the heart, liver, and kidney
✅ It helps to alleviate Migraine symptoms.
✅ Boosts blood cells for anemia & sickle cell warriors

💥 Real results. Real testimonies. Real transformation!`,
    shortDesc: '💓  REBOOTAR CARDIO — Greenature’s breakthrough formula for Cardiovascular & Blood Health.',
  },
  {
    // ⚠️ NEEDS CORRECT DESCRIPTION – product name "aloe vera Soursop" does not match
    // the previous description which was for an Aloe Vera Soap. Please update.
    id: 'p4', category: 'green-nature', name: 'aloe vera Soursop',
    price: 15000,
    media: [
      { type: 'image', src: 'media/green-nature-soursop-1.jpg', caption: 'Soursop Leaf Tea – 20 biodegradable bags' },
    ],
    description: `💚  REBOOTAR ALOE-VERA SOAP — the herbal skincare formula that transforms dull, infected, or damaged skin into a smooth, radiant glow.

 INGREDIENTS
Essential oil
Aloe vera
Shea butter
Collagen
Grape seed oil

 FUNCTIONS
🌿 Packed with antibacterial and rejuvenating herbs, it helps:
✅ Clear acne, eczema & rashes
✅ Fade stretch marks & sunburn
✅ Restore smooth, even-toned skin
✅ Support total skin renewal naturally

🔥 Visible results in days — trusted by wellness leaders across Africa!

💥 Don’t just sell beauty, lead the skin transformation movement with Greenature!
This is your chance to be among the first distributors & partners in the fast-moving herbal skincare line.`,
    shortDesc: '💚  REBOOTAR ALOE-VERA SOAP — the herbal skincare formula that transforms dull, infected, or damaged skin into a smooth, radiant glow..',
  },
  {
    // ⚠️ NEEDS CORRECT DESCRIPTION – previous description contained fabricated/fictional details.
    id: 'p5', category: 'jigsimur', name: 'jigsimur Skin Glow Drops',
    price: 6000, bulkPrice: 5200, bulkQty: 2,
    media: [
      { type: 'image', src: 'media/jigsimur-1.jpg', caption: 'jigsimur Skin Glow Drops – 30ml concentrate' },
      { type: 'image', src: 'media/jigsimur-2.jpg', caption: 'Apply 3 drops to face morning & evening' },
      { type: 'image', src: 'media/jigsimur-3.jpg', caption: 'Contains rosehip, jojoba and sea buckthorn' },
    ],
    description: `Jigsimur Herbal Drink – Natural Herbal Wellness Supplement. Discover the natural goodness of Jigsimur Herbal Drink, a premium herbal supplement carefully formulated from a blend of traditional herbs and natural plant extracts. Designed to support overall wellness, this herbal drink is ideal for individuals seeking a natural addition to a healthy lifestyle.

Made with high-quality herbal ingredients, Jigsimur Herbal Drink is widely recognized for its refreshing herbal formula and is commonly used to support healthy digestion, natural detoxification, immune function, and overall body vitality. Its carefully selected herbal blend helps promote everyday wellness while complementing a balanced diet and active lifestyle.

Key Features: 🌿 Premium Herbal Formula 💪 Supports General Wellness 🍃 Supports Natural Detoxification 🛡️ Supports Immune Health ❤️ Promotes Healthy Digestion 🌱 Rich in Natural Plant Extracts ⚡ Helps Maintain Energy and Vitality ✅ Suitable for Daily Wellness Support.

Ingredients: Jigsimur Herbal Drink contains a proprietary blend of natural herbs and plant extracts, including carefully selected traditional herbal ingredients known for supporting digestive health, antioxidant protection, and overall wellness.

Suggested Use: Adults: Take the recommended amount as indicated on the product label or as advised by a qualified healthcare professional. Shake well before use.
`,
    shortDesc: 'igsimur Herbal Drink – Natural Herbal Wellness Supplement..',
  },
  {
    id: 'p6', category: 'jinja', name: 'jinja herbal extract 750ml',
    price: 15000, bulkPrice: 14000, bulkQty: 2,  // ✅ FIXED: bulk was ₦27,000 (higher than single price!)
    media: [
      { type: 'image', src: 'media/jinja-picture-1.jpg', caption: 'your future will thank you' },
      { type: 'image', src: 'media/jinja-picture-2.jpg', caption: '100% safe, effective and no side effects' },
      { type: 'image', src: 'media/jinja-picture-3.jpg', caption: 'Clinically tested and approved' },
    ],
    description: `Jinja Herbal Extract – Natural Herbal Wellness Supplement. Experience the power of nature with Jinja Herbal Extract, a premium herbal supplement carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural addition to their healthy lifestyle.

Made with high-quality herbal ingredients, Jinja Herbal Extract is widely recognized for its antioxidant-rich formula and is commonly used to support the body's natural detoxification process, immune function, digestive wellness, and general vitality. It is produced from 100% natural herbs and is NAFDAC registered.

Key Features: 🌿 100% Natural Herbal Formula 💪 Supports General Wellness 🛡️ Rich in Natural Antioxidants 🍃 Supports Natural Detoxification ❤️ Supports Liver and Kidney Wellness 🌱 Helps Maintain a Healthy Lifestyle ✅ NAFDAC Registered.

Ingredients: Jinja Herbal Extract contains a blend of traditional African herbs, including Carpolobia alba, Cnestis ferruginea, Heliotropium indicum, and other carefully selected herbal extracts.

Suggested Use: Adults: Take 20–30 ml, three times daily, or as directed by a qualified healthcare professional.`,
    shortDesc: 'Jinja Herbal Extract – Natural Herbal Wellness Supplement. Experience the power of nature with Jinja Herbal Extract.',
  },
  {
    id: 'p7', category: 'jinja', name: 'jinja herbal extract 450ml',
    price: 7000, bulkPrice: 6500, bulkQty: 2,  // ✅ FIXED: bulk was ₦13,000 (higher than single price!)
    media: [
      { type: 'image', src: 'media/jinja-picture-1.jpg', caption: 'your future will thank you' },
      { type: 'image', src: 'media/jinja-picture-2.jpg', caption: '100% safe, effective and no side effects' },
      { type: 'image', src: 'media/jinja-small-picture-3.jpg', caption: 'Clinically tested and approved' },
    ],
    description: `Jinja Herbal Extract – Natural Herbal Wellness Supplement. Experience the power of nature with Jinja Herbal Extract, a premium herbal supplement carefully formulated from a blend of natural African herbs. Crafted to support overall wellness, this herbal extract is designed for individuals seeking a natural addition to their healthy lifestyle.

Made with high-quality herbal ingredients, Jinja Herbal Extract is widely recognized for its antioxidant-rich formula and is commonly used to support the body's natural detoxification process, immune function, digestive wellness, and general vitality. It is produced from 100% natural herbs and is NAFDAC registered.

Key Features: 🌿 100% Natural Herbal Formula 💪 Supports General Wellness 🛡️ Rich in Natural Antioxidants 🍃 Supports Natural Detoxification ❤️ Supports Liver and Kidney Wellness 🌱 Helps Maintain a Healthy Lifestyle ✅ NAFDAC Registered.

Ingredients: Jinja Herbal Extract contains a blend of traditional African herbs, including Carpolobia alba, Cnestis ferruginea, Heliotropium indicum, and other carefully selected herbal extracts.

Suggested Use: Adults: Take 20–30 ml, three times daily, or as directed by a qualified healthcare professional.`,
    shortDesc: 'Jinja Herbal Extract – Natural Herbal Wellness Supplement. Experience the power of nature with Jinja Herbal Extract.',
  },
];
