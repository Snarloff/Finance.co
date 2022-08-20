<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Spent /</span> Create</h4>

    <!-- Basic Layout & Basic with Icons -->
    <div class="row">
      <!-- Basic with Icons -->
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0">Spent wallet</h5>
          </div>
          <div class="card-body">

            <form @submit.prevent="create">
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-icon-default-fullname">Title</label>
                <div class="col-sm-10">
                  <div class="input-group input-group-merge">
                    <span id="basic-icon-default-fullname2" class="input-group-text"><i class="bx bx-pencil"></i></span>
                    <input type="text" class="form-control" id="basic-icon-default-fullname" placeholder="Enter a title"
                      aria-label="Enter a title" aria-describedby="basic-icon-default-fullname2" required
                      v-model="form.title" />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-icon-default-company">Description</label>
                <div class="col-sm-10">
                  <div class="input-group input-group-merge">
                    <span id="basic-icon-default-company2" class="input-group-text"><i
                        class='bx bx-edit-alt'></i></span>
                    <input type="text" id="basic-icon-default-company" class="form-control"
                      placeholder="Enter a description" aria-label="Enter a description"
                      aria-describedby="basic-icon-default-company2" required v-model="form.description" />
                  </div>
                </div>
              </div>

              <vfa-picker v-model="form.icon" :only="['solid']">
                <template v-slot:activator="{ on }">
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="basic-icon-default-email">Icon</label>
                    <div class="col-sm-10">
                      <div class="input-group input-group-merge">
                        <span class="input-group-text"><i class='bx bx-palette'></i></span>

                        <input type="text" id="basic-icon-default-email" class="form-control"
                          placeholder="Select an icon" aria-label="Select an icon"
                          aria-describedby="basic-icon-default-email2" v-model="form.icon" @click="on" required />

                      </div>
                      <div class="form-text">Inside the modal select an icon of your choice</div>
                    </div>
                  </div>
                </template>
              </vfa-picker>

              <div class="row mb-3">
                <label class="col-sm-2 form-label" for="basic-icon-default-phone">Money</label>
                <div class="col-sm-10">
                  <div class="input-group input-group-merge">
                    <span id="basic-icon-default-phone2" class="input-group-text"><i class='bx bx-dollar'></i></span>
                    <input type="number" step="0.01" id="basic-icon-default-phone" class="form-control phone-mask"
                      placeholder="Enter a money" aria-label="Enter a money" minlength="1"
                      aria-describedby="basic-icon-default-phone2" required v-model="form.money" />
                  </div>
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-2 form-label" for="basic-icon-default-phone">Category</label>
                <div class="col-sm-10">
                  <div class="input-group input-group-merge">
                    <span id="basic-icon-default-phone2" class="input-group-text"><i class='bx bx-category'></i></span>


                    <select class="form-select" v-model="form.categoryId">
                      <option v-for="category in categories" :value="category.id">{{ category.title }}</option>
                    </select>


                  </div>
                </div>
              </div>

              <div class="row justify-content-end">
                <div class="col-sm-10">
                  <Button type="submit" class="btn btn-primary">Confirm</Button>
                </div>
              </div>
            </form>

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
      categories: undefined,
      form: {
        title: '',
        subtitle: '',
        money: 0,
        icon: undefined,
        categoryId: '',
      },
    }
  },

  async fetch() {
    const categories = await this.$store.dispatch('category/getCategories')
    this.categories = categories.data.response
  },

  methods: {

    async create() {

      try {

        await this.$store.dispatch('spent/createSpent', { ...this.form })
        this.$router.push('/dashboard/spent')

      } catch (error) {
        console.log(error)
      }
    }

  }

}

</script>