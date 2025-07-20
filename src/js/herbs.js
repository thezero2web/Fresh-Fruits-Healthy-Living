// Herbs JavaScript functionality
// This file handles interactive features related to herbs and spices

class HerbsManager {
    constructor() {
        this.herbs = [
            {
                name: 'Ginger',
                benefits: ['Anti-inflammatory', 'Digestive aid', 'Nausea relief'],
                uses: ['Tea', 'Cooking', 'Supplements'],
                icon: 'fas fa-leaf',
                image: '../img/herbs/ginger.jpg',
                color: '#ff8a65',
                description: 'Aromatic root with powerful medicinal properties.'
            },
            {
                name: 'Turmeric',
                benefits: ['Anti-inflammatory', 'Antioxidant', 'Joint health'],
                uses: ['Cooking', 'Supplements', 'Tea'],
                icon: 'fas fa-leaf',
                image: '../img/herbs/turmeric.jpg',
                color: '#ffc107',
                description: 'Golden spice known for its curcumin content.'
            },
            {
                name: 'Mint',
                benefits: ['Digestive support', 'Fresh breath', 'Cooling effect'],
                uses: ['Tea', 'Cooking', 'Essential oil'],
                icon: 'fas fa-leaf',
                image: '../img/herbs/mint.jpg',
                color: '#4caf50',
                description: 'Refreshing herb with cooling properties.'
            },
            {
                name: 'Chamomile',
                benefits: ['Sleep aid', 'Calming', 'Digestive support'],
                uses: ['Tea', 'Supplements', 'Aromatherapy'],
                icon: 'fas fa-leaf',
                image: '../img/herbs/chamomile.jpg',
                color: '#ffeb3b',
                description: 'Gentle herb known for its calming effects.'
            },
            {
                name: 'Cinnamon',
                benefits: ['Blood sugar control', 'Antioxidant', 'Anti-inflammatory'],
                uses: ['Cooking', 'Supplements', 'Tea'],
                icon: 'fas fa-leaf',
                image: '../img/herbs/cinnamon.jpg',
                color: '#8d6e63',
                description: 'Warm spice with blood sugar regulating properties.'
            },
            {
                name: 'Rosemary',
                benefits: ['Memory enhancement', 'Antioxidant', 'Anti-inflammatory'],
                uses: ['Cooking', 'Essential oil', 'Tea'],
                icon: 'fas fa-leaf',
                image: '../img/herbs/rosemary.jpg',
                color: '#388e3c',
                description: 'Aromatic herb that supports cognitive function.'
            }
        ];

        this.init();
    }

    init() {
        this.createHerbsDisplay();
        this.addEventListeners();
        this.initializeTeaCalculator();
    }

    createHerbsDisplay() {
        const container = document.querySelector('.herbs-container');
        if (!container) return;

        const herbsHTML = this.herbs.map(herb => `
            <div class="herb-card" data-herb="${herb.name.toLowerCase()}">
                <div class="herb-image-container">
                    <img src="${herb.image}" alt="${herb.name}" class="herb-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="herb-icon" style="color: ${herb.color}; display: none;">
                        <i class="${herb.icon}"></i>
                    </div>
                </div>
                <h3>${herb.name}</h3>
                <p class="description">${herb.description}</p>
                <div class="benefits">
                    <h4>Benefits:</h4>
                    <ul>
                        ${herb.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <div class="uses">
                    <h4>Common Uses:</h4>
                    <div class="use-tags">
                        ${herb.uses.map(use => `<span class="use-tag">${use}</span>`).join('')}
                    </div>
                </div>
                <button class="btn btn-primary learn-more-btn">Learn More</button>
            </div>
        `).join('');

        container.innerHTML = herbsHTML;
    }

    addEventListeners() {
        // Learn more buttons
        document.querySelectorAll('.learn-more-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const herbCard = e.target.closest('.herb-card');
                const herbName = herbCard.dataset.herb;
                this.showHerbDetails(herbName);
            });
        });

        // Herb card interactions
        document.querySelectorAll('.herb-card').forEach(card => {
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

    showHerbDetails(herbName) {
        const herb = this.herbs.find(h => h.name.toLowerCase() === herbName);
        if (!herb) return;

        const modal = document.createElement('div');
        modal.className = 'herb-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <div class="herb-image-large">
                        <img src="${herb.image}" alt="${herb.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="herb-icon-large" style="color: ${herb.color}; display: none;">
                            <i class="${herb.icon}"></i>
                        </div>
                    </div>
                    <h2>${herb.name}</h2>
                    <p class="description">${herb.description}</p>
                </div>
                <div class="modal-body">
                    <div class="herb-info">
                        <h3>Health Benefits:</h3>
                        <ul>
                            ${herb.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                        <h3>Common Uses:</h3>
                        <div class="use-tags-large">
                            ${herb.uses.map(use => `<span class="use-tag-large">${use}</span>`).join('')}
                        </div>
                        <div class="herb-tips">
                            <h3>Usage Tips:</h3>
                            <p>This section would contain specific usage instructions and tips for ${herb.name}.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .herb-modal {
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
            .herb-image-large {
                position: relative;
                margin-bottom: 1rem;
            }
            .herb-image-large img {
                width: 120px;
                height: 120px;
                object-fit: cover;
                border-radius: 50%;
                border: 3px solid ${herb.color};
            }
            .herb-icon-large {
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
            .herb-info h3 {
                color: #333;
                margin: 1rem 0 0.5rem 0;
            }
            .herb-info ul {
                margin: 0.5rem 0 1rem 1.5rem;
            }
            .herb-info li {
                margin-bottom: 0.5rem;
            }
            .use-tags-large {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin: 1rem 0;
            }
            .use-tag-large {
                background: ${herb.color};
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-size: 0.9rem;
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
    searchHerbs(query) {
        const filteredHerbs = this.herbs.filter(herb =>
            herb.name.toLowerCase().includes(query.toLowerCase()) ||
            herb.benefits.some(benefit => benefit.toLowerCase().includes(query.toLowerCase())) ||
            herb.uses.some(use => use.toLowerCase().includes(query.toLowerCase()))
        );

        this.displaySearchResults(filteredHerbs);
    }

    displaySearchResults(results) {
        const container = document.querySelector('.herbs-container');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = '<p class="no-results">No herbs found matching your search.</p>';
            return;
        }

        // Recreate display with filtered results
        const herbsHTML = results.map(herb => `
            <div class="herb-card" data-herb="${herb.name.toLowerCase()}">
                <div class="herb-image-container">
                    <img src="${herb.image}" alt="${herb.name}" class="herb-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="herb-icon" style="color: ${herb.color}; display: none;">
                        <i class="${herb.icon}"></i>
                    </div>
                </div>
                <h3>${herb.name}</h3>
                <p class="description">${herb.description}</p>
                <div class="benefits">
                    <h4>Benefits:</h4>
                    <ul>
                        ${herb.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <div class="uses">
                    <h4>Common Uses:</h4>
                    <div class="use-tags">
                        ${herb.uses.map(use => `<span class="use-tag">${use}</span>`).join('')}
                    </div>
                </div>
                <button class="btn btn-primary learn-more-btn">Learn More</button>
            </div>
        `).join('');

        container.innerHTML = herbsHTML;
        this.addEventListeners();
    }

    // Tea calculator functionality
    initializeTeaCalculator() {
        const calculator = document.querySelector('.tea-calculator');
        if (!calculator) return;

        const calculateBtn = calculator.querySelector('.calculate-btn');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => {
                this.calculateTeaBenefits();
            });
        }
    }

    calculateTeaBenefits() {
        const selectedHerbs = Array.from(document.querySelectorAll('input[name="herb"]:checked'))
            .map(input => input.value);

        if (selectedHerbs.length === 0) {
            alert('Please select at least one herb for your tea blend.');
            return;
        }

        const result = this.generateTeaRecommendation(selectedHerbs);
        this.displayTeaResult(result);
    }

    generateTeaRecommendation(selectedHerbs) {
        const herbData = this.herbs.filter(herb => selectedHerbs.includes(herb.name.toLowerCase()));

        const benefits = [...new Set(herbData.flatMap(herb => herb.benefits))];
        const uses = [...new Set(herbData.flatMap(herb => herb.uses))];

        return {
            herbs: herbData,
            combinedBenefits: benefits,
            recommendedUses: uses,
            blendName: this.generateBlendName(herbData)
        };
    }

    generateBlendName(herbs) {
        if (herbs.length === 1) return `${herbs[0].name} Tea`;
        if (herbs.length === 2) return `${herbs[0].name} & ${herbs[1].name} Blend`;
        return 'Custom Herbal Blend';
    }

    displayTeaResult(result) {
        const resultDiv = document.querySelector('.tea-result');
        if (!resultDiv) return;

        resultDiv.innerHTML = `
            <h3>${result.blendName}</h3>
            <div class="blend-info">
                <h4>Combined Benefits:</h4>
                <ul>
                    ${result.combinedBenefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
                <h4>Recommended Preparation:</h4>
                <p>Steep 1-2 teaspoons of the blend in hot water for 5-10 minutes.</p>
            </div>
        `;
        resultDiv.style.display = 'block';
    }
}

// Initialize herbs functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.herbs-container')) {
        new HerbsManager();
    }
});

// Export for use in other modules
window.HerbsManager = HerbsManager;
