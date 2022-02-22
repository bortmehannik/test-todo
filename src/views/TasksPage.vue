<template>
  <h1 class="text-white center" v-if="tasks.lenght === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card" v-for="(task, i) in tasks" :key="i">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :class="'primary'" />
      </h2>
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const tasks = store.getters.getTasks;

    const tasksLenght = computed(() => {
      tasks.reduce((val1, val2, val3) => {
        console.log({val1});
        console.log({val2});
        console.log({val3});
      })
      return true;
    });

    console.log(tasksLenght);

    return {
      tasks,
      tasksLenght
    }
  },
  components: {AppStatus}
}
</script>
