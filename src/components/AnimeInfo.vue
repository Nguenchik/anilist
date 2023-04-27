<script lang="ts" setup>
import { useAnimeStore } from '@/stores/modules/anime'
import { storeToRefs } from 'pinia'
import { computed, unref } from 'vue'

const store = useAnimeStore()
const {animeItem, isLoading} = storeToRefs(store)

const airedInfo = computed(() => {
    const airStartDate = `${unref(animeItem)?.startDate.year}-${unref(animeItem)?.startDate.month}`;
    const airEndDate = `${unref(animeItem)?.endDate.year}-${unref(animeItem)?.endDate.month}`;
    if (unref(animeItem)?.status === 'RELEASING') {
    return `Air date: ${airStartDate}`
  } else if (unref(animeItem)?.status === 'FINISHED') {
    return `Start Date: ${airStartDate}. End Date: ${airEndDate}`;
  } else {
    return 'Unknown';
  }
})

</script>

<template>
    <div v-if="animeItem && !isLoading" class="anime-info">
        <div class="anime-info__header">
            <div class="anime-info__rating" v-if="animeItem.averageScore">
                <img class="anime-info__star" src="@/assets/img/star.svg"/>
                <span>{{ animeItem.averageScore }} / 100</span>
            </div>
            <div class="anime-info__date">{{ airedInfo }}</div>
        </div>
        <div class="anime-info__title">{{ animeItem.title.romaji }}</div>
        <div class="anime-info__container">
            <img class="anime-info__img" :src="animeItem.coverImage.large" :alt="animeItem.title.romaji" />
            <div class="anime-info__description">{{ animeItem.description }}</div>

        </div>
    </div>

    <div v-else-if="isLoading">
      <h1>Loading...</h1>
    </div>

    <div v-else>
      <h1>Type anime</h1>
    </div>
</template>