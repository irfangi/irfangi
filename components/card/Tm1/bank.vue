<template>
  <div class="bank text-center">
    <img :src="bankImage" alt="Bank" class="mb-2 mx-auto shadow"/>
    <FontTm1TitleDesc>{{ name }}</FontTm1TitleDesc>
    <FontTm1Desc class="copy" @click="copyRek"
      >{{ rek }} <IconsCopy class="inline-block"></IconsCopy
    ></FontTm1Desc>
  </div>
</template>

<script>

export default {
  props: {
    rek: {
      type: String,
      default: "-",
    },
    bank: {
      type: String,
      default: "-",
    },
    name: {
      type: String,
      default: "-",
    },
    bankImage: {
      type: String,
      default: "",
    },
  },
  methods: {
    copyRek() {
      alert("Copy " + this.rek);
    },
  },
};
</script>

<style lang="scss" scoped>
.bank {
  img {
    height: 36px;
  }
  .copy {
    cursor: pointer;
  }
}
</style>
