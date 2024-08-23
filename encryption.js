const crypto = require('crypto');
const fs = require('fs');

function encryptMessage(message, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return { iv: iv.toString('hex'), encryptedData: encrypted };
}

function encryptImage(imagePath, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

    const input = fs.readFileSync(imagePath);
    const encrypted = Buffer.concat([cipher.update(input), cipher.final()]);

    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

module.exports = { encryptMessage, encryptImage };
