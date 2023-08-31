// import { fetchData, sum } from '../services/Services';

const sum = require('../services/Services')
// import axios from 'axios';

// jest.mock('axios');

describe('Lamado Api', () => {
    // it('Llamado exitoso a la api', async () => {
    //     const data = { key: 'value' };
    //     axios.get.mockResolvedValue({ data });

    //     const result = await fetchData();

    //     expect(result).toEqual(data);
    // });

    // it('Llamado con error de la api', async () => {
    //     const errorMessage = 'Network Error';
    //     axios.get.mockRejectedValue(new Error(errorMessage));

    //     await expect(fetchData()).rejects.toThrow(errorMessage);
    // });

    it('1 + 2 es igual a 3 ', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
