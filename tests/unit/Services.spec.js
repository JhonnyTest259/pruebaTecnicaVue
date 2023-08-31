import flushPromises from "flush-promises";
import { shallowMount } from '@vue/test-utils';
import Services from '@/services/Services.vue'

jest.mock("axios", () => ({
  get: () => Promise.resolve({
    data: {
      "page": 1,
      "results": [],
      "total_pages": 1,
      "total_results": 1
    }
  })
}));

describe("Services", () => {
  //unit test para probar el llamado a la api
  it("mock para el llamado de la api", async () => {
    var wrapper = shallowMount(Services);
    await flushPromises();
    // Assert
    const expectedData = {
      "page": 1,
      "results": [],
      "total_pages": 1,
      "total_results": 1
    };
    expect(wrapper.vm.movies).toEqual(expectedData)
  });
});