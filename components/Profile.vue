<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card mb-4">
        <h5 class="card-header">Profile Details</h5>
        <!-- Account -->
        <div class="card-body">
          <div class="alert alert-danger" role="alert" v-show="message">
            {{ message }}
          </div>
          <div class="d-flex align-items-start align-items-sm-center gap-4">
            <img :src="form.avatar" alt="user-avatar" class="d-block rounded" height="100" width="100"
              id="uploadedAvatar" />
            <div class="button-wrapper">

              <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                <span class="d-none d-sm-block">Upload new photo</span>
                <i class="bx bx-upload d-block d-sm-none"></i>
                <input @change="onFileChange" type="file" id="upload" class="account-file-input" hidden
                  accept="image/png, image/jpeg" />
              </label>
              <button type="button" class="btn btn-outline-secondary account-image-reset mb-4">
                <i class="bx bx-reset d-block d-sm-none"></i>
                <span class="d-none d-sm-block">Reset</span>
              </button>

              <p class="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </div>
        </div>

        <div class="card-body">
          <form id="formAccountSettings" @submit.prevent="editUser">
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="firstName" class="form-label">Name</label>
                <input class="form-control" type="text" id="firstName" name="firstName" v-model="form.name" autofocus />
              </div>
              <div class="mb-3 col-md-6">
                <label for="lastName" class="form-label">Salary</label>
                <input class="form-control" type="number" step="0.01" name="lastName" id="lastName"
                  v-model="form.salary" />
              </div>
              <div class="mb-3 col-md-6">
                <label for="email" class="form-label">E-mail</label>
                <input class="form-control" type="text" id="email" name="email" v-model="form.email"
                  placeholder="finance@example.com" />
              </div>

            </div>
            <div class="mt-2">
              <button type="submit" class="btn btn-primary me-2">Save changes</button>
              <button type="reset" class="btn btn-outline-secondary">Cancel</button>
            </div>
          </form>
        </div>
        <!-- /Account -->
      </div>
      <div class="card">
        <h5 class="card-header">Delete Account</h5>
        <div class="card-body">
          <div class="mb-3 col-12 mb-0">
            <div class="alert alert-warning">
              <h6 class="alert-heading fw-bold mb-1">Are you sure you want to delete your account?</h6>
              <p class="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
          </div>
          <form id="formAccountDeactivation" onsubmit="return false">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" name="accountActivation" id="accountActivation" />
              <label class="form-check-label" for="accountActivation">I confirm my account deactivation</label>
            </div>
            <button type="submit" class="btn btn-danger deactivate-account">Deactivate Account</button>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {

  data() {
    return {
      message: '',
      form: {
        name: '',
        email: '',
        salary: '',
        avatar: ''
      }
    }
  },

  computed: {
    ...mapGetters(['loggedInUser']),
  },

  methods: {

    async editUser() {
      try {
        await this.$store.dispatch('account/editAccount', this.form) // edit user
        this.$toast.info('Account updated successfully')
      } catch (error) {
        this.$toast.error(error)
      }
    },

    onFileChange(e) {

      const allowedFiles = ['image/jpeg', 'image/jpg', 'image/png'] // allowed file types
      const file = e.target.files[0]

      if (!allowedFiles.includes(file.type)) {
        this.$toast.info('Please upload a valid image file (JPG, PNG)');
        return
      }

      if (file.size > 1024 * 1024 * 1) {
        this.$toast.info('Please upload an image less than 1MB') // error message
        return
      }

      this.form.avatar = file // this is the file that is uploaded
      this.onUploadFile() // upload file

    },

    async onUploadFile() {

      const formData = new FormData() // create new form data

      try {

        formData.append('file', this.form.avatar) // append file to form data
        await this.$store.dispatch('account/uploadAvatar', formData) // upload file

        this.$toast.info('Avatar successfully uploaded') // success message
        this.form.avatar = URL.createObjectURL(this.form.avatar) // preview without refreshing

      } catch (error) {
        this.$toast.error(error)
      }

    }

  },

  mounted() { // get user data
    this.form.name = this.loggedInUser.name
    this.form.email = this.loggedInUser.email
    this.form.salary = this.loggedInUser.salary
    this.form.avatar = String(process.env.baseUrl).concat('/uploads/') + this.loggedInUser.avatar
  },

}

</script>