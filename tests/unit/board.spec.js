import { shallowMount } from "@vue/test-utils";
import Board from "@/components/Board.vue";

describe("Board.vue", () => {
  it("renders props title when passed", () => {
    const title = "Test title";
    const wrapper = shallowMount(Board, {
      propsData: { title }
    });
    expect(wrapper.text()).toContain(title);
  });
});
