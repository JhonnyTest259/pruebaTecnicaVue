import { fetchData } from './Services';
import axios from 'axios';

jest.mock('axios');

describe('Lamado Api', () => {
    it('Llamado exitoso a la api', async () => {
        const data = { key: 'value' };
        axios.get.mockResolvedValue({ data });

        const result = await fetchData();

        expect(result).toEqual(data);
    });

    it('Llamado con error de la api', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValue(new Error(errorMessage));

        await expect(fetchData()).rejects.toThrow(errorMessage);
    });
});
