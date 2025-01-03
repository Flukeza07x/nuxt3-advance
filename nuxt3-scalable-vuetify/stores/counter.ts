// stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {

    // define the shape of the state
    state: () => {
        return { count: 0 }
    },

    // could also be defined as
    // state:() => ({ count: 0 }),

    // define the actions that modify the state.
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
})
