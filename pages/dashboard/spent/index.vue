<template>
  <div class="container-xxl flex-grow-1 container-p-y">

    <div class="row d-flex justify-content-between">
      <!-- Order Statistics -->
      <div class="col-md-9 col-lg-7 col-xl-7 order-0 mb-4">
        <div class="card h-100">
          <div class="card-header d-flex align-items-center justify-content-between pb-0">
            <div class="card-title mb-0">
              <h5 class="m-0 me-2">Spents Statistics</h5>
              <small class="text-muted">42.82k Total Sales</small>
            </div>
            <div class="dropdown">
              <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i class="bx bx-dots-vertical-rounded"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                <a class="dropdown-item" href="javascript:void(0);">Select All</a>
                <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a class="dropdown-item" href="javascript:void(0);">Share</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex flex-column align-items-center gap-1">
                <h2 class="mb-2">8,258</h2>
                <span>Total Orders</span>
              </div>
              <div id="orderStatisticsChart"></div>
            </div>
            <ul class="p-0 m-0">
              <li class="d-flex mb-4 pb-1">
                <div class="avatar flex-shrink-0 me-3">
                  <span class="avatar-initial rounded bg-label-primary"><i class="bx bx-mobile-alt"></i></span>
                </div>
                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div class="me-2">
                    <h6 class="mb-0">Electronic</h6>
                    <small class="text-muted">Mobile, Earbuds, TV</small>
                  </div>
                  <div class="user-progress">
                    <small class="fw-semibold">82.5k</small>
                  </div>
                </div>
              </li>
              <li class="d-flex mb-4 pb-1">
                <div class="avatar flex-shrink-0 me-3">
                  <span class="avatar-initial rounded bg-label-success"><i class="bx bx-closet"></i></span>
                </div>
                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div class="me-2">
                    <h6 class="mb-0">Fashion</h6>
                    <small class="text-muted">T-shirt, Jeans, Shoes</small>
                  </div>
                  <div class="user-progress">
                    <small class="fw-semibold">23.8k</small>
                  </div>
                </div>
              </li>
              <li class="d-flex mb-4 pb-1">
                <div class="avatar flex-shrink-0 me-3">
                  <span class="avatar-initial rounded bg-label-info"><i class="bx bx-home-alt"></i></span>
                </div>
                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div class="me-2">
                    <h6 class="mb-0">Decor</h6>
                    <small class="text-muted">Fine Art, Dining</small>
                  </div>
                  <div class="user-progress">
                    <small class="fw-semibold">849k</small>
                  </div>
                </div>
              </li>
              <li class="d-flex">
                <div class="avatar flex-shrink-0 me-3">
                  <span class="avatar-initial rounded bg-label-secondary"><i class="bx bx-football"></i></span>
                </div>
                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div class="me-2">
                    <h6 class="mb-0">Sports</h6>
                    <small class="text-muted">Football, Cricket Kit</small>
                  </div>
                  <div class="user-progress">
                    <small class="fw-semibold">99</small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Transactions -->
      <div class="col-md-7 col-lg-5 order-2 mb-4">

        <!-- Modal -->
        <form @submit.prevent="create">
          <Modal id="createCategory" title="Create category">

            <template v-slot:body>
              <div class="row g-2">
                <div class="col mb-0">
                  <label for="emailBasic" class="form-label">Title</label>
                  <input type="text" id="emailBasic" class="form-control" placeholder="Home" v-model="form.title"
                    required />
                </div>
                <div class="col mb-0">
                  <label for="dobBasic" class="form-label">Money</label>
                  <input type="number" step="0.01" id="dobBasic" class="form-control" placeholder="$ 999,99"
                    v-model="form.money" required />
                </div>
              </div>
              <div class="row g-2 mt-2">
                <div class="col mb-0">
                  <label for="dobBasic" class="form-label">Wallet</label>

                  <select type="text" id="dobBasic" class="form-control" placeholder="Select an option"
                    v-model="form.walletId" required>
                    <option v-for="wallet in wallets" :value="wallet.id">{{ wallet.title }}</option>
                  </select>

                </div>
                <div class="col mb-0">
                  <label for="emailBasic" class="form-label">Icon</label>
                  <input type="text" id="emailBasic" class="form-control" placeholder="home" v-model="form.icon"
                    required />
                </div>
              </div>
            </template>

            <template v-slot:footer>
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </template>

          </Modal>
        </form>

        <div class="card h-100">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="card-title m-0 me-2">Categories</h5>
            <div class="dropdown">
              <button class="btn p-0" type="button" id="transactionID" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i class="bx bx-dots-vertical-rounded"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">

                <a class="dropdown-item" href="javascript:void(0);" type="button" data-bs-toggle="modal"
                  data-bs-target="#createCategory">Create category</a>

              </div>
            </div>
          </div>

          <div class="card-body">

            <ul class="p-0 m-0">
              <li class="d-flex mb-4 pb-1" v-for="category in categories" :key="category.id">
                <div class="avatar flex-shrink-0 me-3">
                  <img src="~/assets/img/icons/unicons/paypal.png" alt="User" class="rounded" />
                </div>
                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div class="me-2">
                    <small class="text-muted d-block mb-1">{{ category.wallet.title }}</small>
                    <h6 class="mb-0">{{ category.title }}</h6>
                  </div>
                  <div class="user-progress d-flex align-items-center gap-1">
                    <h6 class="mb-0">+{{ category.money }}</h6>
                    <span class="text-muted">USD</span>
                    <div class="dropdown ms-1">
                      <button class="btn p-0" type="button" id="transactionID" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">

                        <a class="dropdown-item" href="javascript:void(0);" type="button" data-bs-toggle="modal"
                          data-bs-target="#createCategory"><i class='bx bx-edit text-warning'></i> Edit category</a>
                        <a class="dropdown-item" href="javascript:void(0);" type="button" data-bs-toggle="modal"
                          data-bs-target="#createCategory"><i class='bx bx-trash-alt text-danger'></i> Delete category</a>

                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      wallets: undefined,
      form: {
        title: '',
        icon: '',
        money: '',
        walletId: '',
      },
    }
  },

  async asyncData({ store }) {
    const categories = await store.dispatch('category/getCategories')
    return { categories: categories.data.response }
  },

  async fetch() {
    const wallets = await this.$store.dispatch('wallet/getWallets')
    this.wallets = wallets.data.response
  },

  methods: {
    async create() {

      try {

        await this.$store.dispatch('category/createCategory', { ...this.form })
        await this.$nuxt.refresh()

      } catch (error) {
        console.log(error)
      }

    }

  }

}

</script>