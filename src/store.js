import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            tasks: [
                {
                    title: 'Таск 1',
                    date: '13.01.2020',
                    status: 'active'
                },
                {
                    title: 'Таск 2',
                    date: '13.01.2021',
                    status: 'active'
                },
                {
                    title: 'Таск 3',
                    date: '13.01.2022',
                    status: 'active'
                }
            ]
        }
    },
    actions: {},
    mutation: {},
    getters: {
        getTasks(state) {
            return state.tasks;
        }
    }
});