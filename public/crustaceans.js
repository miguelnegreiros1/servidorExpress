// Crustacean Dataset
const CRUSTACEANS = [
  {
    id: 'mantis-shrimp',
    name: 'Peacock Mantis Shrimp',
    scientificName: 'Odontodactylus scyllarus',
    region: 'Indo-Pacific',
    occurrence: 'Shallow coral reefs and sandy rubble flats from East Africa and the Red Sea across to Guam and the Great Barrier Reef.',
    description: 'Renowned for its club-like raptorial dactyl appendages that strike with the speed of a .22 caliber bullet (accelerating faster than 80 km/h). Their eyes possess 16 color-receptive cones capable of seeing polarized and ultraviolet light.',
    image: 'https://images.unsplash.com/photo-1703868673316-794132e810b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'red-king-crab',
    name: 'Red King Crab',
    scientificName: 'Paralithodes camtschaticus',
    region: 'North Pacific & Bering Sea',
    occurrence: 'Cold, muddy seafloors of the Bering Sea, Sea of Okhotsk, northern Pacific Ocean, and introduced to the Barents Sea.',
    description: 'A colossal anomuran crustacean with leg spans reaching nearly 1.8 meters (5.9 ft). They migrate between shallow coastal waters for spawning in spring and deep offshore trenches (up to 200m) in winter.',
    image: 'https://images.unsplash.com/photo-1739991017889-009e4fc9cdc6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sally-lightfoot',
    name: 'Sally Lightfoot Crab',
    scientificName: 'Grapsus grapsus',
    region: 'Galápagos & Pacific Coast',
    occurrence: 'Wave-swept volcanic rocks and intertidal splash zones along the Galápagos Islands and the Pacific coasts of Central and South America.',
    description: 'Famous for its dazzling scarlet, electric blue, and golden-orange shell. Remarkably agile and fleet-footed, it leaps across rock crevices to evade predatory moray eels and cleans parasites off marine iguanas.',
    image: 'https://images.unsplash.com/photo-1608152564032-f9b8875b4c3b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cleaner-shrimp',
    name: 'Scarlet Cleaner Shrimp',
    scientificName: 'Lysmata amboinensis',
    region: 'Indo-Pacific & Red Sea',
    occurrence: 'Tropical coral reef caves, overhangs, and coral heads across the Red Sea and the Indo-Pacific oceans.',
    description: 'Recognized by its vivid red dorsal stripe with a clean white band. Sets up underwater "cleaning stations" where large reef fish and moray eels wait peacefully while the shrimp picks away dead skin and parasites.',
    image: 'https://images.unsplash.com/photo-1722192147966-14444c832f53?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hermit-crab',
    name: 'Caribbean Hermit Crab',
    scientificName: 'Coenobita clypeatus',
    region: 'Caribbean & Tropical Americas',
    occurrence: 'Coastal forests, dunes, and inland scrub across the Caribbean islands, southern Florida, Venezuela, and Central America.',
    description: 'A land-dwelling crustacean that shields its soft, coiled abdomen by salvaging empty discarded gastropod seashells. As they outgrow their shells, groups often form orderly "exchange lines" to swap shells by size.',
    image: 'https://images.unsplash.com/photo-1506495262506-8c4ef383d872?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'american-lobster',
    name: 'American Lobster',
    scientificName: 'Homarus americanus',
    region: 'Northwest Atlantic',
    occurrence: 'Cold continental shelf waters and rocky reefs from Labrador and Newfoundland down to North Carolina.',
    description: 'Can reach weights up to 20 kg (44 lbs), making it the heaviest crustacean species in the world. Equipped with asymmetric claws: a large crushing claw for cracking open mollusks and a sharp cutter claw for tearing prey.',
    image: 'https://images.unsplash.com/photo-1655697253644-63c270874bb7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ghost-crab',
    name: 'Atlantic Ghost Crab',
    scientificName: 'Ocypode quadrata',
    region: 'Western Atlantic Ocean',
    occurrence: 'Exposed sandy ocean beaches from Rhode Island south through the Caribbean to southern Brazil.',
    description: 'Pale, sand-colored semi-terrestrial crab capable of running at sprint speeds over 16 km/h (10 mph). Equipped with periscope-like 360-degree compound eyes that fold into protective grooves along its shell.',
    image: 'https://images.unsplash.com/photo-1719498198861-aa529c483a86?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blue-crab',
    name: 'Blue Crab',
    scientificName: 'Callinectes sapidus',
    region: 'Atlantic Coast & Gulf of Mexico',
    occurrence: 'Brackish coastal estuaries, bays, and salt marshes of the western Atlantic, from Nova Scotia down to Argentina.',
    description: 'Its scientific name means "beautiful savory swimmer". The last pair of walking legs are paddle-shaped swimming fins, allowing swift omnidirectional underwater swimming in marsh channels and bays.',
    image: 'https://images.unsplash.com/photo-1691345043485-85a4b873a5b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fiddler-crab',
    name: 'Ring-legged Fiddler Crab',
    scientificName: 'Austruca annulipes',
    region: 'Indo-West Pacific',
    occurrence: 'Mangrove mudflats and intertidal sand bars throughout the tropical Indo-West Pacific region.',
    description: 'Famous for extreme sexual dimorphism: males possess one enormous major claw that can weigh up to half their total body mass, which they wave rhythmically like a fiddle bow during courtship displays.',
    image: 'https://images.unsplash.com/photo-1580841129862-bc2a2d113c45?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tiger-prawn',
    name: 'Giant Tiger Prawn',
    scientificName: 'Penaeus monodon',
    region: 'Indo-Pacific',
    occurrence: 'Warm tropical shallow waters, estuaries, and mangrove creeks across East Africa, Southeast Asia, and northern Australia.',
    description: 'The largest commercially farmed prawn in the world, growing up to 33 cm (13 in). Distinctive dark and light horizontal banding across its carapace mimics broken sunlight on the sandy seabed.',
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'acorn-barnacle',
    name: 'Acorn Barnacle',
    scientificName: 'Semibalanus balanoides',
    region: 'North Atlantic & Arctic',
    occurrence: 'Rocky intertidal zones, piers, and ship hulls along temperate and boreal shores of the North Atlantic.',
    description: 'Sessile crustaceans that cement themselves head-first to rocks using one of nature’s strongest bio-adhesives. At high tide, they open their hinged shell plates and extend feathery thoracic legs ("cirri") to filter plankton.',
    image: 'https://images.unsplash.com/photo-1600350351341-e71a2254b7e7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'asian-shore-crab',
    name: 'Asian Shore Crab',
    scientificName: 'Hemigrapsus sanguineus',
    region: 'Northwest Pacific & Atlantic Coasts',
    occurrence: 'Native to rocky intertidal shores from Russia, Japan, and Korea to China; now established along western European and US Atlantic coasts.',
    description: 'A square-carapace crab with distinctive reddish-purple spots on its claws. Known for its tough resilience across wide temperature and salinity swings, thriving in crevices under intertidal boulders.',
    image: 'https://images.unsplash.com/photo-1553659971-f01207815844?auto=format&fit=crop&w=800&q=80'
  }
];

// DOM Elements
const speciesGrid = document.getElementById('speciesGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalSpeciesImage = document.getElementById('modalSpeciesImage');
const modalRegionBadge = document.getElementById('modalRegionBadge');
const modalSpeciesName = document.getElementById('modalSpeciesName');
const modalScientificName = document.getElementById('modalScientificName');
const modalOccurrence = document.getElementById('modalOccurrence');
const modalDescription = document.getElementById('modalDescription');

// Render Species Cards
function renderSpecies(itemsToRender) {
  speciesGrid.innerHTML = '';
  
  if (itemsToRender.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  
  noResults.classList.add('hidden');
  
  itemsToRender.forEach(item => {
    const card = document.createElement('article');
    card.className = 'species-card';
    card.tabIndex = 0;
    card.setAttribute('aria-label', `View details for ${item.name}`);
    
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="card-info">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-scientific">${item.scientificName}</p>
        <span class="card-location">📍 ${item.region}</span>
      </div>
    `;

    // Click handler to open panel
    card.addEventListener('click', () => openModal(item));
    
    // Keyboard support (Enter key)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(item);
      }
    });

    speciesGrid.appendChild(card);
  });
}

// Open Detail Modal
function openModal(item) {
  modalSpeciesImage.src = item.image;
  modalSpeciesImage.alt = item.name;
  modalRegionBadge.textContent = item.region;
  modalSpeciesName.textContent = item.name;
  modalScientificName.textContent = item.scientificName;
  modalOccurrence.textContent = item.occurrence;
  modalDescription.textContent = item.description;

  modalOverlay.classList.remove('hidden');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Close Detail Modal
function closeModal() {
  modalOverlay.classList.add('hidden');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Filter by Search Term
function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = CRUSTACEANS.filter(item => 
    item.name.toLowerCase().includes(query) ||
    item.scientificName.toLowerCase().includes(query) ||
    item.region.toLowerCase().includes(query) ||
    item.occurrence.toLowerCase().includes(query)
  );
  renderSpecies(filtered);
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
renderSpecies(CRUSTACEANS);
