<template>
  <v-container
    id="requests"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Evenments"
      class="px-5 py-3"
    >
      <v-data-table
        :headers="headers"
        :items="allEvents"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="fillEvent(item)"
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
        <v-row class="text-alighn">
          <v-col
            cols="12"
            md="4"
          >
            <v-btn
              color="success"
              class="align-left mr-0"
              @click="dialog = true"
            >
              Ajouter une evenment
            </v-btn>
          </v-col>
        </v-row>
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
            Ajouter une evenment
          </div>
        </template>

        <v-form @submit.prevent="postEvent">
          <v-container class="py-0">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="title"
                  class="purple-input"
                  label="Titre"
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-datetime-picker
                  v-model="time"
                  v-bind="time"
                  label="Date d'evenment"
                />
              </v-col>

              <v-file-input
                v-model="banner"
                label="Bannier (photo de coverture)"
                truncate-length="15"
              />
              <v-col cols="12">
                <v-textarea
                  v-model="description"
                  class="purple-input"
                  label="Descrepion"
                  value="Text descrptif"
                />
              </v-col>

              <v-col
                cols="12"
                class="text-right"
              >
                <v-btn
                  color="success"
                  class="mr-0"
                  @click="postEvent"
                >
                  Enregistrer
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </base-material-card>
    </v-dialog>
  </v-container>
</template>

<script>
  // import axios from 'axios'
  import moment from 'moment'

  //  import EventService from '../../../../services/events-service'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        dialog: false,
        dialog2: false,
        title: '',
        id: 0,
        time: '',
        banner: '',
        description: '',
        headers: [
          {
            sortable: false,
            text: 'Titre',
            value: 'title',
          },
          {
            sortable: false,
            text: 'Description',
            value: 'descreption',
            align: 'center',
          },
          {
            sortable: false,
            text: 'Date',
            value: 'time',
            align: 'right',
          },
          { text: 'Actions', value: 'actions', sortable: false },

        ],
        evenets: [],
      }
    },
    computed: mapGetters(['allEvents']),

    created () {
      this.fetchEvents()
    },
    methods: {
      ...mapActions(['fetchEvents', 'deleteEvent', 'updateEvent', 'addEvent']),
      postEvent () {
        const date = moment(this.time)
        const eventTime = date.format('YYYY-MM-DDTHH:mm:ss')
        const event = new FormData()
        event.append('title', this.title)
        event.append('banner', this.banner)
        event.append('descreption', this.description)
        event.append('time', eventTime)
        if (this.id > 0) {
          this.updateEvent(this.id, event)
        } else {
          this.addEvent(event)
        }
        this.dialog = false
        this.time = ''
        this.title = ''
        this.banner = ''
        this.description = ''
        this.id = 0
      },
      fillEvent (event) {
        this.dialog = true

        const date = moment(event.time)
        const eventTime = date.format('YYYY-MM-DDTHH:mm')
        this.id = event.id
        this.title = event.title
        this.banner = event.banner
        this.description = event.descreption
        this.time = eventTime
      },
      onDblClick (event) {
        const updEvent = {
          id: event.id,
          title: event.title,
          completed: !event.completed,
        }

        this.updateEvent(updEvent)
      },
      deleteItem (event) {
        this.deleteEvent(event.id)
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
