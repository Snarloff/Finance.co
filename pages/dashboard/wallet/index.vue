<template>
  <div class="content-wrapper">

    <div class="container-xxl flex-grow-1 container-p-y">

      <NuxtLink to="/dashboard/wallet/new" type="button" class="btn btn-primary float-end">
        <span class="tf-icons bx bx-plus"></span>&nbsp; Create Wallet
      </NuxtLink>

      <div class="row mb-5 create-button-margin">

        <div class="row mb-5">
          <div class="col-md-6 col-lg-4 mb-3" v-for="wallet in wallets" :key="wallet.id">
            <div class="card">
              <div class="card-header">$ {{ wallet.money }}</div>
              <div class="card-body">
                <h5 class="card-title">{{ wallet.title }}</h5>
                <p class="card-text">
                  {{ wallet.subtitle }}
                </p>

                <hr />

                <div class="text-center">
<<<<<<< HEAD
                  <NuxtLink :to="{ name: 'dashboard-wallet-edit-id', params: { id: wallet.id }}" class="btn btn-primary">Edit</NuxtLink>
=======
                  <NuxtLink :to="{ name: 'dashboard-wallet-edit-id', params: { id: wallet.id } }"
                    class="btn btn-primary">Edit</NuxtLink>
>>>>>>> 59d86ef760aad66be7f30af6ad8d3536f2775c52
                  <a href="javascript:void(0)" class="btn btn-primary">Delete</a>
                  <div class="card-text text-muted mt-4">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

  async asyncData({ store }) {
    const wallets = await store.dispatch('wallet/getWallets')
    return { wallets: wallets.data.response }
  }
}
</script>

<style scoped>
.create-button-margin {
  margin-top: 4rem;
}
</style>