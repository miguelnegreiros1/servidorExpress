// Bird Dataset
const BIRDS = [
  {
    id: 'harpy-eagle',
    name: 'Harpy Eagle',
    scientificName: 'Harpia harpyja',
    region: 'Central & South America',
    occurrence: 'Tropical lowland rainforests of South and Central America (Amazon Basin, Brazil, Panama, Colombia, Venezuela).',
    description: 'One of the largest and most powerful eagles in the world. Known for its crown of erectile feathers, massive talons up to 13 cm, and incredible agility while hunting sloths and monkeys in dense canopy.',
    image: 'https://birdlifedata.blob.core.windows.net/species-images/22695998.jpg'
  },
  {
    id: 'toco-toucan',
    name: 'Toco Toucan',
    scientificName: 'Ramphastos toco',
    region: 'South America',
    occurrence: 'Central and eastern South America (Brazil, Paraguay, Bolivia, northern Argentina).',
    description: 'The largest and best-known species in the toucan family. Features a striking black body, white throat, and a massive bright yellow and orange bill that helps regulate body heat.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBQHVRwoAY_q7dqDUGHvTGchpFcMYkgYa0qXcV9RJbA&s=10'
  },
  {
    id: 'scarlet-macaw',
    name: 'Scarlet Macaw',
    scientificName: 'Ara macao',
    region: 'Neotropics',
    occurrence: 'Humid evergreen forests from southern Mexico, Central America, down to the Amazonian South America.',
    description: 'A large, vibrant red, yellow, and blue parrot. Renowned for its intelligence and powerful beak capable of cracking hard nuts and seeds. They form lifelong monogamous pairs.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZyNhLV1mFz-zjS7ckNEfhcuoDIFcnlRmeAriS8uloAkQjc4QOknhX_yG&s=10'
  },
  {
    id: 'kingfisher',
    name: 'Common Kingfisher',
    scientificName: 'Alcedo atthis',
    region: 'Eurasia & North Africa',
    occurrence: 'Freshwater rivers, streams, lakes, and coastal estuaries across Europe, Asia, and North Africa.',
    description: 'A small bird with brilliant electric blue and iridescent orange plumage. It hunts by perching over clear water before diving at high speed to capture small fish.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HSSckBLuDbNZpCLJvWeRcfppq750yLPoiaKVGO8PbuSauZYTuxkqFYY&s=10'
  },
  {
    id: 'mandarin-duck',
    name: 'Mandarin Duck',
    scientificName: 'Aix galericulata',
    region: 'East Asia & Europe',
    occurrence: 'Native to East Asia (Japan, China, Korea); introduced self-sustaining populations in Great Britain and Western Europe.',
    description: 'Famous for the male’s spectacular multi-colored breeding plumage, featuring orange "sail" feathers on the back, a crest, and intricate facial patterns.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN73b4SqNEU6PZv2qkJTJ--nvoQkDU-NY1ytD9Hof26Z39XJlmsqwYTCI&s=10'
  },
  {
    id: 'snowy-owl',
    name: 'Snowy Owl',
    scientificName: 'Bubo scandiacus',
    region: 'Arctic Tundra',
    occurrence: 'Circumpolar Arctic tundra across Canada, Alaska, Greenland, Northern Scandinavia, and Siberia.',
    description: 'A striking white owl specially adapted to cold climates with dense feathering down to its toes. Unlike most owls, it is largely diurnal and hunts during northern summer daylight.',
    image: 'https://canadiangeographic.ca/wp-content/uploads/2019/06/35808258-Snowy_Landing-1200x800.jpg'
  },
  {
    id: 'atlantic-puffin',
    name: 'Atlantic Puffin',
    scientificName: 'Fratercula arctica',
    region: 'North Atlantic',
    occurrence: 'Coasts of Iceland, Norway, Scotland, Greenland, Faroe Islands, and Eastern Canada.',
    description: 'Often called the "sea parrot" due to its colorful beak during breeding season. Puffins dig burrows on sea cliffs and can carry dozens of small fish lined up in their beak.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Papageitaucher_Fratercula_arctica.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original'
  },
  {
    id: 'greater-flamingo',
    name: 'Greater Flamingo',
    scientificName: 'Phoenicopterus roseus',
    region: 'Africa, Europe & Asia',
    occurrence: 'Shallow alkaline lakes, mudflats, and coastal lagoons in southern Europe, Africa, the Middle East, and South Asia.',
    description: 'The largest flamingo species. Famous for its pink plumage, long neck, and upside-down filter-feeding technique to strain brine shrimp and micro-algae from mud.',
    image: 'https://res.cloudinary.com/dr0zfbman/images/f_auto,q_auto:good/v1742204100/WordPress%20Content/iStock-1307720863_22556f1c53/iStock-1307720863_22556f1c53.jpg?_i=AA'
  },
  {
    id: 'resplendent-quetzal',
    name: 'Resplendent Quetzal',
    scientificName: 'Pharomachrus mocinno',
    region: 'Central America',
    occurrence: 'High-altitude cloud forests from southern Mexico to western Panama.',
    description: 'Venerated by ancient Maya and Aztec civilizations. The male possesses vibrant emerald-green feathers and twin tail streamers up to 65 cm long.',
    image: 'https://cdn.sanity.io/images/6ibvd6r4/production/6e38bf7fbacfa86904ccf8a1f4bad55045268c3e-3000x2000.jpg?w=3000&auto=format'
  },
  {
    id: 'ruby-hummingbird',
    name: 'Ruby-throated Hummingbird',
    scientificName: 'Archilochus colubris',
    region: 'North & Central America',
    occurrence: 'Breeds across eastern North America (US & Canada) and winters in Central America (Mexico to Panama).',
    description: 'A tiny avian acrobat beating its wings up to 53 times per second. Males feature a brilliant ruby-red throat patch that flashes iridescently in sunlight.',
    image: 'https://www.birdfact.com/_next/image?url=https%3A%2F%2Fimages.birdfact.com%2Fruby-throated-hummingbird_2024-02-09-130123_wyit.jpg&w=3840&q=75'
  },
  {
    id: 'blue-jay',
    name: 'Blue Jay',
    scientificName: 'Cyanocitta cristata',
    region: 'North America',
    occurrence: 'Forests, parks, and suburban gardens of central and eastern North America.',
    description: 'An intelligent, bold songbird with striking blue, white, and black plumage. Known for vocal mimicry, including hawk calls to warn flock mates or clear feeders.',
    image: 'https://media.audubon.org/nas_birdapi_hero/sfw_fixed_01-29-2011-223.jpg'
  },
  {
    id: 'indian-peafowl',
    name: 'Indian Peafowl (Peacock)',
    scientificName: 'Pavo cristatus',
    region: 'South Asia',
    occurrence: 'Native to India and Sri Lanka; widely introduced to gardens and parks worldwide.',
    description: 'Celebrated for the male’s extravagant tail train adorned with shimmering eye-spots ("ocelli"), which he fans out during courtship displays.',
    image: 'https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg'
  },
  {
    id: 'harpy-eagle',
    name: 'Harpy Eagle',
    scientificName: 'Harpia harpyja',
    region: 'Central & South America',
    occurrence: 'Tropical lowland rainforests of South and Central America (Amazon Basin, Brazil, Panama, Colombia, Venezuela).',
    description: 'One of the largest and most powerful eagles in the world. Known for its crown of erectile feathers, massive talons up to 13 cm, and incredible agility while hunting sloths and monkeys in dense canopy.',
    image: 'https://birdlifedata.blob.core.windows.net/species-images/22695998.jpg'
  }
];

// DOM Elements
const birdGrid = document.getElementById('birdGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBirdImage = document.getElementById('modalBirdImage');
const modalRegionBadge = document.getElementById('modalRegionBadge');
const modalBirdName = document.getElementById('modalBirdName');
const modalScientificName = document.getElementById('modalScientificName');
const modalOccurrence = document.getElementById('modalOccurrence');
const modalDescription = document.getElementById('modalDescription');

// Render Bird Cards
function renderBirds(birdsToRender) {
  birdGrid.innerHTML = '';
  
  if (birdsToRender.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  
  noResults.classList.add('hidden');
  
  birdsToRender.forEach(bird => {
    const card = document.createElement('article');
    card.className = 'bird-card';
    card.tabIndex = 0;
    card.setAttribute('aria-label', `View details for ${bird.name}`);
    
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${bird.image}" alt="${bird.name}" loading="lazy" />
      </div>
      <div class="card-info">
        <h3 class="card-title">${bird.name}</h3>
        <p class="card-scientific">${bird.scientificName}</p>
        <span class="card-location">📍 ${bird.region}</span>
      </div>
    `;

    // Click handler to open panel
    card.addEventListener('click', () => openModal(bird));
    
    // Keyboard support (Enter key)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(bird);
      }
    });

    birdGrid.appendChild(card);
  });
}

// Open Detail Modal
function openModal(bird) {
  modalBirdImage.src = bird.image;
  modalBirdImage.alt = bird.name;
  modalRegionBadge.textContent = bird.region;
  modalBirdName.textContent = bird.name;
  modalScientificName.textContent = bird.scientificName;
  modalOccurrence.textContent = bird.occurrence;
  modalDescription.textContent = bird.description;

  modalOverlay.classList.remove('hidden');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Detail Modal
function closeModal() {
  modalOverlay.classList.add('hidden');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Filter Birds by Search Term
function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = BIRDS.filter(bird => 
    bird.name.toLowerCase().includes(query) ||
    bird.scientificName.toLowerCase().includes(query) ||
    bird.region.toLowerCase().includes(query) ||
    bird.occurrence.toLowerCase().includes(query)
  );
  renderBirds(filtered);
}

// Event Listeners
searchInput.addEventListener('input', handleSearch);
closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
    closeModal();
  }
});

// Initial Render
renderBirds(BIRDS);
