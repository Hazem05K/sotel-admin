<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="info"
          icon="mdi-account-outline"
          title="Utilisateurs"
          value="245"
          sub-icon="mdi-clock"
          sub-text="Dernier Entretient : Il y a 5 jours"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="primary"
          icon="mdi-poll"
          title="PERSONNEL"
          value="521"
          sub-icon="mdi-clock"
          sub-text="Dernier Demande : Il y a 5 jours"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-store"
          title="PRO"
          value="291"
          sub-icon="mdi-clock"
          sub-text="Dernier Demande : Il y a 5 jours"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          icon="mdi-apps"
          title="SEAL"
          value="184"
          sub-icon="mdi-clock"
          sub-text="Dernier Demande : Il y a 5 jours"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          color="warning"
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Demandes en urgence
            </div>

            <div class="subtitle-1 font-weight-light" />
          </template>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            />
          </v-card-text>
        </base-material-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          color="warning"
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Demandes en urgence
            </div>

            <div class="subtitle-1 font-weight-light" />
          </template>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="data"
            />
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <base-material-card class="px-5 py-3">
          <template v-slot:heading>
            <v-tabs
              v-model="tabs"
              background-color="transparent"
              slider-color="white"
            >
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              >Entretient:</span>
              <v-tab class="mr-3">
                <v-icon class="mr-2">
                  mdi-poll
                </v-icon>
                Perso
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">
                  mdi-store
                </v-icon>
                Pro
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">
                  mdi-clock
                </v-icon>
                SEAL
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-items
            v-model="tabs"
            class="transparent"
          >
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-card-text>
                <template v-for="(task, i) in tasks[tabs]">
                  <v-row
                    :key="i"
                    align="center"
                  >
                    <v-col cols="1">
                      <div
                        class="font-weight-light"
                        v-text="task.ref"
                      />
                    </v-col>

                    <v-col cols="9">
                      <div
                        class="font-weight-light"
                        v-text="task.text"
                      />
                    </v-col>

                    <v-col
                      cols="2"
                      class="text-right"
                    >
                      <v-icon class="mx-1">
                        mdi-pencil
                      </v-icon>
                      <v-icon
                        color="error"
                        class="mx-1"
                      >
                        mdi-close
                      </v-icon>
                    </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </base-material-card>
      </v-col>
    </v-row>
    {{ info }}
  </v-container>
</template>

<script>
  const axios = require('axios')

  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        info: null,
        headers: [
          {
            sortable: false,
            text: 'Utilisateur',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Type',
            value: 'Type',
            align: 'center',
          },
          {
            sortable: false,
            text: 'Date de dépôt',
            value: 'date',
            align: 'right',
          },
        ],
        items: [
          {
            name: 'Dakota Rice',
            Type: 'PRO',
            date: '12-05-2020',
          },
          {
            name: 'Minerva Hooper',
            Type: 'SEAL',
            date: '12-05-2020',
          },
          {
            name: 'Minerva Rice',
            Type: 'PERSO',
            date: '12-05-2020',
          },
        ],
        data: [
          {
            name: 'Dakota Rice',
            Type: 'PRO',
            date: '12-05-2020',
          },
          {
            name: 'Minerva Hooper',
            Type: 'SEAL',
            date: '12-05-2020',
          },
          {
            name: 'Minerva Rice',
            Type: 'PERSO',
            date: '12-05-2020',
          },
        ],
        tabs: 0,
        tasks: {
          0: [
            {
              text: 'De 17h à 18h avec Dakota Rice',
              Ref: '5775',
            },
            {
              text: 'De 17h à 18h avec Minerva Hooper',
              Ref: '5775',
            },
          ],
          1: [
            {
              text: 'De 17h à 18h avec Minerva Hooper',
            },
            {
              text: 'De 17h à 18h avec Dakota Rice',
            },
          ],
          2: [
            {
              text: 'De 17h à 18h avec Dakota Rice',
            },
            {
              text: 'De 17h à 18h avec Dakota Rice',
            },
            {
              text: 'De 17h à 18h avec Dakota Rice"',
            },
          ],
        },
        list: {
          0: false,
          1: false,
          2: false,
        },
      }
    },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>
