<template>
  <v-container
    id="requests"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Liste des demmandes"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              Utilisateur
            </th>
            <th class="primary--text">
              Type
            </th>
            <th class="primary--text">
              Date de dépôt
            </th>
            <th class="primary--text">
              Etat
            </th>
            <th class="text-right primary--text">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dakota Rice</td>
            <td>SEAL</td>
            <td>12-05-2020</td>
            <td color="success">
              Accepter
            </td>
            <td class="text-right">
              <v-icon
                color="transprant"
                default
                rounded
                @click="dialog = true"
              >
                mdi-account-search-outline
              </v-icon>
              <v-icon
                color="error"
                class="mx-1"
              >
                mdi-close
              </v-icon>
            </td>
          </tr>
          <tr>
            <td>Dakota Rice</td>
            <td>Pro</td>
            <td>12-05-2020</td>
            <td color="success">
              En cours
            </td>
            <td class="text-right">
              <v-icon
                color="transprant"
                default
                rounded
                @click="dialog = true"
              >
                mdi-account-search-outline
              </v-icon>
              <v-icon
                color="error"
                class="mx-1"
              >
                mdi-close
              </v-icon>
            </td>
          </tr>
          <tr>
            <td>Dakota Rice</td>
            <td>Pro</td>
            <td>12-05-2020</td>
            <td color="success">
              Accepter
            </td>
            <td class="text-right">
              <v-icon
                color="transprant"
                default
                rounded
                @click="dialog = true"
              >
                mdi-account-search-outline
              </v-icon>
              <v-icon
                color="error"
                class="mx-1"
              >
                mdi-close
              </v-icon>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <v-dialog
      v-model="dialog"
      max-width="50%"
    >
      <base-material-card style="margin-top:50px">
        <template v-slot:heading>
          <div class="display-2 font-weight-light">
            Edit Profile
          </div>
        </template>

        <v-form>
          <v-container class="py-0">
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  label="Company (disabled)"
                  disabled
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  class="purple-input"
                  label="User Name"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  label="Email Address"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="First Name"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Last Name"
                  class="purple-input"
                />
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Adress"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  label="City"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  label="Country"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  class="purple-input"
                  label="Postal Code"
                  type="number"
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  class="purple-input"
                  label="About Me"
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </v-col>

              <v-col
                cols="12"
                class="text-right"
              >
                <v-btn
                  color="success"
                  class="mr-0"
                >
                  Update Profile
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </base-material-card>
    </v-dialog>
    <v-dialog
      v-model="dialog2"
      max-width="50%"
    >
      <base-material-card style="margin-top:50px">
        <template v-slot:heading>
          <div class="display-2 font-weight-light">
            Ajouter un utilisateurs
          </div>
        </template>

        <v-form>
          <v-container class="py-0">
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  label="Company (disabled)"
                  disabled
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  class="purple-input"
                  label="User Name"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  label="Email Address"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="First Name"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Last Name"
                  class="purple-input"
                />
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Adress"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  label="City"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  label="Country"
                  class="purple-input"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  class="purple-input"
                  label="Postal Code"
                  type="number"
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  class="purple-input"
                  label="About Me"
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </v-col>

              <v-col
                cols="12"
                class="text-right"
              >
                <v-btn
                  color="success"
                  class="mr-0"
                >
                  Update Profile
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
  export default {
    data: () => ({
      dialog: false,
      dialog2: false,
    }),
  }
</script>
<style lang="css">
.v-dialog{
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}

</style>
