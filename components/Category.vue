<template>
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

              <vfa-picker v-model="form.icon" :only="['solid']">
                <template v-slot:activator="{ on }">
                  <label for="emailBasic" class="form-label">Icon</label>

                  <input type="text" id="basic-icon-default-email" class="form-control" placeholder="Select an icon"
                    aria-label="Select an icon" aria-describedby="basic-icon-default-email2" v-model="form.icon"
                    @click="on" required />

                </template>
              </vfa-picker>

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

            <form @submit.prevent="update">
              <Modal :id="'updateCategory' + category.id" title="Update category">

                <template v-slot:body>
                  <div class="row g-2">
                    <div class="col mb-0">
                      <label for="emailBasic" class="form-label">Title</label>
                      <input type="text" id="emailBasic" class="form-control" placeholder="Home"
                        v-model="editForm.title" required />
                    </div>
                    <div class="col mb-0">
                      <label for="dobBasic" class="form-label">Money</label>
                      <input type="number" step="0.01" id="dobBasic" class="form-control" placeholder="$ 999,99"
                        v-model="editForm.money" required />
                    </div>
                  </div>
                  <div class="row g-2 mt-2">
                    <div class="col mb-0">
                      <label for="dobBasic" class="form-label">Wallet</label>

                      <select type="text" id="dobBasic" class="form-control" placeholder="Select an option"
                        v-model="editForm.walletId" required>
                        <option v-for="wallet in wallets" :value="wallet.id">{{ wallet.title }}</option>
                      </select>

                    </div>

                    <div class="col mb-0">

                      <vfa-picker v-model="editForm.icon" :only="['solid']">
                        <template v-slot:activator="{ on }">
                          <label for="emailBasic" class="form-label">Icon</label>

                          <input type="text" id="basic-icon-default-email" class="form-control"
                            placeholder="Select an icon" aria-label="Select an icon"
                            aria-describedby="basic-icon-default-email2" v-model="editForm.icon" @click="on" required />

                        </template>
                      </vfa-picker>

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

                    <a @click="setData(category)" class="dropdown-item" href="javascript:void(0);" type="button" data-bs-toggle="modal"
                      :data-bs-target="'#updateCategory' + category.id">
                      <i class='bx bx-edit text-warning'></i> Edit category
                    </a>

                    <a class="dropdown-item" href="javascript:void(0);" type="button"
                      @click="deleteCategory(category.id)">
                      <i class='bx bx-trash-alt text-danger'></i> Delete category
                    </a>

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
      wallets: undefined,
      form: {
        title: '',
        icon: '',
        money: '',
        walletId: '',
      },
      editForm: {
        id: '',
        title: '',
        icon: '',
        money: '',
        walletId: '',
      },
    }
  },

  props: ['categories'], // categories: {id: '', title: '', money: '', walletId: ''}

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

    },

    async deleteCategory(id) {

      const confirm = window.confirm('Do you really want to delete this Category?')

      if (confirm) {

        try {
          await this.$store.dispatch('category/deleteCategory', id)
          this.categories.splice(this.categories.indexOf(id), 1)
        } catch (error) {
          console.log(error)
        }
      }

    },

    async update() {

      try {
        await this.$store.dispatch('category/updateCategory', { ...this.editForm })
        await this.$nuxt.refresh()
      } catch (error) {
        console.log(error)
      }

    },

    setData(data) {
      this.editForm = {
        id: data.id,
        title: data.title,
        icon: data.icon,
        money: data.money,
        walletId: data.walletId,
      }
    },

  },

}

</script>