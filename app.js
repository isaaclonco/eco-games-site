// script.js
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const capturedImage = document.getElementById('captured-image');
const capturedContainer = document.getElementById('captured-container');
const captureButton = document.getElementById('capture');

// Inicia a câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Erro ao acessar a câmera: ", error);
    });

// Função para capturar a imagem
captureButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth; // Definir a largura do canvas
    canvas.height = video.videoHeight; // Definir a altura do canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height); // Desenhar a imagem do vídeo no canvas
    const dataURL = canvas.toDataURL('image/png'); // Converter a imagem para URL de dados
    capturedImage.src = dataURL; // Definir a fonte da imagem capturada
    capturedContainer.style.display = 'block'; // Exibir a imagem capturada
    capturedContainer.style.opacity = '1'; // Garantir que a opacidade seja definida
    video.style.display = 'none'; // Ocultar a visualização da câmera
});

// Exibir a imagem capturada com fade-in
capturedContainer.style.opacity = '0'; // Inicialmente invisível
