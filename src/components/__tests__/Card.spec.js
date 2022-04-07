import { describe, it, expect, beforeEach } from "vitest";

import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe("Card", () => {
    const titleContent = "My title"
    const subtitleContent = "Subtitle!"
    const textContent = "This is a text"

    it("renders properly", () => {
        const wrapper = mount(Card, {
            props: {
                title: titleContent,
                subtitle: subtitleContent,
                text: textContent
            }
        })

        const title = wrapper.find('h5.card-title').text()
        const subtitle = wrapper.find('h6.card-subtitle').text()
        const text = wrapper.find('p.card-text').text()

        expect(title).toBe(titleContent)
        expect(subtitle).toBe(subtitleContent)
        expect(text).toBe(textContent)
    })
})
