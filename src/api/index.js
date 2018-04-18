const headers = new Headers({
  'Content-Type': 'application/json',
  'JsonStub-User-Key': process.env.VUE_APP_USER_KEY,
  'JsonStub-Project-Key': process.env.VUE_APP_PROJECT_KEY
})

export default {
  async fetchAssets(assetId) {
    assetId = assetId ? `/${assetId}` : ''

    try {
      const response = await fetch(`${process.env.VUE_APP_URL}/symbols${assetId}`, { method: 'GET', headers })
      return await response.json()
    } catch (error) {
      throw error
    }
  },

  fetchComments() {
    const commentCollection = JSON.parse(localStorage.comments || "{}")

    return {
      getByAssetId(assetId) {
         return commentCollection[assetId] || []
      },

      save(assetId, commentItem) {
        if (!commentCollection[assetId]) {
          commentCollection[assetId] = []
        }

        commentCollection[assetId].push(commentItem)
        localStorage.comments = JSON.stringify(commentCollection)
      },

      edit(assetId, index, text) {
        commentCollection[assetId][index].text = text
        localStorage.comments = JSON.stringify(commentCollection)
      },

      delete(assetId, index) {
        commentCollection[assetId].splice(index, 1)
        localStorage.comments = JSON.stringify(commentCollection)
      }
    }
  }
}