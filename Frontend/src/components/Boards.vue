<template>
  <v-main>
      <v-container fluid>
          <h1>Hi</h1>
          <div v-for="board in boards" :key=board.board_id>
              <h1>{{board.board_title}}</h1>
          </div>
      </v-container>
  </v-main>
</template>

<script>
import BoardsService from '@/services/BoardsService'
export default {
    data () {
        return {
            boards: null
        }
    },
    async mounted () {
        this.boards = (await BoardsService.index()).data
    }
}
</script>

<style>

</style>