<template>
  <v-container
    id="users"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Liste des Utilisateurs"
      class="px-5 py-3"
    >
      <v-data-table
        :headers="headers"
        :items="allUsers"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="fillUser(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="success"
          class="mr-0"
          @click="dialog = true"
        >
          Ajouter un utilisateur
        </v-btn>
      </v-card-actions>
    </base-material-card>

    <div class="py-3" />
    <v-dialog
      v-model="dialog"
      max-width="50%"
    >
      <base-material-card style="margin-top:50px">
        <template v-slot:heading>
          <div class="display-2 font-weight-light">
            Ajouter un utilisateur
          </div>
        </template>

        <v-form @submit.prevent="postUser">
          <v-container class="py-0">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="FullName"
                  class="purple-input"
                  label="Nom & Prenom"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  label=" Addresse mail"
                  class="purple-input"
                />
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="username"
                  label="User Name"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="password"
                  label="Password"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="tel"
                  label="Téléphone"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="room"
                  label="Chambre"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                class="text-right"
              >
                <button
                  class="btn btn-success"
                >
                  Enregistrer
                </button>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </base-material-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data: () => ({
      dialog: false,
      users: [],
      headers: [
        {
          sortable: false,
          text: 'Client',
          value: 'fullName',
        },
        {
          sortable: false,
          text: 'Chambre',
          value: 'room',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Mail',
          value: 'email',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Téléphone',
          value: 'tel',
          align: 'right',
        },
        { text: 'Actions', value: 'actions', sortable: false },

      ],
      items: [],
      step: 1,
      id: 'no',
      username: '',
      FullName: '',
      name: '',
      email: '',
      password: '',
      tel: '',
      room: '',
      login: '',
      snackSign: false,
      timeout: 0,

    }),
    computed: mapGetters(['allUsers']),

    created () {
      this.fetchUsers()
    },
    methods: {
      ...mapActions(['fetchUsers', 'deleteUser', 'updateUser', 'addUser']),
      postUser () {
        const user = new FormData()
        user.append('FullName', this.FullName)
        user.append('username', this.username)
        user.append('email', this.email)
        user.append('tel', this.tel)
        user.append('room', this.room)
        user.append('password', this.password)
        if (this.id.length > 3) {
          this.updateUser(this.id, user)
        } else {
          this.addUser(user)
        }
        this.dialog = false
        this.time = ''
        this.title = ''
        this.banner = ''
        this.description = ''
        this.id = 'no'
      },
      fillUser (user) {
        this.dialog = true

        this.id = user.id
        this.FullName = user.fullName
        this.username = user.userName
        this.email = user.email
        this.tel = user.tel
        this.room = user.room
        this.password = user.password
      },
      onDblClick (user) {
        const updUser = {
          id: user.id,
          title: user.title,
          completed: !user.completed,
        }

        this.updateUser(updUser)
      },
      deleteItem (user) {
        this.deleteUser(user.id)
      },
    },

  }
</script>
<style lang="css">
.v-dialog{
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}

</style>
