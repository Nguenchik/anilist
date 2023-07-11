<script lang="ts" setup>
import { ref } from 'vue'
import { debounceSearchQuery } from '@/utils/debounce'
import { useAnimeStore } from '@/stores/modules/anime'
import { apolloClient as client } from '@/plugins/apollo'
import { ANIME_INFO } from '@/graphql/queries/anime'

const { setAnimeItem, setLoading } = useAnimeStore()

const searchTerm = ref('')
const debounceDelay = 1000

const searchAnime = async () => {
  try {
    const { data } = await client.query({
      query: ANIME_INFO,
      variables: {
        searchTerm: searchTerm.value
      }
    })
    setAnimeItem(data.Media)
  } catch (e) {
    setAnimeItem(null)
  } finally {
    setLoading(false)
  }
}

const { cancel: cancelSearchQuery, execute: executeSearchQuery } = debounceSearchQuery(
  searchAnime,
  debounceDelay
)

const handleSearchInputChange = () => {
  setLoading(true)

  cancelSearchQuery()
  executeSearchQuery()
}
</script>

<template>
  <form class="search">
    <label for="search">Search</label>
    <input
      id="search"
      class="search__input"
      @input="handleSearchInputChange"
      type="search"
      v-model="searchTerm"
      pattern=".*\S.*"
      required
      autocomplete="off"
    />
    <span class="caret"></span>
  </form>
</template>

<style lang="scss">
@import '@/assets/styles/search-input.scss';
</style>
