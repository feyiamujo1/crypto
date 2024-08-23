const crypto = require('crypto');
const { encryptMessage, encryptImage } = require('./encryption');
const { decryptMessage, decryptImage } = require('./decryption');

// Key generation (use the same key for both encryption and decryption)
const key = crypto.randomBytes(32);

// Example usage for message encryption/decryption
const message = "The price of bag of rice should be double. Border shut this morning";
const encryptedMessage = encryptMessage(message, key);
console.log(`Encrypted Message: ${encryptedMessage.encryptedData}`);
const decryptedMessage = decryptMessage(encryptedMessage.encryptedData, key, encryptedMessage.iv);
console.log(`Decrypted Message: ${decryptedMessage}`);

// Example usage for image encryption/decryption
const imagePath = './sample-image.jpeg';
const outputPath = 'decrypted_image.jpg';
const encryptedImage = encryptImage(imagePath, key);
decryptImage(encryptedImage.encryptedData, key, encryptedImage.iv, outputPath);
console.log('Image encryption and decryption completed.');
