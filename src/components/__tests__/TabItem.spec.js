import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TabItem from "../TabItem.vue";

describe("TabItem", () => {
  it("renders properly", () => {
    const wrapper = mount(TabItem, {
      props: {
        contentId: "content-id",
        tabTitle: "My tab",
      },
    });

    expect(wrapper.find("li.nav-item").exists()).toBeTruthy();
  });

  it("renders the title properly", () => {
    const wrapper = mount(TabItem, {
      props: {
        contentId: "tab-id",
        tabTitle: "My tab",
      },
    });

    expect(wrapper.find("button").text()).toBe("My tab");
  });

  it("renders an not active tab as default", () => {
    const wrapper = mount(TabItem, {
      props: {
        id: "desactive-tab",
      },
    });

    expect(wrapper.classes("active")).toBe(false);
  });

  it("renders an active tab item when passing `isActive` prop as true", () => {
    const wrapper = mount(TabItem, {
      props: {
        id: "active-tab",
        isActive: true,
      },
    });

    expect(wrapper.find("button").classes("active")).toBe(true);
  });
});
