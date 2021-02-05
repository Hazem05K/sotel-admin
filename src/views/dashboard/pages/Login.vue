<template>
  <v-app>
    <v-snackbar
      :timeout="timeout"
      :value="snackSign"
      color="green"
      absolute
      right
      top
    >
      Lorem ipsum dolor sit amet consectetur.
    </v-snackbar>
    <v-container
      id="signinup-form"
      class="fill-height"
    >
      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <v-col
          cols="12"
          sm="8"
          md="8"
        >
          <v-card class="evelation-12 card">
            <v-window v-model="step">
              <!--SignIn-->
              <v-window-item :value="1">
                <v-row class="">
                  <v-col
                    cols="12"
                    md="8"
                    class="pt-6 pb-6"
                  >
                    <v-card-text>
                      <v-form
                        class="signup-form-form"
                        @submit.prevent="signin"
                      >
                        <h1
                          class="text-center display-1 mb-10"
                          :class="`${bgColor}--text`"
                        >
                          Se Connecter
                        </h1>
                        <v-text-field
                          id="username"
                          v-model="login"
                          label="Email"
                          name="Username"
                          append-icon="person"
                          type="text"
                          :color="bgColor"
                        />
                        <v-text-field
                          id="password"
                          v-model="password"
                          label="Mot de Passe"
                          name="Password"
                          append-icon="lock"
                          type="password"
                          :color="bgColor"
                        />
                        <div class="text-center">
                          <a
                            href="#"
                            class="mt-3 overline no-text-decoration"
                            :class="`${bgColor}--text`"
                            @click="step = 3"
                          >
                            Mot de passe oublié?
                          </a>
                        </div>
                        <div class="text-center mt-6">
                          <v-btn
                            type="submit"
                            large
                            :color="bgColor"
                            dark
                          >
                            Se Connecter
                          </v-btn>
                        </div>
                      </v-form>
                    </v-card-text>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    class="darken-2 vcenter"
                    :class="`${bgColor}`"
                  >
                    <div>
                      <v-card-text :class="`${fgColor}--text`">
                        <h1 class="text-center headline mb-3">
                          Vous n'avez pas de compte?
                        </h1>
                        <h5 class="text-center overline mb-3">
                          Veuillez vous inscrire pour continuer
                        </h5>
                      </v-card-text>
                      <div class="text-center mb-6">
                        <v-btn
                          dark
                          outlined
                          @click="step = 2"
                        >
                          S'inscrire
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <!--SignUp-->
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col
                    cols="12"
                    md="4"
                    class="darken-2 vcenter"
                    :class="`${bgColor}`"
                  >
                    <div>
                      <v-card-text :class="`${fgColor}--text`">
                        <h1 class="text-center headline mb-3">
                          Vous avez déjà un compte?
                        </h1>
                        <h5 class="text-center overline mb-3">
                          Veuillez Se Connecter
                        </h5>
                      </v-card-text>
                      <div class="text-center mb-6">
                        <v-btn
                          dark
                          outlined
                          @click="step = 1"
                        >
                          Se connecter
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    md="8"
                    class=" pt-6 pb-6"
                  >
                    <v-card-text>
                      <h1
                        class="text-center display-1 mb-10"
                        :class="`${bgColor}--text`"
                      >
                        S'inscrire
                      </h1>
                      <v-form
                        class="signup-form-form"
                        @submit.prevent="signup"
                      >
                        <v-text-field
                          id="username"
                          v-model="username"
                          label="Nom complete"
                          name="username"
                          append-icon="person"
                          type="text"
                        />
                        <v-text-field
                          id="email"
                          v-model="email"
                          label="Address Mail"
                          name="email"
                          append-icon="email"
                          type="email"
                        />
                        <v-text-field
                          id="phone"
                          v-model="phone"
                          label="Nnuméro de Téléphone"
                          name="phone"
                          append-icon="phone"
                          type="tel"
                        />
                        <v-select
                          id="country"
                          v-model="country"
                          label="Pays"
                          :items="countries"
                          name="countryId"
                          append-icon="language"
                          type="tel"
                        />
                        <v-text-field
                          id="password"
                          v-model="password"
                          label="Mot de Passe"
                          name="password"
                          append-icon="lock"
                          type="password"
                        />
                        <div class="text-center mt-6">
                          <v-btn
                            type="submit"
                            large
                            :color="bgColor"
                            dark
                          >
                            S'inscrire
                          </v-btn>
                        </div>
                      </v-form>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
              <!--PW Rest-->
              <v-window-item :value="3">
                <v-row class="fill-height">
                  <v-col
                    cols="12"
                    md="4"
                    class="darken-2 vcenter"
                    :class="`${bgColor}`"
                  >
                    <div>
                      <v-card-text
                        :class="`${fgColor}--text`"
                      >
                        <h1 class="text-center headline mb-3">
                          Vous avez déjà un compte?
                        </h1>
                        <h5 class="text-center overline mb-3">
                          Veuillez Se Connecter
                        </h5>
                      </v-card-text>
                      <div class="text-center mb-6">
                        <v-btn
                          dark
                          @click="step = 1"
                        >
                          Se Connecter
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    md="8"
                    class="pt-6 pb-6"
                  >
                    <v-card-text>
                      <v-form class="signup-form-form">
                        <h1
                          class="text-center display-1 mb-10"
                          :class="`${bgColor}--text`"
                        >
                          Réinitialiser le mot de passe
                        </h1>
                        <v-text-field
                          id="login"
                          v-model="login"
                          label="Nom de l'utilisateur / Mail"
                          name="login"
                          append-icon="person / email"
                          type="text"
                          :color="bgColor"
                          class="v-input__icon--double"
                        />
                        <div class="text-center mt-6">
                          <v-btn
                            large
                            :color="bgColor"
                            dark
                          >
                            Réinitialiser le mot de passe
                          </v-btn>
                        </div>
                      </v-form>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Signupform',
    components: {

    },
    props: {
      source: {
        type: String,
        default: '',
      },
      bgColor: {
        type: String,
        default: 'blue',
      },
      fgColor: {
        type: String,
        default: 'white',
      },
    },
    data: () => ({
      countries: [1, 2, 3],
      step: 1,
      username: '',
      country: '',
      email: '',
      password: '',
      phone: '',
      login: '',
      snackSign: false,
      timeout: 0,
      certif: [
        {
          id: 1,
          title: 'PERSO',
        },
        {
          id: 2,
          title: 'PRO',
        },
        {
          id: 3,
          title: 'SEAL',
        },
      ],
    }),
    methods: {
      async signup () {
        var formData = new FormData()
        formData.append('username', this.username)
        formData.append('CountryId', this.country)
        formData.append('email', this.email)
        formData.append('password', this.password)

        axios.post('https://localhost:5001/api/Authenticate/register', formData, {
          headers: {
            Accept: '*/*',
            'Content-Type': 'multipart/form-data',
          },
        },
        )
          .then(function (response) {
            if (response.status === 'Success') {
              this.timeout = 3000
              this.snackSign = true
              console.log('Success')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },

  }
</script>
<style scoped lang="scss">
.container {
 }

.v-input__icon--double .v-input__icon {
  margin-left: -4.25rem !important;
}
a.no-text-decoration {
  text-decoration: none;
}
#signinup-form {
  max-width: 100%;
  background-size: cover;
      background-image: url(https://www.neoledge.com/wp-content/uploads/2020/06/12.png);
}

.signup-form-form {
  max-width: 23rem;
  margin: 0 auto;
}
.card {
  overflow: hidden;
}
.vcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
