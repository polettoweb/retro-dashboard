import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Columns from "@/components/Columns.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Columns.vue", () => {
  let store;
  let state;
  let mutations;

  beforeEach(() => {
    state = {
      columns: [
        {
          title: "Glad",
          color: "#4caf50",
          tasks: []
        },
        {
          title: "Sad",
          color: "#ffeb3b",
          tasks: []
        },
        {
          title: "Mad",
          color: "#f44336",
          tasks: []
        }
      ]
    };
    mutations = {
      setColumns: jest.fn()
    };
    store = new Vuex.Store({
      state,
      mutations
    });
  });

  it("Checks presence of wrapper and single columns", () => {
    const wrapper = shallowMount(Columns, { store, localVue });
    expect(wrapper.classes("columns__container")).toBe(true);

    const singleContainer = wrapper.findAll("div.column__container");
    expect(singleContainer.length).toBe(3);

    expect(wrapper.find("h2").text()).toBe(state.columns[0].title);
  });
});
