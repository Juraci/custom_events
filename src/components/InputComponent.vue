<template>
  <input
    :placeholder="placeholder"
    v-model="input"
    class="input is-small"
    type="text"
    @keyup.enter="monitorEnterKey"
  />
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return { input: "" };
  },
  methods: {
    monitorEnterKey() {
      this.$emit("add-note", {
        note: this.input,
        timestamp: new Date().toLocaleString(),
      });
      this.input = "";
    },
  },
};
</script>
