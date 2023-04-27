import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Anime } from '@/types/anime'

export const useAnimeStore = defineStore('anime', () => {
  const animeItem = ref<Anime | null>(null)

  const isLoading = ref(false)

  const setAnimeItem = (item: Anime | null) => {
    animeItem.value = item
  }

  const setLoading = (flag: boolean) => {
    isLoading.value = flag
  }

  return {
    animeItem,
    isLoading,
    setAnimeItem,
    setLoading
  }
})
