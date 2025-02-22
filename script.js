document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const sector = document.getElementById('sector').value;
    const issue = document.getElementById('issue').value;
    
    const ticket = {
        name: name,
        sector: sector,
        issue: issue,
        date: new Date().toLocaleString()
    };
    
    // Mostrar el ticket en la página
    const ticketHTML = `
    <p><strong>Nombre:</strong> ${ticket.name}</p>
    <p><strong>Sector de Trabajo:</strong> ${ticket.sector}</p>
    <p><strong>Descripción del problema:</strong> ${ticket.issue}</p>
    <p><strong>Fecha:</strong> ${ticket.date}</p>
    `;
    
    document.getElementById('ticketResult').innerHTML = ticketHTML;
    document.getElementById('ticketForm').reset();
    
    // Enviar el ticket por correo electrónico usando EmailJS
    emailjs.send('service_urfw67i', 'template_wbhsser', ticket)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
});
