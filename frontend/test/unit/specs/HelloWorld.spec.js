import Vue from 'vue';
import TodoList from '@/components/TodoList.vue';

describe('TodoList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TodoList);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.completed p').textContent)
      .toContain('Completed Tasks:');
  });
});
