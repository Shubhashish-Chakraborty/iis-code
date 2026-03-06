export const code1 = 
`
def ENCRYPT(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            shift_base = 65 if char.isupper() else 97
            result += chr((ord(char) - shift_base + shift) % 26 + shift_base)
        else:
            result += char
    return result

def DECRYPT(text, shift):
    return ENCRYPT(text, -shift)

text = input("Enter the message: ")
shift = int(input("Enter shift value: "))

encryptedText = ENCRYPT(text, shift)
print(f"{text} -> ENCRYPTED -> {encryptedText}")

decryptedText = DECRYPT(encryptedText, shift)
print(f"{encryptedText} -> DECRYPTED -> {decryptedText}")
`

export const code2 =
`
import string

def generate_matrix(key):
    key = key.upper().replace("J", "I")
    matrix = []
    used = set()

    for char in key:
        if char not in used and char in string.ascii_uppercase:
            matrix.append(char)
            used.add(char)

    for char in string.ascii_uppercase:
        if char not in used and char != "J":
            matrix.append(char)
            used.add(char)

    return [matrix[i:i+5] for i in range(0, 25, 5)]


def prepare_text(text):
    text = text.upper().replace("J", "I")
    text = "".join([c for c in text if c.isalpha()])

    pairs = []
    i = 0

    while i < len(text):
        a = text[i]
        b = text[i+1] if i+1 < len(text) else "X"

        if a == b:
            pairs.append(a + "X")
            i += 1
        else:
            pairs.append(a + b)
            i += 2

    return pairs


def find_position(matrix, char):
    for r in range(5):
        for c in range(5):
            if matrix[r][c] == char:
                return r, c



def encrypt(text, key):
    matrix = generate_matrix(key)
    pairs = prepare_text(text)

    result = ""

    for a, b in pairs:
        r1, c1 = find_position(matrix, a)
        r2, c2 = find_position(matrix, b)

        if r1 == r2:
            result += matrix[r1][(c1+1)%5]
            result += matrix[r2][(c2+1)%5]

        elif c1 == c2:
            result += matrix[(r1+1)%5][c1]
            result += matrix[(r2+1)%5][c2]

        else:
            result += matrix[r1][c2]
            result += matrix[r2][c1]

    return result


text = input("Enter message: ")
key = input("Enter key: ")

cipher = encrypt(text, key)

print("Encrypted Text:", cipher)
`

export const code3 =
`
import numpy as np

def hill_encrypt(message, key):
    message = message.upper().replace(" ", "")

    if len(message) % 2 != 0:
        message += 'X'

    message_vector = [ord(c) - 65 for c in message]

    key_matrix = np.array(key)

    result = ""

    for i in range(0, len(message_vector), 2):
        pair = np.array(message_vector[i:i+2])
        cipher_pair = key_matrix.dot(pair) % 26
        result += chr(cipher_pair[0] + 65)
        result += chr(cipher_pair[1] + 65)

    return result


key = [[3,3],[2,5]]

message = input("Enter message: ")

cipher = hill_encrypt(message, key)

print("Encrypted message:", cipher)
`

export const code4 =
`
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


def mod_inverse(e, phi):
    for d in range(1, phi):
        if (e*d) % phi == 1:
            return d


p = 3
q = 11

n = p * q
phi = (p-1)*(q-1)

e = 7

d = mod_inverse(e, phi)

msg = int(input("Enter message (number): "))

cipher = (msg ** e) % n
print("Encrypted message:", cipher)

plain = (cipher ** d) % n
print("Decrypted message:", plain)
`

export const code5 =
`
def diffie_hellman(p, g, a_private, b_private):
    A_public = pow(g, a_private, p)
    B_public = pow(g, b_private, p)

    key_alice = pow(B_public, a_private, p)
    key_bob = pow(A_public, b_private, p)

    return key_alice, key_bob

ka, kb = diffie_hellman(23, 5, 69, 67)
print(f"Alice's Key: {ka}, Bob's Key: {kb}")
`

export const code6 =
`
.
.
.
.
.
.
.
`