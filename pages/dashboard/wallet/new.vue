<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Wallet/</span> Create</h4>

    <!-- Basic Layout & Basic with Icons -->
    <div class="row">
      <!-- Basic with Icons -->
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0">Create wallet</h5>
          </div>
          <div class="card-body">
            
            <form @submit.prevent="create">
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-icon-default-fullname">Title</label>
                <div class="col-sm-10">
                  <div class="input-group input-group-merge">
                    <span id="basic-icon-default-fullname2" class="input-group-text"><i class="bx bx-pencil"></i></span>
                    <input type="text" class="form-control" id="basic-icon-default-fullname" placeholder="Enter a title"
                      aria-label="Enter a title" aria-describedby="basic-icon-default-fullname2" v-model="form.title" required />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-icon-default-company">Subtitle</label>
                <div class="col-sm-10">
                  <div class="input-group input-group-merge">
                    <span id="basic-icon-default-company2" class="input-group-text"><i
                        class='bx bx-edit-alt'></i></span>
                    <input type="text" id="basic-icon-default-company" class="form-control"
                      placeholder="Enter a subtitle" aria-label="Enter a subtitle"
                      aria-describedby="basic-icon-default-company2" v-model="form.subtitle" required />
                  </div>
                </div>
              </div>

              <vfa-picker v-model="icon" :only="['solid']">
                <template v-slot:activator="{ on }">
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" for="basic-icon-default-email">Icon</label>
                    <div class="col-sm-10">
                      <div class="input-group input-group-merge">
                        <span class="input-group-text"><i class='bx bx-palette'></i></span>
                        <input type="text" id="basic-icon-default-email" class="form-control" placeholder="Select an icon"
                          aria-label="Select an icon" aria-describedby="basic-icon-default-email2" v-model="icon"
                          @click="on" required />
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
                      aria-describedby="basic-icon-default-phone2" v-model="form.money" required />
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
      icon: undefined,
      form: {
        title: '',
        subtitle: '',
        money: 0
      },
    }
  },

  methods: {

    async create() {
      
      try {
        
        await this.$store.dispatch('wallet/createWallet', { ...this.form, icon: this.icon })
        this.$router.push('/dashboard/wallet')

      } catch (error) {
        console.log(error)
      }

    }
  }
    
    
}

</script>