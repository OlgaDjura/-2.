/*const video = document.getElementById('source-video');

document.querySelectorAll('.video-slice').forEach((slice, index) => {
    const clone = video.cloneNode(true);

    clone.style.display = 'block';
    clone.style.position = 'absolute';
    clone.style.top = `-${index * 40}px`; // Смещаем видео вверх на высоту каждой "полоски"
    clone.style.left = '0';
    clone.style.width = '100%';
    clone.style.height = 'auto';
    clone.muted = true;
    clone.autoplay = true;
    clone.loop = true;
    clone.playsInline = true;

    slice.style.position = 'relative';
    slice.appendChild(clone);
});*/


const sourceVideo = document.getElementById('source-video');
const slices = document.querySelectorAll('.video-slice');
const sliceHeight = 20; // высота каждой полоски, такая же как в CSS

slices.forEach((slice, index) => {
    const videoClone = sourceVideo.cloneNode(true);

    videoClone.style.position = 'absolute';
    videoClone.style.top = `-${index * sliceHeight}px`;
    videoClone.style.left = '0';
    videoClone.style.width = '200px'; // совпадает с .video-slice
    videoClone.style.height = 'auto';
    videoClone.style.display = 'block';

    videoClone.muted = true;
    videoClone.autoplay = true;
    videoClone.loop = true;
    videoClone.playsInline = true;

    slice.appendChild(videoClone);
});

