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
    height: 20px;
    display: flex;
    margin-bottom: 10px;
}

.searchbar input {
    width: 100%;
    height: 20px;
    border-radius: 0.25rem
}
</style>