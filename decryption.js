const crypto = require('crypto');
const fs = require('fs');

function decryptMessage(encryptedData, key, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));

    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}

function decryptImage(encryptedData, key, iv, outputPath) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));

    const encryptedBuffer = Buffer.from(encryptedData, 'hex');
    const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);

    fs.writeFileSync(outputPath, decrypted);
}

module.exports = { decryptMessage, decryptImage };
