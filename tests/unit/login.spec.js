import chai, { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import login from '@/components/login.vue'
describe("login.vue", () => {
    it('有codeImageUrl', () => {
        const codeImageUrl = 'xxx';
        const wrapper = shallowMount(login, {
            propsData: { codeImageUrl }
        });
        expect(wrapper.html()).to.contain('xxx');
    })
    it('有登录按钮', () => {
        const wrapper = shallowMount(login);
        expect(wrapper.html()).to.contains('button');
    })
    it('登录异步测试', done => {
        const wrapper = shallowMount(login);
        wrapper.find('button').trigger('click')
        wrapper.vm.$nextTick(() => {
            expect(wrapper.html()).to.contain('123')
            done()
        })
    })
})