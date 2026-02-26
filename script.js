const cities = [
    { name: 'London', country: 'United Kingdom', timezone: 'Europe/London' },
    { name: 'New York', country: 'United States', timezone: 'America/New_York' },
    { name: 'Los Angeles', country: 'United States', timezone: 'America/Los_Angeles' },
    { name: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo' },
    { name: 'Sydney', country: 'Australia', timezone: 'Australia/Sydney' },
    { name: 'Dubai', country: 'United Arab Emirates', timezone: 'Asia/Dubai' },
    { name: 'Singapore', country: 'Singapore', timezone: 'Asia/Singapore' },
    { name: 'Hong Kong', country: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
    { name: 'Bangkok', country: 'Thailand', timezone: 'Asia/Bangkok' },
    { name: 'Mumbai', country: 'India', timezone: 'Asia/Kolkata' },
    { name: 'Moscow', country: 'Russia', timezone: 'Europe/Moscow' },
    { name: 'Paris', country: 'France', timezone: 'Europe/Paris' },
    { name: 'Berlin', country: 'Germany', timezone: 'Europe/Berlin' },
    { name: 'Mexico City', country: 'Mexico', timezone: 'America/Mexico_City' },
    { name: 'São Paulo', country: 'Brazil', timezone: 'America/Sao_Paulo' },
    { name: 'Toronto', country: 'Canada', timezone: 'America/Toronto' },
    { name: 'Vancouver', country: 'Canada', timezone: 'America/Vancouver' },
    { name: 'Auckland', country: 'New Zealand', timezone: 'Pacific/Auckland' },
    { name: 'Istanbul', country: 'Turkey', timezone: 'Europe/Istanbul' },
    { name: 'Cairo', country: 'Egypt', timezone: 'Africa/Cairo' },
    { name: 'Johannesburg', country: 'South Africa', timezone: 'Africa/Johannesburg' },
    { name: 'Beijing', country: 'China', timezone: 'Asia/Shanghai' },
    { name: 'Seoul', country: 'South Korea', timezone: 'Asia/Seoul' },
    { name: 'Manila', country: 'Philippines', timezone: 'Asia/Manila' },
    { name: 'Seattle', country: 'United States', timezone: 'America/Los_Angeles' },
    { name: 'Denver', country: 'United States', timezone: 'America/Denver' },
    { name: 'Chicago', country: 'United States', timezone: 'America/Chicago' },
    { name: 'Miami', country: 'United States', timezone: 'America/New_York' },
    { name: 'Boston', country: 'United States', timezone: 'America/New_York' },
    { name: 'Washington DC', country: 'United States', timezone: 'America/New_York' },
    { name: 'Montreal', country: 'Canada', timezone: 'America/Toronto' },
    { name: 'Calgary', country: 'Canada', timezone: 'America/Denver' },
    { name: 'Buenos Aires', country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires' },
    { name: 'Lima', country: 'Peru', timezone: 'America/Lima' },
    { name: 'Bogotá', country: 'Colombia', timezone: 'America/Bogota' },
    { name: 'Santiago', country: 'Chile', timezone: 'America/Santiago' },
    { name: 'Caracas', country: 'Venezuela', timezone: 'America/Caracas' },
    { name: 'Barcelona', country: 'Spain', timezone: 'Europe/Madrid' },
    { name: 'Rome', country: 'Italy', timezone: 'Europe/Rome' },
    { name: 'Madrid', country: 'Spain', timezone: 'Europe/Madrid' },
    { name: 'Amsterdam', country: 'Netherlands', timezone: 'Europe/Amsterdam' },
    { name: 'Vienna', country: 'Austria', timezone: 'Europe/Vienna' },
    { name: 'Prague', country: 'Czech Republic', timezone: 'Europe/Prague' },
    { name: 'Stockholm', country: 'Sweden', timezone: 'Europe/Stockholm' },
    { name: 'Athens', country: 'Greece', timezone: 'Europe/Athens' },
    { name: 'Dublin', country: 'Ireland', timezone: 'Europe/Dublin' },
    { name: 'Lisbon', country: 'Portugal', timezone: 'Europe/Lisbon' },
    { name: 'Lagos', country: 'Nigeria', timezone: 'Africa/Lagos' },
    { name: 'Nairobi', country: 'Kenya', timezone: 'Africa/Nairobi' },
    { name: 'Casablanca', country: 'Morocco', timezone: 'Africa/Casablanca' },
    { name: 'Accra', country: 'Ghana', timezone: 'Africa/Accra' },
    { name: 'Addis Ababa', country: 'Ethiopia', timezone: 'Africa/Addis_Ababa' },
    { name: 'Tehran', country: 'Iran', timezone: 'Asia/Tehran' },
    { name: 'Baghdad', country: 'Iraq', timezone: 'Asia/Baghdad' },
    { name: 'Riyadh', country: 'Saudi Arabia', timezone: 'Asia/Riyadh' },
    { name: 'Tel Aviv', country: 'Israel', timezone: 'Asia/Jerusalem' },
    { name: 'Doha', country: 'Qatar', timezone: 'Asia/Qatar' },
    { name: 'Almaty', country: 'Kazakhstan', timezone: 'Asia/Almaty' },
    { name: 'Delhi', country: 'India', timezone: 'Asia/Kolkata' },
    { name: 'Bangalore', country: 'India', timezone: 'Asia/Kolkata' },
    { name: 'Lahore', country: 'Pakistan', timezone: 'Asia/Karachi' },
    { name: 'Karachi', country: 'Pakistan', timezone: 'Asia/Karachi' },
    { name: 'Kathmandu', country: 'Nepal', timezone: 'Asia/Kathmandu' },
    { name: 'Colombo', country: 'Sri Lanka', timezone: 'Asia/Colombo' },
    { name: 'Jakarta', country: 'Indonesia', timezone: 'Asia/Jakarta' },
    { name: 'Kuala Lumpur', country: 'Malaysia', timezone: 'Asia/Kuala_Lumpur' },
    { name: 'Ho Chi Minh City', country: 'Vietnam', timezone: 'Asia/Ho_Chi_Minh' },
    { name: 'Hanoi', country: 'Vietnam', timezone: 'Asia/Ho_Chi_Minh' },
    { name: 'Yangon', country: 'Myanmar', timezone: 'Asia/Yangon' },
    { name: 'Dhaka', country: 'Bangladesh', timezone: 'Asia/Dhaka' },
    { name: 'Osaka', country: 'Japan', timezone: 'Asia/Tokyo' },
    { name: 'Taipei', country: 'Taiwan', timezone: 'Asia/Taipei' },
    { name: 'Busan', country: 'South Korea', timezone: 'Asia/Seoul' },
    { name: 'Chiang Mai', country: 'Thailand', timezone: 'Asia/Bangkok' },
];

let currentSort = 'timezone';
let currentFilter = '';
let displayedCities = [...cities];

const container = document.getElementById('clocksContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderClocks();
    setInterval(updateClocks, 1000);
});

searchInput.addEventListener('input', (e) => {
    currentFilter = e.target.value.toLowerCase();
    filterAndSort();
});

sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    filterAndSort();
});

function filterAndSort() {
    // Filter
    displayedCities = cities.filter(city => 
        city.name.toLowerCase().includes(currentFilter) ||
        city.country.toLowerCase().includes(currentFilter)
    );

    // Sort
    if (currentSort === 'alphabetical') {
        displayedCities.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        displayedCities.sort((a, b) => {
            const tzA = getTimezoneOffset(a.timezone);
            const tzB = getTimezoneOffset(b.timezone);
            return tzA - tzB;
        });
    }

    renderClocks();
}

function getTimezoneOffset(timezone) {
    const now = new Date();
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const utcTime = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    return (cityTime - utcTime) / (1000 * 60 * 60);
}

function renderClocks() {
    container.innerHTML = '';

    if (displayedCities.length === 0) {
        container.innerHTML = '<div class="empty-state">No cities found. Try a different search.</div>';
        return;
    }

    displayedCities.forEach((city, index) => {
        const clockCard = document.createElement('div');
        clockCard.className = 'clock-card';
        clockCard.setAttribute('data-city-index', index);
        clockCard.innerHTML = `
            <div class="city-name">${city.name}</div>
            <div class="country-name">${city.country}</div>
            <div class="time-display"><span class="time-value">00:00</span><span class="meridiem">00</span></div>
            <div class="date-display"></div>
            <div class="timezone-info">${city.timezone}</div>
        `;

        container.appendChild(clockCard);
    });

    updateClocks();
}

function updateClocks() {
    const cards = document.querySelectorAll('.clock-card');

    cards.forEach((card, index) => {
        const city = displayedCities[index];
        const now = new Date();
        const cityTime = new Date(now.toLocaleString('en-US', { timeZone: city.timezone }));

        const hours = String(cityTime.getHours()).padStart(2, '0');
        const minutes = String(cityTime.getMinutes()).padStart(2, '0');
        const seconds = String(cityTime.getSeconds()).padStart(2, '0');

        const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const dateString = cityTime.toLocaleDateString('en-US', dateOptions);

        // Update only the time and date elements
        const timeValue = card.querySelector('.time-value');
        const meridiem = card.querySelector('.meridiem');
        const dateDisplay = card.querySelector('.date-display');

        timeValue.textContent = `${hours}:${minutes}`;
        meridiem.textContent = seconds;
        dateDisplay.textContent = dateString;
    });
}
