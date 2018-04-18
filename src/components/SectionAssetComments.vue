<template>
  <section class="section-asset-comments">
    <app-title>Comentarios ({{ comments.length }})</app-title>
      <app-card>
        <app-card-content>
          <app-card-item 
            v-for="(comment, index) in comments" 
            :key="index"
            :description="comment.text" 
            :value="comment.date | date"
            :actions="getActions(assetId, index, comment.text)" 
          />
          <form-comment @comment="(comment) => addComment({ assetId, comment })" />
        </app-card-content>
      </app-card>

      <app-dialog 
        title="Editar comentarios" 
        :is-open="openDialog" 
        :close="() => openDialog = false" 
        :action="doActionDialog" 
        action-name="Editar"
      >
        <p>Cambie el texto del comentario</p>
        <input type="text" v-model="comment.text" />
      </app-dialog>
  </section>
</template>

<script>
import moment from 'moment'
import { mapMutations } from 'vuex'
import { ASSET_MUTATIONS } from '@/store'
import AppTitle from '@/components/AppTitle'
import AppCard from '@/components/AppCard'
import AppCardHeader from '@/components/AppCardHeader'
import AppCardContent from '@/components/AppCardContent'
import AppCardItem from '@/components/AppCardItem'
import AppDialog from '@/components/AppDialog'
import FormComment from '@/components/FormComment'

export default {
  name: 'SectionAssetComments',

  components: {
    AppTitle,
    AppCard,
    AppCardHeader,
    AppCardContent,
    AppCardItem,
    AppDialog,
    FormComment
  },

  props: {
    assetId: {
      type: Number,
      required: true
    },

    comments: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      openDialog: false,
      comment: {
        assetId: null,
        index: null,
        text: null
      }
    }
  },

  filters: {
    date(value) {
      return moment(value).format('DD/MM/YYYY h:mm:ss')
    }
  },

  methods: {
    ...mapMutations([ASSET_MUTATIONS.ADD_COMMENT, ASSET_MUTATIONS.DELETE_COMMENT, ASSET_MUTATIONS.EDIT_COMMENT]),

    getActions(assetId, index, text) {
      return [{
        icon: 'mode_edit',
        method: () => {
          this.openDialog = true
          this.comment = { assetId, index, text }
        }
      }, {
        icon: 'delete',
        method: () => this[ASSET_MUTATIONS.DELETE_COMMENT]({ assetId, index })
      }]
    },

    doActionDialog() {
      this.editComment(this.comment)
      this.openDialog = false
    }
  }
}
</script>
