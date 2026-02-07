// Load services on page load
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
});

// Fetch and display services
async function loadServices() {
    try {
        const response = await fetch('/api/services');
        const services = await response.json();
        const serviceList = document.getElementById('serviceList');
        
        serviceList.innerHTML = services.map(service => `
            <div class="service-card">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <div class="service-price">€${service.price}</div>
                <button class="cta-btn" style="width: 100%;" onclick="scrollTo('contact')">Anfrage stellen</button>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading services:', error);
    }
}

// Handle form submission
async function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            const result = await response.json();
            alert('✅ ' + result.message);
            form.reset();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Fehler beim Senden. Bitte versuche es später erneut.');
    }
}

// Smooth scroll helper
function scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}
