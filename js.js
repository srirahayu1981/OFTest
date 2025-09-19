
    const youtubers = [
      {
        id: 1,
        name: "Ria Ricis",
        category: "entertainment",
        subscribers: 25200000,
        views: 3100000000,
        rating: 4.8,
        reviews: 2100,
        description: "Content creator dengan konten lifestyle, comedy, dan vlog sehari-hari yang menghibur jutaan penonton Indonesia.",
        tags: ["Comedy", "Lifestyle", "Vlog"],
        image: "https://image.com"
      },
      {
        id: 2,
        name: "Frost Diamond",
        category: "gaming",
        subscribers: 18500000,
        views: 2800000000,
        rating: 4.6,
        reviews: 1800,
        description: "Gaming YouTuber populer yang dikenal dengan gameplay Minecraft dan berbagai game trending lainnya.",
        tags: ["Minecraft", "Gaming", "Tutorial"],
        image: "https://image.com"
      },
      {
        id: 3,
        name: "Atta Halilintar",
        category: "entertainment",
        subscribers: 22800000,
        views: 4200000000,
        rating: 4.9,
        reviews: 3200,
        description: "Konten kreator dengan berbagai challenge, vlog keluarga, dan konten entertainment yang viral.",
        tags: ["Challenge", "Family", "Entertainment"],
        image: "https://image.com"
      },
      {
        id: 4,
        name: "Deddy Corbuzier",
        category: "entertainment",
        subscribers: 17200000,
        views: 2100000000,
        rating: 4.7,
        reviews: 2500,
        description: "Host podcast terkenal dengan interview mendalam bersama berbagai tokoh terkenal dan kontroversi.",
        tags: ["Podcast", "Interview", "Talk Show"],
        image: "https://image.com"
      },
      {
        id: 5,
        name: "Gen Halilintar",
        category: "entertainment",
        subscribers: 16800000,
        views: 1900000000,
        rating: 4.5,
        reviews: 1900,
        description: "Channel keluarga dengan 11 anak yang menghibur dengan konten musik, dance, dan aktivitas keluarga.",
        tags: ["Family", "Music", "Dance"],
        image: "https://image.com"
      },
      {
        id: 6,
        name: "Bayu Skak",
        category: "comedy",
        subscribers: 15300000,
        views: 1700000000,
        rating: 4.8,
        reviews: 1700,
        description: "Komedian digital dengan sketsa humor yang relatable dan menghibur anak muda Indonesia.",
        tags: ["Comedy", "Sketch", "Humor"],
        image: "https://image.com"
      },
      {
        id: 7,
        name: "Nihongo Mantappu",
        category: "education",
        subscribers: 14100000,
        views: 1500000000,
        rating: 4.9,
        reviews: 2800,
        description: "Jerome Polin dengan konten edukasi matematika dan pengalaman kuliah di Jepang yang inspiratif.",
        tags: ["Education", "Math", "Japan"],
        image: "https://image.com"
      },
      {
        id: 8,
        name: "Windah Basudara",
        category: "gaming",
        subscribers: 13500000,
        views: 1800000000,
        rating: 4.6,
        reviews: 2200,
        description: "Gaming content creator yang dikenal dengan gameplay horror, reaction, dan personality yang unik.",
        tags: ["Gaming", "Horror", "Reaction"],
        image: "https://image.com"
      },
      {
        id: 9,
        name: "Arief Muhammad",
        category: "lifestyle",
        subscribers: 12800000,
        views: 1400000000,
        rating: 4.7,
        reviews: 1600,
        description: "Content creator dan entrepreneur dengan konten lifestyle, business, dan pengalaman hidup yang menginspirasi.",
        tags: ["Lifestyle", "Business", "Inspiration"],
        image: "https://image.com"
      },
      {
        id: 10,
        name: "MiawAug",
        category: "gaming",
        subscribers: 11900000,
        views: 1600000000,
        rating: 4.4,
        reviews: 1300,
        description: "Gaming YouTuber dengan fokus pada Mobile Legends, Free Fire, dan game mobile populer lainnya.",
        tags: ["Mobile Gaming", "MLBB", "Strategy"],
        image: "https://image.com"
      }
    ];

    let currentFilter = 'all';
    let currentSort = 'subscribers';
    let filteredYoutubers = [...youtubers];

    // Helper functions
    function formatNumber(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
      } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
      }
      return num.toString();
    }

    function generateStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;
      let stars = '★'.repeat(fullStars);
      if (hasHalfStar) {
        stars += '☆';
      } else {
        stars += '☆'.repeat(5 - fullStars);
      }
      return stars.substring(0, 5);
    }

    function getInitials(name) {
      return name.split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }

    function getCategoryColor(category) {
      const colors = {
        'gaming': 'rgba(255, 107, 107, 0.2)',
        'entertainment': 'rgba(78, 205, 196, 0.2)',
        'education': 'rgba(69, 183, 209, 0.2)',
        'lifestyle': 'rgba(150, 206, 180, 0.2)',
        'comedy': 'rgba(255, 193, 7, 0.2)'
      };
      return colors[category] || 'rgba(78, 205, 196, 0.2)';
    }

    function getCategoryTextColor(category) {
      const colors = {
        'gaming': '#ff6b6b',
        'entertainment': '#4ecdc4',
        'education': '#45b7d1',
        'lifestyle': '#96ceb4',
        'comedy': '#ffc107'
      };
      return colors[category] || '#4ecdc4';
    }

    // Render functions
    function renderYoutuber(youtuber, index) {
      const categoryColor = getCategoryColor(youtuber.category);
      const categoryTextColor = getCategoryTextColor(youtuber.category);

      return `
                <div class="creator-card" data-category="${youtuber.category}">
                    <div class="rank-badge">#${index + 1}</div>
                    <div class="creator-image">
                        <img src="${youtuber.image}" alt="${youtuber.name}" loading="lazy">
                    </div>
                    <div class="creator-info">
                        <h3 class="creator-name">${youtuber.name}</h3>
                        <span class="creator-category" style="background: ${categoryColor}; color: ${categoryTextColor}; border-color: ${categoryTextColor}30;">
                            ${youtuber.category.charAt(0).toUpperCase() + youtuber.category.slice(1)}
                        </span>
                        <div class="rating">
                            <span class="stars">${generateStars(youtuber.rating)}</span>
                            <span class="rating-text">${youtuber.rating} (${formatNumber(youtuber.reviews)} reviews)</span>
                        </div>
                        <div class="creator-stats">
                            <div class="stat-box">
                                <div class="stat-number">${formatNumber(youtuber.subscribers)}</div>
                                <div class="stat-label">Subscribers</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-number">${formatNumber(youtuber.views)}</div>
                                <div class="stat-label">Total Views</div>
                            </div>
                        </div>
                        <p class="creator-description">${youtuber.description}</p>
                        <div class="creator-tags">
                            ${youtuber.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <div class="creator-actions">
                            <button class="btn-primary" onclick="viewChannel('${youtuber.name.toLowerCase().replace(/\s+/g, '-')}')">Visit Channel</button>
                            <button class="btn-secondary" onclick="toggleFollow(${youtuber.id})">♡ Follow</button>
                        </div>
                    </div>
                </div>
            `;
    }

    function renderYoutubers() {
      const grid = document.getElementById('creators-grid');
      const resultCount = document.getElementById('results-count');

      if (filteredYoutubers.length === 0) {
        grid.innerHTML = '<div class="loading">No YouTubers found for this category.</div>';
        resultCount.textContent = '0';
        return;
      }

      grid.innerHTML = filteredYoutubers.map((youtuber, index) => renderYoutuber(youtuber, index)).join('');
      resultCount.textContent = filteredYoutubers.length;

      // Add animation to cards
      const cards = document.querySelectorAll('.creator-card');
      cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
      });
    }

    // Filter and sort functions
    function filterYoutubers(category) {
      currentFilter = category;
      if (category === 'all') {
        filteredYoutubers = [...youtubers];
      } else {
        filteredYoutubers = youtubers.filter(yt => yt.category === category);
      }
      sortYoutubers(currentSort);
    }

    function sortYoutubers(sortBy) {
      currentSort = sortBy;
      filteredYoutubers.sort((a, b) => {
        switch (sortBy) {
          case 'subscribers':
            return b.subscribers - a.subscribers;
          case 'views':
            return b.views - a.views;
          case 'rating':
            return b.rating - a.rating;
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return b.subscribers - a.subscribers;
        }
      });
      renderYoutubers();
    }

    // Event listeners
    function setupEventListeners() {
      // Filter buttons
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          filterYoutubers(btn.dataset.category);
        });
      });

      // Sort dropdown
      const sortDropdown = document.getElementById('sort-dropdown');
      sortDropdown.addEventListener('change', (e) => {
        sortYoutubers(e.target.value);
      });
    }

    // Action functions
    function viewChannel(channelSlug) {
      alert(`Redirecting to ${channelSlug} YouTube channel...`);
      // In a real application, this would redirect to the actual YouTube channel
    }

    function toggleFollow(youtuberId) {
      const btn = event.target;
      if (btn.textContent.includes('♡')) {
        btn.textContent = '❤️ Following';
        btn.style.background = '#4ecdc4';
        btn.style.color = 'white';
        btn.style.borderColor = '#4ecdc4';
      } else {
        btn.textContent = '♡ Follow';
        btn.style.background = 'transparent';
        btn.style.color = '#4ecdc4';
        btn.style.borderColor = '#4ecdc4';
      }
    }

    // Add CSS for fade in animation
    const style = document.createElement('style');
    style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
    document.head.appendChild(style);

    // Initialize the application
    function init() {
      setupEventListeners();
      sortYoutubers('subscribers'); // Default sort by subscribers
    }

    // Start the application when DOM is loaded
    document.addEventListener('DOMContentLoaded', init);