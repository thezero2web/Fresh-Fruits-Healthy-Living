// Vegetables JavaScript functionality
// This file handles interactive features related to vegetables

class VegetableManager {
    constructor() {
        this.vegetables = [
            {
                name: 'Spinach',
                benefits: ['Iron rich', 'Vitamin K', 'Antioxidant properties'],
                nutrition: {
                    calories: '23',
                    protein: '2.9g',
                    fiber: '2.2g',
                    vitaminC: '28mg'
                },
                icon: 'fas fa-carrot',
                image: '../img/vegetable/spinach.jpg',
                color: '#4caf50',
                description: 'Dark leafy green packed with essential nutrients.'
            },
            {
                name: 'Broccoli',
                benefits: ['Cancer prevention', 'Vitamin C', 'Fiber rich'],
                nutrition: {
                    calories: '34',
                    protein: '2.8g',
                    fiber: '2.6g',
                    vitaminC: '89mg'
                },
                icon: 'fas fa-carrot',
                image: '../img/vegetable/broccoli.jpg',
                color: '#388e3c',
                description: 'Cruciferous vegetable with powerful health benefits.'
            },
            {
                name: 'Carrots',
                benefits: ['Eye health', 'Vitamin A', 'Antioxidant'],
                nutrition: {
                    calories: '41',
                    protein: '0.9g',
                    fiber: '2.8g',
                    vitaminA: '835%'
                },
                icon: 'fas fa-carrot',
                image: '../img/vegetable/carrots.jpg',
                color: '#ff9800',
                description: 'Orange root vegetable rich in beta-carotene.'
            },
            {
                name: 'Bell Peppers',
                benefits: ['Vitamin C', 'Antioxidant', 'Eye health'],
                nutrition: {
                    calories: '31',
                    protein: '1g',
                    fiber: '2.1g',
                    vitaminC: '127mg'
                },
                icon: 'fas fa-carrot',
                image: '../img/vegetable/bell-peppers.jpg',
                color: '#f44336',
                description: 'Colorful peppers with high vitamin C content.'
            },
            {
                name: 'Sweet Potatoes',
                benefits: ['Vitamin A', 'Fiber rich', 'Complex carbs'],
                nutrition: {
                    calories: '86',
                    protein: '1.6g',
                    fiber: '3g',
                    vitaminA: '438%'
                },
                icon: 'fas fa-carrot',
                image: '../img/vegetable/sweet-potatoes.jpg',
                color: '#ff8a65',
                description: 'Nutritious root vegetable with natural sweetness.'
            },
            {
                name: 'Kale',
                benefits: ['Superfood', 'Vitamin K', 'Calcium rich'],
                nutrition: {
                    calories: '49',
                    protein: '4.3g',
                    fiber: '2g',
                    vitaminK: '704%'
                },
                icon: 'fas fa-carrot',
                image: '../img/vegetable/kale.jpg',
                color: '#2e7d32',
                description: 'Nutrient-dense leafy green superfood.'
            }
        ];
        
        this.init();
    }

    init() {
        this.createVegetablesDisplay();
        this.addEventListeners();
        this.initializeNutritionCalculator();
    }

    createVegetablesDisplay() {
        const container = document.querySelector('.vegetables-container');
        if (!container) return;

        const vegetablesHTML = this.vegetables.map(vegetable => `
            <div class="vegetable-card" data-vegetable="${vegetable.name.toLowerCase().replace(' ', '-')}">
                <div class="vegetable-image-container">
                    <img src="${vegetable.image}" alt="${vegetable.name}" class="vegetable-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="vegetable-icon" style="color: ${vegetable.color}; display: none;">
                        <i class="${vegetable.icon}"></i>
                    </div>
                </div>
                <h3>${vegetable.name}</h3>
                <p class="description">${vegetable.description}</p>
                <div class="nutrition-preview">
                    <span class="nutrition-item">
                        <strong>Calories:</strong> ${vegetable.nutrition.calories}
                    </span>
                    <span class="nutrition-item">
                        <strong>Protein:</strong> ${vegetable.nutrition.protein}
                    </span>
                </div>
                <div class="benefits">
                    <h4>Key Benefits:</h4>
                    <ul>
                        ${vegetable.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary view-details-btn">View Details</button>
            </div>
        `).join('');

        container.innerHTML = vegetablesHTML;
    }

    addEventListeners() {
        // View details buttons
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const vegetableCard = e.target.closest('.vegetable-card');
                const vegetableName = vegetableCard.dataset.vegetable;
                this.showVegetableDetails(vegetableName);
            });
        });

        // Vegetable card interactions
        document.querySelectorAll('.vegetable-card').forEach(card => {
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

    showVegetableDetails(vegetableName) {
        const vegetable = this.vegetables.find(v => v.name.toLowerCase().replace(' ', '-') === vegetableName);
        if (!vegetable) return;

        const modal = document.createElement('div');
        modal.className = 'vegetable-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <div class="vegetable-image-large">
                        <img src="${vegetable.image}" alt="${vegetable.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="vegetable-icon-large" style="color: ${vegetable.color}; display: none;">
                            <i class="${vegetable.icon}"></i>
                        </div>
                    </div>
                    <h2>${vegetable.name}</h2>
                    <p class="description">${vegetable.description}</p>
                </div>
                <div class="modal-body">
                    <div class="vegetable-info">
                        <h3>Health Benefits:</h3>
                        <ul>
                            ${vegetable.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                        <h3>Nutrition Facts (per 100g):</h3>
                        <div class="nutrition-grid">
                            <div class="nutrition-item">
                                <strong>Calories:</strong> ${vegetable.nutrition.calories}
                            </div>
                            <div class="nutrition-item">
                                <strong>Protein:</strong> ${vegetable.nutrition.protein}
                            </div>
                            <div class="nutrition-item">
                                <strong>Fiber:</strong> ${vegetable.nutrition.fiber}
                            </div>
                            <div class="nutrition-item">
                                <strong>Vitamin C:</strong> ${vegetable.nutrition.vitaminC}
                            </div>
                        </div>
                        <div class="cooking-tips">
                            <h3>Cooking Tips:</h3>
                            <p>This section would contain cooking methods and recipe suggestions for ${vegetable.name}.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .vegetable-modal {
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
            .vegetable-image-large {
                position: relative;
                margin-bottom: 1rem;
            }
            .vegetable-image-large img {
                width: 120px;
                height: 120px;
                object-fit: cover;
                border-radius: 50%;
                border: 3px solid ${vegetable.color};
            }
            .vegetable-icon-large {
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
            .vegetable-info h3 {
                color: #333;
                margin: 1rem 0 0.5rem 0;
            }
            .vegetable-info ul {
                margin: 0.5rem 0 1rem 1.5rem;
            }
            .vegetable-info li {
                margin-bottom: 0.5rem;
            }
            .nutrition-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
                margin: 1rem 0;
            }
            .nutrition-grid .nutrition-item {
                background: #f5f5f5;
                padding: 0.5rem;
                border-radius: 8px;
                text-align: center;
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
    searchVegetables(query) {
        const filteredVegetables = this.vegetables.filter(vegetable => 
            vegetable.name.toLowerCase().includes(query.toLowerCase()) ||
            vegetable.benefits.some(benefit => benefit.toLowerCase().includes(query.toLowerCase()))
        );

        this.displaySearchResults(filteredVegetables);
    }

    displaySearchResults(results) {
        const container = document.querySelector('.vegetables-container');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = '<p class="no-results">No vegetables found matching your search.</p>';
            return;
        }

        // Recreate display with filtered results
        const vegetablesHTML = results.map(vegetable => `
            <div class="vegetable-card" data-vegetable="${vegetable.name.toLowerCase().replace(' ', '-')}">
                <div class="vegetable-image-container">
                    <img src="${vegetable.image}" alt="${vegetable.name}" class="vegetable-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="vegetable-icon" style="color: ${vegetable.color}; display: none;">
                        <i class="${vegetable.icon}"></i>
                    </div>
                </div>
                <h3>${vegetable.name}</h3>
                <p class="description">${vegetable.description}</p>
                <div class="nutrition-preview">
                    <span class="nutrition-item">
                        <strong>Calories:</strong> ${vegetable.nutrition.calories}
                    </span>
                    <span class="nutrition-item">
                        <strong>Protein:</strong> ${vegetable.nutrition.protein}
                    </span>
                </div>
                <div class="benefits">
                    <h4>Key Benefits:</h4>
                    <ul>
                        ${vegetable.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary view-details-btn">View Details</button>
            </div>
        `).join('');

        container.innerHTML = vegetablesHTML;
        this.addEventListeners();
    }

    // Nutrition calculator functionality
    initializeNutritionCalculator() {
        const calculator = document.querySelector('.nutrition-calculator');
        if (!calculator) return;

        const calculateBtn = calculator.querySelector('.calculate-btn');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => {
                this.calculateNutrition();
            });
        }
    }

    calculateNutrition() {
        const selectedVegetables = Array.from(document.querySelectorAll('input[name="vegetable"]:checked'))
            .map(input => input.value);

        if (selectedVegetables.length === 0) {
            alert('Please select at least one vegetable for nutrition calculation.');
            return;
        }

        const result = this.calculateTotalNutrition(selectedVegetables);
        this.displayNutritionResult(result);
    }

    calculateTotalNutrition(selectedVegetables) {
        const vegetableData = this.vegetables.filter(vegetable => 
            selectedVegetables.includes(vegetable.name.toLowerCase().replace(' ', '-'))
        );
        
        const totalNutrition = {
            calories: 0,
            protein: 0,
            fiber: 0,
            vitaminC: 0
        };

        vegetableData.forEach(vegetable => {
            totalNutrition.calories += parseInt(vegetable.nutrition.calories);
            totalNutrition.protein += parseFloat(vegetable.nutrition.protein);
            totalNutrition.fiber += parseFloat(vegetable.nutrition.fiber);
            totalNutrition.vitaminC += parseInt(vegetable.nutrition.vitaminC);
        });

        return {
            vegetables: vegetableData,
            totalNutrition: totalNutrition,
            mealName: this.generateMealName(vegetableData)
        };
    }

    generateMealName(vegetables) {
        if (vegetables.length === 1) return `${vegetables[0].name} Dish`;
        if (vegetables.length === 2) return `${vegetables[0].name} & ${vegetables[1].name} Combo`;
        return 'Mixed Vegetable Dish';
    }

    displayNutritionResult(result) {
        const resultDiv = document.querySelector('.nutrition-result');
        if (!resultDiv) return;

        resultDiv.innerHTML = `
            <h3>${result.mealName}</h3>
            <div class="nutrition-summary">
                <h4>Total Nutrition (per 100g each):</h4>
                <div class="nutrition-grid">
                    <div class="nutrition-item">
                        <strong>Calories:</strong> ${result.totalNutrition.calories}
                    </div>
                    <div class="nutrition-item">
                        <strong>Protein:</strong> ${result.totalNutrition.protein.toFixed(1)}g
                    </div>
                    <div class="nutrition-item">
                        <strong>Fiber:</strong> ${result.totalNutrition.fiber.toFixed(1)}g
                    </div>
                    <div class="nutrition-item">
                        <strong>Vitamin C:</strong> ${result.totalNutrition.vitaminC}mg
                    </div>
                </div>
            </div>
        `;
        resultDiv.style.display = 'block';
    }
}

// Initialize vegetables functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.vegetables-container')) {
        new VegetableManager();
    }
});

// Export for use in other modules
window.VegetableManager = VegetableManager;
