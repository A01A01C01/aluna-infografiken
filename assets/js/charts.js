/**
 * ALUNA Documentation Charts
 * Interactive visualizations using Chart.js
 */

// Chart configuration and data
const chartConfigs = {
    composition: {
        type: 'doughnut',
        data: {
            labels: ['Theoretisches Fundament', 'Methodische Ansätze', 'Technologische Innovation'],
            datasets: [{
                data: [15, 70, 15],
                backgroundColor: [
                    '#FF6B6B',  // Red for theoretical foundation
                    '#FFD166',  // Yellow for methodology  
                    '#06D6A0'   // Green for technology
                ],
                borderColor: [
                    '#FF5252',
                    '#FFC107',
                    '#00BCD4'
                ],
                borderWidth: 2,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#073B4C',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    borderColor: '#118AB2',
                    borderWidth: 1,
                    cornerRadius: 8,
                    titleFont: {
                        family: 'Inter',
                        weight: 'bold'
                    },
                    bodyFont: {
                        family: 'Inter'
                    },
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed.toFixed(1) + '%';
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    },
    
    toolkit: {
        type: 'radar',
        data: {
            labels: [
                'Zirkuläre Fragen',
                'Lösungsorientierte Fragen', 
                'Hypothetische Fragen',
                'Reflexive Fragen',
                'Skalierungsfragen'
            ],
            datasets: [{
                label: 'Effektivität',
                data: [90, 85, 80, 88, 82],
                backgroundColor: 'rgba(17, 138, 178, 0.2)',
                borderColor: '#118AB2',
                borderWidth: 2,
                pointBackgroundColor: '#118AB2',
                pointBorderColor: '#073B4C',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }, {
                label: 'Häufigkeit der Nutzung',
                data: [85, 92, 75, 80, 88],
                backgroundColor: 'rgba(255, 107, 107, 0.2)',
                borderColor: '#FF6B6B',
                borderWidth: 2,
                pointBackgroundColor: '#FF6B6B',
                pointBorderColor: '#073B4C',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#073B4C',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    borderColor: '#118AB2',
                    borderWidth: 1,
                    cornerRadius: 8,
                    titleFont: {
                        family: 'Inter',
                        weight: 'bold'
                    },
                    bodyFont: {
                        family: 'Inter'
                    },
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.r + '%';
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        font: {
                            family: 'Inter',
                            size: 10
                        },
                        color: '#6B7280'
                    },
                    grid: {
                        color: '#E5E7EB'
                    },
                    angleLines: {
                        color: '#E5E7EB'
                    },
                    pointLabels: {
                        font: {
                            family: 'Inter',
                            size: 11,
                            weight: '500'
                        },
                        color: '#374151'
                    }
                }
            },
            animation: {
                duration: 1200,
                easing: 'easeInOutQuart'
            }
        }
    }
};

// Chart instances
let compositionChart = null;
let toolkitChart = null;

/**
 * Initialize all charts
 */
function initializeCharts() {
    try {
        initCompositionChart();
        initToolkitChart();
    } catch (error) {
        console.error('Error initializing charts:', error);
        showChartError('compositionChart');
        showChartError('toolkitChart');
    }
}

/**
 * Initialize the composition donut chart
 */
function initCompositionChart() {
    const ctx = document.getElementById('compositionChart');
    if (!ctx) {
        console.warn('Composition chart canvas not found');
        return;
    }

    // Destroy existing chart if it exists
    if (compositionChart) {
        compositionChart.destroy();
    }

    compositionChart = new Chart(ctx, chartConfigs.composition);
}

/**
 * Initialize the toolkit radar chart
 */
function initToolkitChart() {
    const ctx = document.getElementById('toolkitChart');
    if (!ctx) {
        console.warn('Toolkit chart canvas not found');
        return;
    }

    // Destroy existing chart if it exists
    if (toolkitChart) {
        toolkitChart.destroy();
    }

    toolkitChart = new Chart(ctx, chartConfigs.toolkit);
}

/**
 * Show error message when chart fails to load
 */
function showChartError(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (canvas) {
        const container = canvas.parentElement;
        container.innerHTML = `
            <div class="chart-error text-center p-8 text-gray-500">
                <div class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <p>Diagramm konnte nicht geladen werden</p>
                <button onclick="retryChart('${canvasId}')" class="mt-4 px-6 py-2 bg-gradient-to-r from-[#118AB2] to-[#06D6A0] text-white rounded-lg hover:shadow-lg transition-all duration-300">
                    Erneut versuchen
                </button>
            </div>
        `;
    }
}

/**
 * Retry loading a specific chart
 */
function retryChart(canvasId) {
    const container = document.getElementById(canvasId)?.parentElement;
    if (container) {
        container.innerHTML = `<canvas id="${canvasId}" aria-label="ALUNA Diagramm"></canvas>`;
        
        if (canvasId === 'compositionChart') {
            initCompositionChart();
        } else if (canvasId === 'toolkitChart') {
            initToolkitChart();
        }
    }
}

/**
 * Handle window resize events
 */
function handleResize() {
    if (compositionChart) {
        compositionChart.resize();
    }
    if (toolkitChart) {
        toolkitChart.resize();
    }
}

/**
 * Clean up charts on page unload
 */
function destroyCharts() {
    if (compositionChart) {
        compositionChart.destroy();
        compositionChart = null;
    }
    if (toolkitChart) {
        toolkitChart.destroy();
        toolkitChart = null;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', initializeCharts);
window.addEventListener('resize', debounce(handleResize, 250));
window.addEventListener('beforeunload', destroyCharts);

/**
 * Debounce function to limit how often a function can be called
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeCharts,
        destroyCharts,
        chartConfigs
    };
}
