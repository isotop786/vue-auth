<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="title">Sign up</h1>

        <form action="#" @submit.prevent="submit">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Maruf, John"
              v-model="form.name"
              >
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="text"  placeholder="e.g maruf@example.com"
              v-model="form.email">
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password"
              v-model="form.password">
            </div>
          </div>

          <div class="control">
            <button class="button is-primary">Signup</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {

    submit: function () {
      console.log(this.form)
    }
  }
}
</script>

<style global>
  .comp{
    padding: 1.5rem;
    margin: 21px;
    background: #eee;
    color:#555;
  }
</style>
