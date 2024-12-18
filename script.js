let currentIndex = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    currentIndex += step;
    
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100;  // Deslocar o carrossel para o slide atual
    carousel.style.transform = `translateX(${offset}%)`;
}



// Inicializar o EmailJS
emailjs.init("service_dlprapi");

// Manipular o envio do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibir mensagem de carregamento (opcional)
    const submitButton = event.target.querySelector('button');
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    // Enviar o e-mail via EmailJS
    emailjs.sendForm('service_dlprapi', 'portfolio_daniel', this)
        .then(function(response) {
            console.log('Sucesso:', response);
            alert("Mensagem enviada com sucesso!");
            submitButton.disabled = false;
            submitButton.textContent = "Enviar";
            document.getElementById('contact-form').reset(); // Limpa o formulário
        })
        .catch(function(error) {
            console.error('Erro:', error);
            alert("Ocorreu um erro ao enviar a mensagem.");
            submitButton.disabled = false;
            submitButton.textContent = "Enviar";
        });
});
