# 🌍 World Time Tool

A modern, interactive web application that displays the current time across major cities worldwide in real-time.

## Features

✨ **Real-time Updates** - Clock updates every second to show accurate current time
🔍 **Search Functionality** - Quickly find cities by name or country
📊 **Smart Sorting** - Sort by timezone offset or alphabetically
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
🎨 **Beautiful UI** - Modern gradient design with smooth animations
⏰ **Timezone Info** - Shows timezone identifier for each city
📅 **Date Display** - Displays full date for each timezone

## How to Use

1. **Open the Tool**: Simply open `index.html` in your web browser
2. **Search Cities**: Type in the search box to filter by city name or country
3. **Sort Results**: Use the dropdown to sort by timezone or alphabetically
4. **View Times**: Each card shows:
   - City name and country
   - Current time (HH:MM:SS format)
   - Current date
   - Timezone identifier

## Included Cities

The tool includes 25+ major cities across all continents:
- North America: New York, Los Angeles, Toronto, Vancouver, Mexico City
- South America: São Paulo
- Europe: London, Paris, Berlin, Moscow, Istanbul
- Africa: Cairo, Johannesburg
- Middle East: Dubai
- Asia: Tokyo, Hong Kong, Singapore, Bangkok, Mumbai, Beijing, Seoul, Manila
- Oceania: Sydney, Auckland

## Customization

To add more cities, edit the `cities` array in `script.js`:

```javascript
{ name: 'City Name', country: 'Country', timezone: 'Continent/City' }
```

Use standard [IANA timezone identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and animations
- `script.js` - JavaScript logic for time calculations and interactions
- `README.md` - This file

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- CSS Grid
- Intl.DateTimeFormat API

## License

Free to use and modify for personal and commercial projects.
