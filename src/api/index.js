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
  }
}