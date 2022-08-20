<template>
  <div class="col-md-9 col-lg-7 col-xl-7 order-0 mb-4">
    <div class="card h-100">
      <div class="card-header d-flex align-items-center justify-content-between pb-0">
        <div class="card-title mb-4">
          <h5 class="m-0 me-2">Spents Statistics</h5>
        </div>
        <div class="dropdown">
          <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="bx bx-dots-vertical-rounded"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
            <NuxtLink class="dropdown-item" to="/dashboard/spent/new">Create spent</NuxtLink>
            <a class="dropdown-item" href="javascript:void(0);" @click="$nuxt.refresh()">Refresh data</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">

          <div class="col-md-6">
            <h2 :class="'mb-4 ' + [exceeded ? 'text-danger' : '']">
              $ {{ !spents.length == 0 ? spentTotal : 0 }}
            </h2>
          </div>

          <div id="orderStatisticsChart"></div>

        </div>
        <ul class="p-0 m-0">

          <p v-if="$fetchState.pending">Fetching spents...</p>

          <div class="alert alert-danger alert-dismissible" role="alert" v-show="exceeded">
            You have <strong>exceeded</strong> your category spending <strong>limit!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <li class="mb-2 pb-1 w-100 d-block" v-if="spents.length == 0">
            <div class="alert alert-primary" role="alert"><strong>After creating</strong> the category, <strong>click
                on</strong> any category in the menu on the side!
            </div>
          </li>

          <li class="d-flex mb-4 pb-1" v-for="spent in spents" :key="spent.id" v-else>

            <div class="avatar flex-shrink-0 me-3">
              <span class="avatar-initial rounded bg-label-primary"><i class="bx bx-mobile-alt"></i></span>
            </div>

            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
              <div class="me-2">
                <h6 class="mb-0">{{ spent.title }}</h6>
                <small class="text-muted">{{ spent.createdAt | formatDate }}</small>
              </div>
              <div class="user-progress d-flex align-items-center gap-1">
                <small class="fw-semibold me-1">$ {{ spent.money }}</small>
                <div class="dropdown">
                  <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="bx bx-dots-vertical-rounded"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                    <NuxtLink class="dropdown-item" :to="{ name: 'dashboard-spent-edit-id', params: { id: spent.id } }">
                      <i class='bx bx-edit text-warning'></i> Edit spent
                    </NuxtLink>
                    <a class="dropdown-item" href="javascript:void(0);" @click="deleteSpent(spent.id)"><i class='bx bx-trash-alt text-danger'></i>
                      Delete data</a>
                  </div>
                </div>
              </div>

            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      spents: [], // Recebe os dados do banco de dados, caso não tenha nenhum, ele retorna um array vazio
      tSpent: 0,
      catId: this.$route.query.categoryId
    }
  },

  props: ['categories'],

  watch: {
    '$route.query.categoryId': { // Evento
      handler() { // Handler é a função que será executada quando o valor do evento for alterado
        this.$fetch() // Atualiza a página
      },
      deep: true // Qualquer alteração no valor do evento será observada
    }
  },

  computed: {

    spentTotal() {
      return this.spents.reduce((total, spent) => {
        return total + Number(spent.money)
      }, 0)
    },

    exceeded() {
      if (this.catId != undefined) {
        const categoryFiltered = this.categories.filter(category => category.id == this.catId)[0]
        return true ? this.spentTotal > categoryFiltered.money : false
      }
    }
  },

  methods: {
    async deleteSpent(id) {

      const confirm = window.confirm('Do you really want to delete this Spent?')

      if (confirm) {

        try {
          await this.$store.dispatch('spent/deleteSpent', id)
          this.$nuxt.refresh()
        } catch (error) {
          console.log(error)
        }
      }
    }
  },

  async fetch() {
    if (this.$route.query.categoryId) {
      const spents = await this.$store.dispatch('spent/getSpents', { categoryId: this.$route.query.categoryId })
      this.spents = spents.data.response
    }
  }

}
</script>