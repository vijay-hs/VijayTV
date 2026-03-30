// DOM Elements
const appDiv = document.getElementById('app');
const topNav = document.querySelector('.top-nav');
const heroBanner = document.getElementById('hero-banner');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const contentRowsContainer = document.getElementById('content-rows');
const navTabs = document.querySelectorAll('.nav-links li');

// Listen to scroll to update nav background
appDiv.addEventListener('scroll', () => {
    if (appDiv.scrollTop > 50) {
        topNav.classList.add('scrolled');
    } else {
        topNav.classList.remove('scrolled');
    }
});

// Mock High Quality Images via Picsum/Unsplash Source alternatively. Using specific IDs from Picsum for consistency
const posters = {
    dune: 'https://picsum.photos/id/29/800/450',
    dunebg: 'https://picsum.photos/id/29/1920/1080',
    oppenheimer: 'https://picsum.photos/id/43/800/450',
    oppenheimerbg: 'https://picsum.photos/id/43/1920/1080',
    spider: 'https://picsum.photos/id/49/800/450',
    spiderbg: 'https://picsum.photos/id/49/1920/1080',
    batman: 'https://picsum.photos/id/54/800/450',
    batmanbg: 'https://picsum.photos/id/54/1920/1080',
    interstellar: 'https://picsum.photos/id/65/800/450',
    interstellarbg: 'https://picsum.photos/id/65/1920/1080',
    inception: 'https://picsum.photos/id/74/800/450',
    inceptionbg: 'https://picsum.photos/id/74/1920/1080',
    matrix: 'https://picsum.photos/id/91/800/450',
    matrixbg: 'https://picsum.photos/id/91/1920/1080'
};

const mockMovies = [
    { id: 1, title: "Dune: Part Two", desc: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.", image: posters.dune, bg: posters.dunebg },
    { id: 2, title: "Oppenheimer", desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", image: posters.oppenheimer, bg: posters.oppenheimerbg },
    { id: 3, title: "Spider-Man: Across the Spider-Verse", desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.", image: posters.spider, bg: posters.spiderbg },
    { id: 4, title: "The Dark Knight", desc: "Batman must accept one of the greatest psychological tests of his ability to fight injustice against the Joker.", image: posters.batman, bg: posters.batmanbg },
    { id: 5, title: "Interstellar", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", image: posters.interstellar, bg: posters.interstellarbg },
    { id: 6, title: "Inception", desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.", image: posters.inception, bg: posters.inceptionbg },
    { id: 7, title: "The Matrix", desc: "A computer hacker learns from mysterious rebels about the true nature of his reality.", image: posters.matrix, bg: posters.matrixbg }
];

const mainCategories = [
    { id: 'top-picks', title: 'Top Picks for You', items: [...mockMovies].sort(() => 0.5 - Math.random()) },
    { id: 'trending', title: 'Trending Now', items: [...mockMovies].sort(() => 0.5 - Math.random()) },
    { id: 'continue', title: 'Continue Watching', items: [...mockMovies].slice(0,3) },
    { id: 'sci-fi', title: 'Sci-Fi Adventures', items: [...mockMovies].sort(() => 0.5 - Math.random()) }
];

let debounceTimer;

// Initialize
function init() {
    renderHero(mockMovies[0]);
    renderRows(mainCategories);
    setupTabs();
    setupKeyboardNavigation();
}

function renderHero(movie) {
    if (!movie) return;
    // Debounce to prevent flashing on fast scroll
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        heroBanner.style.backgroundImage = `url('${movie.bg}')`;
        heroTitle.textContent = movie.title;
        if (heroDesc) heroDesc.textContent = movie.desc;
    }, 150);
}

function renderRows(rowCategories) {
    contentRowsContainer.innerHTML = '';
    
    rowCategories.forEach((cat) => {
        const rowEl = document.createElement('div');
        rowEl.className = 'row';
        
        const titleEl = document.createElement('h2');
        titleEl.className = 'row-title';
        titleEl.textContent = cat.title;
        rowEl.appendChild(titleEl);
        
        const postersEl = document.createElement('div');
        postersEl.className = 'row-posters';
        
        cat.items.forEach(item => {
            const cardEl = document.createElement('div');
            cardEl.className = 'card';
            cardEl.tabIndex = 0; // Focusable
            
            const imgEl = document.createElement('img');
            imgEl.src = item.image;
            imgEl.alt = item.title;
            imgEl.loading = 'lazy';
            
            const titleSpan = document.createElement('div');
            titleSpan.className = 'card-title';
            titleSpan.textContent = item.title;
            
            cardEl.appendChild(imgEl);
            cardEl.appendChild(titleSpan);
            
            // Hover/Focus events update the hero banner
            const triggerHeroUpdate = () => renderHero(item);
            cardEl.addEventListener('mouseenter', triggerHeroUpdate);
            cardEl.addEventListener('focus', triggerHeroUpdate);
            
            // On click or Enter, could simulate opening it
            cardEl.addEventListener('click', () => {
                alert(`Playing: ${item.title}`);
            });
            
            postersEl.appendChild(cardEl);
        });
        
        rowEl.appendChild(postersEl);
        contentRowsContainer.appendChild(rowEl);
    });
}

function setupTabs() {
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => handleTabSwitch(tab));
        tab.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleTabSwitch(tab);
        });
    });
}

function handleTabSwitch(selectedTab) {
    navTabs.forEach(t => t.classList.remove('active'));
    selectedTab.classList.add('active');
    
    const tabName = selectedTab.getAttribute('data-tab');
    
    // Simulate fetching new content
    const newCategories = mainCategories.map(cat => ({
        ...cat,
        title: tabName !== 'foryou' ? `${cat.title} (${tabName})` : cat.title,
        items: [...cat.items].sort(() => 0.5 - Math.random())
    }));
    
    renderRows(newCategories);
    appDiv.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const active = document.activeElement;
        
        // Navigation within a row
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            if (active.classList.contains('card')) {
                const row = active.closest('.row-posters');
                const cards = Array.from(row.querySelectorAll('.card'));
                const index = cards.indexOf(active);
                
                let nextIndex = e.key === 'ArrowRight' ? index + 1 : index - 1;
                if (nextIndex >= 0 && nextIndex < cards.length) {
                    const nextCard = cards[nextIndex];
                    nextCard.focus();
                    nextCard.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
                    e.preventDefault();
                }
            } else if (active.parentElement && active.parentElement.classList.contains('nav-links')) {
                 const tabs = Array.from(navTabs);
                 const index = tabs.indexOf(active);
                 let nextIndex = e.key === 'ArrowRight' ? index + 1 : index - 1;
                 if (nextIndex >= 0 && nextIndex < tabs.length) {
                     tabs[nextIndex].focus();
                     e.preventDefault();
                 }
            }
        }
        
        // Navigation between rows visually
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
             if (active.classList.contains('card')) {
                 const rowPosters = Array.from(document.querySelectorAll('.row-posters'));
                 const currentRow = active.closest('.row-posters');
                 const rowIndex = rowPosters.indexOf(currentRow);
                 
                 let nextRowIndex = e.key === 'ArrowDown' ? rowIndex + 1 : rowIndex - 1;
                 
                 if (nextRowIndex >= 0 && nextRowIndex < rowPosters.length) {
                     // Move to corresponding card index roughly
                     const cardsInCurrent = Array.from(currentRow.querySelectorAll('.card'));
                     const cardIndex = cardsInCurrent.indexOf(active);
                     
                     const nextRowCards = rowPosters[nextRowIndex].querySelectorAll('.card');
                     const targetIndex = Math.min(cardIndex, nextRowCards.length - 1);
                     
                     if (nextRowCards[targetIndex]) {
                         nextRowCards[targetIndex].focus();
                         nextRowCards[targetIndex].scrollIntoView({ inline: 'nearest', block: 'center', behavior: 'smooth' });
                     }
                     e.preventDefault();
                 } else if (nextRowIndex < 0 && e.key === 'ArrowUp') {
                     // Focus primary action button in hero
                     document.querySelector('.btn-primary').focus();
                     appDiv.scrollTo({ top: 0, behavior: 'smooth' });
                     e.preventDefault();
                 }
             } else if (active.classList.contains('btn')) {
                 if (e.key === 'ArrowDown') {
                      // Move from hero to first row
                     const firstCard = document.querySelector('.card');
                     if (firstCard) {
                         firstCard.focus();
                         firstCard.scrollIntoView({ inline: 'nearest', block: 'center', behavior: 'smooth' });
                     }
                     e.preventDefault();
                 } else if (e.key === 'ArrowUp') {
                      // Move from hero buttons to Nav
                      navTabs[0].focus();
                      e.preventDefault();
                 }
             } else if (active.parentElement && active.parentElement.classList.contains('nav-links')) {
                 if (e.key === 'ArrowDown') {
                      document.querySelector('.btn-primary').focus();
                      e.preventDefault();
                 }
             }
        }
        
        // Action key equivalent to click
        if (e.key === 'Enter') {
            if (active.classList.contains('card') || active.classList.contains('btn')) {
                active.click();
                e.preventDefault(); // Prevent double action on buttons
            }
        }
    });

    // Make app focusable to catch initial keydowns if needed, or focus first nav
    setTimeout(() => {
        if (!document.activeElement || document.activeElement === document.body) {
            navTabs[0].focus();
        }
    }, 500);
}

document.addEventListener('DOMContentLoaded', init);
