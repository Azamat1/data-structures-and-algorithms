import { TextCompressor } from "./TextCompressor"

describe('Message compressor ', () => {
    let message = '';
    let compressor = '';

    beforeEach(() => {
        message = 'Hello!';
        compressor = new TextCompressor(message);
    })

    test('should return correct code table', () => {
        expect(compressor.codeTable).toBeTruthy();
    })

    test('should return correct compressed binary mesage', () => {
        expect(compressor.compressedText).toBe('01001111000001');
    })

    test('should return correct decompressed text mesage', () => {
        expect(compressor.decodeText('01001111000001')).toBe('Hello!');
    })
})