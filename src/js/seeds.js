// Seeds JavaScript functionality
// This file handles interactive features related to seeds and superfoods

class SeedsManager {
    constructor() {
        this.seeds = [
            {
                name: 'Chia Seeds',
                benefits: ['Rich in omega-3', 'High in fiber', 'Complete protein'],
                nutrition: {
                    protein: '16g',
                    fiber: '34g',
                    omega3: '17.8g'
                },
                icon: 'fas fa-seedling',
                image: '../img/seeds/chia.jpg',
                color: '#8bc34a',
                description: 'Tiny black seeds packed with nutrients and energy.'
            },
            {
                name: 'Flax Seeds',
                benefits: ['Heart health', 'Digestive support', 'Anti-inflammatory'],
                nutrition: {
                    protein: '18g',
                    fiber: '27g',
                    omega3: '22.8g'
                },
                icon: 'fas fa-seedling',
                image: '../img/seeds/flax.jpg',
                color: '#795548',
                description: 'Golden or brown seeds known for their omega-3 content.'
            },
            {
                name: 'Pumpkin Seeds',
                benefits: ['Rich in magnesium', 'Zinc source', 'Heart healthy'],
                nutrition: {
                    protein: '19g',
                    fiber: '18g',
                    magnesium: '592mg'
                },
                icon: 'fas fa-seedling',
                image: '../img/seeds/pumpkin.jpg',
                color: '#ff9800',
                description: 'Green seeds with a nutty flavor and crunchy texture.'
            },
            {
                name: 'Sunflower Seeds',
                benefits: ['Vitamin E rich', 'Antioxidant properties', 'Skin health'],
                nutrition: {
                    protein: '21g',
                    fiber: '9g',
                    vitaminE: '35mg'
                },
                icon: 'fas fa-seedling',
                image: '../img/seeds/sunflower.jpg',
                color: '#ffc107',
                description: 'Popular seeds with a mild, nutty taste.'
            },
            {
                name: 'Hemp Seeds',
                benefits: ['Complete protein', 'Essential fatty acids', 'Digestive health'],
                nutrition: {
                    protein: '31g',
                    fiber: '4g',
                    omega3: '8.7g'
                },
                icon: 'fas fa-seedling',
                image: '../img/seeds/hemp.jpg',
                color: '#4caf50',
                description: 'Nutty seeds with a complete amino acid profile.'
            },
            {
                name: 'Sesame Seeds',
                benefits: ['Calcium rich', 'Iron source', 'Bone health'],
                nutrition: {
                    protein: '18g',
                    fiber: '12g',
                    calcium: '975mg'
                },
                icon: 'fas fa-seedling',
                image: '../img/seeds/sesame.jpg',
                color: '#8d6e63',
                description: 'Small seeds with a rich, nutty flavor.'
            }
        ];
        
        this.init();
    }

    init() {
        this.createSeedsDisplay();
        this.addEventListeners();
        this.initializeNutritionCalculator();
    }

    createSeedsDisplay() {
        const container = document.querySelector('.seeds-container');
        if (!container) return;

        const seedsHTML = this.seeds.map(seed => `
            <div class="seed-card" data-seed="${seed.name.toLowerCase().replace(' ', '-')}">
                <div class="seed-image-container">
                    <img src="${seed.image}" alt="${seed.name}" class="seed-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="seed-icon" style="color: ${seed.color}; display: none;">
                        <i class="${seed.icon}"></i>
                    </div>
                </div>
                <h3>${seed.name}</h3>
                <p class="description">${seed.description}</p>
                <div class="nutrition-preview">
                    <span class="nutrition-item">
                        <strong>Protein:</strong> ${seed.nutrition.protein}
                    </span>
                    <span class="nutrition-item">
                        <strong>Fiber:</strong> ${seed.nutrition.fiber}
                    </span>
                </div>
                <div class="benefits">
                    <h4>Key Benefits:</h4>
                    <ul>
                        ${seed.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary view-details-btn">View Details</button>
            </div>
        `).join('');

        container.innerHTML = seedsHTML;
    }

    addEventListeners() {
        // View details buttons
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const seedCard = e.target.closest('.seed-card');
                const seedName = seedCard.dataset.seed;
                this.showSeedDetails(seedName);
            });
        });

        // Seed card interactions
        document.querySelectorAll('.seed-card').forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover);
            card.addEventListener('mouseleave', this.handleCardLeave);
            card.addEventListener('click', this.handleCardClick);
        });
    }

    handleCardHover(e) {
        e.target.style.transform = 'translateY(-8px) scale(1.02)';
        e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
    }

    handleCardLeave(e) {
        e.target.style.transform = 'translateY(0) scale(1)';
        e.target.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    }

    handleCardClick(e) {
        if (!e.target.classList.contains('view-details-btn')) {
            const seedCard = e.target.closest('.seed-card');
            const seedName = seedCard.dataset.seed;
            this.showSeedDetails(seedName);
        }
    }

    showSeedDetails(seedName) {
        const seed = this.seeds.find(s => s.name.toLowerCase().replace(' ', '-') === seedName);
        if (!seed) return;

        const modal = document.createElement('div');
        modal.className = 'seed-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <div class="seed-icon-large" style="color: ${seed.color}">
                        <i class="${seed.icon}"></i>
                    </div>
                    <h2>${seed.name}</h2>
                    <p class="seed-description">${seed.description}</p>
                </div>
                <div class="modal-body">
                    <div class="nutrition-details">
                        <h3>Nutrition Facts (per 100g):</h3>
                        <div class="nutrition-grid">
                            ${Object.entries(seed.nutrition).map(([key, value]) => `
                                <div class="nutrition-item">
                                    <span class="nutrition-label">${this.formatNutritionLabel(key)}:</span>
                                    <span class="nutrition-value">${value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="benefits-details">
                        <h3>Health Benefits:</h3>
                        <ul>
                            ${seed.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="usage-tips">
                        <h3>How to Use:</h3>
                        <p>Add to smoothies, sprinkle on salads, mix into yogurt, or use in baking for a nutritional boost.</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .seed-modal {
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
                max-width: 600px;
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
            .seed-icon-large {
                font-size: 4rem;
                margin-bottom: 1rem;
            }
            .seed-description {
                color: #666;
                font-style: italic;
                margin-top: 0.5rem;
            }
            .nutrition-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin: 1rem 0;
            }
            .nutrition-item {
                background: #f5f5f5;
                padding: 1rem;
                border-radius: 8px;
                display: flex;
                justify-content: space-between;
            }
            .nutrition-label {
                font-weight: 600;
                color: #333;
            }
            .nutrition-value {
                color: #666;
            }
            .benefits-details ul {
                margin: 1rem 0;
                padding-left: 1.5rem;
            }
            .benefits-details li {
                margin-bottom: 0.5rem;
            }
            .usage-tips {
                background: #e8f5e8;
                padding: 1rem;
                border-radius: 8px;
                margin-top: 1rem;
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

    formatNutritionLabel(key) {
        return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    }

    initializeNutritionCalculator() {
        const calculator = document.querySelector('.nutrition-calculator');
        if (!calculator) return;

        calculator.innerHTML = `
            <h3>Daily Seed Intake Calculator</h3>
            <div class="calculator-form">
                <label for="seed-type">Select Seed:</label>
                <select id="seed-type">
                    ${this.seeds.map(seed => 
                        `<option value="${seed.name.toLowerCase().replace(' ', '-')}">${seed.name}</option>`
                    ).join('')}
                </select>
                
                <label for="seed-amount">Amount (grams):</label>
                <input type="number" id="seed-amount" min="1" max="100" value="30">
                
                <button class="btn btn-primary" onclick="seedsManager.calculateNutrition()">Calculate</button>
            </div>
            <div id="nutrition-result" class="nutrition-result"></div>
        `;
    }

    calculateNutrition() {
        const seedType = document.getElementById('seed-type').value;
        const amount = parseFloat(document.getElementById('seed-amount').value);
        const resultDiv = document.getElementById('nutrition-result');

        const seed = this.seeds.find(s => s.name.toLowerCase().replace(' ', '-') === seedType);
        if (!seed || !amount) return;

        const multiplier = amount / 100; // Convert to percentage
        const calculatedNutrition = {};

        Object.entries(seed.nutrition).forEach(([key, value]) => {
            const numValue = parseFloat(value);
            if (!isNaN(numValue)) {
                calculatedNutrition[key] = (numValue * multiplier).toFixed(1);
            }
        });

        resultDiv.innerHTML = `
            <h4>Nutrition for ${amount}g of ${seed.name}:</h4>
            <div class="calculated-nutrition">
                ${Object.entries(calculatedNutrition).map(([key, value]) => `
                    <div class="nutrition-item">
                        <span>${this.formatNutritionLabel(key)}:</span>
                        <span>${value}g</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Search functionality
    searchSeeds(query) {
        const filteredSeeds = this.seeds.filter(seed => 
            seed.name.toLowerCase().includes(query.toLowerCase()) ||
            seed.benefits.some(benefit => benefit.toLowerCase().includes(query.toLowerCase()))
        );

        this.displaySearchResults(filteredSeeds);
    }

    displaySearchResults(results) {
        const container = document.querySelector('.seeds-container');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = '<p class="no-results">No seeds found matching your search.</p>';
            return;
        }

        // Recreate display with filtered results
        const seedsHTML = results.map(seed => `
            <div class="seed-card" data-seed="${seed.name.toLowerCase().replace(' ', '-')}">
                <div class="seed-image-container">
                    <img src="${seed.image}" alt="${seed.name}" class="seed-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="seed-icon" style="color: ${seed.color}; display: none;">
                        <i class="${seed.icon}"></i>
                    </div>
                </div>
                <h3>${seed.name}</h3>
                <p class="description">${seed.description}</p>
                <div class="nutrition-preview">
                    <span class="nutrition-item">
                        <strong>Protein:</strong> ${seed.nutrition.protein}
                    </span>
                    <span class="nutrition-item">
                        <strong>Fiber:</strong> ${seed.nutrition.fiber}
                    </span>
                </div>
                <div class="benefits">
                    <h4>Key Benefits:</h4>
                    <ul>
                        ${seed.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary view-details-btn">View Details</button>
            </div>
        `).join('');

        container.innerHTML = seedsHTML;
        this.addEventListeners();
    }
}

// Initialize seeds functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.seeds-container')) {
        window.seedsManager = new SeedsManager();
    }
});

// Export for use in other modules
window.SeedsManager = SeedsManager;
