// Reptile Dataset
const REPTILES = [
  {
    id: 'panther-chameleon',
    name: 'Panther Chameleon',
    scientificName: 'Furcifer pardalis',
    region: 'Madagascar',
    occurrence: 'Tropical lowland rainforests along the northern and eastern coastal regions of Madagascar and neighboring islands.',
    description: 'Famed for its vivid color morphs ranging from turquoise blue to fiery orange. It possesses independently mobile stereoscopic eyes and a ballistic, suction-tipped tongue that can shoot out faster than human sight.',
    image: 'https://images.unsplash.com/photo-1617540021016-72023b487e99?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'komodo-dragon',
    name: 'Komodo Dragon',
    scientificName: 'Varanus komodoensis',
    region: 'Indonesia',
    occurrence: 'Lesser Sunda Islands of Indonesia, including Komodo, Rinca, Flores, and Gili Motang.',
    description: 'The largest living lizard on Earth, growing up to 3 meters (10 ft) in length. Dominant apex predators equipped with serrated teeth, venom glands, and an acute sense of smell powered by their forked yellow tongue.',
    image: 'https://images.unsplash.com/photo-1660280274563-767dd6b56374?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'green-sea-turtle',
    name: 'Green Sea Turtle',
    scientificName: 'Chelonia mydas',
    region: 'Global Oceans',
    occurrence: 'Tropical and subtropical coastal oceans worldwide, nesting on sandy beaches across the Pacific, Atlantic, and Indian Oceans.',
    description: 'An ancient marine reptile named for the greenish layer of fat beneath its carapace. As adults, they are almost entirely herbivorous, grazing on underwater seagrass meadows and algae, keeping marine ecosystems healthy.',
    image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nile-crocodile',
    name: 'Nile Crocodile',
    scientificName: 'Crocodylus niloticus',
    region: 'Sub-Saharan Africa',
    occurrence: 'Rivers, freshwater marshes, swamps, and mangrove estuaries throughout Sub-Saharan Africa and Madagascar.',
    description: 'Africa’s largest crocodilian, reaching up to 5 meters. Renowned for possessing one of the most powerful bite forces measured in the animal kingdom, capable of ambushing large mammals at the water’s edge.',
    image: 'https://images.unsplash.com/photo-1605649461784-7d5e4df56c97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'green-iguana',
    name: 'Green Iguana',
    scientificName: 'Iguana iguana',
    region: 'Central & South America',
    occurrence: 'Dense rainforest canopies and riverbanks across Central America, the Caribbean, and northern South America.',
    description: 'A large, arboreal herbivorous lizard featuring a prominent dewlap beneath its jaw and a dorsal crest of spines running down its back. Excellent swimmers that frequently leap from high branches into rivers to evade predators.',
    image: 'https://images.unsplash.com/photo-1590418270220-243198c900cc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tokay-gecko',
    name: 'Tokay Gecko',
    scientificName: 'Gekko gecko',
    region: 'South & Southeast Asia',
    occurrence: 'Native to rainforests, rocky cliffs, and rural dwellings from northeast India through Indochina, Indonesia, and the Philippines.',
    description: 'A large nocturnal gecko covered in bluish-gray skin with bright orange or red spots. Renowned for its loud, distinctive barking vocalization ("to-kay!") and microscopic toe setae allowing it to sprint across smooth vertical walls.',
    image: 'https://images.unsplash.com/photo-1661481072791-1df445889e4b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'galapagos-tortoise',
    name: 'Galápagos Giant Tortoise',
    scientificName: 'Chelonoidis niger',
    region: 'Galápagos Islands (Ecuador)',
    occurrence: 'Volcanic slopes and highland pastures of the Galápagos archipelago in the eastern Pacific Ocean.',
    description: 'Among the longest-lived vertebrates on Earth, regularly exceeding 100 to 150 years of age. They played a pivotal role in Charles Darwin’s development of the theory of evolution by natural selection.',
    image: 'https://images.unsplash.com/photo-1559041881-74dd9fd9b600?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bearded-dragon',
    name: 'Central Bearded Dragon',
    scientificName: 'Pogona vitticeps',
    region: 'Central Australia',
    occurrence: 'Arid scrublands, dry eucalyptus woodlands, and desert margins across central and eastern Australia.',
    description: 'Named for its spiny, expandable throat pouch ("beard") that darkens to pitch black when displaying dominance or feeling threatened. An inquisitive, omnivorous lizard popular for its calm and expressive demeanor.',
    image: 'https://images.unsplash.com/photo-1619816128374-a6b4766ca92c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'green-tree-python',
    name: 'Green Tree Python',
    scientificName: 'Morelia viridis',
    region: 'Australasia',
    occurrence: 'Tropical rainforests of New Guinea, eastern Indonesian islands, and the Cape York Peninsula in Australia.',
    description: 'A non-venomous constrictor known for resting in neat saddle coils draped over tree branches. While adults are bright emerald green, juveniles hatch as bright yellow or brick red before undergoing an ontogenetic color shift.',
    image: 'https://images.unsplash.com/photo-1538439907460-1596cafd4eff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'king-cobra',
    name: 'King Cobra',
    scientificName: 'Ophiophagus hannah',
    region: 'South & Southeast Asia',
    occurrence: 'Dense highland rainforests, bamboo thickets, and agricultural margins from India and southern China to the Malay Archipelago.',
    description: 'The longest venomous snake in the world, capable of reaching 5.5 meters (18 ft). Its genus name Ophiophagus means "snake-eater", reflecting its specialized diet preying almost entirely on other snakes.',
    image: 'https://images.unsplash.com/photo-1638855370496-1ec25682adbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'horned-lizard',
    name: 'Texas Horned Lizard',
    scientificName: 'Phrynosoma cornutum',
    region: 'North America',
    occurrence: 'Arid and semiarid deserts, grasslands, and sand dunes from Colorado and Kansas south into northern Mexico.',
    description: 'A flattened, crown-horned reptile that feeds primarily on harvester ants. When cornered by canine predators, it can deliberately rupture small vessels in the corners of its eyes to squirt distasteful blood up to several feet.',
    image: 'https://images.unsplash.com/photo-1561407555-b49bc039b7fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tuatara',
    name: 'Tuatara',
    scientificName: 'Sphenodon punctatus',
    region: 'New Zealand',
    occurrence: 'Protected offshore islands of New Zealand in Cook Strait and off the northeastern coast of the North Island.',
    description: 'Often referred to as a "living fossil", the tuatara is the sole surviving species of an entire ancient reptile lineage (Rhynchocephalia) dating back 200 million years. Possesses a parietal "third eye" on the top of its head.',
    image: 'https://images.unsplash.com/photo-1609846610185-797928bc6463?auto=format&fit=crop&w=800&q=80'
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
  const filtered = REPTILES.filter(item => 
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
renderSpecies(REPTILES);
