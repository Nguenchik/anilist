<script lang="ts" setup>
import { useAnimeStore } from '@/stores/modules/anime'
import { storeToRefs } from 'pinia'

const store = useAnimeStore()
const {animeItem, isLoading} = storeToRefs(store)

</script>

<template>
    <div v-if="animeItem && !isLoading" class="anime-info">
        <div class="anime-info__header">
            <div class="anime-info__rating" v-if="animeItem.averageScore">
            <img class="anime-info__star" src="@/assets/img/star.svg"/>
            <span>{{ animeItem.averageScore }} / 100</span>
        </div>
        </div>
        <div class="anime-info__title">{{ animeItem.title.romaji }}</div>
        <div class="anime-info__description">{{ animeItem.description }}</div>
        <img :src="animeItem.coverImage.large" :alt="animeItem.title.romaji" />
        <p class="anime-info__status">
        Status: {{ animeItem.status }}
        <br />
        Start Date: {{ animeItem.startDate?.year }}-{{ animeItem.startDate?.month }}
        <br />
        End Date: {{ animeItem.endDate?.year }}-{{ animeItem.endDate?.month }}
        </p>
    </div>

    <div v-else-if="isLoading">
      <h1>Loading...</h1>
    </div>

    <div v-else>
      <h1>Anime</h1>
    </div>
</template>