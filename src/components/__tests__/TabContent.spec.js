import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TabContent from "../TabContent.vue";

describe("TabContent", () => {
  it("renders properly", () => {
    const wrapper = mount(TabContent, {
      props: {
        id: "tab",
      },
    });

    expect(wrapper.find("div#tab").exists()).toBeTruthy();
  });

  it("renders the slot properly", () => {
    const wrapper = mount(TabContent, {
      props: {
        id: "tab",
      },
      slots: {
        default: `<div id="slot-content">SLOT CONTENT</div>"`,
      },
    });

    expect(wrapper.find("div#slot-content").exists()).toBeTruthy();
  });

  it("renders an not active tab as default", () => {
    const wrapper = mount(TabContent, {
      props: {
        id: "disabled-tab",
      },
    });

    expect(wrapper.classes("active")).toBe(false);
  });

  it("renders an active tab when passing `isActive` prop as true", () => {
    const wrapper = mount(TabContent, {
      props: {
        id: "active-tab",
        isActive: true,
      },
    });

    expect(wrapper.classes("active")).toBe(true);
  });
});
