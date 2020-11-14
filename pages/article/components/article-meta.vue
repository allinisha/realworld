<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link class="author" :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }">
        {{ article.author.username }}
      </nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following
      }"
      :disabled="article.followingDisabled"
      @click="onFollow"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow {{article.author.username}}
    </button>
    &nbsp;&nbsp;
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{
        active: article.favorited
      }"
      :disabled="article.favoriteDisabled"
      @click="onFavorite"
    >
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">({{article.favoritesCount}})</span>
    </button>
  </div>
</template>

<script>
import {
  addFavorite,
  deleteFavorite,
  follow,
  unFollow
} from '@/api/article'
export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    async onFavorite() {
      const article = this.article;
      const favorited = article.favorited;

      article.favoriteDisabled = true

      if (favorited) {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
    },
    async onFollow() {
      const article = this.article;
      const following = article.author.following;

      article.followingDisabled = true

      if (following) {
        await unFollow(article.author.username)
        article.author.following = false
      } else {
        await follow(article.author.username)
        article.author.following = true
      }
    },
  }
}
</script>

<style>

</style>
