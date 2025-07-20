// Fruits JavaScript functionality
// This file handles interactive features related to fruits

class FruitsManager {
    constructor() {
        this.fruits = [
            {
                name: 'Apple',
                benefits: ['Rich in fiber', 'High in vitamin C', 'Antioxidant properties'],
                season: 'Fall',
                icon: 'fas fa-apple-alt',
                image: '../img/fruits/apple.jpg',
                color: '#ff6b6b'
            },
            {
                name: 'Banana',
                benefits: ['High in potassium', 'Good source of vitamin B6', 'Natural energy boost'],
                season: 'Year-round',
                icon: 'fas fa-banana',
                image: '../img/fruits/banana.jpg',
                color: '#ffd93d'
            },
            {
                name: 'Orange',
                benefits: ['Excellent source of vitamin C', 'Boosts immunity', 'Supports skin health'],
                season: 'Winter',
                icon: 'fas fa-orange',
                image: '../img/fruits/orange.jpg',
                color: '#ff8c42'
            },
            {
                name: 'Strawberry',
                benefits: ['Rich in antioxidants', 'High in vitamin C', 'Supports heart health'],
                season: 'Spring/Summer',
                icon: 'fas fa-strawberry',
                image: '../img/fruits/strawberry.jpg',
                color: '#ff6b9d'
            },
            {
                name: 'Blueberry',
                benefits: ['Brain health', 'Anti-inflammatory', 'Rich in antioxidants'],
                season: 'Summer',
                icon: 'fas fa-berry',
                image: '../img/fruits/blueberry.jpg',
                color: '#4a90e2'
            },
            {
                name: 'Mango',
                benefits: ['Rich in vitamin A', 'Supports eye health', 'Boosts immunity'],
                season: 'Summer',
                icon: 'fas fa-mango',
                image: '../img/fruits/mango.jpg',
                color: '#ffa726'
            }
        ];

        this.init();
    }

    init() {
        this.createFruitsDisplay();
        this.addEventListeners();
    }

    createFruitsDisplay() {
        const container = document.querySelector('.fruits-container');
        if (!container) return;

        const fruitsHTML = this.fruits.map(fruit => `
            <div class="fruit-card" data-fruit="${fruit.name.toLowerCase()}">
                <div class="fruit-image-container">
                    <img src="${fruit.image}" alt="${fruit.name}" class="fruit-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="fruit-icon" style="color: ${fruit.color}; display: none;">
                        <i class="${fruit.icon}"></i>
                    </div>
                </div>
                <h3>${fruit.name}</h3>
                <p class="season">Season: ${fruit.season}</p>
                <div class="benefits">
                    <h4>Benefits:</h4>
                    <ul>
                        ${fruit.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary learn-more-btn">Learn More</button>
            </div>
        `).join('');

        container.innerHTML = fruitsHTML;
    }

    addEventListeners() {
        // Learn more buttons
        document.querySelectorAll('.learn-more-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const fruitCard = e.target.closest('.fruit-card');
                const fruitName = fruitCard.dataset.fruit;
                this.showFruitDetails(fruitName);
            });
        });

        // Fruit card interactions
        document.querySelectorAll('.fruit-card').forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover);
            card.addEventListener('mouseleave', this.handleCardLeave);
        });
    }

    handleCardHover(e) {
        e.target.style.transform = 'translateY(-10px) scale(1.02)';
        e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
    }

    handleCardLeave(e) {
        e.target.style.transform = 'translateY(0) scale(1)';
        e.target.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    }

    showFruitDetails(fruitName) {
        const fruit = this.fruits.find(f => f.name.toLowerCase() === fruitName);
        if (!fruit) return;

        const modal = document.createElement('div');
        modal.className = 'fruit-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <div class="fruit-image-large">
                        <img src="${fruit.image}" alt="${fruit.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="fruit-icon-large" style="color: ${fruit.color}; display: none;">
                            <i class="${fruit.icon}"></i>
                        </div>
                    </div>
                    <h2>${fruit.name}</h2>
                    <p class="season">Season: ${fruit.season}</p>
                </div>
                <div class="modal-body">
                    <div class="fruit-info">
                        <h3>Health Benefits:</h3>
                        <ul>
                            ${fruit.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                        <div class="nutrition-facts">
                            <h3>Nutrition Facts (per 100g):</h3>
                            <p>This information would be populated with actual nutritional data.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .fruit-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            .modal-content {
                background: white;
                padding: 2rem;
                border-radius: 20px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                animation: slideIn 0.3s ease;
            }
            .close-modal {
                position: absolute;
                top: 1rem;
                right: 1.5rem;
                font-size: 2rem;
                cursor: pointer;
                color: #666;
            }
            .close-modal:hover {
                color: #333;
            }
            .modal-header {
                text-align: center;
                margin-bottom: 2rem;
            }
            .fruit-image-large {
                position: relative;
                margin-bottom: 1rem;
            }
            .fruit-image-large img {
                width: 120px;
                height: 120px;
                object-fit: cover;
                border-radius: 50%;
                border: 3px solid ${fruit.color};
            }
            .fruit-icon-large {
                width: 120px;
                height: 120px;
                background: var(--gradient);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                font-size: 3rem;
                color: white;
            }
            .fruit-info h3 {
                color: #333;
                margin: 1rem 0 0.5rem 0;
            }
            .fruit-info ul {
                margin: 0.5rem 0 1rem 1.5rem;
            }
            .fruit-info li {
                margin-bottom: 0.5rem;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Close modal functionality
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
            style.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                style.remove();
            }
        });
    }

    // Search functionality
    searchFruits(query) {
        const filteredFruits = this.fruits.filter(fruit =>
            fruit.name.toLowerCase().includes(query.toLowerCase()) ||
            fruit.benefits.some(benefit => benefit.toLowerCase().includes(query.toLowerCase()))
        );

        this.displaySearchResults(filteredFruits);
    }

    displaySearchResults(results) {
        const container = document.querySelector('.fruits-container');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = '<p class="no-results">No fruits found matching your search.</p>';
            return;
        }

        // Recreate display with filtered results
        const fruitsHTML = results.map(fruit => `
            <div class="fruit-card" data-fruit="${fruit.name.toLowerCase()}">
                <div class="fruit-image-container">
                    <img src="${fruit.image}" alt="${fruit.name}" class="fruit-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="fruit-icon" style="color: ${fruit.color}; display: none;">
                        <i class="${fruit.icon}"></i>
                    </div>
                </div>
                <h3>${fruit.name}</h3>
                <p class="season">Season: ${fruit.season}</p>
                <div class="benefits">
                    <h4>Benefits:</h4>
                    <ul>
                        ${fruit.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary learn-more-btn">Learn More</button>
            </div>
        `).join('');

        container.innerHTML = fruitsHTML;
        this.addEventListeners();
    }
}

// Initialize fruits functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.fruits-container')) {
        new FruitsManager();
    }
});

// Export for use in other modules
window.FruitsManager = FruitsManager;
