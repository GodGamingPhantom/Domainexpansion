const video = document.getElementById('video');
const episodeLinks = document.querySelectorAll('.episode-link');

const driveIds = {
	1: '1zYHWMV-rEkCq5XvXRQJOEatke-YpePQx',
	2: '1ZHk2GcsquXpHwoMizjF4hTSCzrKwpNBQ',
	3: '1mXFzpVZty7a2mkLtX17mJQEEIzlOCt1l',
    4: '1SvAkbZL9_7iNtKWlq8KpYdadzAGHte0T',
    5: '1UkzY2CO9S-uR8EYO6draBC5xOdvKd2bi',
    6: '1JseB9v2gHRTqbGbSmrxIbQG0wShz4Zub',
    7: '1jLc8eBRHLIissshfTeBEZbP11nnArKKP',
    8: '1dx2V9QRe_H1sD5xgxSmhrZ5aheoc5_PT',
    9: '199VU5A3kSXnqwIHazMGLb_Iwj7L_EP7x',
    10: '1cMp8TS1l4P1hUFBac35JMUVaPv8VOQyk',
    11: '1b-CCJDwOd6D-oTgO5nZiXb6V28uk4Usi',
    12: '1zlxSKr1bjvp9eqhpNLve_suCHcwncuKT',
    13: '1lvzv3d7bgxqZkJfXgRcFVs6Iya1V05TQ',
    14: '1nyDj9cMTSo8Mk9lUtZvpcYyuEF6i3V8',
    15: '1rmwtovlQQCq_azZ2z7_s2nuLbTrNP4cq',
    16: '1fSGhk4yLrXYR_OiqR0s9YpC03Ckte1iQ',
    17: '1wODeDiqt3oK4oMf9WpHoB1ezA5gMFZj2',
    18: '1rj7kFsZnKogz2m8A_TYt602SSeakG4XE',
    19: '1104GzshWRmLLRAii1qADyiFmklqD3JPZ',
    20: '1R55vEHTIDdNsB2jAssorLmyFuVkmHvSS',
    21: '1zqi8p7x04w0p-O9l0W-HbcB16RL2ziZh',
    22: '1767nQzGDcB1cyLpTsuvlMPCIMorqr2k',
    23: '1p0zq4r1ar5Qd52AbDjrO-tNGbt200UnS',
    24: '1tyvq9hk6hLKTnel0FBeGSaVAVZp1o25W',
};

episodeLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const episode = link.dataset.episode;
		const driveId = driveIds[episode];
		if (driveId) {
			video.src = `https://drive.google.com/file/d/${driveId}/preview`;
		} else {
			alert('Invalid episode selected');
		}
	});
});