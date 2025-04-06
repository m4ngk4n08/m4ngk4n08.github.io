import { Database } from './database.js';

function checkKey(key) {
    // check if key is empty
    const ckey = key.trim();
    if (!ckey) {
        return;
    }

    try {
        const encryptedKey = encryptKey(ckey);
        const res = Database.execute("select * from encrypted_keys where key = ?", [encryptedKey]);
        
        if (res.length <= 0) {
            document.getElementById("section-result").innerHTML = "Key not found";
            return;
        }

        if (res[0].values[0][2] == "vault") {
            document.getElementById("section-result").innerHTML = "Congratulations! You've cracked the vault and found the heirloom inside the vault. Diddleworths family is very grateful for your help, they will now gave you a reward and moved on in their lives because that's how life works. You can now also move on in your life and forget about this case. Good luck! <br/> <br/> ps: Sorry for wasting your time.";
            return;
        }

        Database.execute("update encrypted_keys set decrypted = 1 where key = ?", [encryptedKey]);
        document.getElementById("section-result").innerHTML = `${res[0].values[0][2]} are decrypted!`;
    } catch (error) {
        console.error("Error executing SQL query:", error);
        document.getElementById("section-result").innerHTML = "Error: " + error.message;
    }
}

/* 
    encryptKey() are used to encrypt and decrypt the key
    they are based on the XOR operation
*/
function encryptKey(key) {
    var c = '';
    const input = 'whodunnitone';
    while (key.length < input.length) {
        key += key;    
    }

    for (var i = 0; i < input.length; i++) {
        var val1 = input[i].charCodeAt(0);
        var val2 = key[i].charCodeAt(0);

        var xorVal = val1 ^ val2;
        var xorValAsHexStr = xorVal.toString(16);

        if (xorValAsHexStr.length < 2) {
            xorValAsHexStr = "0" + xorValAsHexStr;
        }

        c += xorValAsHexStr;
    }

    return c;
}

// Export the functions
export { checkKey, encryptKey };
