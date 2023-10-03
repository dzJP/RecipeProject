<template>
    <div class="searchbar">
        <input v-model="searchQuery" id="search-field" placeholder="Search recipes..." />
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
        };
    },
    watch: {
        searchQuery() {
            this.$emit('search', this.searchQuery);
        },
    },
};
</script>

<style scoped>
.searchbar {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

.searchbar input {
    width: 100%;
    height: 20px;
}
</style>